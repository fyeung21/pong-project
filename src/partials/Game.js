
import {SVG_NS, SPEED, paddleWidth, paddleHeight, boardGap, keys, radius} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width,this.height);

    const boardMid = (this.height - paddleHeight)/2;
    this.paddle1 = new Paddle(this.height, paddleWidth, paddleHeight, boardGap, boardMid, keys.p1up, keys.p1down);

    const paddle2Gap = this.width - boardGap - paddleWidth;
    this.paddle2 = new Paddle(this.height, paddleWidth, paddleHeight, paddle2Gap, boardMid, keys.p2up, keys.p2down);
  
    this.ball = new Ball(this.width, this.height, radius);
  }

  render() {
    // More code goes here....
    this.gameElement.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, 'svg');
    
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox",`0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg); 
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.ball.render(svg);
}
}


import { SVG_NS, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, KEYS, RADIUS, RADIUS2, SPEED } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import endGame from './endGame';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused = false;
    this.begin = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    const boardMid = (this.height - PADDLE_HEIGHT) / 2;
    this.paddle1 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, boardMid, KEYS.p1up, KEYS.p1down);

    const paddle2Gap = this.width - BOARD_GAP - PADDLE_WIDTH;
    this.paddle2 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, paddle2Gap, boardMid, KEYS.p2up, KEYS.p2down);

    this.ball = new Ball(this.width, this.height, RADIUS, "#FFF");
    this.ball2 = new Ball(this.width, this.height, RADIUS2, "#FFF");

    this.score1 = new Score(this.width / 2 - 50, 30);
    this.score2 = new Score(this.width / 2 + 25, 30);

    this.winnerP1 = new endGame(60, 220);
    this.winnerP2 = new endGame(316, 220);


    document.addEventListener("keyup", (event) => {
      if (event.key === KEYS.pause) {
        this.paused = !this.paused;
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === KEYS.begin) {
        this.begin = true;
      }
    });   
  }

  render() {
    if (this.paused) {
      this.paddle1.speed = 0;
      this.paddle2.speed = 0;
      return;
    } else {
      this.paddle1.speed = SPEED;
      this.paddle2.speed = SPEED;
    }

    this.gameElement.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, 'svg');

    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);

    if (this.paddle1.getScore() >= 3 && this.paddle2.getScore() >= 3) {
      this.ball2.render(svg, this.paddle1, this.paddle2);
    }
    
    this.score1.render(svg, this.paddle1.getScore());
    this.score2.render(svg, this.paddle2.getScore());
    
    if (this.begin === false) {
      return;
    } else {
      this.ball.render(svg, this.paddle1, this.paddle2);
    }

    if (this.paddle1.getScore() >= 6) {
      this.paused = true;
      this.winnerP1.render(svg);
    }
    else if (this.paddle2.getScore() >= 6) {
      this.paused = true;
      this.winnerP2.render(svg);
    };
  }
}
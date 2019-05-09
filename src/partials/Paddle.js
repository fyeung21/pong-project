import {SVG_NS, SPEED} from '../settings';
import { reject } from 'q';

export default class Paddle {
    constructor(boardHeight, paddleWidth, paddleHeight, initialX, initialY, keyUp, keyDown) {
        this.boardHeight = boardHeight;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.x = initialX;
        this.y = initialY;
        this.score = 0;
        this.speed = SPEED;
    }

    render(svg) {
        let paddle1 = document.createElementNS(SVG_NS, 'rect');
        paddle1.setAttributeNS(null, "x", this.x);
        paddle1.setAttributeNS(null, "y", this.y);
        paddle1.setAttributeNS(null, "width", this.paddleWidth);
        paddle1.setAttributeNS(null, "height", this.paddleHeight);
        paddle1.setAttributeNS(null, "fill", "#FFF");
        svg.appendChild(paddle1);

    }
}
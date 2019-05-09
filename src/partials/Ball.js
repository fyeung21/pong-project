import {SVG_NS} from '../settings';
import { reject } from 'q';

export default class Ball {
    constructor(boardWidth, boardHeight, radius) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.radius = radius;
        this.reset();
    }

    reset() {
        this.x = this.boardWidth/2;
        this.y = this.boardHeight/2;
    }
    render(svg) {
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, "fill", "lightpink");
        circle.setAttributeNS(null, "cx", this.boardWidth/2);
        circle.setAttributeNS(null, "cy", this.boardHeight/2);
        circle.setAttributeNS(null, "r", this.radius);
        svg.appendChild(circle);
        
    }
}
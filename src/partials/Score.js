import {SVG_NS, text_size} from '../settings';

export default class Score {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
    }
    render(svg, score) {
        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, "fill", "white");
        text.setAttributeNS(null, "font-size", text_size);
        text.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
        text.setAttributeNS(null, "x", this.x);
        text.setAttributeNS(null, "y", this.y);
        text.textContent = score;
        svg.appendChild(line);
    }
}
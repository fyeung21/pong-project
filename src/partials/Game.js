export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    let svg = document.createElementNS(SVG_NS, 'svg');
    this.gameElement = document.getElementById(this.element);
    this.gameElement.appendChild(svg);
		// Other code goes here...
  }

  render() {
		// More code goes here....
  }
}

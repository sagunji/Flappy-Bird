class Container {
  constructor(container) {
  	this.element = container;
  	this.width = 100000;
  	this.height = 400;
    this.marginLeft = 0;
  }

  create() {
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.className += "center";
    this.element.style.background = "url('images/background.png')";
    this.element.style.position = 'absolute';
    // this.element.style.
  }
  moveBg(){
    this.marginLeft -= 2;
    this.element.style.left = this.marginLeft;
    // this.element.style.
  }
}

export default Container;
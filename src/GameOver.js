class GameOver{
	constructor(){
		this.element = document.createElement('div');
		this.width = 280;
		this.height = 50;
		this.z = -1;
	}
	create(){
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.backgroundImage = "url('images/start-img.png')";
		this.element.style.position = 'absolute';
		this.element.style.top = 150;
		this.element.style.left = 250;
		this.element.style.zIndex = this.z;
	}
	changeZIndex(value){
		this.z = value;
		this.element.style.zIndex = this.z;
	}
	// displayHidden(){
	// 	this.element.style.display = 'hidden';
	// }
	// show(){
	// 	this.element.style.display = ''
	// }
}

export default GameOver;
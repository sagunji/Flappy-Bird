class Pipe{
	constructor(i, yPos){
		this.element = document.createElement('div');
		this.width = 100;
		this.height = 400;
		this.xPos = 900;
		this.yPos = yPos;
		this.imgSrc;
		if(i == 0){
			this.imgSrc = "url('images/top-obs.png')";
			this.yPos = yPos;
		}
		else if(i == 1){
			this.imgSrc = "url('images/bottom-obs.png')";
			this.yPos = (yPos + 400) + 150;
		}
	}
	create(){
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.position = 'absolute';
		this.element.style.backgroundImage = this.imgSrc;
		this.element.style.left = this.xPos;
		this.element.style.top = this.yPos;
	}
	movePipe(){
		this.xPos -= 2;
		this.element.style.left = this.xPos;
	}


}
export default Pipe;

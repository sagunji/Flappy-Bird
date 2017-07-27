class Flappy{
	constructor(x, y){
		this.element = document.createElement('div');
		
		this.setPosition(x,y);
		this.setToDefault();


	}
	create(){
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.top = this.yPos;
		this.element.style.left = this.xPos;
		this.element.style.backgroundImage = "url('images/flappy-bird.png')";
		this.element.style.position = 'absolute';
	}
	gravity(){
		// if(this.yPos <= 374){
			this.yPos -= (this.velocity* this.t - 0.5 * this.g * this.t * this.t);
			// console.log(this.yPos);
			this.element.style.top = this.yPos;
		// }
	}
	jumpUp(){
		// if(this.yPos >= 0){
			// if(this.count < 15){

			// this.yPos -= 5;
			this.velocity = 15;
		// }
		// this.element.style.top = this.yPos;
		// } 
	}
	setToDefault(){
		this.g = 0.5;
		this.t = 0.5;
		this.velocity = 0;
		this.width = 50;
		this.height = 30;
	}
	setPosition(x, y){
		this.xPos = x;
		this.yPos = y;
	}
	
}

export default Flappy;
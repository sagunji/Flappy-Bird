class ScoreBoard{
	constructor(){
		this.element = document.createElement('div');
		this.width = 55;
		this.height = 20;
		this.score = 0;
	}
	create(){
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.position = 'absolute';
		this.element.style.backgroundImage = "url('images/scorechart.png')";
		this.element.style.top = 0;
		this.element.style.right = 10;
		this.element.style.paddingTop = 30;
		this.element.style.paddingLeft = 45;
		this.element.style.zIndex = 15;
		// this.element.style.overflow = 'hidden';
		// var content = document.createTextNode(this.score);
		// content.style.marginLeft = 40;
		// content.style.marginTop = 30;
		// this.element.appendChild(content);
		this.element.innerHTML = this.score;
	}
	addScore(){
		this.score++;
		this.element.innerHTML = this.score / 2;
	}
	resetScore(){
		this.score = 0;
		this.element.innerHTML = this.score;
	}
}

export default ScoreBoard;
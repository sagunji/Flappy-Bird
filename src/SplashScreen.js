class SplashScreen{
	construtor(){
		this.element = document.createElement('div');
		this.width = 280;
		this.height = 50;
	}
	create(){
		this.element.style.width  = this.width;
		this.element.style.height = this.height;
		this.element.style.position = 'absolute';
		this.element.style.top = 400;
		this.element.style.left = 300;
		this.element.style.backgroundImage = "url('images/start-img.png')"
	}
}

export default SplashScreen;
let mobilenet;
let testimage;
let name;
let prob;

function func1(){
	console.log("model is Ready");
	mobilenet.predict(testimage,func2);
}

function func2(error,result){
	if(!error){
		console.log(result);
	}else{
		console.log("error");
	}
	name = result[0].className;
	prob = result[0].probability;
	console.log(name,prob);
    fill(0);
    textSize(64);
    text(name, 10, height - 100);
    createP(name);
    createP(prob);
}

function imageReady(){
  image(testimage, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  testimage = createImg('images/parrot.jpg', imageReady);
  testimage.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet",func1);
}


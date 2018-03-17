const imgs =[]
const carro1 =[]
const carro2 =[]

let fondo

let p1=0;
let p2=0;
let vueltaP1=0;
let vueltaP2=0;

let direccion=1
let direccion2=1

let pos_1a = 890
let pos_2a = 550

let pos_1b = 890
let pos_2b = 580

let x = 0
let x2 = 0

var aleatorio1 = Math.round(Math.random()*15+5);
var aleatorio2 = Math.round(Math.random()*15+5);

//let mov = 10
function preload(){

	fondo = loadImage(`img/fondo.jpg`)

	for (let j = 0 ; j < 8; j++) {
		carro1[j] = loadImage(`img/p3_${j + 1}.png`)	
	}

	for (let i = 0 ; i < 8; i++) {
		carro2[i] = loadImage(`img/p4_${i + 1}.png`)	
	}
	//carro1[1] = loadImage(`img/p1_derecha.png`)
	
}
	
 function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(17)

}

function draw() {

	background(fondo)
	

	
 	
 	if(direccion==1){
 		image(carro1[x],pos_1a-=aleatorio1,pos_2a)

 		if (pos_1a>=900 && pos_1a<=920 && vueltaP1==0){
			
			p1++;
			vueltaP1=1;

 		}	

 		if (pos_1a<=220){
			direccion = 2
			x++;
 		}		
	}
 	if (direccion==2){
		image(carro1[x],pos_1a-=aleatorio1,pos_2a-=aleatorio1)
 		if (pos_1a<=90){
			direccion = 3
			x++;
 		}	
 	}
 	if (direccion==3){
		image(carro1[x],pos_1a,pos_2a-=aleatorio1)
 		if (pos_2a<=130){
			direccion = 4
			x++;
 		}	
 	}
 	if (direccion==4){
		image(carro1[x],pos_1a+=aleatorio1,pos_2a-=aleatorio1)
 		if (pos_2a<=40){
			direccion = 5
			x++;
 		}	
 	}
 	if (direccion==5){
		image(carro1[x],pos_1a+=aleatorio1,pos_2a)
 		if (pos_1a>=1100){
			direccion = 6
			x++;
 		}	
 	}
 	if (direccion==6){
		image(carro1[x],pos_1a+=aleatorio1,pos_2a+=aleatorio1)
 		if (pos_2a>=160){
			direccion = 7
			x++;
 		}	
 	}
 	if (direccion==7){
		image(carro1[x],pos_1a,pos_2a+=aleatorio1)
 		if (pos_2a>=440){
			direccion = 8
			x++;
 		}	
 	}
 	if (direccion==8){
		image(carro1[x],pos_1a-=aleatorio1,pos_2a+=aleatorio1)
 		if (pos_2a>=550){
			direccion = 1

			x=0;
			vueltaP1=0;

 		}	
 	}
 	


 	///////////////////////////////


 	if(direccion2==1){
 		image(carro2[x2],pos_1b-=aleatorio2,pos_2b)

 		if (pos_1b>=900 && pos_1b<=920 && vueltaP2==0){
			
			p2++;
			vueltaP2=1;

 		}	

 		if (pos_1b<=225){
			direccion2 = 2
			x2++;
 		}		
	}
 	if (direccion2==2){
		image(carro2[x2],pos_1b-=aleatorio2,pos_2b-=aleatorio2)
 		if (pos_1b<=70){
			direccion2 = 3
			x2++;
 		}	
 	}
 	if (direccion2==3){
		image(carro2[x2],pos_1b,pos_2b-=aleatorio2)
 		if (pos_2b<=140){
			direccion2 = 4
			x2++;
 		}	
 	}
 	if (direccion2==4){
		image(carro2[x2],pos_1b+=aleatorio2,pos_2b-=aleatorio2)
 		if (pos_2b<=30){
			direccion2 = 5
			x2++;
 		}	
 	}
 	if (direccion2==5){
		image(carro2[x2],pos_1b+=aleatorio2,pos_2b)
 		if (pos_1b>=1070){
			direccion2 = 6
			x2++;
 		}	
 	}
 	if (direccion2==6){
		image(carro2[x2],pos_1b+=aleatorio2,pos_2b+=aleatorio2)
 		if (pos_2b>=140){
			direccion2 = 7
			x2++;
 		}	
 	}
 	if (direccion2==7){
		image(carro2[x2],pos_1b,pos_2b+=aleatorio2)
 		if (pos_2b>=440){
			direccion2 = 8
			x2++;
 		}	
 	}
 	if (direccion2==8){
		image(carro2[x2],pos_1b-=aleatorio2,pos_2b+=aleatorio2)
 		if (pos_2b>=560){
			direccion2 = 1

			x2=0;
			vueltaP2=0;
 		}	
 	}


 	if(p1==3){
 		fill('white')
		textSize(40)
		text("Gano el carro amarillo", width * 0.35, 250)
		noLoop()
 	}else{
 		if (p2==3) {
 			fill('white')
			textSize(40)
			text("Gano el carro rojo", width * 0.38, 250)
			noLoop()
 		}
 	}
 	showScore()

	
}	


const showScore = function(){
	fill('yellow')
	textSize(70)
	text(p1, width * 0.40, 350)
	fill('red')
	text(p2, width * 0.55, 350)

}

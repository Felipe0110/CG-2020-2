var centro;
var adelante = false, atras = false, derecha = false, izquierda = false, arriba = false, abajo = false,positivo = false;
var mouseX = 0, mouseY = 0;
var thetaSum = 0;
var cont_mov_y = 0;

function Personaje(){
	
	var onKeyDown = function ( event ) {
		switch ( event.keyCode ) {
			case 87: 
				 adelante = true;
			break;
						
			case 83:
			    atras = true;
			break;
				}
			};	  
		  			
	var onKeyUp = function ( event ) {
		switch ( event.keyCode ) {
			case 87: 
			    adelante = false;
			break;
						
			case 83:
			    atras = false;

			break;
				}
						
			};	 	
			
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
	
	var geoPunto = new THREE.Geometry();
	geoPunto.vertices.push(new THREE.Vector3(0,0,0));
	var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
	
	centro = new THREE.Points(geoPunto,matPunto);
	
	
	camera.add(centro);
	scene.add(camera);
	
	document.addEventListener( 'mousemove', onDocumentMouseMove);
	window.addEventListener( 'resize', onWindowResize, false );
	
}
	function onWindowResize() {	
		renderer.setSize( window.innerWidth, window.innerHeight );
		}
	var onDocumentMouseMove = function ( event ) {
		
		//event.clientY = 0;

		console.log("x = "+event.clientX+" "+"y ="+event.clientY);
		//console.log("mouse = "+mouseX);
		if(event.clientX > mouseX){
			derecha = true;
			izquierda = false;
			mouseX = event.clientX;
		}
		else{
		  	
			izquierda = true;
			derecha = false;
			mouseX = event.clientX;
		}
		
		if(event.clientY > mouseY){
			arriba = false;
			abajo = true;
			mouseY = event.clientY;
		}
		else{
		  	arriba = true;
			abajo = false;
			mouseY = event.clientY;	
		}
	}
	
 function render_Personaje(){
	 	var tx=0, ty= 0, tz=0;				
		var theta = 0;			
	 	var sigmaV = 0 ;
		var sigmaH = 0 ;
	 	
	 
	 	if(thetaSum>=60*Math.PI/180)
			positivo = false;
		if(thetaSum<=-60*Math.PI/180)
			positivo = true;
		
		if(adelante) {
			tx=0; ty=0; tz=.1;

			if(positivo)
				theta = .1;
			else
				theta = -.1;
		}
		if(atras) {
			tx=0; ty=0; tz=-.1;
			if(positivo)
				theta = .1;
			else
				theta = -.1;
		}
	 
		thetaSum+=theta;
		
	 
	 	//Movimientos de cabeza
	
		if(derecha){
			sigmaH = -0.1;
			derecha= false;
		}
		if(izquierda){
			sigmaH = 0.1;
			izquierda = false;
		}
	 
	 if(arriba){
	 	if(cont_mov_y < -Math.PI/2){
		}
		else{
			
			sigmaV -= 0.1;
			cont_mov_y -= 0.1;
			arriba = false;
		}
	 }
	 if(abajo){
	 	if(cont_mov_y > Math.PI/2){
		}
		
		else{
			
			sigmaV += 0.1;
			cont_mov_y+= 0.1;
			abajo = false;
		}
	 }

		var trasladar_Cuerpo = new THREE.Matrix4();
		trasladar_Cuerpo.set( 	1, 0, 0, tx,
								0, 1, 0, ty, 
								0, 0, 1, tz,
								0, 0, 0, 1	);
		
		centro.matrix.multiply(trasladar_Cuerpo); 

		var ch = Math.cos(sigmaH);
	 	var sh = Math.sin(sigmaH);
	 
	 	var cv = Math.cos(sigmaV);
	 	var sv = Math.sin(sigmaV);
	 
		var ct1 = Math.cos(theta);
	 	var st1 = Math.sin(theta);
		
		var ct2 = Math.cos(-theta);
		var st2 = Math.sin(-theta);
		
		var rotacion_Horizontal = new THREE.Matrix4();
		var rotacion_Vertical = new THREE.Matrix4();
		var rotacion_Pierna_Brazo_Derecho = new THREE.Matrix4();
		var rotacion_Pierna_Brazo_Izquierda = new THREE.Matrix4();

		rotacion_Horizontal.set(  ch,  0, sh, 0,
							       0,  1,  0, 0, 
							     -sh,  0, ch, 0,
							       0,  0,  0, 1);	
	 
		rotacion_Vertical.set(1,  0, 0, 0,
							    0,  cv,  -sv, 0, 
							    0,  sv,   cv, 0,
							  	0,  0,  0, 1);
	 
		rotacion_Pierna_Brazo_Derecho.set( 	1,  0,  0, 0,
											0, ct1,-st1, 0, 
											0, st1, ct1, 0,
											0,  0,  0, 1 );	
	 
		rotacion_Pierna_Brazo_Izquierda.set(1,  0,  0, 0,
											0, ct2,-st2, 0, 
											0, st2, ct2, 0,
											0,  0,  0, 1 );							
		
		var tempMatrix = new THREE.Matrix4();
	 	tempMatrix.copyPosition( centro.matrix );
	 	centro.applyMatrix( new THREE.Matrix4().getInverse(tempMatrix) );
		centro.applyMatrix(rotacion_Horizontal);
	 	//centro.applyMatrix(rotacion_Vertical);
		centro.applyMatrix( tempMatrix );
		
 }
var centro,centro_cuello,centro_Pierna_Der,centro_Pierna_Izq,centro_Brazo_Der,centro_Brazo_Izq, centro_Camera;
var adelante = false, atras = false, derecha = false, izquierda = false,positivo = false;
var mouseX = 0;
var thetaSum = 0;

function Personaje(){
	
	var material1 = new THREE.MeshStandardMaterial( {color: 0xFFC279} );
	var material2 = new THREE.MeshStandardMaterial( {color: 0x00C1FF} );
	
	var geoCabeza = new THREE.BoxBufferGeometry( 1, 1, 1 );
	var cabeza = new THREE.Mesh( geoCabeza, material1 );
	
	var geoTronco = new THREE.BoxBufferGeometry( 1, 1.25, 0.7 );
	var tronco = new THREE.Mesh( geoTronco, material2 );
	
	var geoPiernas = new THREE.BoxBufferGeometry( 0.5, 1.25, 0.7 );
	var Pierna_Der = new THREE.Mesh( geoPiernas, material1 );
	var Pierna_Izq = new THREE.Mesh( geoPiernas, material1 );
	Pierna_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.625,0));
	Pierna_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.625,0));
	
	var geoPiernas = new THREE.BoxBufferGeometry( 0.5, 1.25, 0.7 );
	var Pierna_Der = new THREE.Mesh( geoPiernas, material1 );
	var Pierna_Izq = new THREE.Mesh( geoPiernas, material1 );
	Pierna_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.625,0));
	Pierna_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.625,0));
	
	var geoBrazos = new THREE.BoxBufferGeometry( 0.5, 1.25, 0.7 );
	var Brazo_Der = new THREE.Mesh( geoPiernas, material1 );
	var Brazo_Izq = new THREE.Mesh( geoPiernas, material1 );
	Brazo_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0.25,-0.625,0));
	Brazo_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(-0.25,-0.625,0));
	
	var geoPunto = new THREE.Geometry();
	geoPunto.vertices.push(new THREE.Vector3(0,0,0));
	var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
 
	centro_cuello = new THREE.Points(geoPunto,matPunto);
	centro_Pierna_Der = new THREE.Points(geoPunto,matPunto);
	centro_Pierna_Izq = new THREE.Points(geoPunto,matPunto);
	centro_Brazo_Der = new THREE.Points(geoPunto,matPunto);
	centro_Brazo_Izq = new THREE.Points(geoPunto,matPunto);	
	centro_Camera = new THREE.Points(geoPunto,matPunto);
	
	centro_cuello.applyMatrix(new THREE.Matrix4().makeTranslation(0,1.125,0));
	centro_Pierna_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0.25,-0.625,0));
	centro_Pierna_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(-0.25,-0.625,0));
	centro_Brazo_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0.5,0.625,0));
	centro_Brazo_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5,0.625,0));
	centro_Camera.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,5));
	
	centro = new THREE.Points(geoPunto,matPunto);
	centro.applyMatrix(new THREE.Matrix4().makeTranslation(0,17.625,0));
	
	centro_cuello.add(cabeza);
	centro_Pierna_Der.add(Pierna_Der);
	centro_Pierna_Izq.add(Pierna_Izq);
	centro_Brazo_Der.add(Brazo_Der);
	centro_Brazo_Izq.add(Brazo_Izq);
	centro.add(tronco);
	
	centro.add(camera2);
	centro.add(camera3);
	//centro.add(camera);
	
	centro.add(centro_cuello);
	centro.add(centro_Pierna_Der);
	centro.add(centro_Pierna_Izq);
	centro.add(centro_Brazo_Der);
	centro.add(centro_Brazo_Izq);
	//scene.add(centro);
			

	var onKeyDown = function ( event ) {
		switch ( event.keyCode ) {
			case 87:
				
				adelante = true;
				
			break;			
			case 83:

				atras = true;
	
			break;
				}
			}	   
			
	var onKeyUp = function ( event ) {
		switch ( event.keyCode ) {
			case 87:
			    adelante = false;
			break;
						
			case 83:
			    atras = false;

			break;
				}
						
			}	
	var onDocumentMouseMove = function ( event ) {
		event.clientY = 0;
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
	};
	
			
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
	document.addEventListener( 'mousemove', onDocumentMouseMove);	
}

	
	
 function render_Personaje(){
	 	centro.position.x = posicionX;
	 	centro.position.z = posicionZ;
	 
	 	if(cam_2 || cam_3){
			
		scene.add(centro);
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
			
		var trasladar_Cuerpo = new THREE.Matrix4();
		trasladar_Cuerpo.set( 	1, 0, 0, tx,
								0, 1, 0, ty, 
								0, 0, 1, tz,
								0, 0, 0, 1	);
		
		centro.matrix.multiply(trasladar_Cuerpo);
	 
		var ch = Math.cos(sigmaH);
		var sh = Math.sin(sigmaH);
	 
		var ct1 = Math.cos(theta);
		var st1 = Math.sin(theta);
		
		var ct2 = Math.cos(-theta);
		var st2 = Math.sin(-theta);
		
		var rotacion_Horizontal = new THREE.Matrix4();
		var rotacion_Pierna_Brazo_Derecho = new THREE.Matrix4();
		var rotacion_Pierna_Brazo_Izquierda = new THREE.Matrix4();

		rotacion_Horizontal.set(  ch,  0, sh, 0,
							       0,  1,  0, 0, 
				  			     -sh,  0, ch, 0,
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
		centro.applyMatrix( tempMatrix );
			
		centro_Brazo_Izq.applyMatrix(rotacion_Pierna_Brazo_Derecho);
		centro_Pierna_Der.applyMatrix(rotacion_Pierna_Brazo_Derecho);
	 
		centro_Brazo_Der.applyMatrix(rotacion_Pierna_Brazo_Izquierda);
		centro_Pierna_Izq.applyMatrix(rotacion_Pierna_Brazo_Izquierda);
		camera.position.x = centro.position.x;
		camera.position.z = centro.position.z;
		}
 }
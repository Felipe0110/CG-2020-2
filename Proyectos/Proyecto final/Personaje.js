var centro,centro_cuello,centro_Pierna_Der,centro_Pierna_Izq,centro_Brazo_Der,centro_Brazo_Izq;
var Acentro = 0,Acentro_cuello = 0,Acentro_Pierna_Der = 0,Acentro_Pierna_Izq = 0,Acentro_Brazo_Der = 0,Acentro_Brazo_Izq = 0;
var adelante = false, atras = false, derecha = false, izquierda = false;
function Personaje(){
	
	var onKeyDown = function ( event ) {
				switch ( event.keyCode ) {
					case 87: 
					 adelante = true;
					break;
						
					case 83:
					 atras = true;
					break;
					
					case 68:
					 derecha = true;
					break;
					
					case 65:
					 izquierda = true;
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
					
					case 68:
					 derecha = false;
					break;
					
					case 65:
					 izquierda = false;
					}
						
			};	 	
			
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
	
	
	var material1 = new THREE.MeshBasicMaterial( {color: 0x00FFF3} );
	var material2 = new THREE.MeshBasicMaterial( {color: 0xFF00EC} );
	
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
	centro = new THREE.Points(geoPunto,matPunto);
	centro_cuello = new THREE.Points(geoPunto,matPunto);
	centro_Pierna_Der = new THREE.Points(geoPunto,matPunto);
	centro_Pierna_Izq = new THREE.Points(geoPunto,matPunto);
	centro_Brazo_Der = new THREE.Points(geoPunto,matPunto);
	centro_Brazo_Izq = new THREE.Points(geoPunto,matPunto);	
	centro_cuello.applyMatrix(new THREE.Matrix4().makeTranslation(0,1.125,0));
	centro_Pierna_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0.25,-0.625,0));
	centro_Pierna_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(-0.25,-0.625,0));
	centro_Brazo_Der.applyMatrix(new THREE.Matrix4().makeTranslation(0.5,0.625,0));
	centro_Brazo_Izq.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5,0.625,0));
	
	centro.add(tronco);
	centro_cuello.add(cabeza);
	centro_Pierna_Der.add(Pierna_Der);
	centro_Pierna_Izq.add(Pierna_Izq);
	centro_Brazo_Der.add(Brazo_Der);
	centro_Brazo_Izq.add(Brazo_Izq);
	scene.add(centro);
	scene.add(centro_cuello);
	scene.add(centro_Pierna_Der);
	scene.add(centro_Pierna_Izq);
	scene.add(centro_Brazo_Der);
	scene.add(centro_Brazo_Izq);
}
 function render_Personaje(){
	 	Acentro_Pierna_Der += 0.1;
	 	Acentro_Pierna_Izq += 0.1;
	 	Acentro_Brazo_Der += 0.1;
	 	Acentro_Brazo_Izq += 0.1;
	// if(adelante||atras){
	 	if( Acentro_Pierna_Der<=Math.PI/2 ){
			Acentro_Pierna_Der += 0.1;
			Acentro_Pierna_Izq += 0.1;
			Acentro_Brazo_Der += 0.1;
	 		Acentro_Brazo_Izq += 0.1;
		}
		 else{
			Acentro_Pierna_Der -= 0.1;
			Acentro_Pierna_Izq -= 0.1;
			Acentro_Brazo_Der -= 0.1;
	 		Acentro_Brazo_Izq -= 0.1;
		 }
	// }
	 
	 	var RotacionPiernaDerecha = new THREE.Euler(Acentro_Pierna_Der, 0 ,0 , 'XYZ');
		centro_Pierna_Der.setRotationFromEuler(RotacionPiernaDerecha);
	 
	 	var RotacionPiernaIzquierda = new THREE.Euler(Acentro_Pierna_Izq, 0, 0, 'XYZ');
		centro_Pierna_Izq.setRotationFromEuler(RotacionPiernaIzquierda);
	 
	 	var RotacionBrazoDerecho = new THREE.Euler(Acentro_Brazo_Der, 0, 0, 'XYZ');
		centro_Brazo_Der.setRotationFromEuler(RotacionBrazoDerecho);
	 
	 	var RotacionBrazoIzquierdo = new THREE.Euler(Acentro_Brazo_Izq, 0, 0, 'XYZ');
		centro_Brazo_Izq.setRotationFromEuler(RotacionBrazoIzquierdo);
		
 }
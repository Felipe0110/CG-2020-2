
//Programa de movimiento
function Transformaciones (){

    //EVENTOS DE TECLADO
			//Códigos de teclado: http://keycode.info 
			var onKeyDown = function ( event ) {
				switch ( event.keyCode ) {
                    case 37: 
                        Iz = true;
                        break;
                    case 39: 
                        Dr = true;
                        break;
					case 38: // TRASLADAR EN DIRECCION POSITIVA
						upArrow = true;
						break;
					case 40: // TRASLADAR EN DIRECCION NEGATIVA
						downArrow = true;
                        break;
                    case 83: // Escata ++ s
                    scaleUp = true;
                    break;
                    case 87: // Escalar -- w
                    scaleDown = true;
                    break;
                }      
			};	  
		  			
			var onKeyUp = function ( event ) {
				
                switch ( event.keyCode ) {
                    case 37:
                        Iz = false;
                         break;
                        case 39: 
                        Dr = false;
                        break;
					case 38: // TRASLADAR
						upArrow = false;
						break;
					case 40: // TRASLADAR
						downArrow = false;
						break;
					
					case 83: // ESCALA AGRANDAR
						scaleUp = false;
						break;
					case 87: // ESCALA DISMINUIR
						scaleDown = false;
						break;
				}
			};	  	
			
			document.addEventListener( 'keydown', onKeyDown, false );
            document.addEventListener( 'keyup', onKeyUp, false );
            

//
    var rotationAngles = {
        //se crean en el Html como variable global 
        Cadera: 10.5,
        theta2: 0,
        theta3: 0, 
        
    };
    var gui = new dat.GUI();
    gui.add(rotationAngles, "Cadera", -180, 180, .1).onChange(rotation).name('Rotacion H').listen();  
 
   
    var colota = gui.addFolder('Cadera');
   colota.add(rotationAngles,"colita_angleX",-85,90,1).onChange(rotation).name('Cadera X').listen();
   colota.add(rotationAngles,"colita_angleY",-40,40,1).onChange(rotation).name('Cadera Y').listen();
 
   
   var Rodi = gui.addFolder('Rodillas');
   Rodi.add(rotationAngles,"RodillaU_angleX",-0,145,1).onChange(rotation).name('Rodilla D X');
   Rodi.add(rotationAngles,"RodillaD_angleX",-0,145,1).onChange(rotation).name('Rodilla I X');

   var Tron = gui.addFolder('Tronco');
   Tron.add(rotationAngles,"Tronc_angleX",-15,120,1).onChange(rotation).name('Tronco X').listen();
   Tron.add(rotationAngles,"Tronc_angleY",-25,30,1).onChange(rotation).name('Tronco Y').listen();

   var Ho = gui.addFolder('Brazos');
   Ho.add(rotationAngles,"HomU_angleX",-180,80,1).onChange(rotation).name('Hombro I X');
   Ho.add(rotationAngles,"HomU_angleY",-90,50,1).onChange(rotation).name('Hombro I Y');
  // Ho.add(rotationAngles,"HomU_angleZ",-90,50,1).onChange(rotation).name('Hombro I Z');

   Ho.add(rotationAngles,"HomD_angleX",-180,80,1).onChange(rotation).name('Hombro D X');
   Ho.add(rotationAngles,"HomD_angleY",-90,50,1).onChange(rotation).name('Hombro D Y');
 //  Ho.add(rotationAngles,"HomD_angleZ",-90,50,1).onChange(rotation).name('Hombro D Z');



    rotation();
   
    camera.lookAt(origin);


    };

function escala(){

    
    var sc = 1;
    if(scaleUp){
        sc = 1.1;
    }
    if(scaleDown){
        sc = .9;
    }
    //MATRIZ DE ESCALA	
		var s = new THREE.Matrix4();
		s.set( 	sc, 0, 0, 0,
				0, sc, 0, 0, 
				0, 0, sc, 0,
				0, 0, 0, 1	);	
				
        cadera.applyMatrix(s);
      
}
function translasar(){
// / Tranlacion
    var dtime = Date.now()-startTime;
        var tx=0, ty=0, tz=0;
            if(Iz) {
                tx=0.1;
            }
           else if(Dr) {
            tx=-0.1;
            } 
            else if(upArrow) {
                ty=0.1;
            }
            else if(downArrow) {
               ty=-0.1; 
            }    

//MATRIZ DE TRASLACIÓN
var t = new THREE.Matrix4();		//Crear la matriz de traslación
t.set( 	1, 0, 0, tx,
        0, 1, 0, ty, 
        0, 0, 1, tz,
        0, 0, 0, 1	);

  cadera.applyMatrix(t);
    
}

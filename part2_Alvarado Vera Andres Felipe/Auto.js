var origen,origenChasis;
var upArrow = false, downArrow= false,leftArrow = false,rightArrow = false;
function Auto(){
var resolution = 50;

				 var onKeyDown = function ( event ) {
				switch ( event.keyCode ) {
					case 83: 
						upArrow = true;
						break;
					case 87: 
						downArrow = true;
						break;
					case 65: 
						leftArrow = true;
						break;
					case 68: 
						rightArrow = true;
						break;
						
					
				}
			};
            var onKeyUp = function ( event ) {
				switch ( event.keyCode ) {
					case 83: 
						upArrow = false;
						break;
					case 87:
						downArrow = false;
						break;
					case 65: 
						leftArrow = false;
						break;
					case 68: // ROTAR CCW
						rightArrow = false;
						break;
				}
			};	
			document.addEventListener( 'keydown', onKeyDown, false );
			document.addEventListener( 'keyup', onKeyUp, false );
					
	var AutoLine =[];
				AutoLine[12] = new THREE.Vector2(-0.5,-0.5);
				AutoLine[11] = new THREE.Vector2(5.7,-0.5);
				AutoLine[10] = new THREE.Vector2(6.3,-0.5);
				AutoLine[9] = new THREE.Vector2(6.7,.4);
				AutoLine[8] = new THREE.Vector2(6.5,0.5);
				AutoLine[7] = new THREE.Vector2(5.5,0.54);
				AutoLine[6] = new THREE.Vector2(3.5,1.5);
				AutoLine[5] = new THREE.Vector2(2.5,1.5);
				AutoLine[4] = new THREE.Vector2(1,0.54);
				AutoLine[3] = new THREE.Vector2(0,0.5);
				AutoLine[2] = new THREE.Vector2(-0.5,0.5);
				AutoLine[1] = new THREE.Vector2(-1.5,0);
				AutoLine[0] = new THREE.Vector2(-0.5,-0.5);
				

				var FormaAuto = new THREE.Shape();
				FormaAuto.moveTo(-0.5,-0.5);
				FormaAuto.splineThru(AutoLine);
	
				var PanoramicoLine = [];
				PanoramicoLine[4] = new THREE.Vector2(0,0);
				PanoramicoLine[3] = new THREE.Vector2(2,0);
				PanoramicoLine[2] = new THREE.Vector2(2.5,.6);
				PanoramicoLine[1] = new THREE.Vector2(1,0.6);
				PanoramicoLine[0] = new THREE.Vector2(0,0);
	
				var FormaVentanaPanoramica = new THREE.Shape();
				FormaVentanaPanoramica.moveTo(0,0);
				FormaVentanaPanoramica.splineThru(PanoramicoLine);
	
				var CorteLine = [];
				
				CorteLine[0] = new THREE.Vector2(1.2,0.8);
				CorteLine[1] = new THREE.Vector2(0,0);
	
				var FormaCorte = new THREE.Shape();
				FormaCorte.moveTo(0,0);
				FormaCorte.splineThru(CorteLine);
				
				var AtrasLine = [];
				
				AtrasLine[0] = new THREE.Vector2(-1.2,0.8);
				AtrasLine[1] = new THREE.Vector2(0.5,0);
	
				var FormaAtras = new THREE.Shape();
				FormaAtras.moveTo(0,0);
				FormaAtras.splineThru(AtrasLine);
	
	
				var lucesLine = [];
				
				
				lucesLine[4] = new THREE.Vector2(0,0);
				lucesLine[3] = new THREE.Vector2(-0.8,0.2);
				lucesLine[2] = new THREE.Vector2(0,0.4);
				lucesLine[1] = new THREE.Vector2(0.8,0.2);
				lucesLine[0] = new THREE.Vector2(0, 0);
	
				var FormaLuces = new THREE.Shape();
				FormaLuces.moveTo(0,0);
				FormaLuces.splineThru(lucesLine);
	
				var extrudeSettings = {
				steps: 5,
				amount: 3,
				bevelEnabled: false
			};
			var extrudeSettingsCorte = {
				steps: 5,
				amount: 2.8,
				bevelEnabled: false
			};

			var geometriaGrabadoAuto = new THREE.ExtrudeGeometry( FormaAuto, extrudeSettings );
			var geometriaPanoramico = new THREE.ExtrudeGeometry( FormaVentanaPanoramica, extrudeSettings );
			var geometriaCorte = new THREE.ExtrudeGeometry( FormaCorte, extrudeSettingsCorte );
			var geometriaAtras = new THREE.ExtrudeGeometry( FormaAtras, extrudeSettingsCorte );
			
			var materialGrabado =  new THREE.MeshStandardMaterial( { 
				color: 0x00FFF7, 
				metalness: 0.5, 
				roughness: 0.1,
				opacity: 0.75,
				transparent: true			
			} );
	
			var material = new THREE.MeshStandardMaterial( { color: 0x00FFF7, metalness: 0.5, roughness: 0.2 });
			var Auto = new THREE.Mesh( geometriaGrabadoAuto, material) ;
			var Panoramico = new THREE.Mesh( geometriaPanoramico, material) ;
			Panoramico.applyMatrix(new THREE.Matrix4().makeTranslation(1.2,0.5,0));
			//scene.add(Panoramico)
			var Frente = new THREE.Mesh( geometriaCorte, material) ;
			Frente.applyMatrix(new THREE.Matrix4().makeTranslation(0.95,0.5,0.1));
			//scene.add(Frente);
			var Atras = new THREE.Mesh( geometriaAtras, material) ;
			Atras.applyMatrix(new THREE.Matrix4().makeTranslation(5,0.5,0.1));
			//scene.add(Atras);
			
			var materialLLantas = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.5, roughness: 0.2 });
	
			var geoCorte1 = new THREE.CylinderGeometry( 0.75, 0.75, 1, 32 );
			var Corte1 = new THREE.Mesh( geoCorte1, materialLLantas );
			Corte1.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.4,0.5));
			var RotacionCorte1 = new THREE.Euler(Math.PI/2,0,0, 'XYZ');
			Corte1.setRotationFromEuler(RotacionCorte1);
			//scene.add(Corte1);
	
			var Corte2 = new THREE.Mesh( geoCorte1, materialLLantas );
			Corte2.applyMatrix(new THREE.Matrix4().makeTranslation(5,-0.4,0.5));
			Corte2.setRotationFromEuler(RotacionCorte1);
			//scene.add(Corte2);
			
			var Corte3 = new THREE.Mesh( geoCorte1, materialLLantas );
			Corte3.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.4,2.5));
			var RotacionCorte3 = new THREE.Euler(Math.PI/2,0,0, 'XYZ');
			Corte3.setRotationFromEuler(RotacionCorte1);
			//scene.add(Corte3);
	
			var Corte4 = new THREE.Mesh( geoCorte1, materialLLantas );
			Corte4.applyMatrix(new THREE.Matrix4().makeTranslation(5,-0.4,2.5));
			Corte4.setRotationFromEuler(RotacionCorte1);
			//scene.add(Corte4);

			var geometry = new THREE.BoxGeometry( 5, 1, 5 );
			var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
			var cube = new THREE.Mesh( geometry, material );
			cube.applyMatrix(new THREE.Matrix4().makeTranslation(2,1.8,1));
			
			var geometry2 = new THREE.BoxGeometry( 5, 1, 5 );
			var cube2 = new THREE.Mesh( geometry2, material );
			cube2.applyMatrix(new THREE.Matrix4().makeTranslation(-1.6,0.97,1));
			//scene.add(cube2);
			
			var geometry3 = new THREE.BoxGeometry( 1, 1, 5 );
			var cube3 = new THREE.Mesh( geometry3, material );
			cube3.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5,0.95,1));
			var Rotacion = new THREE.Euler(0,0,0.15, 'XYZ');
			cube3.setRotationFromEuler(Rotacion);
			//scene.add(cube3);
	
			var geometry4 = new THREE.BoxGeometry( 5, 0.65,2.7 );
			var cube4 = new THREE.Mesh( geometry4, material );
			cube4.applyMatrix(new THREE.Matrix4().makeTranslation(3,0.85,1.5));
			var Rotacion4 = new THREE.Euler(0,0,0, 'XYZ');
			cube4.setRotationFromEuler(Rotacion4);
			//scene.add(cube4);
	
			var material = new THREE.MeshStandardMaterial( { color: 0xA40404, metalness: 0.5, roughness: 0.2 });
			var AutoCSG = THREE.CSG.fromMesh( Auto );
			var CuboCSG = THREE.CSG.fromMesh( cube );
			var Cubo2CSG = THREE.CSG.fromMesh( cube2 );
			var Cubo3CSG = THREE.CSG.fromMesh( cube3 );
			var Cubo4CSG = THREE.CSG.fromMesh( cube4 );
			var VidrioCSG = THREE.CSG.fromMesh( Panoramico);
			var corte1CSG = THREE.CSG.fromMesh( Corte1);
			var corte2CSG = THREE.CSG.fromMesh( Corte2);
			var corte3CSG = THREE.CSG.fromMesh( Corte3);
			var corte4CSG = THREE.CSG.fromMesh( Corte4);
			var resultadoCorte = AutoCSG.subtract(CuboCSG).subtract(Cubo2CSG).subtract(Cubo3CSG).subtract(Cubo4CSG).subtract(VidrioCSG).subtract(corte1CSG).subtract(corte2CSG).subtract(corte3CSG).subtract(corte4CSG);
			Auto = THREE.CSG.toMesh( resultadoCorte );
			Auto.material = material;	
			//scene.add(Auto);
			
	
			var RotacionLLantas1 = new THREE.Euler(0,Math.PI/2,0, 'XYZ');
			
	
			var llanta1 = Llanta();
			llanta1.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.45,0.3));
			llanta1.setRotationFromEuler(RotacionLLantas1);
			//scene.add(llanta1);
	
			var llanta2 = Llanta();
			llanta2.applyMatrix(new THREE.Matrix4().makeTranslation(5,-0.45,0.3));
			llanta2.setRotationFromEuler(RotacionLLantas1);
			//scene.add(llanta2);
	
			var RotacionLLantas2 = new THREE.Euler(0,-Math.PI/2,0, 'XYZ');
	
			var llanta3 = Llanta();
			llanta3.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.45,2.7));
			llanta3.setRotationFromEuler(RotacionLLantas2);
			//scene.add(llanta3);
			
			var llanta4 = Llanta();
			llanta4.applyMatrix(new THREE.Matrix4().makeTranslation(5,-0.45,2.7));
			llanta4.setRotationFromEuler(RotacionLLantas2);
			//scene.add(llanta4);
			
			var geoPuntochasis = new THREE.Geometry();
			geoPuntochasis.vertices.push(new THREE.Vector3(0,-0.45,1.5));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			origenChasis = new THREE.Points(geoPuntochasis,matPunto);
	
			var geoChasis = new THREE.CylinderGeometry( 0.05, 0.05, 2.8, 32 );
			var chasis = new THREE.Mesh( geoChasis, materialLLantas );
			chasis.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.45,1.5));
			var Rotacionchasis = new THREE.Euler(Math.PI/2,0,0, 'XYZ');
			chasis.setRotationFromEuler(Rotacionchasis);

			origenChasis.add(llanta1);
			origenChasis.add(llanta3);
			origenChasis.add(chasis);
			

			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(-0.5,-0.45,1.5));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			origen = new THREE.Points(geoPunto,matPunto);
			
			origen.add(Auto);
			origen.add(llanta2);
			origen.add(llanta4);
			origen.add(Panoramico);
			origen.add(Frente);
			origen.add(Atras);
			origen.add(origenChasis);
			scene.add(origen);
			
	
}
function renderCarro(){
		var tx = 0, tz = 0;	
		var theta = 0;
		var sigma = 0;	
		var alpha = 0;
		
		if(upArrow) {
			tx=0.1;  tz=0;
		}
		if(downArrow) {
			tx=-0.1;  tz=0;
		}

		if(rightArrow){
			sigma = -.05;

		}
		if(leftArrow){
			sigma = .05;

		}
		

		var t = new THREE.Matrix4();		
		t.set( 	1, 0, 0, tx,
				0, 1, 0, 0, 
				0, 0, 1, tz,
				0, 0, 0, 1	);

		origen.matrix.multiply(t); 	
	
		
		
		var c = Math.cos(sigma);
		var s = Math.sin(sigma);
		var r = new THREE.Matrix4();
	
		r.set( 	c,  0, s, 0,
				0,  1,  0, 0, 
				-s,  0, c, 0,
				0,  0,  0, 1 );	
	
	
		var tempMatrix = new THREE.Matrix4();
		tempMatrix.copyPosition( origen.matrix );
        origen.applyMatrix( new THREE.Matrix4().getInverse(tempMatrix) );
		origen.applyMatrix(r);
        origen.applyMatrix( tempMatrix );

	
}



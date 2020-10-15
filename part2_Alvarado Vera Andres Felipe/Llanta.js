function Llanta(){

var material = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.5, roughness: 0.2 });
var material2 = new THREE.MeshStandardMaterial( { color: 0x7A7A7A, metalness: 0.5, roughness: 0.2 } );
	
var geoLlanta = new THREE.CylinderGeometry( 2, 2, 2, 32 );
var Llanta = new THREE.Mesh( geoLlanta, material );
	
var RotacionLlanta = new THREE.Euler(0,0,Math.PI/2, 'XYZ');
Llanta.setRotationFromEuler(RotacionLlanta);

var geoLlantaInt = new THREE.CylinderGeometry( 1.5, 1.5, 1.5, 32 );
var LLantaInt = new THREE.Mesh( geoLlantaInt, material2 );
LLantaInt.setRotationFromEuler(RotacionLlanta);	

var geoLlantaInt = new THREE.CylinderGeometry( 1.5, 1.5, 2.5, 32 );
var LLantaIntCorte = new THREE.Mesh( geoLlantaInt, material2 );
LLantaIntCorte.setRotationFromEuler(RotacionLlanta);

var LLantaIntCorteCSG = THREE.CSG.fromMesh( LLantaIntCorte );
var LlantaCSG = THREE.CSG.fromMesh( Llanta);
var resultado = LlantaCSG.subtract( LLantaIntCorteCSG);
Llanta = THREE.CSG.toMesh( resultado );
Llanta.material = material;
scene.add(Llanta);
//scene.add(LLantaInt);

	

	var Grabadoline = [];
				
                Grabadoline[3] = new THREE.Vector2( 0, 0 );
	 			Grabadoline[2] = new THREE.Vector2( 1, .5 );
				Grabadoline[1] = new THREE.Vector2( 0, 1 );
                Grabadoline[0] = new THREE.Vector2( -1, 0.5 );

			var FormaGrabado = new THREE.Shape();
			//FormaGrabado .moveTo(0,0);
			FormaGrabado .splineThru( Grabadoline);
            
            var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
            var resolution = 30;
            var points = FormaGrabado .getPoints( resolution );
            var geometry = new THREE.BufferGeometry().setFromPoints( points );
            var curveGrabado = new THREE.Line( geometry, material );
            
			//EXTRUDE
			var extrudeSettings = {
				steps: 5,
				amount: 3,
				bevelEnabled: false
			};

			var geometriaGrabado = new THREE.ExtrudeGeometry( FormaGrabado, extrudeSettings );
			
			var materialGrabado =  new THREE.MeshStandardMaterial( { 
				color: 0xFF7000, 
				metalness: 0.5, 
				roughness: 0.1,
				opacity: 0.75,
				transparent: true			
			} );
			var material = new THREE.MeshStandardMaterial( { color: 0xFDAD00, metalness: 0.5, roughness: 0.2 });
			var Grabado = new THREE.Mesh( geometriaGrabado, material) ;
			Grabado.applyMatrix(new THREE.Matrix4().makeTranslation(-1.5,0.45,0));
			var RotacionGrabado = new THREE.Euler(0,Math.PI/2,0, 'XYZ');
			Grabado.setRotationFromEuler(RotacionGrabado);
			
			var Grabado2 = new THREE.Mesh( geometriaGrabado, material) ;
			Grabado2.applyMatrix(new THREE.Matrix4().makeTranslation(-1.5,-0.2,0.4));
			var RotacionGrabado2 = new THREE.Euler(2.3,Math.PI/2,0, 'XYZ');
			Grabado2.setRotationFromEuler(RotacionGrabado2);
			 //scene.add(Grabado2);
			var Grabado3 = new THREE.Mesh( geometriaGrabado, material) ;
			Grabado3.applyMatrix(new THREE.Matrix4().makeTranslation(-1.5,-0.2,-0.4));
			var RotacionGrabado3 = new THREE.Euler(-2.3,Math.PI/2,0, 'XYZ');
			Grabado3.setRotationFromEuler(RotacionGrabado3);
			//scene.add(Grabado3);
	
			var GrabadoCSG = THREE.CSG.fromMesh( Grabado );
			var Grabado2CSG = THREE.CSG.fromMesh( Grabado2 );
			var Grabado3CSG = THREE.CSG.fromMesh( Grabado3 );
			var LlantaIntCSG = THREE.CSG.fromMesh( LLantaInt);
			var resultado = LlantaIntCSG.subtract( GrabadoCSG).subtract( Grabado2CSG).subtract(Grabado3CSG );
			LLantaInt = THREE.CSG.toMesh( resultado );
			LLantaInt.material = material2;
			
			scene.add(LLantaInt);

	
		
			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(0,0,0));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			var centro = new THREE.Points(geoPunto,matPunto);
			scene.add(centro)
	


} 
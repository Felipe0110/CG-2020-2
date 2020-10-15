function Auto(){
var resolution = 50;
	
	//PEON
	
	var AutoLine =[];
				
				AutoLine[17] = new THREE.Vector2(-2.6,0);
				AutoLine[16] = new THREE.Vector2(-3,.8);
				AutoLine[15] = new THREE.Vector2(-3.4,0);
				AutoLine[14] = new THREE.Vector2(-3.6,0);
				AutoLine[13] = new THREE.Vector2(-3.8,0);
				AutoLine[12] = new THREE.Vector2(-4.5,0.5);
				AutoLine[11] = new THREE.Vector2(-4.7,0.8);
				AutoLine[10] = new THREE.Vector2(-4.6,0.9);
				AutoLine[9] = new THREE.Vector2(-4.3,1.1);
				AutoLine[8] = new THREE.Vector2(-4.1,1.1);
				AutoLine[7] = new THREE.Vector2(-3.5,1.2);
				AutoLine[6] = new THREE.Vector2(-2.8,1.5);
				AutoLine[5] = new THREE.Vector2(-2.4,1.5); // Punto de apoyo
				AutoLine[4] = new THREE.Vector2(-2,1.5);
				AutoLine[3] = new THREE.Vector2(-1.4,0.8);
				AutoLine[2] = new THREE.Vector2(0.0,0.5);
				AutoLine[1] = new THREE.Vector2(0.5,0.2);
				AutoLine[0] = new THREE.Vector2(0,0);
				

			var FormaAuto = new THREE.Shape();
			FormaAuto.moveTo(0,0,0);
			FormaAuto.splineThru(AutoLine);
			
			var materiaLineAuto = new THREE.LineBasicMaterial( { color : 0x000000 } );
			var pointsAuto = FormaAuto.getPoints(resolution);
			var geoLineAuto = new THREE.BufferGeometry().setFromPoints( pointsAuto);
			var curvaAuto = new THREE.Line(geoLineAuto,materiaLineAuto);
	
			scene.add(curvaAuto);
	
				var extrudeSettings = {
				steps: 5,
				amount: 3,
				bevelEnabled: false
			};

			var geometriaGrabado = new THREE.ExtrudeGeometry( FormaAuto, extrudeSettings );
			
			var materialGrabado =  new THREE.MeshStandardMaterial( { 
				color: 0x00FFF7, 
				metalness: 0.5, 
				roughness: 0.1,
				opacity: 0.75,
				transparent: true			
			} );
			var material = new THREE.MeshStandardMaterial( { color: 0x00FFF7, metalness: 0.5, roughness: 0.2 });
			var Auto = new THREE.Mesh( geometriaGrabado, material) ;
			//Peon.applyMatrix(new THREE.Matrix4().makeTranslation(3,0.75,1.5));
			//Peon.rotation.x = -1.7;
			scene.add(Auto);
			
	
}

function solido_Revolucion_Extrude(){
	
}
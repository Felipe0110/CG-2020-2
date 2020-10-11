function solido_Revolucion_Lather(){
var resolution = 50;
var material = new THREE.MeshStandardMaterial( { color: 0xFDAD00, metalness: 0.5, roughness: 0.2 });
var materiaLine = new THREE.LineBasicMaterial( { color : 0x000000 } );
var material= new THREE.MeshStandardMaterial( { 
	color: 0xCC7E00, 
	metalness: 0.5, 
	roughness: 0.1,
	opacity: 100,
	transparent: true			
} );
			
//MESA	
var mesaLine = [];
                mesaLine[3] = new THREE.Vector2( 0, 0 );
               	mesaLine[2] = new THREE.Vector2( 5, 0 );
               	mesaLine[1] = new THREE.Vector2( 5, -1 );               
                mesaLine[0] = new THREE.Vector2( 0, -1 );               
				
			var FormaMesa = new THREE.Shape();
			FormaMesa.moveTo(0,0);
			FormaMesa.splineThru(mesaLine);

            var points = FormaMesa.getPoints( resolution );
            var geometry = new THREE.BufferGeometry().setFromPoints( points );
            var curvasMesa = new THREE.Line( geometry, materiaLine );
			//scene.add( curvasMesa );
	
			var geometriMesa = new THREE.LatheGeometry( points, 10 );

			var Mesa = new THREE.Mesh( geometriMesa, material );
			scene.add( Mesa );
	
	//PEON
	
	var peonLine =[];
				peonLine[10] = new THREE.Vector2(0,3);
				peonLine[9] = new THREE.Vector2(0.5,2.5);
				peonLine[8] = new THREE.Vector2(0.2,2);
				peonLine[7] = new THREE.Vector2(0.5,2);
				peonLine[6] = new THREE.Vector2(0.5,1.6);
				peonLine[5] = new THREE.Vector2(0.2,1.6);
				peonLine[4] = new THREE.Vector2(0.4,1);
				peonLine[3] = new THREE.Vector2(0.5,1);
				peonLine[2] = new THREE.Vector2(0.7,0.3);
				peonLine[1] = new THREE.Vector2(0.7,0);
				peonLine[0] = new THREE.Vector2(0,0);
				

			var FormaPeon = new THREE.Shape();
			FormaPeon.moveTo(0,0,0);
			FormaPeon.splineThru(peonLine);
			
			var materiaLinePeon = new THREE.LineBasicMaterial( { color : 0x000000 } );
			var pointsPeon = FormaPeon.getPoints(resolution);
			var geoLinePeon = new THREE.BufferGeometry().setFromPoints( pointsPeon);
			var curvaPeon = new THREE.Line(geoLinePeon,materiaLinePeon);
			//scene.add(curvaPeon);
	
			var geometriPeon = new THREE.LatheGeometry( pointsPeon, 10 );
			var materialPeon= new THREE.MeshStandardMaterial( { 
				color: 000000, 
				//metalness: 0.5, 
				roughness: 0.1,
				opacity: 1,
				transparent: false			
			} );
			
			var Peon = new THREE.Mesh( geometriPeon, materialPeon );
			Peon.applyMatrix(new THREE.Matrix4().makeTranslation(3,0.75,1.5));
			Peon.rotation.x = -1.7;
			scene.add(Peon);
	
	//SOPORTE DE LA MESA
	
			var geoSoporte = new THREE.CylinderGeometry( 0.6, 0.6, 8, 32 );
			var soporte = new THREE.Mesh( geoSoporte, material );
			soporte.applyMatrix(new THREE.Matrix4().makeTranslation(0,-4,0));
			scene.add(soporte);
			
		var soporteLine=[];
			soporteLine[3] = new THREE.Vector2(0,2);
			soporteLine[2] = new THREE.Vector2(0.3,0.7);
			soporteLine[1] = new THREE.Vector2(3,0);
			soporteLine[0] = new THREE.Vector2(0,0);
	
			var FormaSoporte = new THREE.Shape();
			FormaSoporte.moveTo(0,0,0);
			FormaSoporte.splineThru(soporteLine);
		
			var pointsSoporte = FormaSoporte.getPoints(resolution);
			var geoLineSoporte = new THREE.BufferGeometry().setFromPoints( pointsSoporte);
			var curvaSoporte = new THREE.Line(geoLineSoporte,materiaLine);
			//scene.add(curvaSoporte);
	
			var geometriSoporte = new THREE.LatheGeometry( pointsSoporte, 10 );
			var soporte = new THREE.Mesh( geometriSoporte, material);
			soporte.applyMatrix(new THREE.Matrix4().makeTranslation(0,-8,0));
			scene.add(soporte);
			
	
}

function solido_Revolucion_Extrude(){
	 var Panline = [];
                Panline[0] = new THREE.Vector2( 0, 4 );
                Panline[1] = new THREE.Vector2( 2, 3.5 );
                Panline[2] = new THREE.Vector2( 2, 3 );
                Panline[3] = new THREE.Vector2( 1.7, 2.7 );
               	Panline[4] = new THREE.Vector2( 1.7, 0.2 );
                Panline[5] = new THREE.Vector2( 0, 0 );


			var FormaPan = new THREE.Shape();
			FormaPan .moveTo(0,0);
			FormaPan .splineThru(Panline);
            
            var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
            var resolution = 30;
            var points = FormaPan .getPoints( resolution );
            var geometry = new THREE.BufferGeometry().setFromPoints( points );
            var curvePan = new THREE.Line( geometry, material );
            
			//EXTRUDE
			var extrudeSettings = {
				steps: 5,
				amount: 3,
				bevelEnabled: false
			};

			var geometriaPan = new THREE.ExtrudeGeometry( FormaPan, extrudeSettings );
			
			var materialPan =  new THREE.MeshStandardMaterial( { 
				color: 0xFF7000, 
				metalness: 0.5, 
				roughness: 0.1,
				opacity: 0.75,
				transparent: true			
			} );
			var material = new THREE.MeshStandardMaterial( { color: 0xFDAD00, metalness: 0.5, roughness: 0.2 });
			var Pan_1 = new THREE.Mesh( geometriaPan, material) ;
			var Pan_2 = new THREE.Mesh( geometriaPan, material) ;
			Pan_2.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,3));
			Pan_2.rotation.y = Math.PI;
	
			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(0,0,0));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			var centro = new THREE.Points(geoPunto,matPunto);
		
			centro.add(Pan_1);
			centro.add(Pan_2);
			centro.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,2.2));
			centro.rotation.y = -0.6;
			scene.add(centro)
			
	
}
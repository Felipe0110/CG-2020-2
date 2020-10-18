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
			//scene.add(Llanta);

			var Grabadoline = [];
				
            Grabadoline[3] = new THREE.Vector2( 0, 0 );
	 		Grabadoline[2] = new THREE.Vector2( 1, .55 );
			Grabadoline[1] = new THREE.Vector2( 0, 1 );
            Grabadoline[0] = new THREE.Vector2( -1, .55);

			var FormaGrabado = new THREE.Shape();
			FormaGrabado .splineThru( Grabadoline);
            
            var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
            var resolution = 30;
            var points = FormaGrabado .getPoints( resolution );
            var geometry = new THREE.BufferGeometry().setFromPoints( points );
            var curveGrabado = new THREE.Line( geometry, material );
            
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
			Grabado2.applyMatrix(new THREE.Matrix4().makeTranslation(-1.5,-0.23,0.4));
			var RotacionGrabado2 = new THREE.Euler(2.15,Math.PI/2,0, 'XYZ');
			Grabado2.setRotationFromEuler(RotacionGrabado2);
			 //scene.add(Grabado2);
			var Grabado3 = new THREE.Mesh( geometriaGrabado, material) ;
			Grabado3.applyMatrix(new THREE.Matrix4().makeTranslation(-1.5,-0.23,-0.4));
			var RotacionGrabado3 = new THREE.Euler(-2.15,Math.PI/2,0, 'XYZ');
			Grabado3.setRotationFromEuler(RotacionGrabado3);
			//scene.add(Grabado3);
	
			var GrabadoCirculosline = [];
			
                GrabadoCirculosline[3] = new THREE.Vector2( 0, 0);
	 			GrabadoCirculosline[2] = new THREE.Vector2( 0.25, .5 );
				GrabadoCirculosline[1] = new THREE.Vector2( 0, 1 );
                GrabadoCirculosline[0] = new THREE.Vector2( -0.25, .5);

			var FormaGrabadoCirculos = new THREE.Shape();
			FormaGrabadoCirculos .splineThru( GrabadoCirculosline);
            

            var pointsCirculos = FormaGrabadoCirculos .getPoints( resolution );
            var geometryCirculos = new THREE.BufferGeometry().setFromPoints( pointsCirculos );
            var curveGrabadoCirculos = new THREE.Line( geometryCirculos, material );

			var geometriaGrabadoCirculo = new THREE.ExtrudeGeometry( FormaGrabadoCirculos, extrudeSettings );
			var GrabadoCirculo = new THREE.Mesh( geometriaGrabadoCirculo, material) ;
			GrabadoCirculo.applyMatrix(new THREE.Matrix4().makeTranslation(-1.625,0.725,1.25));
			var RotacionGrabadoCirculo = new THREE.Euler(-2.15,Math.PI/2,0, 'XYZ');
			GrabadoCirculo.setRotationFromEuler(RotacionGrabadoCirculo);
			//scene.add(GrabadoCirculo);
			
			var GrabadoCirculo2 = new THREE.Mesh( geometriaGrabadoCirculo, material) ;
			GrabadoCirculo2.applyMatrix(new THREE.Matrix4().makeTranslation(-1.625,0.725,-1.25));
			var RotacionGrabadoCirculo2 = new THREE.Euler(2.15,Math.PI/2,0, 'XYZ');
			GrabadoCirculo2.setRotationFromEuler(RotacionGrabadoCirculo2);
			//scene.add(GrabadoCirculo2);
			var GrabadoCirculo3 = new THREE.Mesh( geometriaGrabadoCirculo, material) ;
			GrabadoCirculo3.applyMatrix(new THREE.Matrix4().makeTranslation(-1.625,-1.4,0));
			var RotacionGrabadoCirculo3 = new THREE.Euler(0,Math.PI/2,0, 'XYZ');
			GrabadoCirculo3.setRotationFromEuler(RotacionGrabadoCirculo3);
			//scene.add(GrabadoCirculo3);
	
			var geoCilindroExt = new THREE.CylinderGeometry( 0.35, 0.35, 1, 32 );
			var geoCilindroInt = new THREE.CylinderGeometry( 0.3, 0.3, 1, 32 );
			var geoCilindroGrande = new THREE.CylinderGeometry( 0.2, 0.2, 1, 32 );
			var cilindroExt = new THREE.Mesh( geoCilindroExt, material );
			var cilindroInt = new THREE.Mesh( geoCilindroInt, material2 );
			var cilindroGrande = new THREE.Mesh( geoCilindroGrande, material2 );
			var RotacionCilindro = new THREE.Euler(0,0,Math.PI/2, 'XYZ');
	
			cilindroExt.applyMatrix(new THREE.Matrix4().makeTranslation(1.2,0,0));
			cilindroInt.applyMatrix(new THREE.Matrix4().makeTranslation(1.2,0,0));
			cilindroGrande.applyMatrix(new THREE.Matrix4().makeTranslation(1.2,0,0));
			cilindroExt.setRotationFromEuler(RotacionCilindro);
			cilindroInt.setRotationFromEuler(RotacionCilindro);
			cilindroGrande.setRotationFromEuler(RotacionCilindro);

			var CilindroExtCSG = THREE.CSG.fromMesh( cilindroExt );
			var CilindroIntCSG = THREE.CSG.fromMesh( cilindroInt );	
			var resultadoCilindro = CilindroExtCSG.subtract(CilindroIntCSG);
			cilindroExt = THREE.CSG.toMesh( resultadoCilindro );
			cilindroExt.material = material2;
	
			CilindroExtCSG = THREE.CSG.fromMesh( cilindroExt );
			var CilindroGrandeCSG = THREE.CSG.fromMesh( cilindroGrande );
			var GrabadoCSG = THREE.CSG.fromMesh( Grabado );
			var Grabado2CSG = THREE.CSG.fromMesh( Grabado2 );
			var Grabado3CSG = THREE.CSG.fromMesh( Grabado3 );
			var GrabadoCirculoCSG = THREE.CSG.fromMesh( GrabadoCirculo );
			var GrabadoCirculo2CSG = THREE.CSG.fromMesh( GrabadoCirculo2 );
			var GrabadoCirculo3CSG = THREE.CSG.fromMesh( GrabadoCirculo3 );
			var LlantaIntCSG = THREE.CSG.fromMesh( LLantaInt);
			var resultado = LlantaIntCSG.subtract( GrabadoCSG).subtract( Grabado2CSG).subtract(Grabado3CSG ).subtract( GrabadoCirculoCSG).subtract(GrabadoCirculo2CSG ).subtract(GrabadoCirculo3CSG).subtract(CilindroExtCSG).subtract(CilindroGrandeCSG);
			LLantaInt = THREE.CSG.toMesh( resultado );
			LLantaInt.material = material2;	
			//scene.add(LLantaInt);
	
			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(0,0,0));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			var centro = new THREE.Points(geoPunto,matPunto);
			centro.add(	LLantaInt);
			centro.add(Llanta);
			var s = 0.35;
			var MatrizS = new THREE.Matrix4();	
			MatrizS.set( s, 0, 0, 0,
				0, s, 0, 0, 
				0, 0, s, 0,
				0, 0, 0,  1);

			centro.applyMatrix(MatrizS);							
			centro.elementsNeedUpdate = true;	
			
			return centro;

} 
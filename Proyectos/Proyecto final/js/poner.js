
		    var mouse, raycaster, isShiftDown = false,block1 = false,block2 = false;
            var block3 = false,block4 = false,block5 = false,block6 = false,block7 = false;
			var cofre = false;
			var antorcha = false;
            var cuadrado;
			var rollOverMesh, rollOverMaterial;
			var cubeGeo;
			var cube;
            var cubeMaterial1 = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/block.png' ),opacity: 1 } );
            var cubeMaterial2 = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/roca.png' ),opacity: 1 } );
            var cubeMaterial3 = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/diamante.png' ),opacity: 1 } );
            var cubeMaterial4 = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/l.jpg' ),opacity: 1 } );
			var loader = new THREE.TextureLoader();
			var materialTierra = [
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo/side4.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo/side1.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo/top.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo/bottom.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo/side2.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo/side3.jpg")})
			];
			var materialTierra_Nieve = [
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo_nieve/lado.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo_nieve/lado.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo_nieve/arriba.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo_nieve/abajo.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo_nieve/lado.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("Textura_suelo_nieve/lado.jpg")})
			];
			var materialArena = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/Arena.jpg' ),opacity: 1 } );

			var materialArbol = [
			new THREE.MeshStandardMaterial ({map : loader.load("imagenes bloques/tree_side.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("imagenes bloques/tree_side.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("imagenes bloques/tree_top.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("imagenes bloques/tree_top.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("imagenes bloques/tree_side.jpg")}),
			new THREE.MeshStandardMaterial ({map : loader.load("imagenes bloques/tree_side.jpg")})
			];
			var materialHojas = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/Hojas.jpg' ),opacity: 1 } );
			var materialCactus = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/cactus.png' ),opacity: 1 } );
			var materialGreda = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/greda.jpg' ),opacity: 1 } );
			var materialPiedra = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/piedra.jpg' ),opacity: 1 } );
			var colorR = new THREE.Color( 0x543C07 );
						var colorG = new THREE.Color( 0xF9F50A );

						var material1 = new THREE.MeshStandardMaterial( { color: colorR, metalness: 0.5,} );
						var material2 = new THREE.MeshStandardMaterial( { color: colorG, metalness: 0.5,} );
            var plane;
              
			var objects = [];

 			function Bloques(){
				
				var gridHelper = new THREE.GridHelper( 1000, 500);


				raycaster = new THREE.Raycaster();
                
				mouse = new THREE.Vector2();

				var geometry = new THREE.PlaneBufferGeometry( 1000, 500 );
				geometry.rotateX( - Math.PI / 2 );

				plane = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial ( { visible: false } ) );
				
				objects.push( plane );
				
				
				var CuboEsc = new THREE.BoxBufferGeometry(2, 2, 2);
				
				for(var i=0; i<=30;i++){
					for( var j=0; j<=30;j++){
						 cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="500"+"px";
						var voxel = new THREE.Mesh( CuboEsc, materialTierra );
						voxel.applyMatrix(new THREE.Matrix4().makeTranslation(2*i+1,7,2*j+1));
						scene.add( voxel );
						objects.push( voxel );
						
						var voxel2 = new THREE.Mesh( CuboEsc, materialArena);
						voxel2.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i-1,7,2*j+1));
						scene.add( voxel2 );
						objects.push( voxel2 );
						
						var voxel3 = new THREE.Mesh( CuboEsc, materialTierra_Nieve);
						voxel3.applyMatrix(new THREE.Matrix4().makeTranslation(2*i+1,7,-2*j-1));
						scene.add( voxel3);
						objects.push( voxel3 );
						
						var voxel4 = new THREE.Mesh( CuboEsc, materialTierra_Nieve);
						voxel4.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i-1,7,-2*j+1));
						scene.add( voxel4);
						objects.push( voxel4 );
						
					}
				}
				
				for(var i=-30;i<=30;i++){
					for(var j=-30;j<=30;j++){
						var voxel5 = new THREE.Mesh( CuboEsc, materialGreda);
						voxel5.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i-1,5,-2*j+1));
						scene.add( voxel5);
						objects.push( voxel5 );
						
						var voxel6 = new THREE.Mesh( CuboEsc, materialGreda);
						voxel6.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i-1,3,-2*j+1));
						scene.add( voxel6);
						objects.push( voxel6 );
						
						var voxel7 = new THREE.Mesh( CuboEsc, materialPiedra);
						voxel7.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i-1,1,-2*j+1));
						scene.add( voxel7);
						objects.push( voxel7 );
					}
					
				}
				
				
			
				//Arboles 
				for(var k=0; k<20;k++){
				var aleatorioArbolX = Math.random() * (50 - 1) + 1;
				var aleatorioArbolZ = Math.random() * (50 - (-50)) - 50;
				var arbolPositionX = Math.round(aleatorioArbolX);
				var arbolPositionZ = Math.round(aleatorioArbolZ);
				
				var voxel = new THREE.Mesh( CuboEsc, materialArbol);
				voxel.applyMatrix(new THREE.Matrix4().makeTranslation(arbolPositionX,9,arbolPositionZ));
				scene.add( voxel );
				objects.push( voxel );
				
				for( var i=0; i<2;i++){
					var tronco = new THREE.Mesh( CuboEsc, materialArbol);
					tronco.applyMatrix(new THREE.Matrix4().makeTranslation(arbolPositionX,2*i+11,arbolPositionZ));
					scene.add( tronco );
					objects.push( tronco );
				}
					
				for(var i=0;i<3;i++){
					for(var j=0;j<3;j++){
					var Hojas = new THREE.Mesh( CuboEsc, materialHojas);
					Hojas.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i+arbolPositionX+2,15,-2*j+arbolPositionZ+2));
					scene.add( Hojas );
					objects.push( Hojas );	
					}
				}
					
				var Hojas = new THREE.Mesh( CuboEsc, materialHojas);
					Hojas.applyMatrix(new THREE.Matrix4().makeTranslation(arbolPositionX,17,arbolPositionZ));
					scene.add( Hojas );
					objects.push( Hojas );	
				}
				
				//Cactus
				for(var k=0; k<10;k++){
				var aleatorioCactusX = Math.random() * (50 - 1) + 1;
				var aleatorioCactusZ = Math.random() * (50 - 1) + 1;
				var cactusPositionX = Math.round(aleatorioCactusX);
				var cactusPositionZ = Math.round(aleatorioCactusZ);
				
				voxel = new THREE.Mesh( CuboEsc, materialCactus);
				voxel.applyMatrix(new THREE.Matrix4().makeTranslation(-cactusPositionX,9,cactusPositionZ));
				scene.add( voxel );
				objects.push( voxel );
				
				for( var i=0; i<1;i++){
					var cactus = new THREE.Mesh( CuboEsc, materialCactus);
					cactus.applyMatrix(new THREE.Matrix4().makeTranslation(-cactusPositionX,2*i+11,cactusPositionZ));
					scene.add( cactus );
					objects.push( 	cactus );
					}
				}
				
				
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'keydown', onDocumentKeyDown, false );
				
				
			   
	
            Voxel();
			
			function onDocumentMouseMove( event ) {

				event.preventDefault();

				mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

				raycaster.setFromCamera( mouse, camera );
				

				var intersects = raycaster.intersectObjects( objects );

				if ( intersects.length > 0 ) {

					var intersect = intersects[ 0 ];

					rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
					rollOverMesh.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );

				}

				render();

			}
		
				
			function onDocumentMouseDown( event ) {

				event.preventDefault();

				mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

				raycaster.setFromCamera( mouse, camera );
				

				var intersects = raycaster.intersectObjects( objects );

				if ( intersects.length > 0 ) {

					var intersect = intersects[ 0 ];

					// delete cube

					if ( isShiftDown ) {

						if ( intersect.object !== plane ) {

							scene.remove( intersect.object );

							objects.splice( objects.indexOf( intersect.object ), 1 );

						}

					} 
                else {
						
					 if(block1){

                         cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="765"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial2 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1);
						scene.add( voxel );
						objects.push( voxel );
						// console.log("Tamaño: "+objects.length);
                        }
                       if(block2) {
						cuadrado  = document.getElementById("barrera");
                        cuadrado.style.left="815"+"px";
						   
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial1 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 ); 
						scene.add( voxel );
						objects.push( voxel );
						
		                }
                    
                        if(block3){
                     
                         cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="865"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial3 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );                         
                        }
				        
						 if(block4){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="915"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial4 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                        }
					
						if(block5){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="965"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, materialTierra );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                        }
					if(block6){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="1015"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, materialTierra_Nieve );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                        }
					if(block7){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="1065"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, materialArena );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                        }
					if(cofre){
						cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="1115"+"px"; 

						var geometry3 = new THREE.BoxBufferGeometry( 3, 2, 0.5 );
						var cube2 = new THREE.Mesh( geometry3,material2 );
						cube2.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,5));


						var geometry4 = new THREE.BoxBufferGeometry( 1.8, 1, 0.5 );
						var cube3 = new THREE.Mesh( geometry4,material2 );
						cube3.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,5));

						var CSGcub2 = THREE.CSG.fromMesh(cube2);
						var CSGcub3 = THREE.CSG.fromMesh(cube3);

						var result2 = CSGcub2.subtract(CSGcub3);
						cube2 = THREE.CSG.toMesh( result2 );
						cube2.material = material2;
						cube3.material = material2;

						//Cofre
						var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32,30,false,0,Math.PI );
						var cylinder = new THREE.Mesh( geometry, material1 );
						cylinder.rotateZ(Math.PI/2);
						var geometry2 = new THREE.BoxBufferGeometry( 5, 20, 10 );
						cube = new THREE.Mesh( geometry2,material1 );
						cube.rotateZ(Math.PI/2);
						cube.applyMatrix(new THREE.Matrix4().makeTranslation(0,-2.560,0));
						var CilCSG = THREE.CSG.fromMesh( cylinder );
						var cubCSG = THREE.CSG.fromMesh(cube);
						var result = cubCSG.union(CilCSG);
						cube = THREE.CSG.toMesh( result );
						cylinder.material = material1;
						cube.material = material1;
						cube.rotateZ = Math.PI/2;
						cube.scale.x = 0.1;
						cube.scale.y = 0.1;
						cube.scale.z = 0.1;
						var voxel = cube;
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						cube.add(cube2);
						scene.add(voxel);
						objects.push(voxel);
						 
					}
					if(antorcha){
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="1165"+"px"; 
                        const geometry = new THREE.BoxBufferGeometry( 0.25, 0.25, 0.25 );
                        const geometry2 = new THREE.BoxBufferGeometry( 0.25, 2, 0.25 );
                        const material1 = new THREE.MeshBasicMaterial( {color: 0xE6D207 } );
                        const material2 = new THREE.MeshBasicMaterial( {color: 0x815806  } );
                        const cube = new THREE.Mesh( geometry2, material2 );
                        const cube3 = new THREE.Mesh( geometry, material1 );
                
                        cube.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0));
                        cube3.applyMatrix(new THREE.Matrix4().makeTranslation(0,1.12,0));
                
                        light1 = new THREE.PointLight( 0xE6D207, 3, 10, 2);
                        light2 = new THREE.PointLight( 0xE6D207, 3, 10, 2);
                        light2.position.y = 1.2;
                        scene.add(light2);     
                        const textureLoader = new THREE.TextureLoader();

				        const textureFlare0 = textureLoader.load( 'imagene_antorcha/lensflare0.png' );
				        const textureFlare3 = textureLoader.load( 'imagene_antorcha/lensflare3.png' );     
                             
                        const lensflare = new THREE.Lensflare();
					    lensflare.addElement( new THREE.LensflareElement( textureFlare0, 300, 0, light1.color ) );
					    lensflare.addElement( new THREE.LensflareElement( textureFlare3, 60, 0.6 ) );
				
					    light2.add( lensflare );
                             
                        cube.add(cube3,light1,light2);
				       
		
                        var voxel = cube;
                      
				        voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                     
                        }
					}
				render();
				}
			}

			function onDocumentKeyDown( event ) {

                switch ( event.keyCode ) {
                    case 16: 
                        isShiftDown = true; 
                        block1 = false; 
                        block2 = false;
                        block3 = false;
                        block4 = false;
						block5 = false;
						block6 = false;
						block7 = false;
						cofre = false;
						antorcha = false;
                        break;
                    case 49 : 
                        block1 = true; 
                        block2 = false;
                        block3 = false;
                        block4 = false;
						block5 = false;
						block6 = false;
						block7 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;
                        break; 
                    case 50 : 
                        block2 = true;
                        block1 = false;
                        block3 = false;
                        block4 = false;
						block5 = false;
						block6 = false;
						block7 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;
                        break; 
                    case 51 : 
                        block3 = true; 
                        block1 = false;
                        block2 = false;
                        block4 = false;
                        block5 = false;
						block6 = false;
						block7 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;

                        break;
                    case 52 : 
                        block4 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block5 = false;
						block6 = false;
						block7 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;
                        break;
						
					case 53 : 
                        block5 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block4 = false;
						block7 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;
                        break;
					case 54 : 
                        block6 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block4 = false;
                        block5 = false;
					    block7 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;
                        break;
					case 55 : 
                        block7 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block4 = false;
                        block5 = false;
                        block6 = false;
						cofre = false;
						antorcha = false;
                        isShiftDown = false;
                        break;
					case 56: 
                        cofre = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block4 = false;
                        block5 = false;
                        block6 = false;
					 	block7 = false;
						antorcha = false;
                        isShiftDown = false;
                        break;
					case 57:
						antorcha = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block4 = false;
                        block5 = false;
                        block6 = false;
					 	block7 = false;
						cofre = false;
                        isShiftDown = false;
						
                }
            }

			function Voxel(){
		        var rollOverGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
				rollOverMaterial = new THREE.MeshStandardMaterial ( { color: 0xFFFFFF, opacity: 0.2, transparent: true } );
				rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
				scene.add( rollOverMesh );
				cubeGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
			}
}
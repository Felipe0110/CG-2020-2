
		    var mouse, raycaster, isShiftDown = false,block1 = false,block2 = false;
            var block3 = false,block4 = false,block5 = false,block = false;
            var cuadrado;
			var rollOverMesh, rollOverMaterial;
			var cubeGeo;
            var cubeMaterial1 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/block.png' ),opacity: 1 } );
            var cubeMaterial2 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/roca.png' ),opacity: 1 } );
            var cubeMaterial3 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/diamante.png' ),opacity: 1 } );
            var cubeMaterial4 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/l.jpg' ),opacity: 1 } );
			var loader = new THREE.TextureLoader();
			var materialTierra = [
			new THREE.MeshBasicMaterial({map : loader.load("Textura_suelo/side4.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("Textura_suelo/side1.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("Textura_suelo/top.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("Textura_suelo/bottom.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("Textura_suelo/side2.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("Textura_suelo/side3.jpg")})
			];
			var materialArena = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/Arena.jpg' ),opacity: 1 } );

			var materialArbol = [
			new THREE.MeshBasicMaterial({map : loader.load("imagenes bloques/tree_side.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("imagenes bloques/tree_side.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("imagenes bloques/tree_top.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("imagenes bloques/tree_top.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("imagenes bloques/tree_side.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("imagenes bloques/tree_side.jpg")})
			];
			var materialHojas = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/Hojas.jpg' ),opacity: 1 } );
			var materialCactus = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/cactus.png' ),opacity: 1 } );

            var plane;
              
			var objects = [];

 			function Bloques(){
				
				var gridHelper = new THREE.GridHelper( 1000, 500);
				scene.add( gridHelper );

				raycaster = new THREE.Raycaster();
                
				mouse = new THREE.Vector2();

				var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
				geometry.rotateX( - Math.PI / 2 );

				plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
				scene.add( plane );
				objects.push( plane );
				
				
				var CuboEsc = new THREE.BoxBufferGeometry(2, 2, 2);
				
				objects.push(camera);
				
				for(var i=0; i<=50;i++){
					for( var j=0; j<=50;j++){
						 cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="500"+"px";
						var voxel = new THREE.Mesh( CuboEsc, materialTierra );
						voxel.applyMatrix(new THREE.Matrix4().makeTranslation(2*i+1,1,2*j+1));
						scene.add( voxel );
						objects.push( voxel );
						
						var voxel2 = new THREE.Mesh( CuboEsc, materialArena);
						voxel2.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i-1,1,2*j+1));
						scene.add( voxel2 );
						objects.push( voxel2 );
						
					}
				}
				
				//Arboles 
				for(var k=0; k<20;k++){
				var aleatorioArbolX = Math.random() * (50 - 1) + 1;
				var aleatorioArbolZ = Math.random() * (50 - 1) + 1;
				var arbolPositionX = Math.round(aleatorioArbolX);
				var arbolPositionZ = Math.round(aleatorioArbolZ);
				
				var voxel = new THREE.Mesh( CuboEsc, materialArbol);
				voxel.applyMatrix(new THREE.Matrix4().makeTranslation(arbolPositionX,3,arbolPositionZ));
				scene.add( voxel );
				objects.push( voxel );
				
				for( var i=0; i<2;i++){
					var tronco = new THREE.Mesh( CuboEsc, materialArbol);
					tronco.applyMatrix(new THREE.Matrix4().makeTranslation(arbolPositionX,2*i+5,arbolPositionZ));
					scene.add( tronco );
					objects.push( tronco );
				}
				for(var i=0;i<3;i++){
					for(var j=0;j<3;j++){
					var Hojas = new THREE.Mesh( CuboEsc, materialHojas);
					Hojas.applyMatrix(new THREE.Matrix4().makeTranslation(-2*i+arbolPositionX+2,9,-2*j+arbolPositionZ+2));
					scene.add( Hojas );
					objects.push( Hojas );	
					}
				}
				var Hojas = new THREE.Mesh( CuboEsc, materialHojas);
					Hojas.applyMatrix(new THREE.Matrix4().makeTranslation(arbolPositionX,11,arbolPositionZ));
					scene.add( Hojas );
					objects.push( Hojas );	
				}
				
				//Cactus
				for(var k=0; k<20;k++){
				var aleatorioCactusX = Math.random() * (50 - 1) + 1;
				var aleatorioCactusZ = Math.random() * (50 - 1) + 1;
				var cactusPositionX = Math.round(aleatorioCactusX);
				var cactusPositionZ = Math.round(aleatorioCactusZ);
				
				voxel = new THREE.Mesh( CuboEsc, materialCactus);
				voxel.applyMatrix(new THREE.Matrix4().makeTranslation(-cactusPositionX,3,cactusPositionZ));
				scene.add( voxel );
				objects.push( voxel );
				
				for( var i=0; i<1;i++){
					var cactus = new THREE.Mesh( CuboEsc, materialCactus);
					cactus.applyMatrix(new THREE.Matrix4().makeTranslation(-cactusPositionX,2*i+5,cactusPositionZ));
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
                         cuadrado.style.left="500"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial2 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1);
						scene.add( voxel );
						objects.push( voxel );
						// console.log("Tamaño: "+objects.length);
                        }
                       if(block2) {
                         
                    
                        
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial1 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 ); 
                        cuadrado  = document.getElementById("barrera");
                        cuadrado.style.left="550"+"px";
						scene.add( voxel );
						objects.push( voxel );
						
		                }
                    
                        if(block3){
                     
                         cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="600"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial3 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );                         
                        }
				        
						 if(block4){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="650"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial4 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                        }
					
						if(block5){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="700"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, materialTierra );
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
                        break;
                    case 49 : 
                        block1 = true; 
                        block2 = false;
                        block3 = false;
                        block4 = false;
						block5 = false;
                        isShiftDown = false;
                        break; 
                    case 50 : 
                        block2 = true;
                        block1 = false;
                        block3 = false;
                        block4 = false;
						block5 = false;
                        isShiftDown = false;
                        break; 
                    case 51 : 
                        block3 = true; 
                        block1 = false;
                        block2 = false;
                        block4 = false;
                        block5 = false;
                        isShiftDown = false;

                        break;
                    case 52 : 
                        block4 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block5 = false;
                        isShiftDown = false;
                        break;
						
					case 53 : 
                        block5 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        block4 = false;
                        isShiftDown = false;
                        break;
                }
            }

			function Voxel(){
		        var rollOverGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
				rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, opacity: 0.2, transparent: true } );
				rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
				scene.add( rollOverMesh );
				cubeGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
			}
}
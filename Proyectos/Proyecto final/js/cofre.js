

function Cofre(){
            var colorR = new THREE.Color( 0x543C07 );
		  	var colorG = new THREE.Color( 0xF9F50A );
		  	
             var light = new THREE.DirectionalLight(0xFFFFFF);
            light.position.set(0, 10, 5);
            scene.add(light);
            var light2 = new THREE.DirectionalLight(0xFFFFFF);
            light2.position.set(5, 10,0);
            scene.add(light2);
             var light3 = new THREE.DirectionalLight(0xFFFFF);
            light3.position.set(5, -10,0);
            scene.add(light3);
		 
			
			
			//CREAR LOS MATERIALES
            var material1 = new THREE.MeshStandardMaterial( { color: colorR, metalness: 0.5, roughness: 0.1 } );
			var material2 = new THREE.MeshStandardMaterial( { color: colorG, metalness: 0.5, roughness: 0.1 } );
            
            
            // Chapa
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
            var cube = new THREE.Mesh( geometry2,material1 );
            cube.rotateZ(Math.PI/2);
            cube.applyMatrix(new THREE.Matrix4().makeTranslation(0,-2.560,0));
            var CilCSG = THREE.CSG.fromMesh( cylinder );
            var cubCSG = THREE.CSG.fromMesh(cube);
            var result = cubCSG.union(CilCSG);
            cube = THREE.CSG.toMesh( result );
            cylinder.material = material1;
            cube.material = material1;
            cube.rotateZ=Math.PI/2;
            cube.add(cube2);
            scene.add(cube);
		}
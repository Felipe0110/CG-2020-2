var origen, anguloX = 0,anguloY = 0,anguloZ = 0, sc = 1;
function Cubo(){
			var colorR = new THREE.Color( 0xAA3333 );
		  	var colorG = new THREE.Color( 0x33AA33 );
		  	var colorB = new THREE.Color( 0x333366 );
		var geoCubo = new THREE.Geometry();
			
			var v0 = new THREE.Vector3(0.0,0.0,0.0);
			var v1 = new THREE.Vector3(1.0,0.0,0.0);
			var v2 = new THREE.Vector3(0.0,0.0,1.0);
			var v3 = new THREE.Vector3(1.0,0.0,1.0);
	
			var v4 = new THREE.Vector3(1.0,1.0,1.0);
			var v5 = new THREE.Vector3(0.0,1.0,0.0); 
			var v6 = new THREE.Vector3(1.0,1.0,0.0);  
			var v7 = new THREE.Vector3(0.0,1.0,1.0); 
			
			geoCubo.vertices.push(v0);
			geoCubo.vertices.push(v1);
			geoCubo.vertices.push(v2);
			geoCubo.vertices.push(v3);
			geoCubo.vertices.push(v4);
			geoCubo.vertices.push(v5);
			geoCubo.vertices.push(v6);
			geoCubo.vertices.push(v7);
			
			geoCubo.faces.push(new THREE.Face3(0,5,1));
			geoCubo.faces.push(new THREE.Face3(5,6,1));
			geoCubo.faces.push(new THREE.Face3(5,7,6));
			geoCubo.faces.push(new THREE.Face3(6,7,4));
			geoCubo.faces.push(new THREE.Face3(7,2,4));
			geoCubo.faces.push(new THREE.Face3(4,2,3));
			geoCubo.faces.push(new THREE.Face3(1,3,0));
			geoCubo.faces.push(new THREE.Face3(0,3,2));
			geoCubo.faces.push(new THREE.Face3(0,2,5));
			geoCubo.faces.push(new THREE.Face3(7,5,2));
			geoCubo.faces.push(new THREE.Face3(1,6,3));
			geoCubo.faces.push(new THREE.Face3(6,4,3));
			geoCubo.computeFaceNormals();

		/*	geoCubo.faces[0].color = colorR;
			geoCubo.faces[1].color = colorG;
			geoCubo.faces[2].color = colorB;
			geoCubo.faces[3].color = colorR;
			geoCubo.faces[4].color = colorG;
			geoCubo.faces[5].color = colorB;
			geoCubo.faces[6].color = colorR;
			geoCubo.faces[7].color = colorG;
			geoCubo.faces[8].color = colorB;
			geoCubo.faces[9].color = colorR;
			geoCubo.faces[10].color = colorG;
			geoCubo.faces[11].color = colorB;*/
	
			var matCubo = new THREE.MeshStandardMaterial({color:'0xD3C6C6' });
			var Cubo = new THREE.Mesh(geoCubo,matCubo);
			Cubo.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5,-0.5,0-0.5));
	
	
			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(0,0,0));
			var matPunto = new THREE.PointsMaterial( {color:0xffffff } );
			origen = new THREE.Points(geoPunto,matPunto);
			origen.add(Cubo);
			scene.add(origen);
			
			var TransformacionesCubo = { //Se crea un objeto
			R_X : 0,
			R_Y : 0,
			R_Z : 0,
			Esc: 1,
			};

			function TransCubo() {
				anguloX = THREE.Math.degToRad(TransformacionesCubo.R_X);
				anguloY = THREE.Math.degToRad(TransformacionesCubo.R_Y);
				anguloZ = THREE.Math.degToRad(TransformacionesCubo.R_Z);
				sc  = TransformacionesCubo.Esc;
			}

			var gui = new dat.GUI();
			var rotar = gui.addFolder("Rotar");
			var escalar = gui.addFolder("Escalar");
	
				rotar.add(TransformacionesCubo, 'R_X', -90, 90).step(0.1).name('Rotar en X').onChange(TransCubo);
				rotar.add(TransformacionesCubo, 'R_Y', -90, 90).step(0.1).name('Rotar en Y').onChange(TransCubo);
				rotar.add(TransformacionesCubo, 'R_Z', -90, 90).step(0.1).name('Rotar en Z').onChange(TransCubo);	
				escalar.add(TransformacionesCubo, 'Esc',-5,5).step(0.1).onChange(TransCubo);
	}
	

function render_cubo(){
	  origen.scale.x = sc;
	  origen.scale.y = sc;
	  origen.scale.z = sc;
	  var Rota = new THREE.Euler(anguloX, anguloY, anguloZ, 'XYZ');
	  origen.setRotationFromEuler(Rota);
}
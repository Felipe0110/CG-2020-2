var aX = 0,aY = 0,aZ = 0,s = 1, centro, toroide;

function toroide(){
	
	var Creacion_Toroide = function(rMayor,rMenor, resolucion){
		scene.remove(centro);
		var geoToroide = new THREE.Geometry();
		var contadorDePuntos=0;
		
		for (var i = 0; i <2 * Math.PI; i += resolucion) {
			contadorDePuntos++;
		}
	//Puntos del toroide
		for (var j = 0; j < 3 * Math.PI; j+= resolucion) {
			for (var i = 0; i < 2 * Math.PI; i += resolucion) {

			var punto3 = new THREE.Vector3();
			punto3.z = (rMenor * Math.sin(i));
			punto3.y = (rMayor + rMenor * Math.cos(i)) * Math.sin(j);  
			punto3.x = (rMayor + rMenor * Math.cos(i)) * Math.cos(j);           
			geoToroide.vertices.push(punto3);
				
			}
		}
		
	//Malla del toroide
		for (var i = 0; i < geoToroide.vertices.length; i++) {
			if (i + contadorDePuntos < geoToroide.vertices.length-1){
				geoToroide.faces.push(new THREE.Face3(i, i + contadorDePuntos, i+1));
				geoToroide.faces.push(new THREE.Face3(i + 1, i + contadorDePuntos, i + contadorDePuntos+1));
			}
		}
			var matToroide = new THREE.MeshBasicMaterial({ color: 'blue', vertexColors: THREE.FaceColors });
            toroide = new THREE.Mesh(geoToroide,matToroide);
			
			//Se crea un pivote para el toroide
			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(0,0,0));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			centro = new THREE.Points(geoPunto,matPunto);
			centro.add(toroide);
			scene.add(centro);
	}
	
	var TransformacionesToroide = { //Se crea un objeto
	Rotar_X : 0,
	Rotar_Y : 0,
	Rotar_Z : 0,
	Escalar : 1,
	RadioMayor:1,
	RadioMenor:1,
	Res: 0.1
	};
	
	function Tranformaciones() {
    	aX = THREE.Math.degToRad(TransformacionesToroide.Rotar_X);
		aY = THREE.Math.degToRad(TransformacionesToroide.Rotar_Y);
		aZ = THREE.Math.degToRad(TransformacionesToroide.Rotar_Z);
		s  = TransformacionesToroide.Escalar;
		//if(TransformacionesToroide.RadioMayor>TransformacionesToroide.RadioMenor){
		Creacion_Toroide(TransformacionesToroide.RadioMayor,TransformacionesToroide.RadioMenor,TransformacionesToroide.Res);
		//}
    }
	
	var gui = new dat.GUI();
	var rotar = gui.addFolder("Rotar");
	var escalar = gui.addFolder("Escalar");
		
		gui.add(TransformacionesToroide,'RadioMayor',0,5).step(0.1).name('Radio Exterior').onChange(Tranformaciones);
		gui.add(TransformacionesToroide,'RadioMenor',1,4).step(0.1).name('Radio Interior').onChange(Tranformaciones);
		gui.add(TransformacionesToroide,'Res',0.1,0.5).step(0.1).name('Resolucion').onChange(Tranformaciones);
		rotar.add(TransformacionesToroide, 'Rotar_X', -90, 90).step(0.1).name('Rotar en X').onChange(Tranformaciones);
		rotar.add(TransformacionesToroide, 'Rotar_Y', -90, 90).step(0.1).name('Rotar en Y').onChange(Tranformaciones);
		rotar.add(TransformacionesToroide, 'Rotar_Z', -90, 90).step(0.1).name('Rotar en Z').onChange(Tranformaciones);	
		escalar.add(TransformacionesToroide, 'Escalar',-5,5).step(0.1).onChange(Tranformaciones);
		Creacion_Toroide();
		
	
}
  function render_Toroide(){
	  centro.scale.x = s;
	  centro.scale.y = s;
	  centro.scale.z = s;
	  var Rotacion = new THREE.Euler(aX, aY, aZ, 'XYZ');
	  centro.setRotationFromEuler(Rotacion);
	 
    }
var alto = 1,ancho = 1 ,profundo = 1;
var Letra, origen;
function letras(){
	
			var loader = new THREE.FontLoader();
			var font = loader.parse(fontJSON);
			var geometry = new THREE.TextGeometry("VISUALIZADOR DE PRIMITIVAS", {
			font: font, 
			size: 0.4,
			height: 0.4,
			});  

			var material = new THREE.MeshLambertMaterial({color: 0xffffff});
			Letra = new THREE.Mesh(geometry, material);
			
			var geoPunto = new THREE.Geometry();
			geoPunto.vertices.push(new THREE.Vector3(0,0,0));
			var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
			origen = new THREE.Points(geoPunto,matPunto);
			
			var  Transformaciones = {
                Alto: 1,
				Ancho: 1, 
                Profundo: 1
            };

            var TamanosLetras = function () {
			alto = Transformaciones.Alto;
			ancho = Transformaciones.Ancho;
			profundo = Transformaciones.Profundo;
			}
	
            var gui = new dat.GUI();	
			gui.add(Transformaciones,"Alto",-10,10,.01).onChange(TamanosLetras);
			gui.add(Transformaciones,"Ancho",-1,1,.01).onChange(TamanosLetras);
			gui.add(Transformaciones,"Profundo",-10,10,.01).onChange(TamanosLetras);
			
			
			Letra.applyMatrix(new THREE.Matrix4().makeTranslation(-4,0,0));
			origen.add(Letra);
			scene.add(origen)
			
}
function render_letras(){
	origen.scale.x = ancho;
	origen.scale.y = alto;
	origen.scale.z = profundo;
}
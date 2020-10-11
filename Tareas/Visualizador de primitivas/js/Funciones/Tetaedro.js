var triangulo2;
var pradio = 0;
var cube;
function Tetahedro(){
    
     var geoTriangulo = new THREE.Geometry();
           	var v0 = new THREE.Vector3( 2, 0, -2);
			var v1 = new THREE.Vector3( -2,0, -2);
			var v2 = new THREE.Vector3(0,0, 2);
            var v3 = new THREE.Vector3(0,2,0);
            
			geoTriangulo.vertices.push( v0 );
			geoTriangulo.vertices.push( v1 );
			geoTriangulo.vertices.push( v2 );
           geoTriangulo.vertices.push( v3 );
	
			geoTriangulo.faces.push( new THREE.Face3(0,1,2) );
            geoTriangulo.faces.push( new THREE.Face3(2,1,3) );
            geoTriangulo.faces.push( new THREE.Face3(1,0,3) );
            geoTriangulo.faces.push( new THREE.Face3(0,2,3) );
			geoTriangulo.computeFaceNormals();
		
            var matPlano = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } );
		     triangulo2=  new THREE.Mesh( geoTriangulo, matPlano);   
    
            var geometry = new THREE.BoxGeometry( 0.15, 0.15, 0.15 );
            var material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF } );
            cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
    
            cube.add(triangulo2);
                var Radio = {
                   radio: 2 ,    
                };
                var  Esacala = function () {
                    pradio = Radio.radio;
                    render_TETRA();
                };
             var gui = new dat.GUI();
              gui.add(Radio, "radio", 0, 10, .1).onChange(Esacala);
              gui.add(cube.rotation, "x", -10, 10, .1);
              gui.add(cube.rotation, "y", -10, 10, .1);
               gui.add(cube.rotation, "z", -10, 10, .1);
              Esacala();
            geoTriangulo.computeFaceNormals();             
          
            
           return  geoTriangulo;
     
} 
function render_TETRA(){
            triangulo2.scale.x = pradio;
            triangulo2.scale.y = pradio;
            triangulo2.scale.z = pradio; 
			renderer.render( scene, camera );
		}


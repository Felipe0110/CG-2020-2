var triangulo 
var triangulo2
var pradio= 0;
var anguloX =0 ; 
var anguloY =0 ;
var anguloZ= 0;
function octahedro(){
    
            var geoTriangulo = new THREE.Geometry();
		
			var v0 = new THREE.Vector3( 1, 0, 1);
			var v1 = new THREE.Vector3( -1,0, 1);
			var v2 = new THREE.Vector3(-1,0, -1);
            var v3 = new THREE.Vector3(1,0, -1);
            var v4 = new THREE.Vector3(0,2,0 );
            var v5 = new THREE.Vector3(0,-2,0 );
            
			geoTriangulo.vertices.push( v0 );
			geoTriangulo.vertices.push( v1 );
			geoTriangulo.vertices.push( v2 );
            geoTriangulo.vertices.push( v3 );
            geoTriangulo.vertices.push( v4 );
	        geoTriangulo.vertices.push( v5 );
			geoTriangulo.faces.push( new THREE.Face3(0,1,2) );
			geoTriangulo.computeFaceNormals();
		
            var matPlano = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } );
			
			triangulo = new THREE.Mesh( geoTriangulo, matPlano ); 
            geoTriangulo.faces.push( new THREE.Face3(0,4,1));
            geoTriangulo.faces.push( new THREE.Face3(1,4,2));
            geoTriangulo.faces.push( new THREE.Face3(2,4,3));
            geoTriangulo.faces.push( new THREE.Face3(3,4,0));
            geoTriangulo.faces.push( new THREE.Face3(0,1,2));
            geoTriangulo.faces.push( new THREE.Face3(0,2,3));
            geoTriangulo.faces.push( new THREE.Face3(0,5,1));
            geoTriangulo.faces.push( new THREE.Face3(1,5,2));
            geoTriangulo.faces.push( new THREE.Face3(2,5,3));
            geoTriangulo.faces.push( new THREE.Face3(3,5,0));
            
            geoTriangulo.computeFaceNormals();
            
 var Radio = {
                   radio: 1 ,
                   theta1: 0 ,
                   theta2: 0 ,
                   theta3: 0 
                };
                var  Esacala = function () {
                    pradio = Radio.radio;
                    anguloX= THREE.Math.degToRad(Radio.theta1);
                    anguloY= THREE.Math.degToRad(Radio.theta2);
                    anguloZ= THREE.Math.degToRad(Radio.theta3);
                    render_Octa();
                };
             var gui = new dat.GUI();
              gui.add(Radio, "radio", 0, 10, .1).onChange(Esacala);
              gui.add(Radio, "theta1", -360, 360, .1).onChange(Esacala);
              gui.add(Radio, "theta2", -360, 360, .1).onChange(Esacala);
              gui.add(Radio, "theta3", -360, 360, .1).onChange(Esacala);
              Esacala();
    
         
              
            triangulo.rotateZ (Math.PI);
            triangulo.rotateY (-Math.PI/2);
           
		  	scene.add( triangulo );
            
  
      return triangulo;
    
    
} 
function render_Octa(){
            triangulo.scale.x = pradio;
            triangulo.scale.y = pradio;
            triangulo.scale.z = pradio;
            triangulo.rotation.x = anguloX ;
            triangulo.rotation.y = anguloY;
            triangulo.rotation.z = anguloZ;
			renderer.render( scene, camera );
		}


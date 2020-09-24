function Fondo(){

    //INICIALIZACIÓN
    scene = new THREE.Scene();
    aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    //ELEMENTOS COMUNES            
			var size = 40;
			var arrowSize = 1;
			var divisions = size;
			var origin = new THREE.Vector3( 0, 0, 0 );
			var x = new THREE.Vector3( 1, 0, 0 );
			var y = new THREE.Vector3( 0, 1, 0 );
		  	var z = new THREE.Vector3( 0, 0, 1 );
		  	var color = new THREE.Color( 0x333333 );
		  	var colorR = new THREE.Color( 0xAA3333 );
		  	var colorG = new THREE.Color( 0x33AA33 );
            var colorB = new THREE.Color( 0x333366 );
            //CREAR LAS FLECHAS QUE INDICAN LOS EJES DE COORDENADAS 3D
              var arrowX = new THREE.ArrowHelper(x, origin, arrowSize, colorR);
              var arrowY = new THREE.ArrowHelper(y, origin, arrowSize, colorG);
              var arrowZ = new THREE.ArrowHelper(z, origin, arrowSize, colorB);			
		  	//CREAR LAS GRILLAS PARA EL ESCENARIO
		  	var axesHelper = new THREE.AxesHelper( size );
			scene.add( axesHelper );
			
		  	var gridHelperXZ = new THREE.GridHelper( size, divisions, color, color );
            scene.add( gridHelperXZ );
             // Mostrar flechas			
             scene.add(arrowX);
             scene.add(arrowY);
             scene.add(arrowZ);
            
            //ROTARLAS PARA QUE QUEDEN EN EL ESPACIO ADECUADO
            gridHelperXZ.rotateOnWorldAxis ( y, THREE.Math.degToRad(90) );

			camera.position.x = 10;
			camera.position.y = 30;
		  camera.position.z = 5;
			camera.lookAt( origin );
}

function Luz(){
  //CREAR ILUMINACIÓN
   var ambient = new THREE.AmbientLight( 0xffffff, 2 );
   scene.add( ambient );

  // var pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
  // pointLight.position.set( -5, -2, 5 );
  // scene.add( pointLight );

  // var pointLight = new THREE.PointLight( 0xffffff, .5, 100 );
  // pointLight.position.set( 5, -2, -5 );
  // scene.add( pointLight );
// Creación de Escenario
}
function fondo(){
   
  scene = new THREE.Scene();
  aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

   
  var size = 10;
  var arrowSize = 1;
  var divisions = size;
  var origin = new THREE.Vector3( 0, 0, 0 );
  var x = new THREE.Vector3( 1, 0, 0 );
  var y = new THREE.Vector3( 0, 1, 0 );
  var z = new THREE.Vector3( 0, 0, 1 );
  var color1 = new THREE.Color( 0xFFFFFF );
  var color2 = new THREE.Color( 0x333333 );
  var colorR = new THREE.Color( 0xAA3333 );
  var colorG = new THREE.Color( 0x33AA33 );
  var colorB = new THREE.Color( 0x333366 );

  var light = new THREE.DirectionalLight(0x33AA33);
            light.position.set(1, 0, 1);
            scene.add(light);  
    //CREAR LAS GRILLAS PARA EL ESCENARIO
    var axesHelper = new THREE.AxesHelper(size);
            var gridHelperXY = new THREE.GridHelper(size, divisions, color1, color1);
            var gridHelperXZ = new THREE.GridHelper(size, divisions, color2, color2);
            var gridHelperYZ = new THREE.GridHelper(size, divisions, color2, color2);
   
//ROTARLAS PARA QUE QUEDEN EN EL ESPACIO ADECUADO  
  gridHelperXY.rotateOnWorldAxis ( x, THREE.Math.degToRad(90) );
  gridHelperXZ.rotateOnWorldAxis ( y, THREE.Math.degToRad(90) );
  gridHelperYZ.rotateOnWorldAxis ( z, THREE.Math.degToRad(90) );
    
//CREAR LAS FLECHAS ORIGEN COLA
   var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
   var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
   var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

//AGREGAR A LA ESCENA
//scene.add( gridHelperXY );
    scene.add( gridHelperXZ );
    scene.add( arrowX); 
    scene.add( arrowY );  
    scene.add( arrowZ );  

    camera.position.x = 0;
    camera.position.y = 2 ;   
    camera.position.z =  10;    
    camera.lookAt( origin );
}

function render() {
  //camera.position.x+=1;
  renderer.render(scene, camera);
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
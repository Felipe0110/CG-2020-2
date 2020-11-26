var cam_1 = true, cam_2 = false,cam_3 = false;
var camera,camera2,camera3;
var controls,clock;
var cont = 1; 
var posicionX = 0, posicionZ = 0;
let rectLight, rectLightHelper;

var views = [
				{//Camara 1
					left:0,
					bottom: 0,
					width: 1,
					height: 1,
					//background: 0x74F1D3,
					eye: [ 0, 20, 0],
					up: [ 0, 1, 0 ],
					fov: 60,
					updateCamera: function ( camera, scene ) {
					}
				},
				{//Camara 2
					left: 0,
					bottom: 0,
					width: 1,
					height: 1,
					//background:  0xFFFFFF,
					eye: [ 0, 20, 0 ],
					up: [ 0,1, 0 ],
					fov: 60,
					updateCamera: function ( camera2, scene ) {
					camera2.position.y =  3;
					camera2.position.z = -7;
					camera2.lookAt( centro.position );
					}
				},
				{//Camara 3
					left: 0,
					bottom: 0,
					width:1,
					height:1,
					//background:0x189F02,
					eye: [ 0, 20, 0],
					up: [ 0, 1, 0 ],
					fov: 85,
					updateCamera: function ( camera3, scene) {
					camera3.position.y =  -2;
					camera3.position.z =  5;
					camera3.lookAt( centro.position );
					}
				}
			];

function fondo(){
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

   
	  scene = new THREE.Scene();
	  aspect = window.innerWidth / window.innerHeight;
	  scene.fog = new THREE.Fog(0xFFFFFF,20 , 40);
	  camera = new THREE.PerspectiveCamera( 45, aspect, 0.1, 1000);
	  camera2 = new THREE.PerspectiveCamera( 45, aspect, 0.1, 1000);
	  camara3 = new THREE.PerspectiveCamera( 45, aspect, 0.1, 1000);
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  renderer.shadowMap.enabled = true;
	  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	  document.body.appendChild(renderer.domElement);
	  scene.background = new THREE.Color( 0xFFFFFF );
	


		var view = views[0];
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.fromArray( view.eye );
		camera.up.fromArray( view.up );
		view.camera = camera;
		

		clock = new THREE.Clock();
		controls = new THREE.FirstPersonControls(camera);
		controls.movementSpeed = 5;
		controls.lookSpeed = 0.3;
	
		var view = views[ 1 ];
		camera2 = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
		camera2.position.fromArray( view.eye );
		camera2.up.fromArray( view.up );
		view.camera2 = camera2;

		var view = views[ 2 ];
		camera3 = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
		camera3.position.fromArray( view.eye );
		camera3.up.fromArray( view.up );
		view.camera3 = camera3;
			
		var axesHelper = new THREE.AxesHelper(size);
        var gridHelperXY = new THREE.GridHelper(size, divisions, color1, color1);
        var gridHelperXZ = new THREE.GridHelper(size, divisions, color2, color2);
        var gridHelperYZ = new THREE.GridHelper(size, divisions, color2, color2);
   
	var onKeyDown = function ( event ) {
				switch ( event.keyCode ) {
					case 67: 
						if(cont == 0){
						//console.log("camara 1");
						cam_1 = true;
						cam_2 = false;
						cam_3 = false;
						console.log(cont);
						cont++;
						}
						else{
							if(cont == 1){
								//console.log("camara 2");
								cam_1 = false;
								cam_2 = true;
								cam_3 = false;
								cont++;
							}
							else{
								if(cont == 2){
								//console.log("camara 3");
								cam_1 = false;
								cam_2 = false;
								cam_3 = true;
								cont = 0;
							}
						}
					}
				}
			};	  	
			
	document.addEventListener( 'keydown', onKeyDown, false );
   
   var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
   var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
   var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

    scene.add( arrowX); 
    scene.add( arrowY );  
    scene.add( arrowZ ); 
	
}

function updateSize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  renderer.setSize( windowWidth, windowHeight );
}

function render_Camera(){
	updateSize();
	 
	if(cam_1){
	
	var view = views[ 0 ];
	var camera = view.camera;
	view.updateCamera( camera, scene );

	var left = Math.floor( windowWidth * view.left );
	var bottom = Math.floor( windowHeight * view.bottom );
	var width = Math.floor( windowWidth * view.width );
	var height = Math.floor( windowHeight * view.height );

	renderer.setViewport( left, bottom, width, height );
	renderer.setScissor( left, bottom, width, height );
	renderer.setScissorTest( true );
	renderer.setClearColor( view.background );

	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.render( scene, camera );
	posicionX = camera.position.x;
	posicionZ = camera.position.z;
	scene.remove(centro);
	controls.update(clock.getDelta());
	}
	
	if(cam_2){
	var view = views[ 1 ];
	var camera2 = view.camera2;

	view.updateCamera( camera2, scene );

	var left = Math.floor( windowWidth * view.left );
	var bottom = Math.floor( windowHeight * view.bottom );
	var width = Math.floor( windowWidth * view.width );
	var height = Math.floor( windowHeight * view.height );

	renderer.setViewport( left, bottom, width, height );
	renderer.setScissor( left, bottom, width, height );
	renderer.setScissorTest( true );
	renderer.setClearColor( view.background );

	camera2.aspect = width / height;
	camera2.updateProjectionMatrix();
	renderer.render( scene, camera2 );
	}
	
	if(cam_3){
	var view = views[ 2 ];
	var camera3 = view.camera3;

	view.updateCamera( camera3, scene );

	var left = Math.floor( windowWidth * view.left );
	var bottom = Math.floor( windowHeight * view.bottom );
	var width = Math.floor( windowWidth * view.width );
	var height = Math.floor( windowHeight * view.height );

	renderer.setViewport( left, bottom, width, height );
	renderer.setScissor( left, bottom, width, height );
	renderer.setScissorTest( true );
	renderer.setClearColor( view.background );

	camera3.aspect = width / height;
	camera3.updateProjectionMatrix();
	
	renderer.render( scene, camera3 );
	}
	
	


}
function Luz(){
  var ambient = new THREE.AmbientLight( 0xFFFFFF, 0.2 );
   scene.add( ambient );
	
rectLight = new THREE.RectAreaLight( 0xFFD55B, 1, 100, 100 );
rectLight.position.set( 0, 80, 0 );
//scene.add( rectLight );
	
dia = new THREE.SpotLight( 0xFFFFFF,0.5 );
dia.position.set( 0, 1000, -200);
scene.add(dia);
}

var scene, aspect, camera, renderer,controls;
var raycaster2;

var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();
var vertex = new THREE.Vector3();
var color = new THREE.Color();

function camaras(){
	scene = new THREE.Scene();
	aspect = window.innerWidth / window.innerHeight;
	scene.fog = new THREE.Fog(0xffffff, 10, 50);
	scene.background = new THREE.Color( 0xFFFFFF );
	camera = new THREE.PerspectiveCamera( 45, aspect, 0.1, 1000);
	camera.position.y =0;
	var ambient = new THREE.AmbientLight( 0xffffff, 1 );
   scene.add( ambient );
	
	
	controls = new THREE.PointerLockControls(camera, document.body);

			var blocker = document.getElementById('blocker');
			var instructions = document.getElementById('instructions');

			instructions.addEventListener('click', function () {

				controls.lock();

			}, false);

			controls.addEventListener('lock', function () {

				instructions.style.display = 'none';
				blocker.style.display = 'none';

			});

			controls.addEventListener('unlock', function () {

				blocker.style.display = 'block';
				instructions.style.display = '';

			});

			scene.add(controls.getObject());
	
		/*var controls = new THREE.PointerLockControls(camera, document.body);
		document.body.addEventListener("click", function(){
			controls.lock();
		});
		controls.addEventListener("lock", function(){

		});
		controls.addEventListener("unlock", function(){

		});
		scene.add(controls.getObject());*/


			var onKeyDown = function (event) {

				switch (event.keyCode) {

					case 38: // up
					case 87: // w
						moveForward = true;
						break;

					case 37: // left
					case 65: // a
						moveLeft = true;
						break;

					case 40: // down
					case 83: // s
						moveBackward = true;
						break;

					case 39: // right
					case 68: // d
						moveRight = true;
						break;

					case 32: // space
						if (canJump === true) velocity.y += 350;
						canJump = false;
						break;

				}

			};

			var onKeyUp = function (event) {

				switch (event.keyCode) {

					case 38: // up
					case 87: // w
						moveForward = false;
						break;

					case 37: // left
					case 65: // a
						moveLeft = false;
						break;

					case 40: // down
					case 83: // s
						moveBackward = false;
						break;

					case 39: // right
					case 68: // d
						moveRight = false;
						break;

				}

			};

			document.addEventListener('keydown', onKeyDown, false);
			document.addEventListener('keyup', onKeyUp, false);

			raycaster2 = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 10);


			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			//

			window.addEventListener('resize', onWindowResize, false);

		}

		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);

		}
	function render_primerapersona(){
		var time = performance.now();

			if (controls.isLocked == true) {

				raycaster2.ray.origin.copy(controls.getObject().position);
				raycaster2.ray.origin.y -= 10;

				var intersections = raycaster2.intersectObjects(objects);

				var onObject = intersections.length > 0;

				var delta = (time - prevTime) / 1000;

				velocity.x -= velocity.x * 10.0 * delta;
				velocity.z -= velocity.z * 10.0 * delta;

				velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

				direction.z = Number(moveForward) - Number(moveBackward);
				direction.x = Number(moveRight) - Number(moveLeft);
				direction.normalize(); // this ensures consistent movements in all directions

				if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
				if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

				if (onObject === true) {

					velocity.y = Math.max(0, velocity.y);
					canJump = true;

				}

				controls.moveRight(- velocity.x * delta);
				controls.moveForward(- velocity.z * delta);

				controls.getObject().position.y += (velocity.y * delta); // new behavior

				if (controls.getObject().position.y < 10) {

					velocity.y = 0;
					controls.getObject().position.y = 10;

					canJump = true;

				}

			}

			prevTime = time;

			renderer.render(scene, camera);
}

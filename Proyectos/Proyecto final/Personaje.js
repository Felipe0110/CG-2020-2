function Personaje(){
	var geoPunto = new THREE.Geometry();
	geoPunto.vertices.push(new THREE.Vector3(8,0,0));
	var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
	var centro = new THREE.Points(geoPunto,matPunto);
	centro.add(cam_1);
	centro.add(cam_2);
	centro.add(cam_3);
	scene.add(centro);
}
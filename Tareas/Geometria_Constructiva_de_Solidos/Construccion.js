function objeto(){
	//Material objeto
var material = new THREE.MeshStandardMaterial( { color: 0xFF0000, metalness: 0.5, roughness: 0.2 });
var material2 = new THREE.MeshStandardMaterial( { color: 0x008FFF, metalness: 0.5, roughness: 0.2 } );
	
var geoCilindro = new THREE.CylinderGeometry( 2, 2, 3, 32 );
var cilindroExt = new THREE.Mesh( geoCilindro, material );
	
var geoCilindro = new THREE.CylinderGeometry( 1.8, 1.8, 4, 32 );
var cilindroInt = new THREE.Mesh( geoCilindro, material2 );

var CilindroIntCSG = THREE.CSG.fromMesh( cilindroInt );
var CilindroExtCSG = THREE.CSG.fromMesh( cilindroExt );

var result = CilindroExtCSG.subtract( CilindroIntCSG );	

cilindroExt = THREE.CSG.toMesh( result );
cilindroExt.material = material;

//scene.add( cilindroExt );

var geoBaseExt = new THREE.CylinderGeometry( 2, 1.5, 1.5, 35 );
var BaseExt = new THREE.Mesh( geoBaseExt, material2 );
BaseExt.applyMatrix(new THREE.Matrix4().makeTranslation(0,-2.25,0));
	
var geoBaseInt = new THREE.CylinderGeometry( 1.8, 1.3, 2, 32 );
var BaseInt = new THREE.Mesh( geoBaseInt, material );
BaseInt.applyMatrix(new THREE.Matrix4().makeTranslation(0,-1.8,0));

var BaseExtCSG = THREE.CSG.fromMesh( BaseExt );
var BaseIntCSG = THREE.CSG.fromMesh( BaseInt );

var SubBase = BaseExtCSG.subtract(BaseIntCSG);
	
BaseExt = THREE.CSG.toMesh( SubBase);
BaseExt.material = material2;
//scene.add(BaseExt);


var geoToroide = new THREE.TorusGeometry(  1, 0.3, 16, 60,Math.PI);
var Mango = new THREE.Mesh( geoToroide, material2 );



Mango.applyMatrix(new THREE.Matrix4().makeTranslation(1.9,0,0));
var RotacionMango = new THREE.Euler(0,0,-1.55, 'XYZ');
Mango.setRotationFromEuler(RotacionMango);

//scene.add( Mango );

	var geoPunto = new THREE.Geometry();
	geoPunto.vertices.push(new THREE.Vector3(0,0,0));
	var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
	var centro = new THREE.Points(geoPunto,matPunto);
	centro.applyMatrix(new THREE.Matrix4().makeTranslation(0.7,3,-2.2));
	centro.rotation.y = 0.5;
	centro.add(cilindroExt);
	centro.add(BaseExt);
	centro.add(Mango);
	scene.add(centro);

} 
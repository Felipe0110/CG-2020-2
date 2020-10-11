function CuboPrimitivo(){
//var geometry = new THREE.BoxGeometry(1,1,1,1);
var geometry = new THREE.BoxBufferGeometry(1,1,1,1);
var material = new THREE.MeshBasicMaterial({Color:0x00ff00});
var Cubo     = new THREE.Mesh(geometry,material);
Cubo.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
scene.add(Cubo);
/*
    THREE.Math.degToRad(0) -- Se utiliza para conversión de radianes a grados   
    //(x,y,z, Angulo)      
    Gradas(-14.9,0.23,14.5,THREE.Math.degToRad(180));
*/
}
function Cono(){
    //var geometry = new THREE.ConeGeometry( 5, 20, 32 );
    var geometry = new THREE.ConeBufferGeometry( 5, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cone = new THREE.Mesh( geometry, material );
    cone.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
    scene.add( cone );

}
function Cilindro (){
    //var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    var geometry = new THREE.CylinderBufferGeometry( 5, 5, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
    scene.add( cylinder );

}
function Code(){
    var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    //line.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
scene.add( line );
}

function EsferaGeo(){
    //var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
    scene.add( sphere );

}
function ToroideRosca(){
    //var geometry = new THREE.TorusBufferGeometry( 10, 3, 16, 100 );
    var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var torus = new THREE.Mesh( geometry, material );
    torus.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
    scene.add( torus );
}
function notas(){
// para crear geometrias se llaman de la siguiente manera, tener en cuenta que "cuello" es la variable que nombramos, "Cilindro(0.2,0.2,10)" es la funcion que estamos llamando  y "mateHumero" es el material que creamos

    var  cuello = new THREE.Line(Cilindro(0.2,0.2,10), mateHumero);

//  se maneja la herecia de cualquier estructura 
    cadera.add(tronco);
    tronco.add(cuello);
    cuello.add(cabeza);
}


function sera(ex, In, r, x1,y2,z3, colur){   
    geometry = new THREE.TorusBufferGeometry( In, 0.5, ex, 100,Math.PI);
//     var materialUno = new THREE.MeshBasicMaterial({color:colur});//Morado
//    var material = new THREE.MeshBasicMaterial( { color:  0xFFD100}) ;
//    var material = new THREE.MeshPhongMaterial();
//    var torus = new THREE.Mesh( geometry, materialUno );  
//    torus.applyMatrix(new THREE.Matrix4().makeTranslation(x1,y2,z3));  
//     torus.rotation.y = r; 
    
//------------------------------------------------------------------
 var textureLoader = new THREE.TextureLoader();
 Pared = textureLoader.load("Imagenes/Uno.jpg");
 var matPared = new THREE.MeshPhongMaterial( {color: 0xccd1ce,map: Pared, side: THREE.DoubleSide} );

//  //Pared 1
 
   var torus = new THREE.Mesh(geometry, matPared ); 
   torus.applyMatrix(new THREE.Matrix4().makeTranslation(x1,y2,z3));  
     torus.rotation.y = r; 
   
   scene.add(torus);
}

function Gradas(x,y,z, Angulo){
//geometry.parameters; // {width: 1, height: 1, depth: 1, widthSegments: undefined, heightSegments: undefined, depthSegments: undefined}
var geometry = new THREE.BoxBufferGeometry(0.5,0.5,1,);
var material = new THREE.MeshBasicMaterial({color: 0x097D09});// Verde
var materialUno = new THREE.MeshBasicMaterial({color: 0x6F097D});//Morado
var materialdos = new THREE.MeshBasicMaterial({color: 0xFFD100});//Amarillo 
var materialTres = new THREE.MeshBasicMaterial({color: 0xA70909});//ROJÓ 

var cubo = new THREE.Mesh(geometry, material);
var cuboUno = new THREE.Mesh(geometry, materialUno);
var cuboDos = new THREE.Mesh(geometry, materialdos);
var cuboTres = new THREE.Mesh(geometry, materialTres);


cuboUno.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,1));
cuboDos.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,1));
cuboTres.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,1));
cubo.applyMatrix(new THREE.Matrix4().makeTranslation(x,y,z));

cubo.rotation.y = Angulo;

cubo.add(cuboUno);
cuboUno.add(cuboDos);
cuboDos.add(cuboTres);

scene.add(cubo);

}

function Tierra(){
//FONDO            
var plane5geometry = new THREE.PlaneGeometry( 40,40 , 26,0 );
var material5 = new THREE.MeshBasicMaterial( {color: 0x19A603 , side: THREE.DoubleSide} );
var plane5 = new THREE.Mesh( plane5geometry, material5 );
plane5.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.1,0));            
plane5.rotateX(Math.PI/2)
scene.add( plane5 );

var geometry = new THREE.PlaneGeometry( 30, 2, 26,0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,17));
plane.rotateX(Math.PI/2);
scene.add( plane );

var geometry = new THREE.RingGeometry( 3,1,14,1, 0, Math.PI/2 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var mesh = new THREE.Mesh( geometry, material ); 
mesh.applyMatrix(new THREE.Matrix4().makeTranslation(15,0,15));
mesh.rotateX(Math.PI/2);
scene.add( mesh );

var plano1geometry = new THREE.PlaneGeometry( 10, 2, 26,0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane1 = new THREE.Mesh( plano1geometry, material );
plane1.applyMatrix(new THREE.Matrix4().makeTranslation(14.2,0,10.3));
var eulerRot = new THREE.Euler(0,-45, 0, 'XYZ');
var eulerRot = new THREE.Euler(Math.PI/2,0, 45, 'XYZ');
plane1.setRotationFromEuler(eulerRot);
scene.add( plane1 );

var mesh1geometry = new THREE.RingGeometry( 3,1,14,1, 0, 0.4 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var mesh1 = new THREE.Mesh( mesh1geometry, material ); 
mesh1.applyMatrix(new THREE.Matrix4().makeTranslation(15,0,15.35));
mesh1.rotateX(Math.PI/2);
mesh1.rotateZ(-Math.PI/6);
scene.add( mesh1 );

var curva3geometry = new THREE.RingGeometry( 3,5,14,1, 0, Math.PI/4 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var curva3 = new THREE.Mesh( curva3geometry, material );
curva3.applyMatrix(new THREE.Matrix4().makeTranslation(15.1,0,4.2));
var eulerRot = new THREE.Euler(THREE.Math.degToRad(90),THREE.Math.degToRad(0), THREE.Math.degToRad(150), 'XYZ');
curva3.setRotationFromEuler(eulerRot);
scene.add( curva3 );

var plano2geometry = new THREE.PlaneGeometry( 19, 2, 26,0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane2 = new THREE.Mesh( plano2geometry, material );
plane2.applyMatrix(new THREE.Matrix4().makeTranslation(14.115,0,-5.8));
var eulerRot2 = new THREE.Euler(THREE.Math.degToRad(90),THREE.Math.degToRad(0), THREE.Math.degToRad(108), 'XYZ');
plane2.setRotationFromEuler(eulerRot2);
scene.add(plane2);

var curva4geometry = new THREE.RingGeometry( 3,1,14,1, 0, Math.PI/2 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var curva4 = new THREE.Mesh( curva4geometry, material ); 
curva4.applyMatrix(new THREE.Matrix4().makeTranslation(-15,0,15));
curva4.rotateX(Math.PI/2);
curva4.rotateY(Math.PI);            

scene.add( curva4 );

var plane3geometry = new THREE.PlaneGeometry( 30, 2, 26,0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane3 = new THREE.Mesh( plane3geometry, material );
plane3.applyMatrix(new THREE.Matrix4().makeTranslation(-17,0,0));
plane3.rotateY(Math.PI/2);
plane3.rotateX(Math.PI/2)
scene.add( plane3 );

 var curva5geometry = new THREE.RingGeometry( 3,1,14,1, 0, Math.PI/2 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var curva5 = new THREE.Mesh( curva5geometry, material ); 
curva5.applyMatrix(new THREE.Matrix4().makeTranslation(-15,0,-15));
curva5.rotateX(-Math.PI/2);
curva5.rotateY(Math.PI);            

scene.add( curva5 );

var plane4geometry = new THREE.PlaneGeometry( 30, 2, 26,0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane4 = new THREE.Mesh( plane4geometry, material );
plane4.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,-17));
plane4.rotateY(Math.PI);
plane4.rotateX(Math.PI/2);
scene.add( plane4 );

var curva6geometry = new THREE.RingGeometry( 3,1,14,1, 0, Math.PI/2 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var curva6 = new THREE.Mesh( curva6geometry, material ); 
curva6.applyMatrix(new THREE.Matrix4().makeTranslation(15,0,-15));
curva6.rotateX(-Math.PI/2);          

scene.add( curva6 );

var curva7geometry = new THREE.RingGeometry( 3,1,14,1, 0,Math.PI/8 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var curva7 = new THREE.Mesh( curva7geometry, material ); 
curva7.applyMatrix(new THREE.Matrix4().makeTranslation(15,0,-15));
curva7.rotateX(Math.PI/2);         

scene.add( curva7 );

}

function GradasFinales(){
//THREE.Math.degToRad(0) -- Se utiliza para conversión de radianes a grados   
    //(x,y,z, Angulo)      
    Gradas(-14.9,0.23,14.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,11.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,7.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,3.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,-0.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,-3.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,-7.5,THREE.Math.degToRad(180));
    Gradas(-14.9,0.23,-11.5,THREE.Math.degToRad(180));
//(ex, In, r, x1,y2,z3, 0x6F097D)
sera(3,2.6,THREE.Math.degToRad(0),-16.9,0,0, 0xA70909);
sera(3,2,THREE.Math.degToRad(45),-16.6,0,16.8, 0x6F097D);
    //(x,y,z, Angulo)
    Gradas(-18.9,0.23,18,THREE.Math.degToRad(180));
    Gradas(-18.9,0.23,13,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,9,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,5,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,1,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,-3,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,-7,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,-11,THREE.Math.degToRad(0));
    Gradas(-18.9,0.23,-15,THREE.Math.degToRad(0));
    //(x,y,z, Angulo)

sera(3,2,THREE.Math.degToRad(90),-15,0,17.5, 0x6F097D);

    Gradas(-14,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(-10,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(-6,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(-2,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(2,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(6,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(10,0.23,19.5,THREE.Math.degToRad(90));
    Gradas(14,0.23,19.5,THREE.Math.degToRad(90));
    
    Gradas(-14,0.23,14.5,THREE.Math.degToRad(90));
    Gradas(-10,0.23,14.5,THREE.Math.degToRad(90));
    Gradas(-6,0.23,14.5,THREE.Math.degToRad(90));
    Gradas(-2,0.23,14.5,THREE.Math.degToRad(90));
    Gradas(2,0.23,14.5,THREE.Math.degToRad(90));
    Gradas(6,0.23,14.5,THREE.Math.degToRad(90));
    Gradas(10,0.23,14.5,THREE.Math.degToRad(90));
sera(3.9,2.9,THREE.Math.degToRad(310),16,0,16.6, 0x6F097D);
    Gradas(18.6,0.23,17.9,THREE.Math.degToRad(-205));
sera(3.9,2.9,THREE.Math.degToRad(180),16.8,0,14, 0x6F097D);
    Gradas(13,0.23,13,THREE.Math.degToRad(210));
    Gradas(18.5,0.23,13,THREE.Math.degToRad(210));
    Gradas(11.1,0.23,9.7,THREE.Math.degToRad(210));
    Gradas(16.3,0.23,9.2,THREE.Math.degToRad(210));
    //Gradas(14.8,0.23,6.6,THREE.Math.degToRad(210));
sera(3.9,2.9,THREE.Math.degToRad(180),11,0,4.9, 0x6F097D);    
    Gradas(9,0.23,3,THREE.Math.degToRad(-200));
    Gradas(10.8,0.23,-2,THREE.Math.degToRad(-200));
    Gradas(12.4,0.23,-6.5,THREE.Math.degToRad(-200));
    Gradas(13.5,0.23,2.5,THREE.Math.degToRad(-200));
    Gradas(15.2,0.23,-2,THREE.Math.degToRad(-200));
    Gradas(16.8,0.23,-6.5,THREE.Math.degToRad(-200));
    Gradas(18.6,0.23,-11.5,THREE.Math.degToRad(-200));
    Gradas(14,0.23,-11,THREE.Math.degToRad(-200));
    Gradas(-13,0.23,-15,THREE.Math.degToRad(90));
    Gradas(-9,0.23,-15,THREE.Math.degToRad(90));
    Gradas(-5,0.23,-15,THREE.Math.degToRad(90));
    Gradas(-1,0.23,-15,THREE.Math.degToRad(90));
    Gradas(3,0.23,-15,THREE.Math.degToRad(90));
    Gradas(7,0.23,-15,THREE.Math.degToRad(90));
    Gradas(11,0.23,-15,THREE.Math.degToRad(90));

    Gradas(-18,0.23,-19,THREE.Math.degToRad(90));
    Gradas(-14,0.23,-19,THREE.Math.degToRad(90));
    Gradas(-10,0.23,-19,THREE.Math.degToRad(90));
    Gradas(-6,0.23,-19,THREE.Math.degToRad(90));
    Gradas(-2,0.23,-19,THREE.Math.degToRad(90));
    Gradas(2,0.23,-19,THREE.Math.degToRad(90));
    Gradas(6,0.23,-19,THREE.Math.degToRad(90));
    Gradas(10,0.23,-19,THREE.Math.degToRad(90));
    Gradas(14,0.23,-19,THREE.Math.degToRad(90));
    Gradas(19.6,0.23,-15.8,THREE.Math.degToRad(210));
sera(3.9,2.9,THREE.Math.degToRad(90),0,0,-17, 0x6F097D);   

}



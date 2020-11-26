function EsferaGeo(){
    //var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
    scene.add( sphere );

}
function esferaPuntos(x,y,z,radio){
    var geoEsfera = new THREE.Geometry();
    var resXY = 50.0;
    var resZ = 50.0;
    for( var i = 0; i < resZ; i++){
        for( var j = 0; j < resXY; j++){
            var punto = new THREE.Vector3();
            punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI )/ resZ) ;
            punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI )/ resZ) ;
            punto.z = radio * Math.cos( ( i * Math.PI )/resZ) ;
            geoEsfera.vertices.push( punto );     
		  
        }        
    } 
    var MaterialEsfera = new THREE.LineBasicMaterial({color: 0x29cfdb});
    var punesfera= new THREE.Points(geoEsfera,MaterialEsfera);
    punesfera.applyMatrix(new THREE.Matrix4().makeTranslation(x,y,z));
    
        //return punesfera;
        scene.add(punesfera);
}

var aX = 0,aY = 0,aZ = 0,s = 1, centro;
function EsferaMascara(){
//Triangulos Malla
    class TRIANGLE_FAN{	
        constructor( Geometria, Material ){
          this.geometria = Geometria;
          this.material = Material;
        }  
        draw(){			
          for( var i=2; i<this.geometria.vertices.length; i++ ){
            this.geometria.faces.push( new THREE.Face3(0,i-1,i) );
          }
          this.geometria.computeFaceNormals();
          var fan = new THREE.Mesh( this.geometria, this.material );
         scene.add( fan );
          return fan;
        }
  }
    
  class TRIANGLE_STRIP{	
        constructor( Geometria, Material ){
          this.geometria = Geometria;
          this.material = Material;	
        }  
        draw(){			
          for( var i=2; i<this.geometria.vertices.length; i++ ){
          if(i%2!=0)
            this.geometria.faces.push( new THREE.Face3(i-2,i-1,i) );
          else
            this.geometria.faces.push( new THREE.Face3(i-1,i-2,i) );
          }
          this.geometria.computeFaceNormals();
          
          var strip = new THREE.Mesh( this.geometria, this.material);
          scene.add( strip );
          return strip;
        }
      }
      var materialFan = new THREE.MeshStandardMaterial( { color: 0xffffff} );
// Geometria
var contadorDePuntos =0;
var geoEsfera = new THREE.Geometry();

var resXY = 50.0;
var resZ = 50.0;
var radio =2;
for(var j = 0; j< resXY; j++){
    contadorDePuntos ++;
}
for( var i = 0; i < resZ; i++){
    for( var j = 0; j < resXY; j++){
        var punto = new THREE.Vector3();
        punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( i);
        punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin(i);
        punto.z = radio * Math.cos(i) ;
        geoEsfera.vertices.push( punto);    
       
   var matPunto = new  THREE.MeshStandardMaterial( { color: 0xCCCCCC} );

    }        
} 
//

for (var i = 0; i < geoEsfera.vertices.length; i++) {
    if (i + contadorDePuntos < geoEsfera.vertices.length-1){
            geoEsfera.faces.push(new THREE.Face3(i, i + contadorDePuntos, i+1));
            geoEsfera.faces.push(new THREE.Face3(i + 1, i + contadorDePuntos, i + contadorDePuntos+1));
           
        }
    } 
    //! Punto
    //Se crea un pivote para el toroide
    var geoPunto = new THREE.Geometry();
    geoPunto.vertices.push(new THREE.Vector3(0,0,0));
    var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
    centro = new THREE.Points(geoPunto,matPunto);
//var MaterialEsfera = new THREE.MeshBasicMaterial({color: 0xEF6703});
    var VerMaterial    = new THREE.Mesh(geoEsfera,materialFan);
    
  U[0] = new  TRIANGLE_FAN(geoEsfera, materialFan);
   U[0].draw();
   centro.add(VerMaterial);
    scene.add(centro); 
    var TranformacionesEsfera ={
      Rotar_X : 0,
	    Rotar_Y : 0,
	    Rotar_Z : 0,
	    Escalar : 1
    }
    function Tranformacion (){
      aX = THREE.Math.degToRad(TranformacionesEsfera.Rotar_X);
      aY = THREE.Math.degToRad(TranformacionesEsfera.Rotar_Y);
      aZ = THREE.Math.degToRad(TranformacionesEsfera.Rotar_Z);
      s  = TranformacionesEsfera.Escalar;

    }  
    var gui = new dat.GUI();
    var rotar = gui.addFolder("Rotar");
    var escalar = gui.addFolder("Escalar");
    
      rotar.add(TranformacionesEsfera, 'Rotar_X', -90, 90).step(0.1).name('Rotar en X').onChange(Tranformacion);
      rotar.add(TranformacionesEsfera, 'Rotar_Y', -90, 90).step(0.1).name('Rotar en Y').onChange(Tranformacion);
      rotar.add(TranformacionesEsfera, 'Rotar_Z', -90, 90).step(0.1).name('Rotar en Z').onChange(Tranformacion);	
      escalar.add(TranformacionesEsfera, 'Escalar',-5,5).step(0.1).onChange(Tranformacion);
      

}
function Render_Esfera(){

  centro.scale.x = s;
  centro.scale.y = s;
  centro.scale.z = s;
  var Rotacion = new THREE.Euler(aX, aY, aZ, 'XYZ');
  centro.setRotationFromEuler(Rotacion);

}
function Luz(){
    //CREAR ILUMINACIÓN
     var ambient = new THREE.AmbientLight( 0xffffff, 2 );
     scene.add( ambient );
  
     var pointLight = new THREE.PointLight( 0x0F5469, 1, 100 );
     pointLight.position.set( -5, -2, 5 );
     scene.add( pointLight );
  
    
  }


function trianguloDos (nx,ny,nz){
    var geoTrianguloD = new THREE.Geometry();
    //vertices
    var Dv1 = new THREE.Vector3(0,0,0);  
    var Dv2 = new THREE.Vector3(4,0,0);
    var Dv3 = new THREE.Vector3(4,0,4);
    var Dv4 = new THREE.Vector3(0,0,4);
    var Dv5 = new THREE.Vector3(2,4,2);
       geoTrianguloD.vertices.push(Dv1);
       geoTrianguloD.vertices.push(Dv2);
       geoTrianguloD.vertices.push(Dv3);
       geoTrianguloD.vertices.push(Dv4);
       geoTrianguloD.vertices.push(Dv5);
       //Caras	
   geoTrianguloD.faces.push(new THREE.Face3(0,4,1));
   geoTrianguloD.faces.push(new THREE.Face3(1,4,2));
   geoTrianguloD.faces.push(new THREE.Face3(2,4,3)); 
   geoTrianguloD.faces.push(new THREE.Face3(3,4,0)); 
   geoTrianguloD.faces.push(new THREE.Face3(0,1,2));  
   geoTrianguloD.faces.push(new THREE.Face3(0,2,3)); 

   geoTrianguloD.computeFaceNormals();

   var matPlanod = new THREE.MeshBasicMaterial ();
   var triangulod = new THREE.Mesh(geoTrianguloD,matPlanod);
   triangulod.applyMatrix(new THREE.Matrix4().makeTranslation(nx,ny,nz));
   scene.add(triangulod);
}


function Cilindro(A,an,r){
    
        var geoCilindro = new THREE.Geometry();
        var res = r;
        for (var i= 0; i < res; i++) {
            for (var j = 0; j < res; j++) {
               var punto = new THREE.Vector3();
               punto.x=an*Math.cos((j*2*Math.PI)/res);
               punto.y=A*i/res;
               punto.z=an*Math.sin((j*2*Math.PI)/res);
               geoCilindro.vertices.push(punto);
            }        
        }
        var mateCilin = new THREE.LineBasicMaterial({color: 0x29cfdb});
        //THREE.Points
         var cilin = new THREE.Points(geoCilindro,mateCilin);
        
       // return cilin;
       scene.add(cilin);
}

function CilindroG (a,b,c,d,x,y,z){
    //var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    var geometry = new THREE.CylinderBufferGeometry( a, b, c, d );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.applyMatrix(new THREE.Matrix4().makeTranslation(x,y,z));
    scene.add( cylinder );
    //return cylinder;
}

var centro;  var RX =0;var RY =0; var RZ =0; var S=1;

function CilinTriangulos(n1,n2,r){
  class TRIANGLE_FAN {	
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
/* CARA UNO */
   // var materialFan = new THREE.MeshStandardMaterial( { color: 0xCCCCCC} );	
    var radio = r;
    var res   = n2;
    var A     = 0.10;
    var Al    = n1;
    
    var geometriaUno = new THREE.Geometry();
    var puntocero = new THREE.Vector3(0,Al,0);
    geometriaUno.vertices.push(puntocero);
        for(var i=0; i <= res; i++){
            for (var j = 0; j<= res; j++){
            var puntoCilindro = new THREE.Vector3();
            puntoCilindro.x = radio*Math.sin((j*2*Math.PI)/res);
            puntoCilindro.y = Al
            puntoCilindro.z = radio*Math.cos((j*2*Math.PI)/res);            
            geometriaUno.vertices.push(puntoCilindro);
    
            }            
        }
        for( var i=2; i< geometriaUno.vertices.length; i++ ){
          geometriaUno.faces.push( new THREE.Face3(0,i-1,i) );
        }
        geometriaUno.computeFaceNormals();
        var materialFan = new THREE.MeshStandardMaterial( { color: 0xCCCCCC} );	
        var TapaUno = new THREE.Mesh(geometriaUno,materialFan);
 // geometriaUno.scale(0.25,0.25,1);
    
/* Extructura fan */

    var geometriaDosCilindro = new THREE.Geometry();	
			for( var i = 0; i <= res; i++){
            var puntoeyelat1 = new THREE.Vector3();
			var puntoeyelat2 = new THREE.Vector3();
			puntoeyelat1.x = radio * Math.sin( ( 2 * Math.PI * i )/ res );
      puntoeyelat1.y =  Al;
      puntoeyelat1.z = radio * Math.cos( ( 2 * Math.PI * i )/ res );
			puntoeyelat2.x = puntoeyelat1.x;
			puntoeyelat2.y =0;
			puntoeyelat2.z = puntoeyelat1.z;
			geometriaDosCilindro.vertices.push( puntoeyelat2 );
      geometriaDosCilindro.vertices.push( puntoeyelat1 );
      var materialFinta = new THREE.MeshStandardMaterial( { color: 0xEF6703} );
			}
//*geometriaeye3.scale(0.25,0.25,0.25);
      geometriaDosCilindro.translate(0,0,0);
      for( var i=2; i<geometriaDosCilindro.vertices.length; i++ ){
        if(i%2!=0)
          geometriaDosCilindro.faces.push( new THREE.Face3(i-2,i-1,i) );
        else
          geometriaDosCilindro.faces.push( new THREE.Face3(i-1,i-2,i) );
        }
        geometriaDosCilindro.computeFaceNormals();
        var materialFinta = new THREE.MeshStandardMaterial( { color: 0xEF6703} );
        var Central = new THREE.Mesh(geometriaDosCilindro,materialFan);
        Central.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.5,0));
/* Cola strip*/
    var geometriaCola = new THREE.Geometry();
    var puntocero = new THREE.Vector3(0,0,0);
    geometriaCola.vertices.push(puntocero);
        for(var i=0; i <= res; i++){
            for (var j = 0; j<= res; j++){
            var puntoCilindro = new THREE.Vector3();
            puntoCilindro.x = radio*Math.cos((j*2*Math.PI)/res);
            puntoCilindro.y = A*i/res;
            puntoCilindro.z = radio*Math.sin((j*2*Math.PI)/res); 
                    geometriaCola.vertices.push(puntoCilindro);
    var materialFan = new THREE.MeshStandardMaterial( { color: 0xCCCCCC} );	
            }
        }

 for( var i=2; i< geometriaCola.vertices.length; i++ ){
  geometriaCola.faces.push( new THREE.Face3(0,i-1,i) );
}
geometriaCola.computeFaceNormals();
var materialFan = new THREE.MeshStandardMaterial( { color: 0xCCCCCC} );	
var TapaDos = new THREE.Mesh(geometriaCola,materialFan);
//! Gera
 //Se crea un pivote para el toroide
 var geoPunto = new THREE.Geometry();
 geoPunto.vertices.push(new THREE.Vector3(0,0,0));
 var matPunto = new THREE.PointsMaterial( { color: 0x000000, size: 0.1 } );
  centro = new THREE.Points(geoPunto,matPunto);
  
  //centro.applyMatrix(new THREE.Matrix4().makeTranslation(1.35,1.9,0.1));

 //* Eje
    var geometry = new THREE.SphereGeometry( 0.05, 15, 15 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.applyMatrix(new THREE.Matrix4().makeTranslation(0,0.2,0,0));
//? Matri


//! Gii 
    var rotationAngles = {
      centro: 0, RX:0, RY:0, RZ:0, Escalar:1

    }; 
//? Renombrar bariable 
   var rotation = function(){
    //ntro = THREE.Math.degToRad(rotationAngles.centro);
    RX = THREE.Math.degToRad(rotationAngles.RX);
    RY = THREE.Math.degToRad(rotationAngles.RY);
    RZ = THREE.Math.degToRad(rotationAngles.RZ);
    S = rotationAngles.Escalar;
    
   }
//!Gui
   var gui = new dat.GUI();
   var MenuGui = gui.addFolder("Rotar");
   var MenuEsc = gui.addFolder("Escala")
   MenuGui.add(rotationAngles, 'RX', -90, 90).step(0.1).name('Rotar en X').onChange(rotation);
   MenuGui.add(rotationAngles, 'RY', -90, 90).step(0.1).name('Rotar en Y').onChange(rotation);
   MenuGui.add(rotationAngles, 'RZ', -90, 90).step(0.1).name('Rotar en Z').onChange(rotation);
   MenuEsc.add(rotationAngles, 'Escalar', -5,5).step(0.1).name('Escala').onChange(rotation);


   centro.add(Central);
   Central.add(TapaUno);
   Central.add(TapaDos);
   scene.add(centro);
}
function Render_Cilindro(){
    centro.scale.x = S;
	  centro.scale.y = S;
	  centro.scale.z = S;
  var RotaCilindro= new THREE.Euler(RX,RY ,RZ, 'YZX');
    centro.setRotationFromEuler(RotaCilindro);
}
function Luz(){
    //CREAR ILUMINACIÓN
     var ambient = new THREE.AmbientLight( 0xffffff, 2 );
     scene.add( ambient );
  
    // var pointLight = new THREE.PointLight( 0x0F5469, 1, 100 );
    // pointLight.position.set( -5, -2, 5 );
    // scene.add( pointLight );
  
    // var pointLight = new THREE.PointLight( 0xffffff, .5, 100 );
    // pointLight.position.set( 5, -2, -5 );
    // scene.add( pointLight );
  // Creación de Escenario
  }
 
  
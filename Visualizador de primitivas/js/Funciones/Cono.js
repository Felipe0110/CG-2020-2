
var pradio =0  ;
var paltura =0  ;
var anguloX =0 ; 
var anguloY =0 ;
var anguloZ= 0;
class TRIANGLE_FAN{	
		  constructor( Geometria ){
		    this.geometria = Geometria;
			console.log(this.geometria);
		  }  
		  
		  draw(){			
			for( var i=2; i<this.geometria.vertices.length; i++ ){
			  this.geometria.faces.push( new THREE.Face3(0,i,i-1) );
			}
			this.geometria.computeFaceNormals();
              var matPlano = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
			var materialFan = new THREE.MeshStandardMaterial( { color: 0xCCCCCC } );
			var fan = new THREE.Mesh( this.geometria, materialFan);
			return fan;
		  }
		  
		}
function Cono(){
 
         var altura = 20;
    var punto0 = new THREE.Vector3(0,2,0);			
            var geometria = new THREE.Geometry();
			var geometria2 = new THREE.Geometry();
			
			var res = 30;
			geometria.vertices.push( punto0 );
            for( var i = 0; i <= res; i++){
                var punto = new THREE.Vector3();
				var punto2 = new THREE.Vector3();
				punto.x = 2 * Math.cos( ( 2 * Math.PI * i )/ res );
                punto.y = 0
                punto.z = 2 * Math.sin( ( 2 * Math.PI * i )/ res );
				
				geometria.vertices.push( punto );				
            }
			
			fan = new TRIANGLE_FAN(geometria);
			malla1 = fan.draw();
			scene.add( malla1 );
			
		
            
           	 var punto1 = new THREE.Vector3(0,0,0);	
            geometria2 = new THREE.Geometry();
			geometria2.vertices.push( punto1 );
             
             for( var i = 0; i <= res; i++){
                var punto = new THREE.Vector3();
				punto.x = 2 * Math.sin( ( 2 * Math.PI * i )/ res );
                punto.y = 0;
                punto.z = 2 * Math.cos( ( 2 * Math.PI * i )/ res );
                
				geometria2.vertices.push( punto );			
            }
            fan = new TRIANGLE_FAN(geometria2);
			malla2 = fan.draw();
			scene.add( malla2 );
    
                
 var Radio = {
                   radio: 1,
                   altura: 1,
                   RX: 0 ,
                   RY: 0 ,
                   RZ: 0 
                
        
                };
                var  Esacala = function () {
                    pradio = Radio.radio;
                    paltura= Radio.altura;
                    anguloX= THREE.Math.degToRad(Radio.RX);
                    anguloY= THREE.Math.degToRad(Radio.RY);
                    anguloZ= THREE.Math.degToRad(Radio.RZ);
                    render_Cono();
                };
             var gui = new dat.GUI();
              gui.add(Radio, "radio", 0, 10, .1).onChange(Esacala);
              gui.add(Radio, "altura", 0, 10, .1).onChange(Esacala);
              gui.add(Radio, "RX", -360, 360, .1).onChange(Esacala);
              gui.add(Radio, "RY", -360, 360, .1).onChange(Esacala);
              gui.add(Radio, "RZ", -360, 360, .1).onChange(Esacala);
              Esacala();
			
}
 function render_Cono(){
     malla1.scale.x = pradio;
     malla1.scale.z = pradio;
     malla2.scale.x = pradio;
     malla2.scale.z = pradio;
     malla1.scale.y = paltura;
     malla2.scale.y = paltura;
     malla1.rotation.x = anguloX ;
     malla1.rotation.y = anguloY;
      malla1.rotation.z = anguloZ;
     malla2.rotation.x = anguloX ;
     malla2.rotation.y = anguloY;
      malla2.rotation.z = anguloZ;
      renderer.render( scene, camera );
    }
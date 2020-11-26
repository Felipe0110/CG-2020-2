
function esfera(radio){
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
        return geoEsfera;
}
function MediaEsfera(radio){
    var geoEsferaM = new THREE.Geometry();
    var resXY = 50.0;
    var resZ = 50.0;
    for( var i = 0; i < resZ; i++){
        for( var j = 0; j < resXY; j++){
            var punto = new THREE.Vector3();
            punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI/2 )/ resZ) ;
            punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI/2 )/ resZ) ;
            punto.z = radio * Math.cos( ( i * Math.PI/2 )/resZ) ;
            geoEsferaM.vertices.push( punto );     
		  
        }        
    } 
        return geoEsferaM;
}

function Cubo(an,AL,PRO){
    var geoCubo = new THREE.Geometry();
    var i = 0 , j = 0, k = 0;
    for (i = 0; i < PRO ; i+=0.1) {
        for(j = 0; j < AL; j+=0.1){
            for (k = 0; k < an ; k+=0.1) {
              var punto = new THREE.Vector3();
              punto.x = k;
              punto.y = j;
              punto.z = i;
              geoCubo.vertices.push(punto);                
            }
        }
        
    } 
    return geoCubo;
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
    return geoCilindro;
    
}

function Espiral(radio,altura){
			var geoEspiral = new THREE.Geometry();
			var Radianes;
			for(var i = 0 ; i < 360 ; i++){
				for(var r=0; r< radio; r=r+0.1 ){
				Radianes = (i*Math.PI)/180;
				var punto = new THREE.Vector3();
				punto.x = r*Math.cos(Radianes); 
				punto.y = altura;
				punto.z = r*Math.sin(Radianes); 
				geoEspiral.vertices.push(punto);
				}
			}
		return geoEspiral;
        }



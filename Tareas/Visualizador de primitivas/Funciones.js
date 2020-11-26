function esfera(radio){
	
	var geoEsfera = new THREE.Geometry();
            var resEsfera = 10;
            for( var i = 0; i < resEsfera; i++){
                for( var j = 0; j < resEsfera; j++){
                    var punto = new THREE.Vector3();
                    punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resEsfera) * Math.sin( ( i * Math.PI )/resEsfera) ;
                    punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resEsfera) * Math.sin( ( i * Math.PI )/resEsfera) ;
                    punto.z = radio * Math.cos( ( i * Math.PI )/resEsfera) ;
                    geoEsfera.vertices.push( punto );
                }
            }
    return geoEsfera;
}

function cubo(ancho,largo,profundo){
	var geoCubo= new THREE.Geometry();
            
            for( var i = 0; i < ancho; i++){
                for( var j = 0; j < largo; j++){
					for(var k=0;k<profundo;k++){
                    var punto = new THREE.Vector3();
                     punto.x =   k;
                     punto.y =   j;
                     punto.z =   i;
                     geoCubo.vertices.push( punto );
					}
                }
            }
	return geoCubo;
}
function llantas(radio,alto){
     var geoCilindro = new THREE.Geometry();
            var resCilindro  =10;
              for( var i = 0; i < resCilindro ; i++){
                for( var j = 0; j < resCilindro ; j++){
                    var punto = new THREE.Vector3();
                    punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resCilindro ) ;
                    punto.y =radio * Math.sin( ( j * 2* Math.PI )/resCilindro);
                    punto.z =  i/alto;
                    geoCilindro .vertices.push( punto );
                }
            }
	
	return geoCilindro;
}

function cilindro(radio,alto){
	 var geoCilindro = new THREE.Geometry();
            var resCilindro  =10;
              for( var i = 0; i < resCilindro ; i++){
                for( var j = 0; j < resCilindro ; j++){
                    var punto = new THREE.Vector3();
                    punto.x =i/alto; 
                    punto.y =radio * Math.sin( ( j * 2* Math.PI )/resCilindro);
                    punto.z =  radio * Math.cos( ( j * 2 * Math.PI )/resCilindro ) ;
                    geoCilindro .vertices.push( punto );
                }
            }
	
	return geoCilindro;
}

function TechoCabina(radio,alto){
	 var geoCilindro = new THREE.Geometry();
            var resCilindro  =10;
              for( var i = 0; i <= resCilindro ; i++){
                for( var j = 0; j <= resCilindro ; j++){
                    var punto = new THREE.Vector3();
                    punto.x =i/alto; 
                    punto.y =radio * Math.sin( ( j * 2* Math.PI/2 )/resCilindro);
                    punto.z =  radio * Math.cos( ( j * 2 * Math.PI/2 )/resCilindro ) ;
                    geoCilindro .vertices.push( punto );
                }
            }
	
	return geoCilindro;
}
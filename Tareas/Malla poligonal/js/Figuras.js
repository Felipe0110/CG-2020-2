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
function cilindro(radio,alto){
	 var geoCilindro = new THREE.Geometry();
     var resCilindro  = 10;
              for( var i = 0; i < resCilindro ; i++){
                for( var j = 0; j < resCilindro ; j++){
                    var punto = new THREE.Vector3();
                    punto.x = radio * Math.cos( (2 * Math.PI * j )/ resCilindro );
                	punto.y = alto*i/10;
					punto.z = radio * Math.sin( (2 * Math.PI * j )/ resCilindro );
                    geoCilindro .vertices.push( punto );
                }
            }
		
	
	return geoCilindro;
}

/*var geoTriangulo = new THREE.Geometry();
			var  v0 = new THREE.Vector3(0.0,0.0,0.0);
			var  v1 = new THREE.Vector3(2.0,0.0,0.0);
			var  v2 = new THREE.Vector3(2.0,0.0,2.0);
			var  v3 = new THREE.Vector3(0.0,0.0,2.0);
			var  v4 = new THREE.Vector3(1.0,2.0,1.0);
			
			geoTriangulo.vertices.push(v0);
			geoTriangulo.vertices.push(v1);
			geoTriangulo.vertices.push(v2);
			geoTriangulo.vertices.push(v3);
			geoTriangulo.vertices.push(v4);
			
			geoTriangulo.faces.push(new THREE.Face3(0,4,1));
			geoTriangulo.faces.push(new THREE.Face3(1,4,2));
			geoTriangulo.faces.push(new THREE.Face3(2,4,3));
			geoTriangulo.faces.push(new THREE.Face3(3,4,0));
			geoTriangulo.faces.push(new THREE.Face3(0,1,2));
			geoTriangulo.faces.push(new THREE.Face3(0,2,3));
			geoTriangulo.computeFaceNormals();
			
			geoTriangulo.faces[0].color = color1;
			geoTriangulo.faces[1].color = color2;
			geoTriangulo.faces[2].color = colorR;
			geoTriangulo.faces[3].color = colorG;
			geoTriangulo.faces[4].color = colorB;
			geoTriangulo.faces[5].color = color1;
			
			var matPlano = new THREE.MeshBasicMaterial({color:color1});
			var triangulo = new THREE.Mesh(geoTriangulo,matPlano);*/
 
			/*var geoTriangulo = new THREE.Geometry();
			var  v0 = new THREE.Vector3(0.0,0.0,0.0);
			var  v1 = new THREE.Vector3(2.0,0.0,0.0);
			var  v2 = new THREE.Vector3(2.0,0.0,2.0);
			var  v3 = new THREE.Vector3(0.0,0.0,2.0);
			var  v4 = new THREE.Vector3(1.0,2.0,1.0);
			
			geoTriangulo.vertices.push(v0);
			geoTriangulo.vertices.push(v1);
			geoTriangulo.vertices.push(v2);
			geoTriangulo.vertices.push(v3);
			geoTriangulo.vertices.push(v4);
			
			geoTriangulo.faces.push(new THREE.Face3(0,4,1));
			geoTriangulo.faces.push(new THREE.Face3(1,4,2));
			geoTriangulo.faces.push(new THREE.Face3(2,4,3));
			geoTriangulo.faces.push(new THREE.Face3(3,4,0));
			geoTriangulo.faces.push(new THREE.Face3(0,1,2));
			geoTriangulo.faces.push(new THREE.Face3(0,2,3));
			geoTriangulo.computeFaceNormals();
			
			geoTriangulo.faces[0].color = color1;
			geoTriangulo.faces[1].color = color2;
			geoTriangulo.faces[2].color = colorR;
			geoTriangulo.faces[3].color = colorG;
			geoTriangulo.faces[4].color = colorB;
			geoTriangulo.faces[5].color = color1;
			
			var matPlano = new THREE.MeshBasicMaterial({color:color1});
			var triangulo = new THREE.Mesh(geoTriangulo,matPlano);*/


function toroide(radio){
	var array_puntos = [];
	var array_circunferencias = [];
	var geoToroide = new THREE.Geometry();
	var geoCircunferencia = new THREE.Geometry();
    var res = 10;
		
        for( var i = 0; i < res; i++){
			for(var j = 0; j<res ; j++){
				var punto = new THREE.Vector3();
				punto.x = (radio + 0.5* Math.cos( ( j * 2 * Math.PI )/res)) * Math.cos( ( i * Math.PI )/res) ;
                punto.y = (radio + 0.5* Math.cos( ( j * 2 * Math.PI )/res)) * Math.sin( ( i * Math.PI )/res) ;
                punto.z = 0.5 * Math.sin( ( i * Math.PI )/res) ;
				//geoToroide.vetices.push( punto );
			}
			/*for( var j = 0; j < res; j++){
				var puntoCir = new THREE.Vector3();
				puntoCir.x = 0.5 * Math.cos( (2 * Math.PI * j )/ res );
                puntoCir.y = 0.5 * Math.sin( (2 * Math.PI * j )/ res );
                puntoCir.z = 0; 
				geoCircunferencia.vertices.push(puntoCir );		
        	}
			array_circunferencias.push(geoCircunferencia);*/
				
        }
	var geoCabeza= new THREE.Geometry();
            var resCabeza = 100; // controla el numero de lineas que se crean
            //Se posicionan los puntos en P(x,y,z)
            for( var i = 0; i < resCabeza; i++){
                for( var j = 0; j < resCabeza; j++){
                    var punto = new THREE.Vector3();
                    punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resCabeza) * Math.sin( ( i * Math.PI )/resCabeza) ;
                    punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resCabeza) * Math.sin( ( i * Math.PI )/resCabeza) ;
                    punto.z = radio * Math.cos( ( i * Math.PI )/resCabeza) ;
                    geoCabeza.vertices.push( punto );
                }
            }
            var matCabeza = new THREE.PointsMaterial( { color: 0x6E6E6E, size: 0.1 } );
			var Cabeza = new THREE.Points( geoCabeza, matCabeza);
			var geometry = new THREE.ConvexBufferGeometry( Cabeza );
			var matMalla = new THREE.MeshStandardMaterial({color: 0xAA3333});
   			var mesh = new THREE.Mesh( geometry, matMalla );
			
	
	var geomaterial = new THREE.PointsMaterial( { color: 0xFFFFFF, size: 0.1 } );
	var toroide = new THREE.Points(geoToroide,geomaterial);
	//var circunferencia = new THREE.Points(array_circunferencias[0],geomaterial);
	//toroide.add(circunferencia);
	//scene.add(toroide);
	scene.add(mesh);
}
fetch("jsons/detailMovies.json").then(
    function(response){
        return response.json();
    }
).then(function(movies){
    var id = window.location.search.split("?id=").pop().trimStart().trimEnd();
    var urlBG;
    //console.log("Id->",id);
    let placeholder=document.querySelector("#detail-data-output");
    let out = "";
    for(let movie of movies){
        //console.log("Movie detail->",movie.detail_id);
        //console.log("id->",id);
        
        if(movie.detail_id==id.toString()){
            urlBG=movie.detail_background;
            console.log("iguales");
            out+=`
            <div class="card text-bg-dark mb-3 bg-opacity-50"  id="card_detalle">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${movie.detail_imagen}" class="img-fluid rounded-start" alt="imagen" id="imagen_detalle">
                    </div>
                    <div class="col">
                        <div class="card-body mb-3">
                            <h2 class="card-title text-info">${movie.detail_titulo}</h2>
                            <p class="card-text">
                                <small>  
                                    <strong>Fecha estreno: </strong>
                                        ${movie.fecha_estreno}   &emsp;      
                                        <strong> Duración: </strong>${movie.detail_duracion}<br>
                                        <strong> Géneros: </strong>${movie.detail_genero}
                                    </small></p>
                                    
                            <h4 class="card-title">Reseña</h4>
                            <p class="card-text">${movie.review}</p>
                            <h4 class="card-title">Resumen</h4>
                            <p class="card-text">${movie.resumen}</p>
                            
                            
                        </div>
                        
                    </div>
                    <div class="card-footer bg-transparent border-light">
                        <h3 class="card-title text-info text-center">Actores</h3>
                            <div class="row row-cols-1 row-cols-md-5 g-4">
                                <div class="col">
                                    <div class="card-detail-actor">
                                    <img src="${movie.actor1.imagen}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${movie.actor1.nombre}</h5>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-detail-actor">
                                    <img src="${movie.actor2.imagen}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${movie.actor2.nombre}</h5>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-detail-actor">
                                    <img src="${movie.actor3.imagen}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${movie.actor3.nombre}</h5>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-detail-actor">
                                    <img src="${movie.actor4.imagen}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${movie.actor4.nombre}</h5>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-detail-actor">
                                    <img src="${movie.actor5.imagen}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${movie.actor5.nombre}</h5>
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>

            
        `;

        }

    }
    console.log(out);
    document.body.style.backgroundImage = 'url(' + urlBG + ')';
    placeholder.innerHTML=out;

})
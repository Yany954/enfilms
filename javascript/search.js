fetch("jsons/detailMovies.json").then(
    function(response){
        return response.json();
    }
).then(function(movies){
    let placeholder=document.querySelector("#search-output");
    var nombre = document.getElementsByClassName("form-control me-2").value;
    console.log(nombre);
    let out = "";
    for(let movie of movies){
        var titulo=movie.detail_titulo.toLowerCase();
        if(titulo.includes(nombre)){
            out+=`
            <div class="col">    
                <div class="card">
                <a href="view_detail.html?id=${movie.detail_id}" class="enlace">
                <img src='${movie.detail_imagen}' class="card-img-top" alt="Poster ${movie.detail_titulo}">
                      <div class="card-body">
                        <h5 class="card-title">${movie.detail_titulo}</h5>
                        <p class="card-text">${movie.detail_genero}</p>
                      </div>
                      </a>
                    </div>
            </div>
            
            `;
        }else{
            out+=`<img src="https://toyotireslatino.com/wp-content/uploads/2020/11/error-no-es-fracaso.jpg" alt="Imagen de error 404">
            <h1 class="mt-4 mb-2">Error 404</h1>
            <p class="text-muted mb-5">Lo sentimos, la pelicula que estás buscando no se puede encontrar.</p>
            `;
        }
    }
    console.log(out);
    placeholder.innerHTML=out;

})
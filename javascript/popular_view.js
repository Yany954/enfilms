fetch("jsons/detailMovies.json").then(
    function(response){
        return response.json();
    }
).then(function(movies){
    let placeholder=document.querySelector("#popular-output");
    let out = "";
    for(let movie of movies){
        if(movie.categoria=="favorita"){
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
        }

    }
    console.log(out);
    placeholder.innerHTML=out;

})
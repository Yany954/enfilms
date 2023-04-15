const parametros = new URLSearchParams(window.location.search);
  const busqueda = parametros.get('q').toLowerCase();
  console.log("parametrosSearch2->",parametros.toString);
  console.log("busquedaSearch2->",busqueda);
  let out = "";
let placeholder=document.querySelector("#search-output");

  fetch('jsons/detailMovies.json')
    .then(response => response.json())
    .then(data => {
        
      const coincidencias = data.filter(movie => movie.detail_titulo.toString().trim().toLowerCase().includes(busqueda));
      coincidencias.forEach(movie => {
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
        
      });
      console.log(out);
        placeholder.innerHTML=out;
    });
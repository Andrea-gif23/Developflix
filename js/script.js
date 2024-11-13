import peliculas from './peliculas.js'


const generos = {
    accion: 28,
    thriller: 53,
    aventura: 12
  };
  
  
  const filtrarPorGenero = (generoId) => {
    return peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));
  };
  
 
  const crearPeliculaElemento = (pelicula) => {
    const div = document.createElement('div');
    div.classList.add('pelicula');
  
    const imagen = document.createElement('img');
    imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
    imagen.alt = pelicula.title;
  
    const titulo = document.createElement('h3');
    titulo.textContent = pelicula.title;
  
    div.appendChild(imagen);
    div.appendChild(titulo);
  
    return div;
  };
  
  
  const mostrarPeliculas = (generoId) => {
    const contenedor = document.getElementById(`genero-${generoId}`);
    const peliculasFiltradas = filtrarPorGenero(generoId);
  
    
    contenedor.innerHTML = '';
  
  
    peliculasFiltradas.forEach(pelicula => {
      const peliculaElemento = crearPeliculaElemento(pelicula);
      contenedor.appendChild(peliculaElemento);
    });
  };
  
  
  mostrarPeliculas(generos.accion);    
  mostrarPeliculas(generos.thriller);  
  mostrarPeliculas(generos.aventura);  
  


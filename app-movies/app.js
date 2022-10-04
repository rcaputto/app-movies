let movies = require ('./movies');
let fs = require ('fs');

const moviesDH = {
    movies: movies,
    listMovies : function listMovies (){
        console.log ();
        console.log ('Listado de películas');
        console.log ('-----------------------');
        let lista = []
        movies.forEach((pelicula) => {
             lista.push (pelicula.title)
        });
        /*for (let i = 0; i < movies.length; i ++){
            console.log (movies [i].title)
        }*/
        console.log (lista)
    },
    searchMovies:  function (title){
        console.log ()
        let peliculaEncontrada = movies.filter ((pelicula )=> { return pelicula.title === title })
        if (peliculaEncontrada.length > 0){
            for (let clave in peliculaEncontrada){
                console.log ('Se encontró su película')
                console.log ('-------------------------')
                console.log (peliculaEncontrada [clave])
        }}
        else { 
        console.log ('No se encontró su película')
        console.log ('-------------------------')};

        console.log ();
    },
    totalPrice: function totalPrice (){
        listaDePrecio =  []
        movies.forEach (function(pelicula){
            listaDePrecio.push (pelicula.price)
        })
        
        let precioTotal = listaDePrecio.reduce ((acumulador, actual) => acumulador + actual)
        console.log ()
        console.log ('El precio de todas las películas registradas es de:')
        console.log ('------------------------------------------------')
        console.log (precioTotal + ' pesos.')
        console.log ()
    },
    changeMovieGenre: function changeMovieGenre(id, genero){
        let nuevoGenero = []
        let peliculaEncontrada = movies.filter ((pelicula )=> { return pelicula.id === id })
        if (peliculaEncontrada.length > 0){
           
        }
        }
    }

moviesDH.changeMovieGenre (2, 'drama')
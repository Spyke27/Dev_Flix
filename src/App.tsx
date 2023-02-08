import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Movie } from './types/Movie';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [display, setDisplay] = useState("block")

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/') //Get na api de filmes
      .then((res)=> {
        return res.json(); //transformando a resposta da requisição em um json
      })
      .then((json) => {
        setMovies(json); //Guardando a resposta no state Movies
      })

      setDisplay("hidden")
  }

  return (
    <div className="App flex justify-center items-center">
        <button className={`${display} bg-blue-500 p-2 rounded`} onClick={loadMovies}>
          Carregar Filmes
        </button>


        <div className='grid grid-cols-3 gap-5 p-10'>
          {movies.map((item, index) => (
              <div>
                <img src={item.avatar} alt="Capa Filme" className='w-25 block' />
                {item.titulo}
              </div>
          ))}
        </div>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Movie } from './types/Movie';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [display, setDisplay] = useState("block")
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setLoading(true);
    let res = await fetch('https://api.b7web.com.br/cinema/'); //Get na api de filmes
    let json = await res.json();
    setLoading(false);

    setMovies(json);

    setDisplay("hidden")
  }

  return (
    <div className="App flex justify-center items-center flex-col">

      <header className='bg-stone-800 h-16 w-full flex items-center justify-between px-5'>
        <h1 className='text-gray-100 text-4xl'>DevFlix</h1>
      </header>



        <button className={`${display} bg-blue-500 p-2 rounded`} onClick={loadMovies}>
          Carregar Filmes
        </button>
        
       {loading &&
          <div className='px-5 py-2 rounded-xl text-gray-700 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600'>Carregando...</div>
        }










        <div className='grid grid-cols-3 gap-5 p-10'>
          {movies.map((movie, index) => (
              <div>
                <img src={movie.avatar} alt="Capa Filme" className='w-25 block' />
                {movie.titulo}
              </div>
          ))}
        </div>
    </div>
  )
}

export default App

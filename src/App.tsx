import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Movie } from './types/Movie';
import filmImage from './assets/tv.png'

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
    <div className="App flex justify-center items-center flex-col min-h-screen bg-stone-900">

     <div className='container'>
     <header className='bg-stone-800 h-16 w-full flex items-center justify-between px-5 fixed top-0'>
        <h1 className='text-gray-200 text-4xl font-bold cursor-pointer'>DevFlix</h1>
        <div className='flex gap-5 cursor-pointer	text-gray-300 uppercase'>
          <a href="#" className='hover:text-white'>ingressos</a>
          <a href="#" className='hover:text-white'>filmes</a>
          <a href="#" className='hover:text-white'>combo</a>
        </div>
      </header>

      <div className='flex mt-20'>
        <div className='px-16 w-full flex flex-col gap-6'>
          <h2 className='font-bold text-slate-200 text-7xl font-sans uppercase'>Que tal um cineminha ?</h2>
          <p className='mb-10 font-semibold text-xl text-slate-300'>Confira agora filmes que estão em cartaz, e escolha qual será a sua próxima aventura... Ou romance, você quem decide!</p>

          <button className={`${display} bg-cyan-700 p-2 rounded uppercase text-gray-300
            hover:bg-cyan-500 hover:text-white duration-300 py-3`} 
            onClick={loadMovies}>
            filmes em cartaz
          </button>
        </div>
        
        <div className='w-full flex items-center justify-center'>
          <img src={filmImage} alt="Imagem Filme" width={400}/>
        </div>
      </div>
     </div>
        
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

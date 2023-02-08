import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/') //Get na api de filmes
      .then((res)=> {
        return res.json(); //transformando a resposta da requisição em um json
      })
      .then((json) => {
        setMovies(json); //Guardando a resposta no state Movies
      })
  }

  return (
    <div className="App">
        <button className='block bg-blue-500 p-2 rounded' onClick={loadMovies}>Carregar Filmes</button>

        Total de Filmes: {movies.length}

        <div>

        </div>
    </div>
  )
}

export default App

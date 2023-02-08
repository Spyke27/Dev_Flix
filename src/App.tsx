import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Movie } from "./types/Movie";
import filmImage from "./assets/tv.png";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [display, setDisplay] = useState("block");
  const [show, setShow] = useState("flex");
  const [title, setTitle] = useState("hidden");
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setShow("hidden");
    setLoading(true);
    let res = await fetch("https://api.b7web.com.br/cinema/"); //Get na api de filmes
    let json = await res.json();
    setLoading(false);

    setMovies(json);
    setTitle("block")
    setDisplay("hidden");
  };

  return (
    <div className={`App flex justify-center items-center flex-col min-h-screen bg-stone-900`}>
      <header className="bg-stone-800 xl:h-16 h-14 w-full flex items-center justify-between xl:px-10 px-2 fixed top-0">
        <h1 className="text-gray-200 text-4xl font-bold cursor-pointer">
          DevFlix
        </h1>
        <div className="hidden xl:flex gap-5 cursor-pointer	text-gray-300 uppercase">
          <a href="#" className="hover:text-white">
            ingressos
          </a>
          <a href="#" className="hover:text-white">
            filmes
          </a>
          <a href="#" className="hover:text-white">
            combo
          </a>
        </div>
      </header>

      <div className={`${show} xl:mt-32 min-h-full mt-24`}>

        <div className="flex xl:flex-row flex-col">

          <div className="px-5 xl:px-16 w-full flex flex-col gap-6">
            <h2 className="font-bold text-slate-200 text-5xl xl:text-7xl font-sans uppercase">
              Que tal um cineminha ?
            </h2>
            <p className="mb-10 font-semibold text-xl text-slate-300">
              Confira agora filmes que estão em cartaz, e escolha qual será a
              sua próxima aventura... Ou romance, você quem decide!
            </p>

            <button
              className={`${display} bg-cyan-700 p-2 rounded uppercase text-gray-300
            hover:bg-cyan-500 hover:text-white duration-300 py-3 mb-10`}
              onClick={loadMovies}
            >
              filmes em cartaz
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <img src={filmImage} alt="Imagem Filme" className="w-72 xl:w-96"/>
          </div>
        </div>
      </div>

      {loading && (
        <div className="min-h-screen flex justify-center items-center">
          <div className="px-10 py-5 text-4xl rounded-xl text-gray-500 uppercase">
          Carregando...
        </div>
        </div>
      )}

      {!loading &&
        <div>
        <h1 className={`mt-20 text-gray-200 text-5xl text-center ${title}`}>
          Filmes em Cartaz
        </h1>
        <div className="grid xl:grid-cols-4 grid-cols-1 gap-5 xl:p-10 p-5">
          {movies.map((movie, index) => (
            <div className="rounded pb-2 text-center shadow-md bg-stone-800">
              <img
                src={movie.avatar}
                alt="Capa Filme"
                className="w-full block rounded"
              />
              <p className="text-gray-200 text-xl px-2">{movie.titulo}</p>
            </div>
          ))}
        </div>
      </div>
      }

      <footer className="w-full bg-stone-800 h-10 flex justify-center items-center">
          <p className="text-gray-100">Developed by <a className="text-cyan-500" href="https://my-portfolio-rodrigo-daniel.netlify.app/">Rodrigo Daniel</a></p>
      </footer>
    </div>
  );
}

export default App;

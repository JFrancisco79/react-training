import { useEffect, useState } from 'react';

const KEY = `d9a8512`;
const tempWatchedData = [
    {
        imdbID: 'tt1375666',
        Title: 'Inception',
        Year: '2010',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: 'tt0088763',
        Title: 'Back to the Future',
        Year: '1985',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

function NavBar({ movies }) {
    return (
        <nav className="nav-bar">
            <Logo />
            <Search />
            <NumResults length={movies.length} />
        </nav>
    );
}

function Logo() {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    );
}

function Search() {
    const [query, setQuery] = useState('');
    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    );
}

function NumResults({ length }) {
    return (
        <p className="num-results">
            Found <strong>{length}</strong> results
        </p>
    );
}

function Main({ movies }) {
    return (
        <main className="main">
            <ListBox movies={movies} />
            <WatchedBox />
        </main>
    );
}

function ListBox({ movies }) {
    const [isOpen1, setIsOpen1] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1(open => !open)}
            >
                {isOpen1 ? '–' : '+'}
            </button>
            {isOpen1 && <MovieList movies={movies} />}
        </div>
    );
}

function MovieList({ movies }) {
    return (
        <ul className="list">
            {movies?.map(movie => (
                <Movie movie={movie} key={movie.imdbID} />
            ))}
        </ul>
    );
}

function Movie({ movie }) {
    return (
        <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}

function WatchedBox() {
    const [watched, setWatched] = useState(tempWatchedData);

    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2(open => !open)}
            >
                {isOpen2 ? '–' : '+'}
            </button>
            {isOpen2 && (
                <>
                    <WatchedSummary watched={watched} />
                    <WatchedMovieList watched={watched} />
                </>
            )}
        </div>
    );
}

function WatchedSummary({ watched }) {
    const avgImdbRating = average(watched.map(movie => movie.imdbRating));
    const avgUserRating = average(watched.map(movie => movie.userRating));
    const avgRuntime = average(watched.map(movie => movie.runtime));
    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    );
}

function WatchedMovieList({ watched }) {
    return (
        <ul className="list">
            {watched.map(movie => (
                <WatchedMovie movie={movie} key={movie.imdbID} />
            ))}
        </ul>
    );
}

function WatchedMovie({ movie }) {
    return (
        <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
            </div>
        </li>
    );
}

const average = arr =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
    const [movies, setMovies] = useState([]);
    const query = 'back to the future';

    useEffect(function () {
        async function fetchMovies() {
            const res = await fetch(
                `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
            );

            const data = await res.json();
            setMovies(data.Search);
        }
        fetchMovies();
    }, []);

    return (
        <>
            <NavBar movies={movies} />
            <Main movies={movies} />
        </>
    );
}

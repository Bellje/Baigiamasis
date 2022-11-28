import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&98&apikey=2b534860`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
  return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center '>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row justify-content-center'>
				<MovieList
					movies={movies}
				/>
			</div>
			<div className='row d-flex align-items-center '>
			</div>
			<div className='row'>
    </div>
  
  </div>
);
};



export default App;
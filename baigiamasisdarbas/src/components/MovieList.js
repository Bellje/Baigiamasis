import React from 'react';

const MovieList = (props) => {

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<a  href='https://imdb.com/'><img src={movie.Poster} alt='movie'></img></a>
						
					</div>
			))}
		</>
	);
};

export default MovieList;
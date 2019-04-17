import React, { Component} from 'react'; // const React = require('react');
import './Movie.css';
import PropTypes from 'prop-types'


const Movie = ({title, poster, genres, synopsis}) => {

     // html을 리턴해주는놈
        return(
            <div className='Movie'>

                <div className='Movie__Column'>
                    <MoviePoster poster={poster}/>
                </div>
                
                <div className='Movie__Column'>
                    <h1>{title}</h1>
                    <div className='Movie__Genres'>
                        {
                            genres.map( (genre, index) => 
                                <MovieGenre genre={genre} key={index}/>
                            )
                        }
                    </div>

                    <p className='Movie__Synopsis'>
                        {synopsis}
                    </p>
                </div>


            </div>
        );
    
}

// class MoviePoster extends Component {

//     static propTypes = {
//         poster: PropTypes.string
//     };

//     render(){ // html을 리턴해주는놈
//         console.log(this.props);
//         return(
//                 <img src={this.props.poster} alt =''/>
//         );
//     }
// }

const MoviePoster = ({poster}) =>  // 값으로 넘겨받아야하기때문에 { } 를 붙여줌
    (
        <img className='Movie__Poster' src={poster} alt =''/>
    );

const MovieGenre = ({genre}) => ( <span className='Movie__Genre'>{genre}</span> );
Movie.propTypes = {
    title: PropTypes.string.isRequired, // PropTypes가 기본으로 있는 타입이아니라서 에러가남  타입을 check를 함 데이터통신하다 이상한 타입이들어올수있으니
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = { // validation
    poster: PropTypes.string
} 

MovieGenre.propTypes = { // validation
    genre: PropTypes.string.isRequired
} 

export default Movie; // 외부에서 쓸수있도록 밖으로 빼냄

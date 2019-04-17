import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    state = {

    }

    componentWillMount() {
        // 내부값 세팅하는곳
        console.log('componentWillMount() called');
    }

    componentDidMount() {

        this._getMovies();
         // 위에꺼 실행한다음 바로 이거실행하려면 위에꺼를 비동기로 만들어야함

    }

    _getMovies = async() => { // async 비동기라는뜻 호출후 바로 밑으로내려가게끔

        const movies = await this._callApi(); // await 값이 올때까지 기다림

        this.setState({
            movies: movies
        })

       
    }

    _callApi = () => {

        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then( response => response.json() )
        .then( json => json.data.movies )
        .catch( err => console.error(err) )
    }

    _renderMovies = () => {

        //const movies = [<Movie />, <Movie />, <Movie />]; 아래의 작업이 이거와 같다

        const movies = this.state.movies.map((movie, index) => { // moview가 null이라서 읽을수가없다
            console.log(movie);
            return <Movie
                title={movie.title}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis}
                key={index} />
        });

        return movies;
    }

    render() {
        const {movies} = this.state;

        return (
            <div className={movies ? 'App' : 'App--loading' }>
                {
                    (/*this.state.movies*/ movies) ?  this._renderMovies() : <h5>loading..</h5>
                }
            </div>
        );
    }
}

export default App;

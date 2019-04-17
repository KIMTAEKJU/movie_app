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
        // processing response
        // 함수형은 딱 뭐하는지 한눈에 확인가능
        console.log(fetch('')); // promise 객체를 리턴
        const res = fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating').then( response =>  // localhost:3000에 떄린거 fetch안에 인자가 비어있어서, 마지막으로 리턴해준값을 받을수있음
            response.json()// body : ReadableStream으로 되어있는데 이걸 json으로 바꿔줘야함
        ).then( json => {
            console.log(json);
            this.setState({
                movies: json.data.movies
            })
        })
        .catch( err => 
            console.error(err)
        );

        // ).then( response => {
        //     const result = response;
        //     return result;
        // })

    }

    _renderMovies = () => {

        //const movies = [<Movie />, <Movie />, <Movie />]; 아래의 작업이 이거와 같다

        const movies = this.state.movies.map((movie, index) =>  { // moview가 null이라서 읽을수가없다
            console.log(movie);
            return <Movie title={movie.title} poster={movie.medium_cover_image} key={index} />
        });

        return movies;
    }
    render() {
        return (
            <div className='App'>
                {
                    (this.state.movies == null) ? <h5>loading..</h5> : this._renderMovies()
                }
            </div>
        );
    }
}

export default App;

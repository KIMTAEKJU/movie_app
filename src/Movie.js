import React, { Component} from 'react'; // const React = require('react');
import './Movie.css';
import PropTypes from 'prop-types'


class Movie extends Component {
    
    state = {

    }

    static propTypes = {
        title: PropTypes.string.isRequired, // PropTypes가 기본으로 있는 타입이아니라서 에러가남  타입을 check를 함 데이터통신하다 이상한 타입이들어올수있으니
        poster: PropTypes.string
    };
    render(){ // html을 리턴해주는놈
        return(
            <div className='Movie'>

                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        );
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string
    };

    render(){ // html을 리턴해주는놈
        console.log(this.props);
        return(
                <img src={this.props.poster} alt =''/>
        );
    }
}

export default Movie; // 외부에서 쓸수있도록 밖으로 빼냄

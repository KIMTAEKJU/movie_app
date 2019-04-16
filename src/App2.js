import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    state = {

    }

    componentWillMount() {
        // request API
        console.log('componentWillMount() called');
    }

    componentDidMount() {
        // processing response

        setTimeout((i, j) => {
            this.setState({

                movies: [{
                    title: '생일',
                    poster: 'https://post-phinf.pstatic.net/MjAxOTA0MDRfMzAg/MDAxNTU0MzI0Mzk5MTYy.gIXJecndalAGbYwjkLSP1pK11maHpTS8dW5JxB3TLqwg.zIkemZ3HNouL48LuYbai2xmOttq-EdeQUcOL3NAr1nUg.JPEG/IVoNhOqC7DHCG09IlUFFLdwqwlvI.jpg'
                }, {
                    title: '헬보이',
                    poster: 'http://blogfiles.naver.net/MjAxOTAzMTNfMjQ5/MDAxNTUyNDUyNzg2MDAx.I076TREP27xEpHOEOYSz159_m57eb-CdbNnrOf6ozu8g.v3Fkh8voF0IOyVvujfIXQLfHZgyWpuPtWrSVnp8b5vcg.JPEG.artgihun/common-25.jpg'
                }, {
                    title: '샤잠!',
                    poster: 'https://post-phinf.pstatic.net/MjAxOTAzMjVfMTUw/MDAxNTUzNTA5MDU2ODM0.L433uZPANoGUKty6ZPW1WVbTQaioQP5VAtyeXCe96r0g.x7HgZNrLBOomuVPLcSO-mdXWP4pPRsGhv3YVL6xaoIAg.PNG/IJlCastnz87XXwwTqogiWQWhHtOU.jpg'
                }, {
                    title: '미성년',
                    poster: 'http://imgnews.naver.net/image/109/2019/04/04/0003982974_001_20190404164406674.png'
                }, {
                    title: '극한직업',
                    poster: 'http://imgnews.naver.net/image/5374/2019/02/08/20190208161806_35294_20190208165348938.jpg'
                },
                ]
            })

        }, 5000);
    }

    _render() {

        //const movies = [<Movie />, <Movie />, <Movie />]; 아래의 작업이 이거와 같다

        const movies = this.state.movies.map((movie, index) =>  { // moview가 null이라서 읽을수가없다
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        });

        return movies;
    }
    render() {
        return (
            <div className='App'>
                {
                    (this.state.movies == null) ? <h5>loading..</h5> : this._render()
                }
            </div>
        );
    }
}

export default App;

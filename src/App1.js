import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   '생일',
//   '헬보이',
//   '샤잠!',
//   '미성년',
//   '극한직업'
// ];

// const movies = [{
//     title: '생일',
//     poster: 'https://post-phinf.pstatic.net/MjAxOTA0MDRfMzAg/MDAxNTU0MzI0Mzk5MTYy.gIXJecndalAGbYwjkLSP1pK11maHpTS8dW5JxB3TLqwg.zIkemZ3HNouL48LuYbai2xmOttq-EdeQUcOL3NAr1nUg.JPEG/IVoNhOqC7DHCG09IlUFFLdwqwlvI.jpg'
// }, {
//     title: '헬보이',
//     poster: 'http://blogfiles.naver.net/MjAxOTAzMTNfMjQ5/MDAxNTUyNDUyNzg2MDAx.I076TREP27xEpHOEOYSz159_m57eb-CdbNnrOf6ozu8g.v3Fkh8voF0IOyVvujfIXQLfHZgyWpuPtWrSVnp8b5vcg.JPEG.artgihun/common-25.jpg'
// }, {
//     title: '샤잠!',
//     poster: 'https://post-phinf.pstatic.net/MjAxOTAzMjVfMTUw/MDAxNTUzNTA5MDU2ODM0.L433uZPANoGUKty6ZPW1WVbTQaioQP5VAtyeXCe96r0g.x7HgZNrLBOomuVPLcSO-mdXWP4pPRsGhv3YVL6xaoIAg.PNG/IJlCastnz87XXwwTqogiWQWhHtOU.jpg'
// }, {
//     title: '미성년',
//     poster: 'http://imgnews.naver.net/image/109/2019/04/04/0003982974_001_20190404164406674.png'
// }, {
//     title: '극한직업',
//     poster: ''
// },
// ];

class App extends Component {

    state = {
        greeting: 'Good Morning',
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
    }

    componentWillMount() {
        console.log('componentWillMount() called');
    }

    componentDidMount() {
        console.log('componentDidMount() called');
        setTimeout( () => {
            //this.state.greeting = 'Good Afternoon' // 여기서 this는 함수자체 () => 를 사용하면 state의 this를 정확히 가르킴
            this.setState( {  // 위와 같은 방식은 외부변수를 접근하기때문에 함수형에 맞지않음
               greeting: 'Good Afternoon',
            //    movies: this.state.movies.concat( [{
            //        title: '덤보',
            //        poster: 'http://imgnews.naver.net/image/213/2019/01/05/0001080352_001_20190105145320650.jpg'
            //    }])
            movies: [...this.state.movies, { // 앞에 movies 배열을 그대로 가져오고 밑에 이 새로운배열을 붙인다
                title: '덤보',
                poster: 'http://imgnews.naver.net/image/213/2019/01/05/0001080352_001_20190105145320650.jpg'
            }]
            });

            // movies: [{ 
            //     title: '덤보',
            //     poster: 'http://imgnews.naver.net/image/213/2019/01/05/0001080352_001_20190105145320650.jpg'
            // }, ...this.state.movies] // 덤보가 앞에 붙여짐
            // });
        }, 5000);
    }

    render() {
        return (
            <div className='App'>
                <h1>{this.state.greeting}</h1>
                {
                    this.state.movies.map((movie, index) => // 처음에 movies에 데이터가없으면 에러가남
                        <Movie title={movie.title} poster={movie.poster} key={index} />
                    )
                }
            </div>
        );
    }
}

export default App;


// 코드 빌드 순서
// 위에서 아래
// 오른쪽에서 왼쪽으로 인식함
// .은 method를 호출한다 / ,는 그리고 라는 뜻이다
// const 는 상수 선언
// var 은 변수 선언


// rsc를 치면 프로젝트 기본모양 생성

import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    //상태값 선언
    const [count, setCount] = useState([])

    //함수 선언
    const getdata = async () => {

        // 네트워킹을 하고, 데이터를 받아서 count에 담겠다.
        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            // .then(res => console.log(">>>>>>>>>>>>>>>>", res.data.results))
            .then(res => setCount(res.data.results))
            .catch(err => console.log(err));

    }
    //변수 선언

    // 실제 화면에서 보여지는 부분
  return (
      <div>
        {count.map(movie => (
            <>
                <h1>{movie.title}</h1>
                <h2>{movie.release_date}</h2>
                <h3>{movie.popularity}</h3>
            </>
        ))}
        <button type="button" onClick={getdata}> click me </button>
      </div>
  );



};

export default App;

// import React, {Component} from 'react';
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>hello</h1>
//             </div>
//         );
//     }
// }
// export default App;
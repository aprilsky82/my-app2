
// 코드 빌드 순서
// 위에서 아래
// 오른쪽에서 왼쪽으로 인식함
// .은 method를 호출한다 / ,는 그리고 라는 뜻이다
// const 는 상수 선언
// var 은 변수 선언


// rsc를 치면 프로젝트 기본모양 생성

import React, {useState} from 'react';

const App = () => {
    //상태값 선언
    const [count, setCount] = useState(
        [
            {
                title: "Matrix",
                poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
            },
            {
                title: "Full Metal Jacket",
                poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
            },
            {
                title: "Oldboy",
                poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
            },
            {
                title: "Star Wars",
                poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
            }
        ]
    )

    //함수 선언
    const change = () => {
        setCount([
            {
                title: "M",
                poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
            },
            {
                title: "F",
                poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
            },
            {
                title: "O",
                poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
            },
            {
                title: "S",
                poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
            }
        ])
    }
    //변수 선언

    // 실제 화면에서 보여지는 부분
  return (
      <div>
        {count.map(movie => (
            <>
                <h1>{movie.title}</h1>
                <img src={movie.poster} />
            </>
        ))}
        <button type="button" onClick={change}> click me </button>
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
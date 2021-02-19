
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
    const [count, setCount] = useState("송현종")

    //함수 선언
    const change = () => {
        setCount("곽유신")
    }
    //변수 선언

    // 실제 화면에서 보여지는 부분
  return (
      <div>
        <h1>{count}</h1>
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
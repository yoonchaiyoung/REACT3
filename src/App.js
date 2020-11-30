import { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${(props) => (props.colorcode ? props.colorcode : "gray")};

  font-size: 3rem;
`;
// component 바깥쪽에 컨테이너 만들면 됨.
// 기호(``) 안쪽에는 우리가 알고 있는 CSS 문법 그대로 사용하면 됨.(javascript 코드 그대로)
// div의 태그인데 background-color를 바꾼 것.

// 3항 연산자 사용
// A ? B : C
// A가 있으면 B사용, 없으면 C사용

function App() {
  // state 만드는 곳
  const [color, setColor] = useState("white");
  return (
    <>
      <AppContainer colorcode={color}>hello</AppContainer>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        빨
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        초
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        파
      </button>
    </>
  );
}

export default App;

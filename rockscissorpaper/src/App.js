import "./App.css";
import Box from "./component/Box";

// 1. 박스2개(타이틀, 사진정보, 결과값)
// 2. 가위 바위 보 버튼3개
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검정)

function App() {
  return (
    <div className="main">
      <Box title="You" />
      <Box title="Computer" />
    </div>
  );
}

export default App;
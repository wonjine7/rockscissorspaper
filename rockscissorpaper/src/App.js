import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스2개(타이틀, 사진정보, 결과값)
// 2. 가위 바위 보 버튼3개
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검정)

/** 사진을 저장할 수 있는 저장아이템 */
const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/ko/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement2(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    //user == computer tie
    //user == rock, computer == "scissor" user win

    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  const judgement2 = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (computer.name === "Rock")
      return user.name === "Scissors" ? "Win" : "Lose";
    else if (computer.name === "Scissors")
      return user.name === "Paper" ? "Win" : "Lose";
    else if (computer.name === "Paper")
      return user.name === "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;

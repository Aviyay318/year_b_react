import { useState } from "react";
import "./Board.css";

export default function Board() {


    const creatBoard = () => {
        const newBoard = [];
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push({ value: "", color: "black" });
            }
            newBoard.push(row);
        }
        return newBoard;
    };

    const[board,setBoard] = useState(creatBoard())
    const [player1,setPlayer1] = useState({color:"red"});
    const [player2,setPlayer2] = useState({color:"yellow"});
    const [currentPlayer, setCurrentPlayer] = useState("player1")
    const [winner, setWinner] = useState(null)


const drawPlayer =(rowIndex , colIndex)=>{
    if (winner!==null) return
    if (board[rowIndex][colIndex].value !== "")  return;
    const newBoard = [...board];
    newBoard[rowIndex][colIndex].value = currentPlayer;
    newBoard[rowIndex][colIndex].color= currentPlayer==="player1"?player1.color:player2.color;
    setBoard(newBoard);

    if (checkWin()){
          setWinner(currentPlayer)
        }else {
        setCurrentPlayer(currentPlayer==="X"? "O" :"X");
        }


    }

const checkWin =()=>{
    for (let i = 0; i < 3; i++) {
        console.log(board[i][0].value)
        if (board[i][0].value!==""){
            if (board[i][0].value===board[i][1].value && board[i][1].value===board[i][2].value){
                const newBoard = [...board];
                newBoard[i][0].color = "green";
                setBoard(newBoard);
                return true
            }
        }
        if (board[0][i].value!==""){
            if (board[0][i].value===board[1][i].value && board[1][i].value===board[2][i].value){
                return true
            }
        }
    }
    if (board[0][0].value!==""){
        if (board[0][0].value===board[1][1].value && board[1][1].value===board[2][2].value){
            return true
        }
     }
    if (board[0][2].value!==""){
        if (board[0][2].value===board[1][1].value && board[1][1].value===board[2][0].value){
            return true
        }
    }
    return false;
}

const resetBoard=()=>{
    setWinner(null)
    setCurrentPlayer("X")
    setBoard(creatBoard())
}


const print=()=>{
        return (
            <h2>משחק איקס עיגול</h2>
        )
}


    return (
        <div>

            {print()}

            {winner !== null &&
                <p>The winner is {winner}</p>}

            <div className="board-container">
                {board.map((row, r) =>
                    row.map((col, c) => (
                        <div
                            key={r + ":" + c}
                            className="board-cell"
                            style={{ color: col.color }}
                            onClick={() => drawPlayer(r ,c)}
                        >
                            {col.value}
                        </div>
                    ))
                )}
            </div>
<button onClick={resetBoard}>Reset Board</button>

        </div>
    );
}

import { useState } from 'react';

function Square({value, onSquareClick}) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	) 
  }
	

export default function Board() {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null)); //initialize an array of length 9. each value is null.

	function handleClick(index) {
		//check if the value of the square is not null
		//check if a player has already won the game
		if (squares[index] || calculateWinner(squares)) {
			return; //if the square has already been chosen or the game is over, don't let the user pick it!
		}

		const nextSquares = squares.slice(); //make a copy of the squares array
		//check whose turn it is
		//set the value of our copy of squares[index] bc it was clicked
		if (xIsNext) {
			nextSquares[index] = "X";
		} else {
			nextSquares[index] = "O";
		}
		setSquares(nextSquares); //replace the squares array with our modified copy. This will re-render any component reliant on the squares State.
		setXIsNext(!xIsNext);
	}

	//add text that displays game status. Who goes next or who won.
	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<>
		<div className='status'>{status}</div>
		  <div className="board-row">
			<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
			<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
			<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
		  </div>
		  <div className="board-row">
			<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
			<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
			<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
		  </div>
		  <div className="board-row">
			<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
			<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
			<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
		  </div>
		</>
	  );


	  function calculateWinner(squares) {
		//take in the squares array and check if there is a winner (x, o, null)
		const lines = [
		  [0, 1, 2],
		  [3, 4, 5],
		  [6, 7, 8],
		  [0, 3, 6],
		  [1, 4, 7],
		  [2, 5, 8],
		  [0, 4, 8],
		  [2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
		  const [a, b, c] = lines[i];
		  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		  }
		}
		return null;
	  }
  }
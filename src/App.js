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
		if (squares[index]) {//check if the value of the square is not null
			return; //if the square has already been chosen, don't let the user pick it!
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

	return (
		<>
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
  }
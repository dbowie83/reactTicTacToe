import { useState } from 'react';

function Square({value, onSquareClick}) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	) 
  }
	

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null)); //initialize an array of length 9. each value is null.

	function handleClick(index) {
		const nextSquares = squares.slice(); //make a copy of the squares array
		nextSquares[index] = "X"; //set the value of our copy of squares[index] to "X" bc it was clicked
		setSquares(nextSquares); //replace the squares array with our modified copy. This will re-render any component reliant on the squares State.
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
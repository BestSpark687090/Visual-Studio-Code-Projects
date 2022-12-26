// Returns true if the puzzle is solved, false otherwise
const puzzle = [
    [1, 2, 10,11],
    [3,null,8,7],
    [12,4,5,6],
    [13,15,9,14]
  ];
  
  
  
async function isSolved(puzzle) {
    let expected = 1;
    for (let row = 0; row < puzzle.length; row++) {
      for (let col = 0; col < puzzle[row].length; col++) {
        if (puzzle[row][col] !== expected) {
          return false;
        }
        expected++;
      }
    }
    return true;
}
  
// Makes a move in the puzzle by sliding the tile at the specified position into the empty space
async function makeMove(puzzle, row, col) {
    const temp = puzzle[row][col];
    puzzle[row][col] = puzzle[emptyRow][emptyCol];
    puzzle[emptyRow][emptyCol] = temp;
}

async function solvePuzzle(puzzle) {
    // Keep track of the current state of the puzzle
    let currentPuzzle = puzzle;
  
    // Keep track of the position of the empty tile
    let emptyRow = 0;
    let emptyCol = 0;
  
    // Keep track of the number of moves made
    let moves = 0;
  
    // Keep making moves until the puzzle is solved
    while (! await isSolved(currentPuzzle).then(bool => bool)) {
      // Find the shortest path to the solved state
      const path = await findShortestPath(currentPuzzle, emptyRow, emptyCol, 0, 0).then(never => never);
  
      // Make all of the moves in the shortest path
      for (const move of path) {
        await makeMove(currentPuzzle, move.row, move.col);
        console.log("we made a move")
        emptyRow = move.row;
        emptyCol = move.col;
        moves++;
      }
    }
  
    return moves;
}

// Finds the shortest path to move the tile at the start position to the end position
async function findShortestPath(puzzle, startRow, startCol, endRow, endCol) {
    // Use a breadth-first search to find the shortest path
    const queue = [{row: startRow, col: startCol, path: []}];
    const visited = new Set();
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.row === endRow && current.col === endCol) {
        return current.path;
      }
      if (visited.has(current.row + "," + current.col)) {
        continue;
      }
      visited.add(current.row + "," + current.col);
      if (current.row > 0) {
        // Move up
        queue.push({
          row: current.row - 1,
          col: current.col,
          path: current.path.concat([{row: current.row - 1, col: current.col}])
        });
        continue;
      }
      if (current.row < puzzle.length - 1) {
        // Move down
        queue.push({
          row: current.row + 1,
          col: current.col,
          path: current.path.concat([{row: current.row + 1, col: current.col}])
        });
        continue;
      }
      if (current.col > 0) {
        // Move left
        queue.push({
              row: current.row,
              col: current.col - 1,
              path: current.path.concat([{ row: current.row, col: current.col - 1 }])
          });
        continue;
      }
      if (current.col < puzzle[0].length - 1) {
        // Move right
        queue.push({
          row: current.row,
          col: current.col + 1,
          path: current.path.concat([{row: current.row, col: current.col + 1}])
        });
        continue;
      }
    }
    throw new Error("Unable to find shortest path");
}
solvePuzzle(puzzle).then(function(moves){
    console.log(`Number of moves: ${moves}`)
});
class MazeSolver {
    constructor(maze, start, end) {
        this.maze = maze;
        this.currentLocation = [start.y, start.x];
        this.end = [end.y, end.x];
        this.visitedCells = []; 
    }

    solve() {
        let solution = this.backTrack();

        if (!solution) {
            return this.visitedCells;
        } else {
            return this.visitedCells;
        }
    }

    backTrack() {
        this.visitedCells.push(this.currentLocation);

        if (this.isEnd(this.currentLocation, this.end)) {
            return true;
        } else {
            let neighbors = this.getNeighbors();
            for (let neighbor of neighbors) {
                if (this.isValid(neighbor)) {
                    this.currentLocation = neighbor;

                    if (this.backTrack()) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    isEnd() {
        return this.currentLocation[0] === this.end[0]
            && this.currentLocation[1] === this.end[1];
    }

    getNeighbors() {
        let [row, col] = [this.currentLocation[0], this.currentLocation[1]];
        let [height, width] = [this.maze.length, this.maze[0].length];

        let moves = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]];
        return moves.filter(move => move[0] >= 0 && move[0] < height && move[1] >= 0 && move[1] < width);
    }

    isValid(location) {
        let [row, col] = [location[0], location[1]];
        return this.maze[row][col] !== '#' && !this.visitedCells.some(a => [row, col].every((v, i) => v === a[i]));
    }
}

export default MazeSolver;
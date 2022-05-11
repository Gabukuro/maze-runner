import { useContext, useEffect, useState } from "react";
import { MazeContext } from "../../Context/MazeContext";
import { Button } from "@mui/material";
import MazeSolver from "../../Utils/MazeSolver";

import './style.css';

function MazeContainer() {

    const { tempMaze, setTempMaze, start, end } = useContext(MazeContext);
    const [ currentLocation, setCurrentLocation ] = useState({ x: start.x, y: start.y });

    useEffect(() => {
    }, [currentLocation]);

    const renderMaze = () => {
        return tempMaze.map(row => {
            return <span className="row" key={row.toString()}>
                {row.map((cell, index) => {
                    return <img key={index} src={`/images/${parseCell(cell)}.png`} alt={`${parseCell(cell)}`} width={20} />
                })}
            </span>
        });
    }

    const parseCell = (cell) => {

        let cellsParses = [
            { cell: '#', type: 'wall' },
            { cell: '.', type: 'empty' },
            { cell: 'S', type: 'mouse' },
            { cell: 'E', type: 'door' },
            { cell: 'X', type: 'visited' },
            { cell: 'C', type: 'cheese' },
        ]

        return cellsParses.find(e => e.cell === cell).type;
    }

    const solveMaze = () => {
        let mazeSolver = new MazeSolver(tempMaze, start, end);
        let solution = mazeSolver.solve();

        solution.forEach((move, index) => {
            setTimeout(() => {
                if(index !== 0) {
                    let lastMove = solution[index - 1];
                    tempMaze[lastMove[0]][lastMove[1]] = 'X';
                }

                if(tempMaze[move[0]][move[1]] == 'C') {
                    playAudio();
                }

                tempMaze[move[0]][move[1]] = 'S';
                setCurrentLocation({ x: move[1], y: move[0] });
                setTempMaze(tempMaze);
            }, index * 250);
        });
    }

    const playAudio = () => {
        let randInt = Math.floor(Math.random() * 4) + 1;
        var audio = new Audio(`/audio/arroto_${randInt}.mp3`);
        audio.play();
    }

    return (
        <>
            <div className="maze-container">
                {tempMaze.length > 0 && renderMaze()}
            </div>

            <Button
                variant="contained"
                component="label"
                sx={{ mt: 3 }}
                onClick={() => solveMaze()}
            >
                Solve Maze
            </Button>
        </>
    )
}

export default MazeContainer;
import React, { createContext, useEffect } from 'react';

export const MazeContext = createContext({
    maze: [],
    setMaze: () => {},
    tempMaze: [],
    setTempMaze: () => {},
    width: 0,
    setWidth: () => {},
    height: 0,
    setHeight: () => {},
    start: { x: 0, y: 0 },
    setStart: () => {},
    end: { x: 0, y: 0 },
    setEnd: () => {},
    cheeses: [],
    setCheeses: () => {},
});

export const MazeProvider = ({ children }) => {

    const [maze, setMaze] = React.useState([]);
    const [tempMaze, setTempMaze] = React.useState([]);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [start, setStart] = React.useState({ x: 0, y: 0 });
    const [end, setEnd] = React.useState({ x: 0, y: 0 });
    const [cheeses, setCheeses] = React.useState([]);

    useEffect(() => {
    }, [maze])

    return (
        <MazeContext.Provider
            value={{
                maze,
                setMaze,
                tempMaze,
                setTempMaze,
                width,
                setWidth,
                height,
                setHeight,
                start,
                setStart,
                end,
                setEnd,
                cheeses,
                setCheeses,
            }}
        >
            {children}
        </MazeContext.Provider>
    )
}
import { useContext } from 'react';
import { Button } from '@mui/material';
import { MazeContext } from '../../Context/MazeContext';

function UploadForm() {

    const { setMaze, setWidth, setHeight, setStart, setEnd, setCheeses } = useContext(MazeContext);

    const handleUpload = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = (event) => {
            let file = event.target.result;
            let allLines = file.split(/\r\n|\n/);
            let tempStart = { x: 0, y: 0 };
            let tempEnd = { x: 0, y: 0 };
            let tempmaze = [];
            let tempCheeses = [];

            allLines.forEach(line => {
                const lineArray = line.split('');
                tempmaze.push(lineArray);
                lineArray.forEach(cell => {
                    if (cell === 'S') {
                        tempStart = { x: lineArray.indexOf(cell), y: allLines.indexOf(line) };
                    }
                    if (cell === 'E') {
                        tempEnd = { x: lineArray.indexOf(cell), y: allLines.indexOf(line) };
                    }
                    if (cell === 'C') {
                        tempCheeses.push({ x: lineArray.indexOf(cell), y: allLines.indexOf(line) });
                    }
                })
            });

            setHeight(allLines.length);
            setWidth(allLines[0].length);
            setCheeses(tempCheeses);
            setStart(tempStart);
            setEnd(tempEnd);
            setMaze(tempmaze);
        }

        reader.readAsText(file);
    }

    return (
        <Button
            variant="contained"
            component="label"
            sx={{ mb: 3 }}
        >
            Upload Maze
            <input
                type="file"
                hidden
                onChange={handleUpload}
            />
        </Button>
    )
}

export default UploadForm;
import {useState} from 'react'

const LearnState = () => {
    const [num,SetNum] = useState(0)
    console.log("Number",num);
    const handleNum = () => {
        SetNum(5);
    }

    const [position,setPosition] = useState({x:1,y:2})
    const handlePosition = () => {
        setPosition({x:position.x+1,y:position.y+1});
    }
    console.log("Position",position)
  return (
    <div>
        <h1>Number: {num}</h1>
        <button onClick={handleNum}>Change Number</button>
        <h1>Position : {position.x} {position.y}</h1>
        <button onClick={handlePosition}>Change Pos</button>
    </div>
  )
}

export default LearnState
import axios from 'axios';
import React,{useState, useEffect} from 'react'; // react component. STATE display edits
import Button from '../common/Button'
function Test() {

    const [counter, setCounter] = useState(0); //counter stores data. setCounter updates counter. useState is starting counter for the "counter varibale"
    const [schools, setSchools] = useState({})

    const increaseCounter = () => {
        setCounter(counter+1); //const allows the function to update (not change) and rerun the function. 
    }

    useEffect(() => {
        const getSchools = async () => {
           const res = await axios.get ("http://localhost:8080/api/schools/");
           console.log(res.data); 
        }
        getSchools();
    }, [])

    return (
        <div>
            <h1> Test Component</h1>
            <p>{counter}</p>
            <Button onClick={increaseCounter}> 
                Increase 
            </Button>
        </div>
    
    );
}

export default Test; 
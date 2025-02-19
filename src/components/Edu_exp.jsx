import { useState } from "react";

function Edu_exp(props) {
    const [data, setData] = useState({schoolName: "", titleStudy: "", dateStudy: "" });
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setData(prev => {
            return {
                ...prev, 
                [name]: value
            } 
        })
    }

    function submitData(event) {
        props.onAdd(data);
        setData({schoolName: "", titleStudy: "", dateStudy: ""});
        setIsExpanded(false);
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return <div>
        <form>
            <label>School Name</label>
            <input onClick={expand} type="text" onChange={handleChange} name="schoolName" value={data.schoolName} />

           {isExpanded && <><label >Title of Study</label>
            <input type="text" onChange={handleChange} name="titleStudy" value={data.titleStudy} />
            <label>Date of Study</label>
            <input type="text" onChange={handleChange} name="dateStudy" value={data.dateStudy} /><br/>
            <button onClick={submitData}>Submit</button></>
           }
        </form>
    </div>
}

export default Edu_exp;
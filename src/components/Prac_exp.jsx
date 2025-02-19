import { useState } from "react";

function Prac_exp(props) {
    const [data, setData] = useState({compName: "", posTitle: "", jobResp: "", dateFromUntil: "" });
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
        setData({compName: "", posTitle: "", jobResp: "", dateFromUntil: "" });
        setIsExpanded(false);
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return <div>
        <form>
            <label>Company Name</label>
            <input onClick={expand} type="text" onChange={handleChange} name="compName" value={data.compName} />

           {isExpanded && <><label >Title of Study</label>
            <input type="text" onChange={handleChange} name="posTitle" value={data.posTitle} />
            <label>Main job responsibilities</label>
            <textarea rows="3" type="text" onChange={handleChange} name="jobResp" value={data.jobResp} />
            <label>Date from and until</label>
            <input type="text" onChange={handleChange} name="dateFromUntil" value={data.dateFromUntil} /><br/>
            <button onClick={submitData}>Submit</button></>
           }
        </form>
    </div>
}

export default Prac_exp;
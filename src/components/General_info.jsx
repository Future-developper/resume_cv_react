import '../styles/General_info.css';
import { useState } from 'react';

function General_info() {
    const [data, setInfo] = useState({name: "", email: "", phone: ""});
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setInfo(prev => {
            return {
                ...prev, [name]: value};
        })
    }

    function handleClick(event) {
        setIsSubmitted(!isSubmitted);
        event.preventDefault();

    }

    return <div>
        <form>
            <label>{isSubmitted ? data.name : "Name"} </label>
            {!isSubmitted && <input name="name" onChange={handleChange} type='text' id='text1' placeholder='Your Name' value={data.name} />}
            <label>{isSubmitted ? data.email : "Email"} </label>
            {!isSubmitted && <input name="email" onChange={handleChange} type='text' id='text1' placeholder='Your Email' value={data.email} />}
            <label>{isSubmitted ? data.phone : "Phone"}</label>
            {!isSubmitted && <input name="phone" onChange={handleChange} type='text' id='text1' placeholder='Your Phone' value={data.phone} />}<br/>
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleClick}>Edit</button>

        </form>

    </div>
}

export default General_info;
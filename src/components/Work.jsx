import '../styles/School.css';


function Work(props) {
    return <div className="school">
        <h6>Company Name</h6>
        <p>{props.name}</p>
        <h6>Position title</h6>
        <p>{props.title}</p>
        <h6>Main job responsibilities</h6>
        <p>{props.resp}</p>
        <h6>Date from and until</h6>
        <p>{props.date}</p>
        <button onClick={() => {return props.onDelete(props.id)}}>Delete</button>
    </div>
}

export default Work;
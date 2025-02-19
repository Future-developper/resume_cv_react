import '../styles/School.css';


function School(props) {
    return <div className="school">
        <h6>School name</h6>
        <p>{props.name}</p>
        <h6>Title of study</h6>
        <p>{props.title}</p>
        <h6>Date of study</h6>
        <p>{props.date}</p>
        <button onClick={() => {return props.onDelete(props.id)}}>Delete</button>
    </div>
}

export default School;
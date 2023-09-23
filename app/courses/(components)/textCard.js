
export default function TextCard(props) {
    return (
        <div className="course-col">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

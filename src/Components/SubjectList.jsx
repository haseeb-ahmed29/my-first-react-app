function SubjectList(props){
    return(
        <div>
        <h3>My subjects</h3>
        <ul>
        {props.subjects.map((subject,index)=>(
            <li key={index}>{subject}</li>
        ))}
        </ul>
        </div>
    )

}
 export default SubjectList;
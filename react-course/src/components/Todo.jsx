
function Todo(props){

    return (

        <div className="todo-item">
        <h2> {props.task} </h2>
        <button ocClick={()=>{
            console.log("button clicked")
        }}>Delete</button>
        </div>
    )



}

export default Todo;
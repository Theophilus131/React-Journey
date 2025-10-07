

function Button() {

    
    const handleClick = () => {console.log("Button Clicked")}  
    
    const handleClickAgain = (name) => {console.log(`${name} stop clicking me`)}


return(
    <button onClick = {() => handleClickAgain("theo")}> Click Me</button>

)

}

export default Button;
import React, {useState} from "react";
import './LoginSignup.css'




export const LoginSingup = () => {

    const  [action, setAction] = useState ("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action} </div>

            <div className="underline"></div>
        </div>

    
            <div className="inputs">
                {action==="Login"? <div></div>:<div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder='Name' />
                </div>}
                

                <div className="input">
                    <img src="" alt="" />
                    <input type="email" placeholder=' email' />
                </div>

                <div className="input">
                    <img src="" alt="" />
                    <input type="password" placeholder='password' />
                </div>

                
            </div>

                     {action ==="Sign up"? <div></div>: <div className="forget-password">Lost Password? <span>Click Here</span></div>}

                   
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>



    </div>
  )
}


export default LoginSingup

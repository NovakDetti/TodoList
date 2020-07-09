import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';

//style
import './auth.style.scss';

//user service
import { loginUser, signUpUser } from '../../service/userService'; 
import Swal from 'sweetalert2';

function Auth (){
    let[isMember, setMember] = useState(false);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [isCorrect, setCorrect] = useState(false);

    if (isCorrect) {
        Swal.fire(`Welcome ${name}`)
        return <Redirect to={{
            pathname: '/categories'
        }}
        />
    }
    return(
        <div className="auth-container">
            <div id="letterhead-image">
            </div>
            <h3>Be organized</h3>
            <div className="signup-or-login-container">
                {
                    isMember ? 
                        <div className="auth-box">
                            <h4>Log in</h4>
                            <p>Email:</p>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} ></input>
                            <p>Password:</p>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                            <button onClick={() => loginUser({ "email": email, "password": password }).then(setCorrect(true))}>Log in</button>
                            <p id="change-ref" onClick={ () => setMember(false)}>Or if you have don't have an account, sign up</p>
                        </div>
                    :
                        <div className="auth-box">
                            <h4>Sign up</h4>
                            <p>Name:</p>
                            <input type="text" onChange={(e) => setName(e.target.value)}></input>
                            <p>Email:</p>
                            <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                            <p>Password:</p>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                            <button onClick={() => signUpUser({ "name": name, "email": email, "password": password }).then(setCorrect(true))}>Sign up</button>
                            <p id="change-ref" onClick={() => setMember(true)}>Or if you have an account, log in</p>
                        </div>
                    
                }
            </div>
        </div>
    )
}

export default Auth;
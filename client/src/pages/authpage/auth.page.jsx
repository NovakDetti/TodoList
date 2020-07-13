import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';

//style
import './auth.style.scss';

//user service
import { loginUser, signUpUser } from '../../service/userService'; 

//popup
import Swal from 'sweetalert2';

//redux
import { connect } from "react-redux";
import { current_user } from "../../redux/actions";

function Auth ({current_user}){
    let[isMember, setMember] = useState(false);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [birthday, setBirthday] = useState("");
    let [isCorrect, setCorrect] = useState(false);


    let loginCurrentUser = () => {
        loginUser({ "email": email, "password": password })
        .then(res => res.json())
        .then( data => sessionStorage.setItem("token",data.token))
        .then(setCorrect(true))
        .then(current_user(email))
    }

    let userRegistration = () => {
        signUpUser({ "name": name, "email": email, "password": password, "birthday": String(birthday) })
        .then(res => res.status !== 400 ?
            setCorrect(true)
            :
            Swal.fire("Wrong credentials")
        ).then(current_user(email))
    }

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
                            <button onClick={loginCurrentUser}>Log in</button>
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
                            <p>Birthday:</p>
                            <input type="date" onChange={(e) => setBirthday(e.target.value)}></input>
                            <button onClick={userRegistration}>Sign up</button>
                            <p id="change-ref" onClick={() => setMember(true)}>Or if you have an account, log in</p>
                        </div>
                    
                }
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return ({
        current_user: (email) => { dispatch(current_user(email)) }
    })
}

export default connect(null, mapDispatchToProps)(Auth);
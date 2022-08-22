import React, { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
    
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState();

    const emailRef = useRef();
    const passRef = useRef();

    const isStart = () =>{
        setEmail(emailRef.current.value);
        console.log(email);
        emailRef.current.value = '';
    }

    const isFinish = () =>{
        setPass(passRef.current.value);
        console.log(pass);
        passRef.current.value = '';
    }
    
    return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <button className='loginButton'>Sign Up</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and much more</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" className="email" placeholder="Enter Email" ref={emailRef}/>
                    <button className="registerButton" onClick={isStart}>Get Started</button>
                </div>
            ) : (
                <form className="input">
                    <input type="password" className="email" placeholder="Enter Password" ref={passRef}/>
                    <button className="registerButton" onClick={isFinish}>Start</button>
                </form>
            )
            
            }
        </div>
    </div>
  )
}

export default Register
import React, { useState  } from 'react';

export default function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = ({target}) => target.name === "username" ? setUsername(target.value) : setPassword(target.value)
    return( 
        <form className="sign-up-form">
            <label>Username</label>
            <input name="username" value={username} onChange={handleChange}/>
            <label>Email</label>
            <input name="email" value={email} onChange={handleChange}/>
            <label>Password</label>
            <input name="password" value={password} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}
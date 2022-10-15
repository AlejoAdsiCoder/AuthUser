import React, { useContext, useState } from 'react'
import { loginUser } from '../../context'
import { AuthContext, AuthDispatchContext } from '../../context/context'
import './Login.scss'

// interface userLogin {
//     email: string,
//     password: string
// }


export const Login = (props: any) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            let response = await loginUser(AuthDispatchContext, { email, password })
            if (!response.user) return
            props.history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
         
      // async request to the server
     }

  return (
    <div>
        <div className="container">
            <div style={{ width: 200 }}>
                <h1>Login Page</h1>
               
                <form >
                    <div className="loginForm">
                        <div className="loginFormItem">
                            <label htmlFor="email">Username</label>
                            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="loginFormItem">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                        </div>
                    </div>
                    <button onClick={handleLogin}>login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

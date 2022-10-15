import React, { useContext } from 'react'
import { logout } from '../../context';
import { AuthContext, AuthDispatchContext } from '../../context/context'

export const Profile = (props: any) => {
  const dispatch = useContext(AuthDispatchContext);
  const userDetails = useContext(AuthContext);

  const handleLogout = () => {
    logout(dispatch) //call the logout action
    
    props.history.push('/login') //navigate to logout page on logout
  }

  return (
    <>
    <div style={{ padding: 10 }}>
          <h1>
              Profile
          </h1>
          <p className='profilePage'>Welcome {userDetails}</p>
    </div>
    </>
  )
}

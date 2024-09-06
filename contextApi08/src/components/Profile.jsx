import React, {useContext, usercontext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
  const {user} = useContext(UserContext)
 
  if(!user) return <div>please Login</div> 
  
  return <div>Welcome {user.username}</div>
}

export default Profile
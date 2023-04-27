import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import useUserCrud from './hooks/useUserCrud'
import FormUser from './components/FormUser'

function App() {
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  
const { users, getAllUsers, createNewUser, deleteUserById, updateUserById
} = useUserCrud()

useEffect(() => {
  getAllUsers
}, [])

const handleOpenForm= () =>{
  setFormClose(false)
}
  return (
    <div className="App">
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleOpenForm}>Create new user</button>
      </header>
        <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
        />
        <div className='app__user-container' >
          {
            users?.map(user =>(
              <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
              />
            ))
          }
        </div>
    </div>
  )
}

export default App

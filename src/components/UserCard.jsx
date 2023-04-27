import './styles/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

const handleDelete = () => {
    deleteUserById(user.id);
};
const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm(true)

}

  return (
    <article className="user">
        <h2 className="user__name">{user.first_name} {user.last_name}</h2>
        <ul className="user__list">
            <li className="user__item"><span className='user__label'>Email</span><span className='user__value'>{user.email}</span></li>
            <li className="user__item"><span className='user__label'>birthday</span><span className='user__value'>{user.birthday}</span></li>
        </ul>
        <footer className="user__footer">
            <button className="user__btn user__delete" onClick={handleDelete} ><i class="fa-regular fa-trash-can"></i></button>
            <button className="user__btn user__update" onClick={handleUpdate}><i class="fa-regular fa-pen-to-square"></i></button>
        </footer>
    </article>
  )
}

export default UserCard
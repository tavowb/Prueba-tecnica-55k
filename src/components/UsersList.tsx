import { SortBy, type User } from '../types.d'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList ({ users, showColors, changeSorting, deleteUser }: Props) {
  return (
    <table width='100%'>
        <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.LAST) }}>Apellido</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.COUNTRY) }}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
        <tbody>
            {users.map((user, index) => {
              const backGroundColor = index % 2 === 0 ? '#555555' : '#333333'
              const color = showColors ? backGroundColor : 'transparent'
              return (
                    <tr key={user.login.uuid} style={{ backgroundColor: color }} >
                    <td>  <img src={user.picture.thumbnail} alt={user.name.first} /> </td>
                    <td>{user.name.first}</td>
                    <td> {user.name.last} </td>
                    <td> {user.location.country} </td>
                    <td> <button type='button' onClick={() => {
                      deleteUser(user.login.uuid)
                    } } >Borrar</button> </td>
                </tr>
              )
            })}

        </tbody>
    </table>

  )
}

// table, thead, tbody, th, td, tr <- these are the tags that we need to use
// tr = table row
// td = table data
// th = table header

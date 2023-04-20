import { useUsers } from '../hooks/useUsers'

export const Resultados = () => {
  const { users } = useUsers()
  return (
        <h3> Resultados: {users.length } </h3>
  )
}

export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(`https://randomuser.me/api?page=${pageParam}&results=10&seed=gusha`)
    .then(async res => {
      if (res.ok) {
        return await res.json()
      } else {
        console.log(res.ok, res.status, res.statusText)
        throw new Error('Error en la petición')
      }
    })
    .then(res => {
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage > 5 ? undefined : currentPage + 1
      return {
        users: res.results,
        nextCursor
      }
    })
}

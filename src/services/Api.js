export const getPersonajes = async (filter) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${filter}`
      )
      const data = await response.json()
      console.log(data.results)
     
      // setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
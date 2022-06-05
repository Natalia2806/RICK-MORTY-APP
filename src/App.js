import Logo from './assets/logo.png'
import { useState, useEffect } from 'react'
import { Search } from './components/Search'
import { Card } from './components/Card'


function App() {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  //Realizamos llamado a la API
  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${filter}`
        )
        const data = await response.json()
        console.log(data.results)
        setPersonajes(data.results)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPersonajes()
  }, [filter])

  return (
    <div className="container">
      <figure className='logo'>
        <img src={Logo} alt='Logo de Rick & Morty' />
      </figure>

      <Search filter={filter} setFilter={setFilter} />

      <section className='lista-personajes'>
        {personajes === undefined || personajes.length === 0 ? (
          <p>
            No se encontro personajes con la busqueda{' '}
            <strong>"{filter}"</strong>.
          </p>
        ) : personajes.map((personaje) => (
          <Card key={personaje.id} personaje={personaje} />
        ))
        }

      </section>
    </div>
  );
}

export default App;

import Logo from './assets/logo.png'
import { useState, useEffect } from 'react'
function App() {
  const [personajes, setPersonajes] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')

  //Realizamos llamado a la API
  useEffect(() => {
		const getPersonajes = async () => {
			try {
				const response = await fetch(
					'https://rickandmortyapi.com/api/character/?name=Baby&status=alive'
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
	}, [])

  return (
    <div className="container">
      <figure className='logo'>
				<img src={Logo} alt='Logo de Rick & Morty' />
			</figure>
      {/* <header className="App-header">
        
      </header> */}
    </div>
  );
}

export default App;

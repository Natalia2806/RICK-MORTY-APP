export const Search = ({ filter, setFilter }) => {
    const handleInput = ({ target }) => {
		setFilter(target.value)
	}
	return (
		<section className='filtrar'>
			<input
				type='text'
				placeholder='Nombre del personaje'
				name='buscar'
                onChange={handleInput}
				value={filter}
			/>
            
		</section>
	)
}

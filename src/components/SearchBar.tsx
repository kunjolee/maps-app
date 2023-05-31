import { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context'

export const SearchBar = () => {
  const debounceRef = useRef<any>();
  const { searchPlacesByQuery } = useContext(PlacesContext);
  
  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    // para crear un debounce time, lo que hago es, limpiar el setTimeout siempre que el usuario este escribiendo, asi ese asi el setTimeOUt no se ejecuta mientras el usuario escribe. Una vez el evento on change ya no se ejecuta, significa el usuario dejo de escribir, entonces ahi el ultimo set timeout que no se limpio, es el que se va a ejecutar

    if(debounceRef.current) 
      clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(event.target.value)
      
      
    }, 350)
  }
    return (
      <div className='search-container'>
        <input 
            type="text" 
            className='form-control' 
            placeholder='Search place'
            onChange={onQueryChanged}
        />
      </div>
  )
}
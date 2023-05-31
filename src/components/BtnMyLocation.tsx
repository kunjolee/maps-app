import { useContext } from 'react'
import { MapContext, PlacesContext } from '../context'

export const BtnMyLocation = () => {
  const { map, isMapReady} = useContext(MapContext)
  const { userLocation } = useContext(PlacesContext)

  const onClick = () => {
    // el mapa este listo y la ubicacion del usuario
    if(!isMapReady) throw new Error('Map is not ready')
    if(!userLocation) throw new Error('User location not available')

    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
  }
  return (
    <button 
      onClick={onClick}
        className='btn btn-primary'
        style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 999
        }}
    >
        My location
    </button>
  )
}
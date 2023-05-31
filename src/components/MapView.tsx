import { useContext, useLayoutEffect, useRef } from 'react'
import { PlacesContext, MapContext } from '../context';
import { BtnMyLocation, Loading, SearchBar } from './';
import { Map } from 'mapbox-gl';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext)
  const mapDiv = useRef<HTMLDivElement>(null);


  useLayoutEffect(()=>{

    if(!isLoading){
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

      setMap(map);
    }
    
  }, [isLoading])


  if (isLoading) {
    return <Loading />
  }

 
  return (
    <>
      <BtnMyLocation />
      <SearchBar/>
      <div 
        ref={ mapDiv }
        style={{
          height: '100vh',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100vw',
        }}
      />
    </>
  )
}
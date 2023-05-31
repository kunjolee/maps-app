import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp.tsx'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = `${import.meta.env.VITE_MAP_TOKEN}`;
if ( !navigator.geolocation ) {
  alert("Your browser doesn't have geolocation option");
  throw new Error("Your browser doesn't have geolocation option");
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <MapsApp />
)

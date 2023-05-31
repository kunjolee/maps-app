import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [ number, number ]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

  const [ state, dispatch ] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation()
      .then( coords => {
        dispatch({type: 'setUserLocation', payload: coords})
      })
  }, []);

  const searchPlacesByQuery = async (query: string) => {
      if(query.length === 0) return [];//TODO: limpiar state
      if(!state.userLocation) throw new Error('User location unavailable');

      const res = await searchApi.get(`/${ query }.json`, {
        params: {
          proximity: state.userLocation.join(',')
        }
      });

      console.log(res.data)
      
      return res.data
  }

  return (
    <PlacesContext.Provider 
      value={{
        ...state,
        searchPlacesByQuery
      }}
    >
      { children }
    </PlacesContext.Provider>
  )
}
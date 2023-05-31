import { createContext } from 'react';

interface PlacesContextProps  {
    isLoading: boolean;
    userLocation?: [ number, number ];
    // methods
    searchPlacesByQuery: (query: string) => Promise<any>
}


export const PlacesContext = createContext( {} as PlacesContextProps );
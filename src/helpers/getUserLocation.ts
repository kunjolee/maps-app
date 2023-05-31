



export const getUserLocation = async (): Promise<[number,number]> => {
    return new Promise( ( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { coords } = position; 
                resolve([coords.longitude, coords.latitude])

            },
            (error) => {
                console.log('Error getting user location',error);
                alert("Could not get user location");
                reject();
            }
        )
    });
}
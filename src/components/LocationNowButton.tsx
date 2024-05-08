import { Geolocation } from '@ionic-native/geolocation';
import { IonButton } from '@ionic/react';
import { useDispatch } from 'react-redux';
import saveData from '../redux/actions.js';

export const LocationNowButton = () => {
  const dispatch = useDispatch();

  const getLocation = () => {
    Geolocation.getCurrentPosition().then((resp) => {
      const { latitude, longitude } = resp.coords
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
          const { postcode } = data.address

          const dataToSave = [{
            latitude, longitude, postcode
          }]
    
          dispatch(saveData(dataToSave));
        })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  return (
    <IonButton className="ion-text-wrap" onClick={getLocation}>LOCATION NOW</IonButton>
  )
}
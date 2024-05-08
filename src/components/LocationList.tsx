import store from '../redux/store.js';
import './LocationList.css';

export const LocationList = () => {
  return (
    <div className='locationList'>
      <div className='locationListTitle'>
        <p>Latitude</p>
        <p>Longitude</p>
        <p>Zip Code</p>
      </div>
      { store.getState().dataArray.map((location, index) => (
        <div key={index} className='locationListItem'>
          <p>{location.latitude}</p>
          <p>{location.longitude}</p>
          <p>{location.postcode}</p>
        </div>
      )) }
    </div> 
  )
}
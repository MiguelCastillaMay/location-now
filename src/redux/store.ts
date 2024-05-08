import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers'; // Assuming locationReducer is defined in a separate file

const store = configureStore({
  reducer: 
    locationReducer // Assuming you want to store location data under the "location"
  });

export default store;
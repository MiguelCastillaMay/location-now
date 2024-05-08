import { AnyAction } from '@reduxjs/toolkit';

interface LocationState {
  dataArray: {
    latitude: number,
    longitude: number,
    postcode: number
  }[]; // Adjust this type according to the structure of your data
}

const initialState: LocationState = {
  dataArray: []
};

const locationReducer = (state = initialState, action: AnyAction): LocationState => {
  switch(action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        dataArray: state.dataArray.concat(action.payload)
      };
    default:
      return state;
  }
};

export default locationReducer;
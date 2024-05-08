type saveDataProps = {
  latitude: number,
  longitude: number,
  postcode: number
}

const saveData = (data: saveDataProps[]) => ({
  type: 'SAVE_DATA',
  payload: data
});

export default saveData;
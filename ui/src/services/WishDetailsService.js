import axios from 'axios'

const expressDomain = process.env.REACT_APP_expressDomain || 'http://localhost:3002'

const getWishDetails = async (id) => {
  let response = await axios.get(`${expressDomain}/wishes/${id}`);
  return response.data;
}

const makeAWish = async(wish) => {
  let response = await axios.post(`${expressDomain}/wishes`, wish)
  return response.data;
}

export const getWishes = async (types) => {
  let typeParams = types && types.length ? `?types=${types.toString()}&sort=desc` : '?sort=desc';
  // TODO query param options
  const { data } = await axios.get(`${expressDomain}/wishes${typeParams}`)
  return data
}

export default {
  getWishDetails,
  makeAWish,
  getWishes
}

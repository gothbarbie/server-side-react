import axios from 'axios'

export const FETCH_USERS = 'fetch_users'

const API_URL = 'http://react-ssr-api.herokuapp.com'

export const fetchUsers = () => async dispatch => {
  const res = await axios.get(`${API_URL}/users`)

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

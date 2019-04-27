import api from '../api'

export const changePokemon = ({ search }) => async dispatch => {
  const response = await api.get(`/${search}`)

  dispatch({ type: 'CHANGE_POKEMON', payload: response.data })
}
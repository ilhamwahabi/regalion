import api from '../api'

export const changePokemon = (pokemonName) => async dispatch => {
  const response = await api.get(`/${pokemonName}`)

  dispatch({ type: 'CHANGE_POKEMON', payload: response.data })
}
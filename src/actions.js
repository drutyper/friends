import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ANIMALS_PENDING, 
  REQUEST_ANIMALS_SUCCESS,
  REQUEST_ANIMALS_FAILED  
} from   './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestAnimals = () => (dispatch) => {
  dispatch({ type: REQUEST_ANIMALS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_ANIMALS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ANIMALS_FAILED, payload: error }))
}
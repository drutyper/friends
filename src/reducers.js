import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ANIMALS_PENDING, 
  REQUEST_ANIMALS_SUCCESS,
  REQUEST_ANIMALS_FAILED  
} from   './constants.js'


const initialStateSearch = {
  searchField: ''
}

export const searchAnimals = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}

const initialStateAnimals = {
  inPending: false,
  animals: [],
  error: ''
}

export const requestAnimals = (state=initialStateAnimals, action={}) => {
  switch(action.type) {
    case REQUEST_ANIMALS_PENDING:
      return Object.assign({}, state, { isPending: true})
    case REQUEST_ANIMALS_SUCCESS:
      return Object.assign({}, state, { animals: action.payload, isPending: false })
    case REQUEST_ANIMALS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false})   
    default:
      return state;  
  }
}
import {DELETE_ITEM, ADD_ITEM} from '../types';

const INITIAL_STATE = {todo: []};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todo: [...state.todo, action.item],
      };

    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter(item => item._id != action._id),
      };

    default:
      return state;
  }
};

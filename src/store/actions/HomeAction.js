import {DELETE_ITEM, ADD_ITEM} from '../types';

export function addItem(item) {
  return dispatch =>
    dispatch({
      type: ADD_ITEM,
      item,
    });
}

export function deleteItem(_id) {
  return dispatch =>
    dispatch({
      type: DELETE_ITEM,
      _id,
    });
}

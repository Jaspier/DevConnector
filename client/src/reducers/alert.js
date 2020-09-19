import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // copies existing alert and adds new alert to array
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload); // returns all alerts except the one that matches the payload
    default:
      return state;
  }
}

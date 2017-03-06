import { SET_TYPE, SET_BACKPLATE, ADD_TOPLINE, ADD_LEFTLINE, ADD_RIGHTLINE, ADD_BOTTOMLINE } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { type: 1, backplate: 0, top: 0, left: 0, right: 0, bottom: 0 };

export default function settings(state = initialState, action) {
  console.info(state, action);

  switch (action.type) {
    case SET_TYPE: {
      if (action.value !== state.type) {
        return update(state, { type: { $set: action.value } });
      }

      return state;
    }

    case SET_BACKPLATE: {
      if (action.value !== state.backplate) {
        return update(state, { backplate: { $set: action.value } });
      }

      return state;
    }

    case ADD_TOPLINE: {
      if (action.top !== state.top) {
        return update(state, { top: { $set: action.top } });
      }

      return state;
    }

    case ADD_LEFTLINE: {
      if (action.left !== state.left) {
        return update(state, { left: { $set: action.left } });
      }

      return state;
    }

    case ADD_RIGHTLINE: {
      if (action.right !== state.right) {
        return update(state, { right: { $set: action.right } });
      }

      return state;
    }

    case ADD_BOTTOMLINE: {
      if (action.bottom !== state.bottom) {
        return update(state, { bottom: { $set: action.bottom } });
      }

      return state;
    }


    default:
      return state
  }
}

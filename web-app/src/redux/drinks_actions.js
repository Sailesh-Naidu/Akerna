import {
  SET_STATE_PROPERTY,
  DECREASE_DRINK_QUANTITY,
  INCREASE_DRINK_QUANTITY,
  STATE_RESET
} from "./drinks_action_types";

import {getAllDrinks, getDrinksAtSafeLimit} from './service'

export const fetchAllDrinks = () => {
  return async (dispatch) => {
    try {
      dispatch(setStateProperty({property: 'loading', payload: true}))
      const response = await getAllDrinks();
      console.log(response);
      dispatch(setStateProperty({property: 'drinks', payload: response}))
      dispatch(setStateProperty({property: 'loading', payload: false}))
    } catch (e) {
      dispatch(setStateProperty({property: 'error', payload: e}))
      dispatch(setStateProperty({property: 'loading', payload: false}))
    }
  }
}

export const fetchDrinksInSafeLimit = (drink, quantity) => {
  return async (dispatch) => {
    try {
      dispatch(setStateProperty({property: 'loading', payload: true}))
      const response = await getDrinksAtSafeLimit(drink, quantity);
      dispatch(setStateProperty({property: 'response', payload: response}))
      dispatch(setStateProperty({property: 'loading', payload: false}))
    } catch (e) {
      dispatch(setStateProperty({property: 'error', payload: e}))
    }
  }
}

export const setStateProperty = ({payload, property}) => ({
  type: SET_STATE_PROPERTY,
  payload: {
    property,
    payload,
  }
});

export const decreaseDrinkQuantity = () => ({
  type: DECREASE_DRINK_QUANTITY,
});

export const increaseDrinkQuantity = () => ({
  type: INCREASE_DRINK_QUANTITY,
});

export const resetState = () => ({
  type: STATE_RESET,
});

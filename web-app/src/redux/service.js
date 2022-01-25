import { httpClient } from "../api";

export const getAllDrinks = async () => {
  return await httpClient.get(`${process.env.REACT_APP_API_URL}drinks`)
};

export const getDrinksAtSafeLimit = async (drink, quantity) => {
  return await httpClient.get(`${process.env.REACT_APP_API_URL}caffeineLimit`, {
    params: {
      drink,
      quantity,
    }
  })
};

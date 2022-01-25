import React, {useEffect} from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import {setStateProperty, fetchAllDrinks, resetState, fetchDrinksInSafeLimit} from "../redux/drinks_actions";
import Quantity from "./Quantity";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Search = () => {
  const {drinks, selectedDrink, loading, error, quantity} = useSelector(({drinks}) => drinks)
  const dispatch = useDispatch();

  const selectedDrinkCaffeineLevel = selectedDrink.caffeine_per_serving && selectedDrink.caffeine_per_serving * quantity

  useEffect(() => {
    dispatch(fetchAllDrinks())
  }, [dispatch])

  const handleSelectChange = (selectedOption) => {
    dispatch(setStateProperty({property: 'selectedDrink', payload: selectedOption}))
    dispatch(setStateProperty({property: 'error', payload: null}))
  }

  const handleStateReset = () => {
    dispatch(resetState())
    dispatch(fetchAllDrinks())
  }

  const handleDrinkSubmit = () => {
    dispatch(fetchDrinksInSafeLimit(selectedDrink.value, quantity))
  }

  const options = drinks.map(item => {
    return {
      value: item.id,
      label: item.name,
      caffeine_per_serving: item.caffeineAmount
    }
  })
  return (
    <div>
      <form data-testid="drinks-select">
        <label htmlFor="drinks" className="font-semibold text-sm">Choose your drink</label>
        <Select inputId="drinks" className="mt-2" name="drinks" value={selectedDrink} isLoading={loading} options={options} onChange={handleSelectChange} />
      </form>

      <p className="mt-6 mb-2 font-semibold text-sm">Quantity</p>
      <Quantity currentCaffeineLevel={selectedDrinkCaffeineLevel} />

      {
        selectedDrink.caffeine_per_serving &&
        <div className="mt-6 flex justify-between">
          <button data-testid="submit-drink" onClick={handleDrinkSubmit} type="submit" className="text-center outline-none w-4/12 md:w-2/12 py-2 px-4 text-sm font-medium rounded text-white bg-pink-500 hover:bg-pink-700">
            {
              loading ?
              <Loader
                className="inline-block"
                type="Bars"
                color="#fff"
                height={20}
                width={20}
              /> :
              'Submit'
            }
          </button>

          <button onClick={handleStateReset} type="submit" className=" w-2/12 xl:w-1/12 py-2 px-4 text-sm font-medium rounded text-white bg-pink-500 hover:bg-pink-700">
            <FontAwesomeIcon className="text-xs" icon={faRedoAlt} />
          </button>
        </div>
      }
    </div>
  )
}

export default Search

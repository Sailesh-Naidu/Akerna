import React from 'react'
import styles from '../styles/style.module.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux'
import {resetState, fetchAllDrinks} from "../redux/drinks_actions";
import Option from "./_includes/Options";

const Response = () => {
  const {response, selectedDrink, quantity} = useSelector(({drinks}) => drinks)
  const dispatch = useDispatch();

  const handleStateReset = () => {
    dispatch(resetState())
    dispatch(fetchAllDrinks())
  }

  if (response) {
    let messageColor = "text-green-500 font-bold";
    if (response.alert == "green") {
      messageColor = "text-green-500 font-bold";
    } else if (response.alert == "red") {
      messageColor = "text-red-500 font-bold";
    } else if (response.alert == "amber") {
      messageColor = "text-pink-500 font-bold";
    }
    return (
      <div>
        <div className={`${styles.overlay} absolute left-0 top-0 w-full min-h-screen z-10`} />
        <div className="mobile-side-menu bg-white absolute p-8 pb-6 right-0 top-0 w-full lg:w-2/5 min-h-screen z-20 border-0 border-r border-algo-gray-101">
          <div className="h-24 border-b-4 border-gray-50">
            <p>
              <span className="text-xl font-bold text-gray-500">Caffeine Safety Level Response</span>
              <FontAwesomeIcon onClick={handleStateReset} data-testid="close" className="float-right text-2xl text-pink-500 cursor-pointer" icon={faTimes} />
            </p>
                <p className="text-xs text-gray-500 mt-1"><span className={messageColor}>  {response.message} </span></p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

export default Response

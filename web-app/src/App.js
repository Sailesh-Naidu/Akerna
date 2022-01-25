import React from 'react';
import Search from "./components/Search";
import styles from './styles/style.module.css'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Response from "./components/Response";
function App() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full h-full">
        <div className="max-w-xs lg:max-w-2xl mx-auto mt-32">
          <Search />
          <Response />
        </div>
      </div>
    </div>
  );
}

export default App;

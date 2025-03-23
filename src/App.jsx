import MenuItems from "./MenuItems"
import { useState } from "react";



function App() {
  const items = [
    {
      title: "Burger",
      description: "A deleicious burger with all the fixings.",
      image: "https://placehold.co/150",
      price: 79,
    },

    {
      title: "Burger",
      description: "A deleicious burger with all the fixings.",
      image: "https://placehold.co/150",
      price: 79,
    },

    {
      title: "Burger",
      description: "A deleicious burger with all the fixings.",
      image: "https://placehold.co/150",
      price: 79,
    }
  ];


  const [darkMode, setDarkMode] = useState("dark");

  const toggleMode = function () {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));

  }



  return (
    <>
      <div className={darkMode}>
        <button id="toggleButton" onClick={toggleMode}>{darkMode === "dark" ? "Light Mode" : "Dark Mode"}</button>
        <MenuItems menu={items} />
      </div>


    </>
  )
}

export default App

import React, { createContext, useState } from "react";
import StartingPage from "./pages/StartingPage";
import { Route } from "react-router-dom";

// Create Context
const UserContext = createContext();

const App = () => {
  const [location, setLocation] = useState("");

  return (
    <UserContext.Provider value={{ location, setLocation }}>
      <div>
        <StartingPage />
        <Route path = "/add-restaurant" component = {AddRestaurant} />
      </div>
    </UserContext.Provider>
  );
};

export { UserContext };
export default App;

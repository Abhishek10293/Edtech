import React, { createContext, useState } from "react";
import { assets, cour,feedback } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [course, setCourses] = useState(cour);
  const [feedbacks,setfeedbacks]=useState(feedback);
  console.log(cour);

  return (
    <AppContext.Provider value={{ course, setCourses,feedbacks,setfeedbacks }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

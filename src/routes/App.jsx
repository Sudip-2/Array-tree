import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import FirebaseContext from "../context/FirebaseContext";
import FirebaseApp from "../util/FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Pricingcontext from "../context/PricingContext";
import { useState } from "react";
function App() {
  const { name } = useParams();
  const location = useLocation();

  const[billAmount,setBillamount] = useState(null)

  onAuthStateChanged(getAuth(FirebaseApp), (user) => {
    console.log(user);
  });
  const pageNameToIgnore = [
    "/login",
    `/register/${name}`,
    `/register/${name}/verify`,
    `/register/select-categories`,
    `/register/select-price`,
    `/register/billing`
  ];
  const showORnot = !pageNameToIgnore.includes(location.pathname);
  return (
    <>
      <FirebaseContext.Provider value={{ FirebaseApp }}>
        <Pricingcontext.Provider value={{billAmount,setBillamount}}>
        {showORnot && <Navbar />}
        <Outlet />
        </Pricingcontext.Provider>
      </FirebaseContext.Provider>
    </>
  );
}

export default App;

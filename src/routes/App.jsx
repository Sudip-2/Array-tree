import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import FirebaseContext from "../context/FirebaseContext";
import FirebaseApp from "../util/FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import defaultUserPic from "../assets/userPic.webp";
function App() {
  const { name } = useParams();
  const location = useLocation();
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [personalgoal, setpersonalgoal] = useState("");
  const [plan, setplan] = useState("");
  const [password, setpassword] = useState("");
  const [profilepic, setprofilepic] = useState(defaultUserPic);
  onAuthStateChanged(getAuth(FirebaseApp), (user) => {
    console.log(user);
  });
  const pageNameToIgnore = [
    "/login",
    `/register/${name}`,
    `/register/${name}/verify`,
    `/register/select-categories`,
    `/register/select-price`,
    `/register/billing`,
    `/register/user`,
  ];
  const showORnot = !pageNameToIgnore.includes(location.pathname);
  return (
    <>
      <FirebaseContext.Provider
        value={{
          FirebaseApp,
          email,
          setemail,
          username,
          setusername,
          personalgoal,
          setpersonalgoal,
          plan,
          setplan,
          password,
          setpassword,
          profilepic,
          setprofilepic,
        }}
      >
        {showORnot && <Navbar />}
        <Outlet />
      </FirebaseContext.Provider>
    </>
  );
}

export default App;

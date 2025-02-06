import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import FirebaseContext from "../context/FirebaseContext";
import FirebaseApp from "../util/FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import defaultUserPic from "../assets/userPic.webp";
import { Triangle } from 'react-loader-spinner'

function App() {
  const { name } = useParams();
  const location = useLocation();
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [personalgoal, setpersonalgoal] = useState("");
  const [plan, setplan] = useState("");
  const [password, setpassword] = useState("");
  const [profilepic, setprofilepic] = useState(defaultUserPic);
  const [user, setuser] = useState(null);
  const Navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(getAuth(FirebaseApp), (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, []);

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
  if (user) {
    Navigate("/dashboard");
  }
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
          user,
          setuser,
        }}
      >
        {showORnot && <Navbar />}
        <Outlet />
        {/* <div className="h-screen  flex justify-center items-center">
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
          />
        </div> */}
      </FirebaseContext.Provider>
    </>
  );
}

export default App;

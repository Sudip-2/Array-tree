// import Navbar from "../Components/Navbar/Navbar";
// import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
// import FirebaseContext from "../context/FirebaseContext";
// import FirebaseApp from "../util/FirebaseConfig";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";
// import defaultUserPic from "../assets/userPic.webp";
// import Loader from "../Components/Loader";
// function App() {
//   const { name } = useParams();
//   const location = useLocation();
//   const [email, setemail] = useState("");
//   const [username, setusername] = useState("");
//   const [personalgoal, setpersonalgoal] = useState("");
//   const [plan, setplan] = useState("");
//   const [password, setpassword] = useState("");
//   const [profilepic, setprofilepic] = useState(defaultUserPic);
//   const [user, setuser] = useState(null);
//   const [Loading, setLoading] = useState(true);
//   const Navigate = useNavigate();
//   useEffect(() => {
//     onAuthStateChanged(getAuth(FirebaseApp), (user) => {
//       if (user) {
//         setuser(user);
//       } else {
//         setLoading(false);
//       }
//     });
//   }, []);

//   const pageNameToIgnore = [
//     "/login",
//     `/register/${name}`,
//     `/register/${name}/verify`,
//     `/register/select-categories`,
//     `/register/select-price`,
//     `/register/billing`,
//     `/register/user`,
//     `/dashboard`,
//     `/dashboard/analytics`,
//     `/dashboard/profile`,
//   ];
//   const showORnot = !pageNameToIgnore.includes(location.pathname);

//   if (Loading) {
//     return <Loader />;
//   } else {
//     if (user) {
//       Navigate("/dashboard");
//     }
    
//     return (
//       <>
//         <FirebaseContext.Provider
//           value={{
//             FirebaseApp,
//             email,
//             setemail,
//             username,
//             setusername,
//             personalgoal,
//             setpersonalgoal,
//             plan,
//             setplan,
//             password,
//             setpassword,
//             profilepic,
//             setprofilepic,
//             user,
//             setuser,
//           }}
//         >
//           {showORnot && <Navbar />}
//           <Outlet />
//         </FirebaseContext.Provider>
//       </>
//     );
//   }
// }

// export default App;

import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import FirebaseContext from "../context/FirebaseContext";
import FirebaseApp from "../util/FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import defaultUserPic from "../assets/userPic.webp";
import Loader from "../Components/Loader";

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
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate(); // lowercase for navigate

  useEffect(() => {
    onAuthStateChanged(getAuth(FirebaseApp), (user) => {
      if (user) {
        setuser(user);
      } else {
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // Moved to useEffect
    }
  }, [user, navigate]);

  const pageNameToIgnore = [
    "/login",
    `/register/${name}`,
    `/register/${name}/verify`,
    `/register/select-categories`,
    `/register/select-price`,
    `/register/billing`,
    `/register/user`,
    `/dashboard`,
    `/dashboard/analytics`,
    `/dashboard/profile`,
  ];

  const showORnot = !pageNameToIgnore.includes(location.pathname);

  if (Loading) {
    return <Loader />;
  }

  return (
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
    </FirebaseContext.Provider>
  );
}

export default App;
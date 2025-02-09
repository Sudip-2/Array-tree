import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/FirebaseContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

function dashboard() {
  const { user } = useContext(FirebaseContext);
  const Navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      Navigate("/");
    } else {
      setLoading(false);
    }
  }, []);
  if (Loading) {
    return <Loader />;
  } else {
    return (
      <div className="text-center text-white text-3xl">
        Welcome To The ArrayTree Dashboard
      </div>
    );
  }
}

export default dashboard;

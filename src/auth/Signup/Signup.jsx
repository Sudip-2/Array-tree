import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import SigninBtn from "../../Components/AuthComponents/SigninBtn";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import NavHeading from "../../Components/AuthComponents/NavHeading";
import Bigheading from "../../Components/AuthComponents/Bigheading";
import Fullwidthcontbtn from "../../Components/AuthComponents/Fullwidthcontbtn";
import Accountornot from "../../Components/AuthComponents/Accountornot";
import signinPic from "../../assets/signin.png";
import EmailInput from "../../Components/AuthComponents/EmailInput";
import PasswordInput from "../../Components/AuthComponents/PasswordInput";
import { IoIosArrowBack } from "react-icons/io";
import FirebaseContext from "../../context/FirebaseContext";
import {
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore/lite";
import ErrorDiv from "../../Components/AuthComponents/ErrorDiv";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
const Signup = () => {
  const [MyError, setMyError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { name } = useParams();
  const { setusername, username, email, setemail, setpassword, FirebaseApp } =
    useContext(FirebaseContext);
  const MyDB = getFirestore(FirebaseApp);
  const MyCollection = collection(MyDB, "UserCollection");
  // const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Using next page next page e jete parbi after signup to choose username
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    document.title = "Log in or Sign Up | Arraytree";
  }, []);

  const onSubmit = async (data) => {
    setemail(data.Email.toLowerCase());
    setpassword(data.Password);
    try {
      const MyDocs = await getDocs(query(MyCollection));
      MyDocs.forEach((ele) => {
        let MyElement = ele.data();

        if (data.Email.toLowerCase() === MyElement.Email) {
          throw new Error("Email Already Exists");
        }
      });
    } catch (error) {
      setMyError(error);
      console.log(error);
      return;
    }
    setNextPage(!nextPage);
    setMyError(null);
  };

  const redirect = async () => {
    try {
      const MyDocs = await getDocs(query(MyCollection));
      MyDocs.forEach((ele) => {
        let MyElement = ele.data();
        if (username === MyElement.Username) {
          throw new Error("Username Already Exists");
        }
      });
    } catch (error) {
      console.log(error);
      setMyError(error);
      return;
    }
    await navigate("/register/select-categories");
  };

  return (
    <>
      <div className="min-h-svh lg:flex bg-white pb-[70px] lg:pb-0">
        {/* Login part */}
        <div className="lg:w-1/2">
          <div className="pt-[40px]">
            {/* Logolink part */}
            <div className="mx-[30px] sm:mx-[50px]">
              <NavHeading />
            </div>

            {/* form part */}
            <div
              className={`flex flex-col items-center mt-[100px] mx-[30px] sm:mx-[80px]`}
            >
              <span
                className={`flex items-center text-lg cursor-pointer text-loginBtnClr ${
                  nextPage ? "flex" : "hidden"
                } self-start`}
                onClick={() => setNextPage(!nextPage)}
              >
                <IoIosArrowBack />
                Back
              </span>

              <div className="mt-[20px]">
                <Bigheading
                  text1={
                    name == "undefined"
                      ? "Join Arraytree"
                      : `Claim @${name} on Arraytree today`
                  }
                  text2="Sign up for free!"
                  nextPage={nextPage}
                />
                <Bigheading
                  text1={`Choose your username`}
                  text2="Claim your free Link in Bio"
                  nextPage={!nextPage}
                />
              </div>

              <form
                className={`flex-col w-full gap-3 mt-[45px] ${
                  nextPage ? "hidden" : "flex"
                }`}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={`relative`}>
                  <EmailInput register={register} errors={errors} />
                </div>

                {/* Password box only after email or name if present */}
                <div className={`relative`}>
                  <PasswordInput register={register} errors={errors} />
                </div>
                {/* Password box only after email or name if present */}

                <Fullwidthcontbtn />
                {MyError && (
                  <div className="font-bold flex justify-center">
                    <ErrorDiv text={MyError.message} />
                  </div>
                )}
              </form>

              <form
                className={`flex-col w-full gap-3 mt-[45px] ${
                  nextPage ? "flex" : "hidden"
                }`}
                onSubmit={handleSubmit(redirect)}
              >
                <div className={`relative w-full`}>
                  <span className="absolute text-navLinkGrey top-[12px] left-[9px] text-[1.04rem]">
                    arraytr.ee/
                  </span>
                  <input
                    type="text"
                    className="h-[20px] w-full py-[25px] bg-navHoverGrey rounded-lg pl-[86px] pr-[10px] text-navLinkGrey"
                    placeholder="Your Name"
                    onChange={(e) => setusername(e.target.value.toLowerCase())}
                    required
                  />
                  {MyError && (
                    <div className="flex justify-center font-bold">
                      <ErrorDiv text={MyError.message} />
                    </div>
                  )}
                </div>
                <Fullwidthcontbtn />
              </form>

              <div
                className={`flex flex-col items-center w-full gap-3 mt-[35px] ${
                  nextPage ? "hidden" : "flex"
                }`}
              >
                <p className="text-navLinkGreys">OR</p>
                <SigninBtn text={"Continue with Google"} icon={<FcGoogle />} />
                <SigninBtn text={"Continue with Apple"} icon={<FaApple />} />
              </div>

              <Accountornot
                text1="Already have an account? "
                text2="Log in"
                to="/login"
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <img src={signinPic} alt="" className="hidden lg:block w-1/2" />
      </div>
    </>
  );
};

export default Signup;

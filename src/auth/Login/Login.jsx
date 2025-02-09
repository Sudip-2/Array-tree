import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SigninBtn from "../../Components/AuthComponents/SigninBtn";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import NavHeading from "../../Components/AuthComponents/NavHeading";
import Bigheading from "../../Components/AuthComponents/Bigheading";
import Fullwidthcontbtn from "../../Components/AuthComponents/Fullwidthcontbtn";
import Accountornot from "../../Components/AuthComponents/Accountornot";
import loginPic from "../../assets/login.png";
import EmailInput from "../../Components/AuthComponents/EmailInput";
import PasswordInput from "../../Components/AuthComponents/PasswordInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseContext from "../../context/FirebaseContext";
const Login = () => {
  const [Loading, setLoading] = useState(false);
  const { FirebaseApp, user, setuser } = useContext(FirebaseContext);
  const Navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const User = await signInWithEmailAndPassword(
        getAuth(FirebaseApp),
        data.Email,
        data.Password
      );
      if (User) {
        setuser(User);
        Navigation("/dashboard");
      }
      // console.log(User);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      Navigation("/dashboard");
    }
    document.title = "Log in or Sign Up | Arraytree";
  }, []);
  if (Loading) {
    return <Loader />;
  } else {
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
              <div className="flex flex-col items-center mt-[100px] mx-[30px] sm:mx-[80px]">
                <Bigheading
                  text1="Welcome back!"
                  text2="Log in to your Linktree"
                />

              <form
                className="flex flex-col w-full gap-3 mt-[45px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="relative">
                  <EmailInput register={register} errors={errors} />
                </div>

                {/* Password box only after email or name if present */}
                <div className="relative">
                  <PasswordInput register={register} errors={errors} />
                </div>
                {/* Password box only after email or name if present */}

                  <Fullwidthcontbtn />
                </form>

                <div className="flex flex-col items-center w-full gap-3 mt-[35px]">
                  <p className="text-navLinkGreys">OR</p>
                  <SigninBtn
                    text={"Continue with Google"}
                    icon={<FcGoogle />}
                  />
                  <SigninBtn text={"Continue with Apple"} icon={<FaApple />} />
                </div>

                <div className="flex items-center gap-1 mt-[35px]">
                  <Link className="text-loginBtnClr underline">
                    Forgotpassword?
                  </Link>
                  <span className="text-xs">&#9679;</span>
                  <Link className="text-loginBtnClr underline">
                    Forgot username?
                  </Link>
                </div>

                <Accountornot
                  text1="Don't have an account? "
                  text2="Sign up"
                  to="/register/undefined"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <img src={loginPic} alt="" className="hidden lg:block w-1/2" />
        </div>
      </>
    );
  }
};

export default Login;

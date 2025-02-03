import React, { useContext, useEffect, useState } from "react";
import MainHeading from "../Components/AuthComponents/MainHeading";
import Profilepic from "../Components/UserComponents/Profilepic";
import SubHeading from "../Components/UserComponents/SubHeading";
// import Backgroundpic from '../Components/UserComponents/Backgroundpic';
import Continue from "../Components/AuthComponents/Fullwidthcontbtn";
// import { FaYoutube } from "react-icons/fa";
import AddLinks from "../Components/UserComponents/AddLinks";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import AddBtnForLinks from "../Components/UserComponents/AddBtnForLinks";
import { PiLinkSimpleBold } from "react-icons/pi";
import { useForm } from "react-hook-form";
import FirebaseContext from "../context/FirebaseContext";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const Navigate = useNavigate();
  const [wordLimit, setWordLimit] = useState(0);
  const {
    plan,
    password,
    email,
    username,
    personalgoal,
    FirebaseApp,
    profilepic,
  } = useContext(FirebaseContext);
  // const [ytshow, setYtshow] = useState(false)
  const [gitshow, setGitshow] = useState(false);
  const [linkedinshow, setLInkedinshow] = useState(false);
  // const [Xshow, setXshow] = useState(false)
  const [personalLinkshow, setPersoLinkshow] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchBio = watch("Bio");
  useEffect(() => {
    setWordLimit(watchBio?.length);
    if (watchBio?.length > 80) {
      alert("You have reached the maximum limit of 80 characters");
    }
  }, [watchBio]);

  const onSubmit = async (data) => {
    try {
      let R = await createUserWithEmailAndPassword(
        getAuth(FirebaseApp),
        email,
        password
      );
      const MyFireStore = getFirestore(FirebaseApp);
      await addDoc(collection(MyFireStore, "UserCollection"), {
        Bio: data.Bio,
        Category: personalgoal,
        Email: email,
        Plan: plan,
        Profilepic: profilepic,
        ProfileTitle: data.userName,
        Username: username,
        UID: R.user.uid,
      });
      await Navigate("/dashboard");
      // console.log(docRef);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-svh bg-white pt-10 px-4 pb-28">
        <MainHeading text1={"Add profile details"} />
        <form
          className="mt-8 flex items-center flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Profile pic */}
          <SubHeading text={"Select a Profile image"} />
          <Profilepic />

          {/* Title and Bio */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <SubHeading text={"Add title and bio"} />
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-navHoverGrey w-[320px] h-[50px] px-5 rounded-xl"
              required
              {...register("userName")}
            />

            <div className="relative">
              <textarea
                name="Bio"
                id="userBio"
                rows={4}
                maxLength={80}
                className="bg-navHoverGrey w-[320px] rounded-xl p-5"
                placeholder="Add your bio"
                {...register("Bio")}
              ></textarea>
              <span className="absolute bottom-3 right-4 text-gray-400">
                {wordLimit}/80
              </span>
            </div>

            {/* <div className='mt-6 flex flex-col items-center gap-6'>
              <SubHeading text={"Select a Background Image/template"} />

              <Backgroundpic />

            </div> */}
          </div>

          {/* Links */}
          <div className="mt-6 text-center">
            <SubHeading text={"Add Links to your Arraytree"} />

            <div className="mt-4 ">
              <div className="grid grid-cols-4 gap-8">
                <div onClick={() => setLInkedinshow(!linkedinshow)}>
                  <AddBtnForLinks
                    icon={<FaLinkedin />}
                    color={"text-blue-500"}
                  />
                </div>
                <div onClick={() => setGitshow(!gitshow)}>
                  <AddBtnForLinks icon={<FaGithub />} color={""} />
                </div>
                <div onClick={() => setPersoLinkshow(!personalLinkshow)}>
                  <AddBtnForLinks icon={<PiLinkSimpleBold />} color={""} />
                </div>
              </div>

              <div className="mt-8">
                <div className={`mt-2 ${linkedinshow ? "block" : "hidden"}`}>
                  <AddLinks
                    icon={<FaLinkedin />}
                    register={register}
                    color={"text-blue-500"}
                    linkName={"LinkedIn"}
                  />
                </div>
                <div className={`mt-2 ${gitshow ? "block" : "hidden"}`}>
                  <AddLinks
                    icon={<FaGithub />}
                    register={register}
                    color={""}
                    linkName={"Github"}
                  />
                </div>
                <div
                  className={`mt-2 ${personalLinkshow ? "block" : "hidden"}`}
                >
                  <AddLinks
                    icon={<PiLinkSimpleBold />}
                    register={register}
                    color={""}
                    linkName={"customLink"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-8 w-1/3 left-[33%]">
            <Continue />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;

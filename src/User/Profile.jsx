import { useContext, useState } from "react";
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
import aistar from "../Assets/Aistar.svg";
import { RiResetRightFill } from "react-icons/ri";
import { GoogleGenerativeAI } from "@google/generative-ai";
const Profile = () => {
  const Navigate = useNavigate();
  const {
    plan,
    password,
    email,
    username,
    personalgoal,
    FirebaseApp,
    profilepic,
    user,
  } = useContext(FirebaseContext);
  const [words, setWords] = useState(0);
  // const [ytshow, setYtshow] = useState(false)
  const [gitshow, setGitshow] = useState(false);
  const [linkedinshow, setLInkedinshow] = useState(false);
  // const [Xshow, setXshow] = useState(false)
  const [personalLinkshow, setPersoLinkshow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      await Navigate("/login");
      // console.log(docRef);
    } catch (error) {
      console.error(error);
    }
  };
  function GenerateText() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    async function run() {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(
        "Write an interesting bio for my linktree profile wihtin 80 charecters"
      );
      // console.log(result.response.text());
      const TextResponse = result.response.text().slice(0, 79);
      document.getElementById("userBio").value = TextResponse;
      setWords(TextResponse.length);
    }

    run();
  }
  // useEffect(() => {
  //   if (user) {
  //     Navigate("/dashboard");
  //   }
  // }, []);
  if (user) {
    Navigate("/dashboard");
  } else {
    return (
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
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <textarea
                    name="Bio"
                    id="userBio"
                    rows={3}
                    maxLength={80}
                    className="bg-navHoverGrey w-[320px] rounded-xl p-5"
                    placeholder="Add your bio"
                    {...register("Bio", {
                      onChange: (e) => {
                        setWords(e.target.value.length);
                        if (e.target.value.length > 80) {
                          e.target.value = e.target.value.slice(0, 80);
                        }
                      },
                    })}
                  ></textarea>
                  <span className="absolute bottom-3 right-4 text-gray-400">
                    {words}/80
                  </span>
                </div>

                <div className="flex items-center w-full justify-between">
                  <button
                    onClick={GenerateText}
                    className="bg-gray-100 flex items-center px-4 py-2 gap-1 rounded-full outline  outline-2 outline-gray-300 hover:outline-1 duration-400"
                  >
                    <img src={aistar} alt="" />{" "}
                    <span className="font-semibold text-sm">Write my bio</span>
                  </button>
                  <p className="text-sm">Powered by AI</p>
                </div>

                <div className="flex items-center w-full">
                  <button
                    className={`outline outline-1 outline-gray-300 py-2 px-4 rounded-full flex items-center gap-1 ${
                      words == 0 ? "hidden" : "inline"
                    }`}
                    onClick={() => {
                      document.getElementById("userBio").value = "";
                      setWords(0);
                    }}
                  >
                    <RiResetRightFill />
                    Reset
                  </button>
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
                    <div
                      className={`mt-2 ${linkedinshow ? "block" : "hidden"}`}
                    >
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
                      className={`mt-2 ${
                        personalLinkshow ? "block" : "hidden"
                      }`}
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
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Profile;

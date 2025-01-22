import Navbutton from "./Navbutton.jsx";
import LoginBtn from "./LoginBtn.jsx";
import SignupBtn from "./SignupBtn.jsx";
import Navhoverbtn from "./Navhoverbtn.jsx";
const Navbar = () => {
  return (
    <>
      <div className="bg-white sticky top-[20px] sm:top-[50px] flex justify-between items-center z-10 pl-[30px] pr-[15px] py-[8px] sm:py-[13px] rounded-full mx-[15px] sm:mx-[32px] mt-[20px] sm:mt-[50px]">
        {/* Part 1 */}
        <div className="flex">
          <img
            src="logo.svg"
            alt="svg logo of array tree"
            className="w-[30px]"
          />

          <div className="hidden lg:flex">
            <Navbutton name="Marketplace" />
            <Navhoverbtn
              name="Discover"
              data={[
                "Arraytree for Instagram",
                "Arraytree for LinkedIn",
                "Arraytree for Facebook",
              ]}
            />
            <Navbutton name="Pricing" />
            <Navhoverbtn
              name="Learn"
              data={[
                "The 2025 Creator Report",
                "All articles",
                "Creators",
                "Trends",
              ]}
            />
          </div>
        </div>

        {/* Part 2 */}
        <div className="flex gap-3">
          <LoginBtn />
          <SignupBtn />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import NavHeading from "../../Components/AuthComponents/NavHeading";
import { IoIosArrowBack } from "react-icons/io";
import InputboxNormal from "../../Components/AuthComponents/InputboxNormal";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import EmailInput from "../../Components/AuthComponents/EmailInput";
import FloatingInputBox from "../../Components/AuthComponents/FloatingInputBox";
import ErrorDiv from "../../Components/AuthComponents/ErrorDiv";
import SelectOption from "../../Components/AuthComponents/SelectOption";
import { useNavigate, Link } from "react-router-dom";
import PricingCard from "../../Components/AuthComponents/PricingCard";

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/register/user");
  };

  // let countryNames = async () => {
  //     let data = await fetch("https://api.first.org/data/v1/countries")
  //     console.log(data)
  // }

  // useEffect(() => {
  //     countryNames()
  // },[])

  return (
    // Add context api for payment
    <>
      <div className="bg-white min-h-screen pt-10 px-2 sm:px-10">
        <NavHeading />
        <div className="px-3 mt-8">
          <div className="text-xl flex items-center text-loginBtnClr">
            <IoIosArrowBack />
            <Link
              to={"/register/select-price"}
              className="text-base font-semibold"
            >
              Back to plans
            </Link>
          </div>

          <h2 className="text-3xl sm:text-5xl font-headingFont font-bold mt-6">
            Complete your upgrade
          </h2>

          <form
            className="grid lg:grid-cols-2 mt-6 pb-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="">
              <p className="text-2xl font-bold">Payment</p>
              <div className="mt-4">
                <div className="relative">
                  <InputboxNormal
                    label={"Card number"}
                    forId={"Cardnum"}
                    placeholder={"1234 1234 1234 1234"}
                    type={"number"}
                  />
                  <div className="flex absolute bottom-1 right-3 gap-2 items-center text-3xl">
                    <RiVisaLine />
                    <FaCcMastercard />
                    <SiAmericanexpress className="text-2xl" />
                  </div>
                </div>
                <div className="flex gap-2 w-full mt-2">
                  <div className="w-1/2">
                    <InputboxNormal
                      label={"Expiration date"}
                      forId={"expDate"}
                      placeholder={"MM/YY"}
                      type={"number"}
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <InputboxNormal
                      label={"Security code"}
                      forId={"scCode"}
                      placeholder={"CVC"}
                      type={"number"}
                    />
                    <FaCreditCard className="absolute right-3 bottom-2 text-2xl" />
                  </div>
                </div>
              </div>

              <p className="text-2xl font-bold mt-6">Payment</p>
              <div className="mt-4">
                <div className="relative">
                  <EmailInput register={register} errors={errors} />
                </div>
                <div className="relative mt-4">
                  <FloatingInputBox
                    type={"text"}
                    text={"Zip code / Postcode"}
                    register={register}
                  />
                  {/* For Errors */}
                  <div className="hidden">
                    <ErrorDiv text={"Enter correct postal code"} />
                  </div>
                  {/* For Errors */}
                </div>
                <div className="mt-4">
                  <SelectOption optData={["India"]} />
                </div>
              </div>
            </div>

            <div className="mt-20 lg:mt-0">
              <PricingCard />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;

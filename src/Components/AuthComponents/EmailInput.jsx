import React from "react";

const EmailInput = ({ register, errors }) => {
  return (
    <>
      <input
        type="text"
        id="Email"
        className={`bg-navHoverGrey w-full py-[15px] rounded-lg px-[20px] peer`}
        {...register("Email", {
          minLength: {
            value: 2,
            message: "Usernames must be 2 Characters or Longer",
          },
        })}
        required
      />
      {errors.Email && (
        <span className="text-red-500 ml-2 text-sm">
          {errors.Email.message}
        </span>
      )}
      <label
        htmlFor="Email"
        className={`absolute left-[20px] top-[15px] text-navLinkGrey peer-focus:top-[2px] peer-focus:text-xs duration-200 peer-valid:text-xs peer-valid:top-[2px]`}
      >
        Email
      </label>
    </>
  );
};

export default EmailInput;

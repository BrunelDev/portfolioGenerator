"use client";
import React from "react";

const FormInput = ({ placeholder, value, setValue, maxLength }) => {
  return (
    <>
      {/*<label htmlFor="input">{placeholder}</label>
      <br />*/}
      <input
        maxLength={maxLength}
        className="h-12 w-[260px] outline-none border-[2px] bg-gray-800 text-teal-400 placeholder-teal-800 rounded-xl border-black
        placeholder: pl-2 focus:border-red-400 my-4"
        type="text"
        id="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default FormInput;

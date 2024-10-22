import React, { useState } from "react";
import MyFormWrapper from "../../components/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormInput from "../../components/MyForm/MyFormInput/MyFormInput";
import MyFormSelect from "../../components/MyForm/MyFormSelect/MyFormSelect";
import MyFormSelectWithWatch from "../../components/MyForm/MyFormSelectWithWatch/MyFormSelectWithWatch";
import MyFormTimePicker from "../../components/MyForm/MyFormTimePicker/MyFormTimePicker";
import MyFormPasswordInput from "../../components/MyForm/MyFormPasswordInput/MyFormPasswordInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const validationSchema = z.object({
  name: z
    .string({
      required_error: "This field is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    )
    .optional(), // Optional if not required
  email: z
    .string({
      required_error: "This field is required",
    })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
  password: z
    .string({
      required_error: "This field is required",
    })
    .min(6, "Must be at least 6 characters"),

  phone: z
    .string({
      required_error: "This field is required",
    })
    .min(11, "Phone number must be 11 digits long")
    .max(11, "Phone number must be 11 digits long")
    .regex(
      /^0\d{10}$/,
      "Please enter a valid 11-digit phone number starting with 0"
    )
    .refine((value) => !!value, { message: "Phone number is required" }), // Ensure the value is not empty
});

const FormPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  const defaultValues = {
    name: "2026010016",
    password: "student123",
  };

  const option = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
    {
      value: "disabled",
      label: "Disabled",
      disabled: true,
    },
  ];
  const [courseId, setCourseId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   console.log(courseId, password, confirmPassword);

  return (
    <div style={{ padding: 20 }}>
      <h1>My Form Example</h1>
      <MyFormWrapper
        className={"flex flex-col gap-2"}
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={defaultValues}
      >
        <MyFormInput name={"name"} label={"Name"} type={"text"} />
        <MyFormInput name={"email"} label={"Email"} type={"email"} />
        <MyFormInput name={"phone"} label={"phone"} type={"number"} />
        <MyFormPasswordInput
          name={"password"}
          label={"password"}
          type={"password"}
          onValueChange={setPassword}
        />
        <MyFormPasswordInput
          name={"c_password"}
          label={"c_password"}
          type={"password"}
          matchWith={"password"}
          onValueChange={setConfirmPassword}
        />
        <MyFormSelect name={"select"} label={"select"} options={option} />
        <MyFormSelectWithWatch
          name={"select - 2"}
          options={option}
          label={"select"}
          onValueChange={setCourseId}
        />
        <MyFormTimePicker name={"timepicker"} label={"Time Picker"} />
        <button
          className="border w-min py-2 px-3 rounded bg-blue-400 text-white mt-2"
          type="submit"
        >
          Submit
        </button>
      </MyFormWrapper>
    </div>
  );
};

export default FormPage;

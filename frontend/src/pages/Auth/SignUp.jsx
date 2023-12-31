import { useState } from "react";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import CustomSelect from "../../components/CustomSelect";
import FormRedirect from "./FormRedirect";
import Button from "../../components/Button";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    school: "",
    department: "",
    subjects: [],
    hobbies: [],
  });

  const hobbies = ["Reading", "Programming", "Hiking", "Sports"];
  const subjects = ["Math", "Computer Science", "English"];

  const filledOut =
    formData.email &&
    formData.username &&
    formData.password &&
    formData.school &&
    formData.department &&
    formData.hobbies;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("test.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Failed to submit data:", await response.text());
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <>
      <h5>Create an Account</h5>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextInput
          name="email"
          type="email"
          handleChange={handleChange}
          required={true}
        />
        <TextInput
          name="username"
          type="text"
          handleChange={handleChange}
          required
        />
        <TextInput
          name="password"
          type="password"
          handleChange={handleChange}
          required
        />
        <TextInput
          name="school"
          type="school"
          handleChange={handleChange}
          required
        />
        <TextInput
          name="department"
          type="department"
          handleChange={handleChange}
          required
        />

        <CustomSelect
          name="subjects"
          value={formData.subjects}
          options={subjects}
          setFormData={setFormData}
        />

        <CustomSelect
          name="hobbies"
          value={formData.hobbies}
          options={hobbies}
          handleChange={handleChange}
          setFormData={setFormData}
        />

        <FormRedirect
          text="Have an account ? "
          redirect={<span className="redirect-span">Login here</span>}
          path="../log-in"
        />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            opacity: !filledOut ? 0.5 : 1,
            pointerEvents: !filledOut ? "none" : "unset",
            transition: "all 0.3s",
          }}
          onClick={() => {
            console.log("hi");
          }}
        >
          <Button content="CREATE ACCOUNT" style="primaryBtn" />
        </div>
      </Box>
    </>
  );
}

export default SignUp;

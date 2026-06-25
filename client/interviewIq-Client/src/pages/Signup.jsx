import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../../../server/controllers/auth/user";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: 0,
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function updateFormData(e) {
    const { name, value } = e.target;
    console.log(name, value, "e targe");
    // console.log(name,value,"dtta")
    const updatedFormvalues = { ...formValues };
    updatedFormvalues[name] = value;

    if (name == "phone" && value.length > 10) {
      console.log("its more length");
      return;
    }
    setFormValues(updatedFormvalues);
  }
  console.log(formValues, "formvalues");

  async function signup(e) {
    e.preventDefault();

    try {
      if (formValues.password !== formValues.confirmPassword) {
        toast("password not match", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        //   transition: Bounce,
        });
        return;
      }
      alert("formdata submittd");

      const data = await axios.post("http://localhost:4000/auth/signup");
      console.log(data, "data");
    } catch (err) {
      console.log(err, "err");
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={signup}>
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={updateFormData}
                  required
                />
              </div>

              <div>
                <label
                  for="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formValues.age}
                  id="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={updateFormData}
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={updateFormData}
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={updateFormData}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={updateFormData}
                />
              </div>
              <div>
                <label
                  for="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={updateFormData}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white  bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

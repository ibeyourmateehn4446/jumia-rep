import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { clx } from "../utils/clx";

const wrapperClass = clx(
  "min-h-[100vh] bg-white flex items-center justify-center"
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAccErr, setCreateAccErr] = useState(null);
  const [signAccErr, setSignAccErr] = useState(null);

  const navigate = useNavigate();

  //sign in already created user
  const signinUserHandler = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response) {
          navigate("/");
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setSignAccErr("Email or Password not correct");
        } else if ((error.message = "Firebase: Error (auth/user-not-found).")) {
          setSignAccErr('User does not exist, try creating an account')
        }
          setTimeout(() => {
            setSignAccErr(null);
          }, 5000);
      });
  };

  //create user with email and password
  const createAccountHandler = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response) {
          navigate("/");
        }

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setCreateAccErr("User already exist");
        } else if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setCreateAccErr("Password should be at least 6 characters");
        }
        setTimeout(() => {
          setCreateAccErr(null);
        }, 5000);
      });
  };

  return (
    <div className={wrapperClass}>
      <form className="w-[300px] md:w-[500px] flex flex-col mt-10">
        <Link to="/">
          <div className="mx-auto w-[80px] h-[80px]">
            <img
              className="object-contain w-full h-full"
              src="/images/signin-star.png"
              alt=""
            />
          </div>
        </Link>
        <h4 className="text-center font-semibold text-lg my-3">
          Welcome to Jumia
        </h4>
        <p className="text-center text-[15px] text-[#414141]">
          Type your e-mail or phone number to log in or create a Jumia account.
        </p>

        <div className="mt-8 relative">
          <label
            htmlFor="email"
            className="text-xs px-2 text-[#FF9900] bg-white absolute -top-2 left-4"
          >
            Email
          </label>
          <input
            id="email"
            className="p-3 w-full border-2 border-[#FF9900] rounded-sm focus:outline-0"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mt-8 relative">
          <label
            htmlFor="password"
            className="text-xs px-2 text-[#FF9900] bg-white absolute -top-2 left-4"
          >
            Password
          </label>
          <input
            id="password"
            className="p-3 w-full border-2 border-[#FF9900] rounded-sm focus:outline-0"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          onClick={signinUserHandler}
          className="w-full bg-[#FF9900] rounded-sm text-white px-3 py-2 hover:bg-[#E07E1B] shadow-md mt-4 mb-1"
        >
          Sign In
        </button>
        {/* Error Message */}
        <p className="text-center text-xs text-red-600 mb-4">
          {signAccErr ? signAccErr : ""}
        </p>

        <p className="text-center text-[12px] text-[#414141]">
          By signing-in you agree to JUMIA FAKE CLONE Conditions of Use and
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          onClick={createAccountHandler}
          className="w-full bg-[#FF9900] rounded-sm text-white px-3 py-2 hover:bg-[#E07E1B] shadow-md mt-4 mb-1"
        >
          Create Your Jumia Account
        </button>

        <p className="text-center text-xs text-red-600">
          {createAccErr ? createAccErr : ""}
        </p>

        <p className="mt-4 text-center text-[12px] text-[#414141]">
          For further support, you may visit the Help Center or contact our
          customer service team.
        </p>
        <div className="mx-auto w-[100px] h-[100px]">
          <img
            className="object-contain w-full h-full"
            src="/images/jumia-logo.png"
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

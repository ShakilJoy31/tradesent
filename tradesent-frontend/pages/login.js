import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
// import Spinner from "./Spinner";
import { useRouter } from "next/router";
import { getUser } from "./../lib/healper";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVasible, setIsPasswordVasible] = useState(true);
  const [signedInUser, setSignedInUser] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const [checkingEmail, setCheckingEmail] = useState("");
  const [correctEmail, setCorrectEmail] = useState(false);
  useEffect(() => {
    getUser().then((res) => {
      setSignedInUser(res);
    });
  }, []);
  const databaseUser = signedInUser.find((user) => user?.email == email);

  const handleLoginButton = () => {
    if (databaseUser?.email == email && databaseUser?.password == password) {
      localStorage.setItem("savedUser", JSON.stringify(databaseUser));
      router.push("/");
    }
    if (email == "Tradesent" && password == "12345") {
      router.push("/admin");
    }
  };
  const handleResetPassword = () => {
    updateUserWithTrId(localStorageUser?._id, { password: newPassword }).then(
      (res) => {}
    );
  };
  return (
    <div className="py-20">
      <div className="flex items-center justify-center mb-3">
        <img
          className="w-24 h-24 mr-4 rounded-md"
          src="https://i.ibb.co/L0jX9xc/Whats-App-Image-2023-06-06-at-15-02-22.jpg"
          alt=""
        />
        <h1 className="font-serif text-4xl text-blue-600">Log in here</h1>
      </div>

      <div className="flex items-center justify-center">
        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="lg:p-6 md:p-4 p-2 lg:w-[650px] md:w-[550px] w-[340px]"
        >
          <div className="my-4">
            <label className="">
              <span className="text-white">Type your email</span>
            </label>
            <input
              onChange={(e) => setEmail(e?.target?.value)}
              type="text"
              placeholder="Type Email"
              className="w-full mt-2 text-blue-600 bg-black input"
            />
          </div>

          <div>
            <label className="">
              <span className="text-white">Type your password</span>
            </label>
            <div className="flex items-center justify-between mt-2 text-blue-600 bg-black border-0 rounded-lg">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={isPasswordVasible ? "password" : "text"}
                placeholder="Type your password"
                className="w-full mr-4 bg-black border-0 input focus:outline-none"
              />
              {isPasswordVasible ? (
                <span
                  onClick={() => setIsPasswordVasible(!isPasswordVasible)}
                  className="mr-2"
                >
                  <AiFillEyeInvisible size={25}></AiFillEyeInvisible>
                </span>
              ) : (
                <span
                  onClick={() => setIsPasswordVasible(!isPasswordVasible)}
                  className="mr-2"
                >
                  <AiFillEye size={25}></AiFillEye>
                </span>
              )}
            </div>
          </div>

          <div className="my-4">
            <div className="form-control">
              <label className="flex items-center cursor-pointer">
                <span className="mr-4 text-white">Remember Password</span>
                <input
                  onChange={(e) => setRemember(e.target.checked)}
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>

          <div>
            <label
              onClick={handleLoginButton}
              style={{
                backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-black w-full`}
              disabled={!email}
            >
              Log in
            </label>
          </div>

          {/* <div className='my-4'>
                        <h1>Forget your password?<label htmlFor="resetPinModal" style={{color: 'black'}} className='ml-4 text-xl cursor-pointer hover:underline'>Reset Password</label></h1>
                    </div> */}
          <div className={`${FoodProductStyle.customDivider} my-4`}></div>
          <div className="">
            <h1>
              New here?
              <span
                onClick={() => router.push("/signup")}
                style={{ color: "black" }}
                className="ml-4 text-xl cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="resetPinModal" className="modal-toggle" />

        <div className="modal modal-bottom sm:modal-middle">
          <div
            style={{
              borderRadius: "5px",
              backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className="modal-box"
          >
            {correctEmail ? (
              <h3 className="flex justify-center mb-4 text-lg font-bold text-white">
                Type your new password
              </h3>
            ) : (
              <h3 className="flex justify-center mb-4 text-lg font-bold text-white">
                Type your email first
              </h3>
            )}
            {correctEmail || (
              <input
                onChange={(e) => setCheckingEmail(e.target.value)}
                type="email"
                placeholder="Your email"
                className="w-full text-blue-600 bg-black input focus:outline-none"
              />
            )}
            {correctEmail && (
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                type="email"
                placeholder="Your new password"
                className="w-full mt-4 text-blue-600 bg-black input focus:outline-none"
              />
            )}

            <div className="w-full modal-action">
              <label
                style={{
                  borderRadius: "5px",
                  backgroundImage: "linear-gradient(45deg, #FC4F00, #8B1874)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                }}
                htmlFor="resetPinModal"
                className={`w-full border-0 cursor-pointer btn-sm ${FoodProductStyle.emailCheckButtonCancel}`}
              >
                {" "}
                <span className="flex items-center justify-center mt-1">
                  Cancel
                </span>
              </label>
              {checkingEmail && (
                <label
                  onClick={handleResetPassword}
                  style={{
                    borderRadius: "5px",
                    backgroundImage: "linear-gradient(45deg, green, black)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                  }}
                  htmlFor="resetPinModal"
                  className={`w-full border-0 cursor-pointer btn-sm ${FoodProductStyle.emailCheckButtonOK}`}
                >
                  {" "}
                  <span className="flex items-center justify-center mt-1">
                    Reset Pin
                  </span>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;

// setLoading(true);
// const foundDatabaseUser = loggedInUser.find(matchedGmail => matchedGmail?.email === email && matchedGmail?.password === password);
// console.log(foundDatabaseUser);
// if (foundDatabaseUser) {
//     const checkLocalStorage = localStorage.getItem('user');
//     if (!checkLocalStorage) {
//         localStorage.setItem('user', JSON.stringify(foundDatabaseUser));
//         setUser(foundDatabaseUser)
//         setLogin(false);
//         toast.success('Welcome back to Our Restaurant!')
//     }
// }
// else {
//     toast.error('UPPS! Invalid Gmail or Password')
// }

{
  /* <div onClick={()=>setLoading(false)}><Spinner></Spinner></div> */
}

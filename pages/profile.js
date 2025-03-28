import { RiLuggageDepositFill } from "react-icons/ri";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser, updateUserWithTrId } from "@/lib/healper";

const Profile = () => {
  const router = useRouter();
  const [checkingEmail, setCheckingEmail] = useState("");
  const [localStorageUser, setLocalStorageUser] = useState({});
  const [correctEmail, setCorrectEmail] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  useEffect(() => {
    const localStorageSavedUser = JSON.parse(localStorage.getItem("savedUser"));
    if (localStorageSavedUser) {
      setLocalStorageUser(localStorageSavedUser);
    }
  }, []);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const localStorageSavedUser = JSON.parse(localStorage.getItem("savedUser"));
    getUser().then((res) => {
      if (localStorageSavedUser) {
        const specificUser = res?.find(
          (singleUser) => singleUser?.email == localStorageSavedUser?.email
        );
        setUser(specificUser);
      }
    });
  }, []);
  const handleResetPassword = () => {
    updateUserWithTrId(localStorageUser?._id, { password: newPassword }).then(
      (res) => {}
    );
  };
  return (
    <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
      <h1 className="my-6 ml-2 text-3xl text-black ">Profile</h1>

      <div className="grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex">
        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="flex items-center w-full mb-4 lg:mb-0 md:mb-0"
        >
          <div className="flex items-center p-2 lg:p-6 md:p-4">
            <img
              style={{ borderRadius: "50%" }}
              className="w-20 h-20 mr-4"
              src={
                localStorageUser
                  ? localStorageUser?.userPhoto
                  : "https://i.ibb.co/d6CBxZx/download-1.png"
              }
              alt=""
            />
            <div>
              <h2 className="mb-2 font-serif text-2xl">
                Welcome{" "}
                <span className="font-bold text-black">
                  {localStorageUser?.fullName}
                </span>
              </h2>
              <p>
                Refer Id:{" "}
                <span className="ml-2 text-green-600">Click on id to copy</span>
              </p>
              <p
                onClick={() => {
                  navigator.clipboard.writeText(user?._id);
                }}
                className="font-bold text-black hover:cursor-pointer"
              >
                {" "}
                {user?._id}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="w-full p-4 lg:p-8 md:p-6"
        >
          <div className="flex items-center">
            <div
              style={{
                padding: "10px",
                borderRadius: "50%",
                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              className="mr-6"
            >
              <span className="">
                <RiLuggageDepositFill
                  size={25}
                  color="Blue"
                ></RiLuggageDepositFill>
              </span>
            </div>

            <div>
              <p className="text-xl">Current Balance</p>
              {user?.isVerified == true ? (
                <p className="text-2xl">
                  ${" "}
                  {user?.restAmount
                    ? user?.restAmount
                    : parseInt(user?.amount) + (parseFloat(user?.dailyIncome) || 0) +
                      (parseInt(user?.amountFromRefer) || 0) +
                      (parseInt(user?.amountFromSecondRefer) || 0) +
                      (parseInt(user?.amountFromThirdRefer) || 0)}
                </p>
              ) : (
                <p className="text-2xl">$ 00.00</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Boro card */}
      <div className="mt-4 lg:mt-8 md:mt-6">
        <div className="grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex">
          <div
            style={{
              borderRadius: "5px",
              backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className="flex items-center w-full mb-4 lg:mb-0 md:mb-0"
          >
            <div className="p-2 lg:p-6 md:p-4">
              <p className="text-2xl text-black">Account Actions</p>
              <p className="my-2 lg:my-4">
                You can perform various actions on your trading account like
                deposit and withdrawal.
              </p>
              <div>
                {user?.isVerified != true && (
                  <p
                    onClick={() => router.push("/deposit")}
                    className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}
                  >
                    Deposit
                  </p>
                )}

                <p
                  onClick={() => router.push("/withdrawal")}
                  className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}
                >
                  Withdrawal
                </p>

                <p
                  onClick={() => router.push("/walletAddress")}
                  className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}
                >
                  Wallet Address
                </p>

                <p
                  onClick={() => router.push("/withdrawalReports")}
                  className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}
                >
                  Withdrawal Reports
                </p>

                <p
                  onClick={() => router.push("/depositReports")}
                  className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}
                >
                  Deposit Reports
                </p>

                <p
                  onClick={() => router.push("/referralReports")}
                  className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}
                >
                  Referral Reports
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className="w-full p-4 lg:p-8 md:p-6 lg:h-48 md:h-48"
          >
            <div className="">
              <p className="text-2xl text-black">Earn amazing rewards</p>
              <p className="my-4">
                Refer your friends and Earn referral reward up to 3 levels
              </p>
              <div>
                <label
                  onClick={() => router.push("/referral")}
                  style={{
                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                  }}
                  className={`normal-case btn ${FoodProductStyle.foodCard} border-0 text-xl text-black w-full lg:w-48 md:w-32 `}
                >
                  Referral Program
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-4 lg:mt-8 md:mt-6">
        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="w-full p-4 mb-4 lg:p-8 md:p-6 lg:mb-0 md:mb-0"
        >
          <h1 className="mb-6 font-serif text-2xl">User Information</h1>
          <div className="grid items-center justify-between lg:flex md:flex">
            <div>
              <p className="">Phone</p>
              <p className="text-xl text-black">{localStorageUser?.phone}</p>
            </div>
            <div className="my-2 lg:my-0 md:my-0">
              <p className="">Email</p>
              <p className="text-xl text-black">{localStorageUser?.email}</p>
            </div>
            <div>
              <p className="">Joined since</p>
              <p className="text-xl text-black">
                {localStorageUser?.joinedSince}
              </p>
            </div>
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
    </div>
  );
};

export default Profile;

// style={{
//     borderRadius: '5px',
//     backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
//     backgroundSize: "100%",
//     backgroundRepeat: "repeat",
// }}

// style={{
//     padding: '10px',
//     borderRadius: '50%',
//     backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
//     backgroundSize: "100%",
//     backgroundRepeat: "repeat",
// }}

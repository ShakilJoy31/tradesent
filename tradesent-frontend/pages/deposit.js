import { useState, useEffect } from "react";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { getUser, updateUserWithTrId } from "@/lib/healper";
import Footer from "./Components/Footer";
import { RiLuggageDepositFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
// import { IoCopySharp } from 'react-icons/io';
const Deposit = () => {
  const router = useRouter(); 
  const [copiedAccountNumber, setCopiedAccountNumber] = useState(false);
  const [copy, setCopy] = useState(false);
  const [amountToPay, setAmountToPay] = useState(0);
  const [amountToBeSentToDB, setAmountToBeSentToDB] = useState(amountToPay);
  const [databaseUserFound, setDatabaseUserFound] = useState("");
  const [trInput, setTrInput] = useState("");
  useEffect(() => {
    const localStorageSavedUser = JSON.parse(localStorage.getItem("savedUser"));
    const localStorageUnsevedUser = JSON.parse(
      localStorage.getItem("unSavedUser")
    );
    const amount = JSON.parse(localStorage.getItem("amount"));
    if (amount) {
      setCopiedAccountNumber(true);
      setAmountToBeSentToDB(parseInt(amount.amount));
    }
    if (localStorageUnsevedUser) {
      getUser().then((res) => {
        const databaseUser = res?.find(
          (singleUser) => singleUser?.email == localStorageUnsevedUser?.email
        );
        setDatabaseUserFound(databaseUser?._id);
      });
    }
    if (localStorageSavedUser) {
      getUser().then((res) => {
        const databaseUser = res?.find(
          (singleUser) => singleUser?.email == localStorageSavedUser?.email
        );
        setDatabaseUserFound(databaseUser?._id);
      });
    }
  }, []);

  const handleProceedPayment = () => {
    if (amountToPay > 0) {
      setCopiedAccountNumber(true);
      localStorage.setItem("amount", JSON.stringify({ amount: amountToPay }));
    } else {
      console.log("");
    }
  };

  const [closeModal, setCloseModal] = useState(false);
  const handleConfirmPayment = () => {
    const depositDate = new Date().toString().slice(3, 16);
    localStorage.setItem("depositDate", JSON.stringify(depositDate));
    const depositedAmount = JSON.parse(localStorage.getItem("amount")).amount;
    updateUserWithTrId(databaseUserFound, {
      userTrId: trInput,
      amount: depositedAmount,
      isVerified: false,
      depositDate: depositDate,
    }).then((res) => {
      if (res) {
        setCloseModal(false);
      }
    });
  };
  return (
    <div className="block w-full">
      {copiedAccountNumber ? (
        <div className="w-full min-h-screen pb-36">
          <h1 className="my-6 ml-2 text-3xl text-black lg:ml-12 md:ml-8 ">Deposit</h1>
          <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
            <div
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              className="card hover:shadow-2xl"
            >
              <div className="p-3 lg:p-6 md:p-4">
                <div className="p-6 text-black bg-white rounded-sm">
                  <div>
                    <p className="text-red-500">
                      NOTE: DEPOSIT METHOD IS USDT-TRC20 ONLY
                    </p>
                    <img
                      className="block mx-auto my-4 w-36 h-36"
                      src="https://i.ibb.co/ZYMCXtR/Whats-App-Image-2023-06-08-at-00-25-36.jpg"
                      alt=""
                    />

                    <div className={`${FoodProductStyle.customDivider}`}></div>

                    <p className="flex justify-center my-2 font-mono text-xl lg:text-2xl md:text-2xl">
                      Deposit Amount: ${" "}
                      {amountToPay == 0
                        ? JSON.parse(localStorage.getItem("amount")).amount
                        : amountToPay}
                    </p>

                    {/* font-serif */}

                    <div className={`${FoodProductStyle.customDivider}`}></div>

                    <div className="my-4">
                      <div>
                        <div className="form-control">
                          <div className="input-group">
                            <input
                              value="TLeiYNatkQTnZH7mfjHoXCupXcRik9SfA1"
                              type="text"
                              className="w-full text-white bg-purple-500 input focus:outline-none"
                            />
                            {!copy ? (
                              <span
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    "TLeiYNatkQTnZH7mfjHoXCupXcRik9SfA1"
                                  );
                                  setCopy(true);
                                }}
                                style={{
                                  backgroundImage:
                                    "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                  backgroundSize: "100%",
                                  backgroundRepeat: "repeat",
                                }}
                                className="text-white cursor-pointer hover:text-red-600"
                              >
                                Copy
                              </span>
                            ) : (
                              <span
                                style={{
                                  backgroundImage:
                                    "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                  backgroundSize: "100%",
                                  backgroundRepeat: "repeat",
                                }}
                                className="text-white cursor-pointer hover:text-red-600"
                              >
                                Copied
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${FoodProductStyle.customDivider}`}></div>
                    <p className="mt-2 font-mono text-xl">
                      Note:{" "}
                      <span style={{ color: "#E21818" }} className="">
                        You can deposit once from an account.
                      </span>
                    </p>
                  </div>
                </div>
                <p className="my-4">
                  Note: Each wallet is valid only for one transaction. Do not
                  send multiple deposits into the same wallet. One wallet per
                  deposit.
                </p>
                <div className="items-center justify-between p-6 text-black bg-white rounded-sm lg:flex md:flex">
                  <label
                    onClick={() => {
                      localStorage.removeItem("amount");
                      setCopiedAccountNumber(false);
                    }}
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                    }}
                    className={`normal-case btn ${FoodProductStyle.cancelPayment} border-0 text-xl text-black w-full lg:w-48 md:w-32 btn-sm`}
                  >
                    Cancel
                  </label>

                  <label
                    onClick={() => setCloseModal(true)}
                    htmlFor="afterProceedModal"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                    }}
                    className={`normal-case mt-6 lg:mt-0 md:mt-0 btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-full lg:w-48 md:w-32 btn-sm`}
                  >
                    Next
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
            <h1 className="my-6 ml-2 text-3xl text-black ">Deposit</h1>
            <div
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              className={`${FoodProductStyle.customWidth} p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0`}
            >
              <div>
                <p className="text-black">
                  NOTE: DEPOSIT METHOD IS USDT-TRC20 ONLY
                </p>
                <span className="my-2 font-mono text-xl">Amount (USD)</span>
                <input
                  onChange={(e) => setAmountToPay(e.target.value)}
                  type="number"
                  className="w-full mt-2 text-white bg-purple-500 input focus:outline-none"
                />
                <p className="my-2">
                  All deposits will be reflected on your portfolio after
                  payments are confirmed.
                </p>
                <label
                  onClick={handleProceedPayment}
                  style={{
                    backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                  }}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-full lg:w-36 md:w-36 btn-sm mt-1`}
                >
                  Proceed
                </label>
              </div>
            </div> 

          </div>
        </div>
      )}
      {closeModal ? (
        <div>
          <input
            type="checkbox"
            id="afterProceedModal"
            className="modal-toggle"
          />
          <label htmlFor="afterProceedModal" className="cursor-pointer modal">
            <label
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              className="relative modal-box"
              htmlFor=""
            >
              <h3 className="flex justify-center mb-4 text-lg font-bold text-black">
                Enter your Tr id here!
              </h3>
              <div className="input-group">
                <input
                  onChange={(e) => setTrInput(e.target.value)}
                  type="text"
                  className="w-full text-blue-600 bg-black input focus:outline-none"
                  placeholder="Enter Tr id here."
                />
                {trInput ? (
                  <span
                    onClick={handleConfirmPayment}
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, #5D9C59, #3E54AC)",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                    }}
                    className="text-white cursor-pointer hover:text-red-600"
                  >
                    Confirm
                  </span>
                ) : (
                  ""
                )}
              </div>
            </label>
          </label>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Deposit;



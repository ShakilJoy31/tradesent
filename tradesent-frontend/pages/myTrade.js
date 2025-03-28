import { useRouter } from "next/router";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { getUser, updateUserWithTrId } from "@/lib/healper";
import { useEffect, useState } from "react";
import Timer from "./Components/Timer";
import { BiRefresh } from 'react-icons/bi';

const MyTrade = () => {
  const [user, setUser] = useState(null);
  const [getDay, setGetDay] = useState(null);
  const [targetDate, setTargetDate] = useState('');
  useEffect(()=>{
    if(targetDate){
      updateUserWithTrId(user?._id, {
        targetDate: targetDate
      }).then((res) => {})
    }
  },[targetDate])

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
  console.log((getDay * (user?.amount * (1.5 / 100) || 0)));

const [updateDailyIncome, setUpdateDailyIncome] = useState(true); 
  const handleDailyAddIncome = () =>{
    updateUserWithTrId(user?._id, {
      dailyIncome: (dailyIncomeMultiplier * (user?.amount * (1.5 / 100))),
      getDay: getDay
    }).then((res) => {setUpdateDailyIncome(false)});
  }

  return (
    <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
      <h1 className="my-6 text-3xl ">My Trade</h1>
      <div
        style={{
          borderRadius: "5px",
          backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
        className="w-full p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0"
      >
        <h1 className="mb-4 font-serif text-2xl">Trades</h1>
        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #B799FF, #643843)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="pb-2"
        >
          <p
            className={`pt-3 lg:block md:block flex justify-between px-2 ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">User Name:</span>{" "}
            <span>{user?.fullName}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Deposit Amount: </span>{" "}
            <span>{user?.amount}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Amount From Refer:</span>{" "}
            <span>
              {(parseInt(user?.amountFromRefer) || "") +
                (parseInt(user?.amountFromSecondRefer) || "") +
                (parseInt(user?.amountFromThirdRefer) || "")}
            </span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Status: </span>{" "}
            <span>{user?.isVerified == true ? "Active" : "Not Active"}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="flex items-center justify-between md:justify-start"><div className="mr-2 font-bold">Remaining:</div> {
              user?.isVerified == true ? <div><Timer setGetDay={setGetDay} setTargetDate={setTargetDate}></Timer></div> : ''
            } </span>
            
          </p>

          <p
            style={{ borderBottom: 0 }}
            className={`px-2 flex justify-between lg:justify-start ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Daily Income: </span>
            {user?.isVerified == true && (
              <div className="flex items-center ml-3">
              <span>{getDay == null ? "Please Wait..." : (getDay * (user?.amount * (1.5 / 100) || 0))}  </span>
              {
                updateDailyIncome ? <span onClick={handleDailyAddIncome} className="cursor-pointer hover:color-black"><BiRefresh size={25}></BiRefresh></span> : ''
              }
              
              </div>
            )}
            
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyTrade;

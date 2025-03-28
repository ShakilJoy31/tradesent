import { useEffect, useState } from "react";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { getUser } from "@/lib/healper";

const ReferralReports = () => {
  const [level1, setLevel1] = useState(true);
  const [level2, setLevel2] = useState(false);
  const [level3, setLevel3] = useState(false);
  const [refers, setRefers] = useState([]);
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
  useEffect(() => {
    getUser().then((res) => {
      setRefers(res);
    });
  }, []);
  const myRefers = refers.filter(
    (mySingleRefer) => user?._id == mySingleRefer?.referId
  );

  const [secondGenerationToShow, setSecondGenerationToShow] = useState([]);
  const [thirdGeneration, setThirdGeneration] = useState([]);

  const handleToSecondRefer = (getEmail) => {
    const secondGeneration = refers.find((refer) => refer?.email === getEmail);
    setSecondGenerationToShow(secondGeneration?.myRefers);
    setLevel2(true);
    setLevel1(false);
    setLevel3(false);
  };
  const handleToShowThirdRefer = (getEmail) => {
    console.log(getEmail);
    const thirdGeneration = refers?.find((refer) => refer?.email === getEmail);
    setThirdGeneration(thirdGeneration.myRefers);
    setLevel2(false);
    setLevel1(false);
    setLevel3(true);
  };

  const handleLevel1 = () => {
    setLevel1(true);
    setLevel2(false);
    setLevel3(false);
  };
  let allSecondGeneration = []
  const handleLevel2 = () => {
    setLevel1(false);
    setLevel2(true);
    setLevel3(false);
  };
  const handleLevel3 = () => {
    setLevel1(false);
    setLevel2(false);
    setLevel3(true);
  };
  return (
    <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
      <h1 className="my-6 ml-2 text-3xl text-black">Referral Reports</h1>
      <h1 className="flex justify-center mb-3 text-2xl">My Referral</h1>
      <div
        style={{
          borderRadius: "5px",
          backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
        className="flex"
      >
        <div
          onClick={handleLevel1}
          className={`${
            level1 ? FoodProductStyle.newLevel : ""
          } w-full hover:cursor-pointer`}
        >
          <p className="flex justify-center py-2 text-xl">Level 1</p>
        </div>

        <div
          onClick={handleLevel2}
          className={`${
            level2 ? FoodProductStyle.newLevel : ""
          } w-full hover:cursor-pointer`}
        >
          <p className="flex justify-center py-2 text-xl">Level 2</p>
        </div>

        <div
          onClick={handleLevel3}
          className={`${
            level3 ? FoodProductStyle.newLevel : ""
          } w-full hover:cursor-pointer`}
        >
          <p className="flex justify-center py-2 text-xl">Level 3</p>
        </div>
      </div>

      <div
        style={{
          borderRadius: "5px",
          backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
        className="mt-4 overflow-x-auto"
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                {" "}
                <span className="flex justify-center">SL</span>
              </th>
              <th>
                {" "}
                <span className="flex justify-center">Name</span>{" "}
              </th>
              <th>
                {" "}
                <span className="flex justify-center">Email</span>{" "}
              </th>
              <th>
                {" "}
                <span className="flex justify-center">Deposit Amount</span>{" "}
              </th>
              <th>
                {" "}
                <span className="flex justify-center">Joined Date</span>{" "}
              </th>
            </tr>
          </thead>
          {level1 && (
            <tbody>
              {user?.myRefers?.map((myReferal, index) => (
                <tr
                  onClick={() => handleToSecondRefer(myReferal?.email)}
                  key={index}
                  className={`${FoodProductStyle.tableRow}`}
                >
                  <th>
                    {" "}
                    <span className="flex justify-center">
                      {index + 1}
                    </span>{" "}
                  </th>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {myReferal?.fullName}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {myReferal?.email}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {myReferal?.amount}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {myReferal?.joinedSince}
                    </span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          )}

          {level2 && (
            <tbody>
              {secondGenerationToShow?.map((secondRefer, index) => (
                <tr
                  onClick={() => handleToShowThirdRefer(secondRefer?.email)}
                  key={index}
                  className={`${FoodProductStyle.tableRow}`}
                >
                  <th>
                    {" "}
                    <span className="flex justify-center">
                      {index + 1}
                    </span>{" "}
                  </th>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {secondRefer?.fullName}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {secondRefer?.email}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {secondRefer?.amount}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {secondRefer?.joinedSince}
                    </span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          )}

          {level3 && (
            <tbody>
              {thirdGeneration?.map((thirdRefer, index) => (
                <tr key={index} className={`${FoodProductStyle.tableRow}`}>
                  <th>
                    {" "}
                    <span className="flex justify-center">1</span>{" "}
                  </th>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {thirdRefer?.fullName}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {thirdRefer?.email}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {thirdRefer?.amount}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span className="flex justify-center">
                      {thirdRefer?.joinedSince}
                    </span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {/* {(!secondGenerationToShow || !user?.myRefers) && (
            <p className="flex justify-center my-4 font-mono text-white">
              No Refer found on the Database!
            </p>
          )} */}
      </div>
    </div>
  );
};

export default ReferralReports;

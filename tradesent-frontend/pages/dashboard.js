import Link from "next/link";
import { RiLuggageDepositFill } from "react-icons/ri";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser, updateUserWithTrId } from "@/lib/healper";

const Dashboard = () => {
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
  const router = useRouter();
  const [refers, setRefers] = useState([]);
  useEffect(() => {
    getUser().then((res) => {
      setRefers(res);
    });
  }, []);

  const myRefers = refers.filter(
    (mySingleRefer) => user?._id == mySingleRefer?.referId
  );
  const myRefersWithPayment = myRefers.filter(
    (mySingleRefer) => mySingleRefer?.isVerified == true
  );

  let sum = 0;
  myRefersWithPayment
    .map((obj) => obj.amount)
    .forEach((amount) => {
      if (typeof amount == "string") {
        sum += parseInt(amount);
      }
    });
  const amountFromRefer = parseInt(sum * (5 / 100));

  const amountFromSecondRefer = parseInt(
    myRefersWithPayment[0]?.amountFromRefer * (100 / 5) * (3 / 100) || 0
  );

  const amountFromThirdRefer = parseInt(
    myRefersWithPayment[0]?.amountFromSecondRefer * (100 / 3) * (2 / 100) || 0
  );
  

  if (amountFromRefer) {
    updateUserWithTrId(user?._id, {
      amountFromRefer: amountFromRefer,
      amountFromSecondRefer: amountFromSecondRefer,
    }).then((res) => {});
  }

  if (amountFromSecondRefer) {
    updateUserWithTrId(user?._id, {
      amountFromRefer: amountFromRefer,
      amountFromSecondRefer: amountFromSecondRefer,
      amountFromThirdRefer: amountFromThirdRefer,
    }).then((res) => {});
  }

  return (
    <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/80xr60f/tred-banner.jpg"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="relative w-full carousel-item">
          <img
            src="https://img.freepik.com/premium-photo/gold-bullion-bars-usd-money-bills-success-concept-investment_359031-20842.jpg?size=626&ext=jpg&ga=GA1.1.190334821.1684960559&semt=ais"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/bgLWf22/aakash-dhage-Krp-Ow-O4-AIw-M-unsplash-1-1.jpg"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="relative w-full carousel-item">
          <img
            src="https://img.freepik.com/free-vector/gold-coin-pattern-phone-background-background-wallpaper-money-vector-finance-illustration_53876-144613.jpg?size=626&ext=jpg&ga=GA1.1.190334821.1684960559&semt=ais"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Statics */}
      <div className="lg:mt-[-170px] mt-[-50px] grid lg:justify-between md:justify-between gap-x-6 lg:flex md:flex">
        <div
          style={{ background: "#19A7CE" }}
          className={`w-full card hover:shadow-2xl ${FoodProductStyle.statics}`}
        >
          <div className="p-3 lg:p-8 md:p-6">
            <h2 className="mb-2 text-black card-title md:mb-4 lg:mb-6">
              Statistics
            </h2>
            <div
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              className="p-4 lg:p-8 md:p-6 "
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
                  <span onClick={() => router.push("/deposit")} className="">
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
                        ? parseFloat(user?.restAmount)
                        : (parseFloat(user?.amount) + (parseFloat(user?.dailyIncome) || 0) +
                          (parseInt(user?.amountFromRefer) || 0) +
                          (parseInt(user?.amountFromSecondRefer) || 0) +
                          (parseInt(user?.amountFromThirdRefer) || 0))}
                    </p>
                  ) : (
                    <p className="text-2xl">$00.00</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More card */}
        <div className="grid w-full grid-cols-3 gap-2 mt-4 lg:gap-4 md:gap-4 lg:mt-0 md:mt-0">
          
          <div>
            <div
              onClick={() => router.push("/myTrade")}
              className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}
            >
              <div className="pt-2">
                <div>
                  <img
                    className="block mx-auto rounded-full w-14 h-14"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bg469-A3XjN0w7263R_lWbw4gAogrTT_YA&usqp=CAU"
                    alt=""
                  />
                  <p className="flex justify-center text-black">My Trade</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}
            >
              <div className="pt-2">
                <div>
                  <img
                    className="block mx-auto rounded-full w-14 h-14"
                    src="https://i.ibb.co/9VMpp5J/team-image.jpg"
                    alt=""
                  />
                  <p className="flex justify-center text-black">Team</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              target="_blank"
              href="https://goldprice.org/live-gold-price.html"
            >
              <div
                className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}
              >
                <div className="pt-2">
                  <div>
                    <img
                      className="block mx-auto rounded-full w-14 h-14"
                      src="https://i.ibb.co/3YF4djv/single.jpg"
                      alt=""
                    />
                    <p className="flex justify-center text-black">Charts</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link target="_blank" href="https://t.me/tradesentsupport">
              <div
                className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}
              >
                <div className="pt-2">
                  <div>
                    <img
                      className="block mx-auto rounded-full w-14 h-14"
                      src="https://i.ibb.co/JcSBgDT/support.png"
                      alt=""
                    />
                    <p className="flex justify-center text-black">Support</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <label htmlFor="certificateModal"
              className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}
            >
              <div className="pt-2">
                <div>
                  <img
                    className="block mx-auto rounded-full w-14 h-14"
                    src="https://i.ibb.co/HVfcrxX/certificate.png"
                    alt=""
                  />
                  {/* https://i.ibb.co/y4d7sYv/cert1.jpg */}
                  <p className="flex justify-center text-black">Certificate</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="mt-4 lg:mt-8 md:mt-6">
        <div
          style={{ background: "#19A7CE" }}
          className={`w-full card ${FoodProductStyle.blackShadow}`}
        >
          <div className="">
            <h2 className="p-4 text-black card-title ">Market Analysis</h2>
            <div className="p-4">
              <div className="flex items-center">
                <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-4">
                  <Link
                    target="_blank"
                    href="https://in.tradingview.com/symbols/USDTUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com"
                  >
                    <div
                      className={`w-full rounded-lg cursor-pointer ${FoodProductStyle.blackShadow}`}
                    >
                      <div>
                        <img
                          className="w-full h-48 rounded-lg"
                          src="https://i.ibb.co/n8Yw1NH/images.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>

                  <Link
                    target="_blank"
                    href="https://in.tradingview.com/symbols/USDTUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com"
                  >
                    <div
                      className={`w-full rounded-lg cursor-pointer ${FoodProductStyle.blackShadow}`}
                    >
                      <div>
                        <img
                          className="w-full h-48 rounded-lg"
                          src="https://i.ibb.co/m8FqpyD/images.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate modal */}
      <div>
                <input type="checkbox" id="certificateModal" className="modal-toggle" />
                <label htmlFor="certificateModal" className="cursor-pointer modal">
                <img className="p-2 rounded-lg" src="https://i.ibb.co/y4d7sYv/cert1.jpg" alt="" />
                </label>
            </div>
    </div>
  );
};

export default Dashboard;

// import Link from 'next/link';
// import { RiLuggageDepositFill } from 'react-icons/ri';
// import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import { useRouter } from 'next/router';
// import { getDataFromLocalStore } from './../getDataFromLocalStorage';
// import { useEffect, useState } from 'react';
// import { getUser, updateUserWithTrId } from '@/lib/healper';

// const Dashboard = () => {
//     const router = useRouter();
//     const user = getDataFromLocalStore();
//     const [refers, setRefers] = useState([]);
//     useEffect(() => {
//         getUser().then(res => {
//             setRefers(res);
//         })
//     }, [])
//     // const [geT, setGet] = useState(0);

//     const myRefers = refers.filter(mySingleRefer => (user?._id == mySingleRefer?.referId));
//     const myRefersWithPayment = myRefers.filter(mySingleRefer => mySingleRefer?.isVerified == true);

//     let sum = 0;
//     // let amountOfSecondRefer = 0;
//     myRefersWithPayment.map(obj => obj.amount).forEach(amount => {
//         if(typeof amount == 'number'){
//             sum += amount;
//         }
//     });
//     const amountFromRefer = (sum * (5 / 100));
//     // if(myRefersWithPayment){

//     // }
//     const amountFromSecondRefer = ((myRefersWithPayment[0]?.amountFromRefer * (100 / 5)) * (3 / 100)) || 0;
//     const amountFromThirdRefer = ((myRefersWithPayment[0]?.amountFromSecondRefer * (100 / 3)) * (2 / 100)) || 0;
//     if (amountFromRefer) {
//         updateUserWithTrId(user?._id, { amountFromRefer: amountFromRefer, amountFromSecondRefer: amountFromSecondRefer }).then(res => {})
//     }

//     if (amountFromSecondRefer) {
//         updateUserWithTrId(user?._id, { amountFromRefer: amountFromRefer, amountFromSecondRefer: amountFromSecondRefer, amountFromThirdRefer: amountFromThirdRefer }).then(res => {})
//     }
//     console.log(myRefersWithPayment[0])

//     return (
//         <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
//             <div className="w-full carousel">
//                 <div id="slide1" className="relative w-full carousel-item">
//                     <img src="https://i.ibb.co/bgLWf22/aakash-dhage-Krp-Ow-O4-AIw-M-unsplash-1-1.jpg" className="w-full h-4/6" />
//                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
//                         <a href="#slide4" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>

//                 <div id="slide2" className="relative w-full carousel-item">
//                     <img src="https://i.ibb.co/QPBNFRW/ishant-mishra-frzeoa1-Xg-A-unsplash-1.jpg" className="w-full h-4/6" />
//                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
//                         <a href="#slide1" className="btn btn-circle">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>

//                 <div id="slide3" className="relative w-full carousel-item">
//                     <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" className="w-full h-4/6" />
//                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
//                         <a href="#slide2" className="btn btn-circle">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>

//                 <div id="slide4" className="relative w-full carousel-item">
//                     <img src="https://i.ibb.co/CVBkgFC/aakash-dhage-UElx0-ABtw6-M-unsplash-1.jpg" className="w-full h-4/6" />
//                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
//                         <a href="#slide3" className="btn btn-circle">❮</a>
//                         <a href="#slide1" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div>

//             {/* Statics */}
//             <div className='lg:mt-[-250px] mt-[-50px] grid lg:justify-between md:justify-between gap-x-6 lg:flex md:flex'>
//                 <div style={{ background: '#19A7CE' }} className={`w-full card hover:shadow-2xl ${FoodProductStyle.blackShadow}`}>
//                     <div className="p-3 lg:p-8 md:p-6">
//                         <h2 className="mb-2 text-black card-title md:mb-4 lg:mb-6">Statistics</h2>
//                         <div style={{
//                             borderRadius: '5px',
//                             backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
//                             backgroundSize: "100%",
//                             backgroundRepeat: "repeat",
//                         }} className='p-4 lg:p-8 md:p-6 '>
//                             <div className='flex items-center'>
//                                 <div style={{
//                                     padding: '10px',
//                                     borderRadius: '50%',
//                                     backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat",
//                                 }} className='mr-6'>
//                                     <span onClick={() => router.push('/deposit')} className=''><RiLuggageDepositFill size={25} color='Blue'></RiLuggageDepositFill></span>
//                                 </div>

//                                 <div>
//                                     <p className='text-xl'>Current Balance</p>
//                                     {
//                                         user?.isVerified ? <p className='text-2xl'>${user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0) + (amountFromSecondRefer || 0) + (amountFromThirdRefer || 0)}</p> : <p className='text-2xl'>$00.00</p>
//                                     }
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 {/* More card */}
//                 <div className='grid w-full grid-cols-3 gap-2 mt-4 lg:gap-4 md:gap-4 lg:mt-0 md:mt-0'>
//                     <div>
//                         <div onClick={() => router.push('/tradeBot')} className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}>
//                             <div className="pt-2">
//                                 <div>
//                                     <img className='block mx-auto rounded-full w-14 h-14' src='https://i.ibb.co/5sKhkbt/images.jpg' alt="" />
//                                     <p className='flex justify-center text-black'>Trade Boot</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div onClick={() => router.push('/myTrade')} className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}>
//                             <div className="pt-2">
//                                 <div>
//                                     <img className='block mx-auto rounded-full w-14 h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bg469-A3XjN0w7263R_lWbw4gAogrTT_YA&usqp=CAU" alt="" />
//                                     <p className='flex justify-center text-black'>My Trade</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.blackShadow}`}>
//                             <div className="pt-2">
//                                 <div>
//                                     <img className='block mx-auto rounded-full w-14 h-14' src="https://i.ibb.co/9VMpp5J/team-image.jpg" alt="" />
//                                     <p className='flex justify-center text-black'>Team</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
//                             <div className="pt-2">
//                                 <div>
//                                     <img className='block mx-auto rounded-full w-14 h-14' src="https://i.ibb.co/3YF4djv/single.jpg" alt="" />
//                                     <p className='flex justify-center text-black'>Charts</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <Link href="https://t.me/UASOFFICIALSUPPORTBOT">
//                             <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
//                                 <div className="pt-2">
//                                     <div>
//                                         <img className='block mx-auto rounded-full w-14 h-14' src="https://i.ibb.co/JcSBgDT/support.png" alt="" />
//                                         <p className='flex justify-center text-black'>Support</p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </Link>

//                     </div>
//                     <div>
//                         <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
//                             <div className="pt-2">
//                                 <div>
//                                     <img className='block mx-auto rounded-full w-14 h-14' src="https://i.ibb.co/HVfcrxX/certificate.png" alt="" />
//                                     <p className='flex justify-center text-black'>Certificate</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
//                             <div className="pt-2">
//                                 <div>
//                                     <img className='block mx-auto rounded-full w-14 h-14' src="https://media.istockphoto.com/id/524018928/vector/icon-of-paper-plane-white-plane-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=x_xtOUf4VFofptGasi8XO-y76prH0Ov5SRdmi6j6ZUI=" alt="" />
//                                     <p className='flex justify-center text-black'>Chanel</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Market Analysis */}
//             <div className='mt-4 lg:mt-8 md:mt-6'>
//                 <div style={{ background: '#19A7CE' }} className="w-full card hover:shadow-2xl">
//                     <div className="">
//                         <h2 className="p-4 text-black card-title ">Market Analysis</h2>
//                         <div className='p-4'>
//                             <div className='flex items-center'>
//                                 <div className='grid w-full grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-4'>
//                                     <Link target='_blank' href='https://in.tradingview.com/symbols/USDTUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
//                                         <div className={`w-full rounded-lg cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
//                                             <div>
//                                                 <img className='w-full h-48 rounded-lg' src="https://i.ibb.co/n8Yw1NH/images.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </Link>

//                                     <Link target='_blank' href='https://in.tradingview.com/symbols/USDTUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
//                                         <div className={`w-full rounded-lg cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
//                                             <div>
//                                                 <img className='w-full h-48 rounded-lg' src="https://i.ibb.co/m8FqpyD/images.jpg" alt="" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Dashboard;

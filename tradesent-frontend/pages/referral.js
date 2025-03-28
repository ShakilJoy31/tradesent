import { getDataFromLocalStore } from './../getDataFromLocalStorage';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useEffect, useState } from 'react';
import { getUser } from '@/lib/healper';

const Referral = () => {
    const [user, setUser] = useState(null); 
    useEffect(()=>{
        const localStorageSavedUser = JSON.parse(localStorage.getItem('savedUser'));
                getUser().then(res=> {
                  if(localStorageSavedUser){
                      const specificUser = res?.find(singleUser => singleUser?.email == localStorageSavedUser?.email);
                      setUser(specificUser); 
                    }
                })
    },[])
    const [refers, setRefers] = useState([]);
    useEffect(() => {
        getUser().then(res => {
            setRefers(res);
        })
    }, [])
    const myRefers = refers.filter(mySingleRefer => user?._id == mySingleRefer?.referId);
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>

            <h1 className='my-6 ml-2 font-serif text-3xl text-black'>Referral Program</h1>

            <div className='grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex lg:flex-row-reverse'>

                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className='w-full h-24 p-4 mb-4 lg:h-40 md:h-36 lg:p-8 md:p-6 lg:mb-0 md:mb-0'>
                    <div className='flex items-center'>
                        <div>
                            <p className='text-xl'>Current Balance</p>
                            {
                                user?.isVerified == true ? <p className='text-2xl'>$ {(user?.restAmount) ? (user?.restAmount) : ( parseInt(user?.amount) + (parseFloat(user?.dailyIncome) || 0) + ( parseInt(user?.amountFromRefer) || 0) + (parseInt(user?.amountFromSecondRefer) || 0) + (parseInt(user?.amountFromThirdRefer) || 0))}</p> : <p className='text-2xl'>$ 00.00</p>
                            }
                        </div>
                    </div>

                </div>

                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className='w-full h-32 p-4 mb-4 lg:h-40 md:h-36 lg:p-8 md:p-6 lg:mb-0 md:mb-0'>
                    <span className="">Your Referral id: </span>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='my-4'>
                                <input onClick={() => {
                                    navigator.clipboard.writeText(user?._id)
                                }} type="text" value={user?._id} className="w-full mt-1 text-blue-600 bg-black input focus:outline-none lg:w-[400px] md:w-[330px]" />
                            </div>

                            <label onClick={() => {
                                navigator.clipboard.writeText(user?._id)
                            }} style={{
                                borderRadius: '5px',
                                backgroundImage: "linear-gradient(45deg,#FC4F00, #8B1874)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`border-0 cursor-pointer btn btn-sm ${FoodProductStyle.emailCheckButtonOK}`}> <span className=' lg:block'>Copy</span></label>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <h1 className='grid justify-center my-4 ml-2 font-serif text-3xl text-black lg:flex lg:justify-between md:justify-between'>My Networks</h1>
                {
                        myRefers.map((refer, index) => (refer.isVerified == true) && <div style={{
                            borderRadius: '5px',
                            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} key={index} className='w-full p-2 mb-4 lg:p-4 md:p-3'>
                            <div className='flex items-center w-full'>
                            <div className='mr-2'>
                                <img style={{ borderRadius: '50%' }} className='w-20 h-20 mr-4' src={ refer?.userPhoto || 'https://i.ibb.co/d6CBxZx/download-1.png'} alt="User photo." />
                                </div>
                                <div>
                                    <h2 className="mb-2 font-serif text-2xl"><span className='font-bold text-black'>{refer?.fullName}</span></h2>
                                    <p>Refer Id: <span onClick={() => {
                                        navigator.clipboard.writeText(refer?._id)
                                    }} className='font-bold text-black hover:cursor-pointer' > {refer?._id}</span></p>
                                    <p>Gmail Id: <span className='font-bold text-black hover:cursor-pointer' >{refer?.email}</span></p>
                                    <p>Deposit amount: <span className='font-bold text-black hover:cursor-pointer' >{refer?.amount}</span></p>
                                </div>

                            </div>

                        </div>)
                    }
            </div>
        </div>
    );
};

export default Referral;

// r1 refer@gmail.com 123456

// r2 refer2@gmail.com 12345
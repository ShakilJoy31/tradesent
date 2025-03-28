import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useEffect, useState } from 'react';
import { getUser, updateUserWithTrId } from '@/lib/healper';

const Admin = () => {
    const [data, setData] = useState([]);
    const [refers, setRefers] = useState([]);
    const [level1, setLevel1] = useState(true);
    const [level2, setLevel2] = useState(false);
    useEffect(() => {
        getUser().then(res => {
            const payAbleUsers = res?.filter(user => user?.userTrId);
            setData(payAbleUsers);
            setRefers(res?.data);
        });
    }, [])
    // const paymentCalculationByAdmin = () => {
    //     console.log("button is called.")
    //     const myRefers = refers.filter(mySingleRefer => (user?._id == mySingleRefer?.referId));
    //     const myRefersWithPayment = myRefers.filter(mySingleRefer => mySingleRefer?.isVerified == true);
    //     let sum = 0;
    //     // let amountOfSecondRefer = 0; 
    //     myRefersWithPayment.map(obj => obj.amount).forEach(amount => {
    //         if (typeof amount == 'number') {
    //             sum += amount;
    //         }
    //     });
    //     const amountFromRefer = (sum * (5 / 100));
    //     // if(myRefersWithPayment){

    //     // }
    //     const amountFromSecondRefer = ((myRefersWithPayment[0]?.amountFromRefer * (100 / 5)) * (3 / 100)) || 0;
    //     const amountFromThirdRefer = ((myRefersWithPayment[0]?.amountFromSecondRefer * (100 / 3)) * (2 / 100)) || 0;
    //     if (amountFromRefer) {
    //         updateUserWithTrId(user?._id, { amountFromRefer: amountFromRefer, amountFromSecondRefer: amountFromSecondRefer }).then(res => { console.log(res)})
    //     }

    //     if (amountFromSecondRefer) {
    //         updateUserWithTrId(user?._id, { amountFromRefer: amountFromRefer, amountFromSecondRefer: amountFromSecondRefer, amountFromThirdRefer: amountFromThirdRefer }).then(res => {console.log(res) })
    //     }
    //     console.log(myRefersWithPayment[0])

    // }
    const handleDeclineUserToPay = (id) => {
        updateUserWithTrId(id, { userTrId: '' }).then(res => {
            if (res) {
                const restUser = data.filter(rest => rest?._id != id);
                setData(restUser);
            }
        });
    }


    // After checked wallet.
    const handleCheckedWallet = (getId) =>{
        const restData = data.filter(singleData =>singleData._id != getId); 
        setData(restData);
    }


    const [accepted, setAccepted] = useState('');
    const [declined, setDeclined] = useState(false);
    const handleAcceptUserToPay = (id) => {
        updateUserWithTrId(id, { isVerified: true, verifiedDate: new Date().toString().slice(4,15), verifiedDaysRemaining: 365 }).then(res => {
            setDeclined(true)
        });
        setAccepted(id);
        // paymentCalculationByAdmin();
    }
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='mt-6 ml-2 text-3xl text-black'>Admin Route</h1>
            <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                }} className='flex my-6'>

                <div onClick={()=>{setLevel1(true); setLevel2(false)}} className={`${level1 ? FoodProductStyle.newLevel : ''} w-full hover:cursor-pointer`}><p className='flex justify-center py-2 text-xl'>Match Tr to accept</p></div>

                <div  onClick={()=>{setLevel1(false); setLevel2(true)}} className={`${level2 ? FoodProductStyle.newLevel : ''} w-full hover:cursor-pointer`}><p className='flex justify-center py-2 text-xl'>Match Wallet to pay</p></div>

            </div>
            {
                level1 && <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="overflow-x-auto">
                    {
                        data.length == 0 ? <div>
                            <p className='flex justify-center my-4 font-serif text-2xl text-black'>No User Found! </p>
                        </div> : <table className="table w-full">
                            <thead>
                                <tr>
                                    <th> <span className='flex justify-center'>SL</span></th>
                                    <th> <span className='flex justify-center'>User id</span></th>
                                    <th> <span className='flex justify-center'>Email</span> </th>
                                    <th> <span className='flex justify-center'>Amount</span> </th>
                                    <th> <span className='flex justify-center'>Joined</span> </th>
                                    <th> <span className='flex justify-center'>Tr Id</span> </th>
                                    <th> <span className='flex justify-center'>Actions</span> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((payAbleUser, index) => <tr key={index} className={`${FoodProductStyle.tableRow}`}>
                                        <th> <span className='flex justify-center'>{index + 1}</span> </th>
                                        <th> <span className='flex justify-center'>{payAbleUser?._id}</span> </th>
                                        <td> <span className='flex justify-center'>{payAbleUser?.email}</span> </td>
                                        <td> <span className='flex justify-center'>{payAbleUser?.amount}</span> </td>
                                        <td> <span className='flex justify-center'>{payAbleUser?.joinedSince}</span> </td>
                                        <td> <span className='flex justify-center'>{payAbleUser?.userTrId}</span> </td>
                                        <td> <div className='flex justify-center'>
                                            <div className='items-center justify-between p-6 text-black rounded-sm'>
                                                {
                                                    (payAbleUser?.isVerified == true) || <label onClick={() => handleDeclineUserToPay(payAbleUser?._id)} style={{
                                                        backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                                        backgroundSize: "100%",
                                                        backgroundRepeat: "repeat",
                                                    }} className={`normal-case btn ${FoodProductStyle.paymentActionButton} border-0 mr-4 text-black btn-sm`}>Declined
                                                    </label>
                                                }
    
    
                                                <label onClick={() => handleAcceptUserToPay(payAbleUser?._id)} htmlFor="afterProceedModal" style={{
                                                    backgroundImage: "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                                                    backgroundSize: "100%",
                                                    backgroundRepeat: "repeat",
                                                }} className={`normal-case btn ${FoodProductStyle.paymentActionButtonDec} border-0 text-white btn-sm`}> {
                                                        (payAbleUser?.isVerified || (accepted == payAbleUser?._id)) ? 'Accepted' : 'Accept'
                                                    }
                                                </label>
    
                                            </div>
                                        </div> </td>
                                    </tr>)
                                }
    
                            </tbody>
                        </table>
                    }
    
                </div>
            }

            {/* For matching the wallet address */}
            {
                level2 && <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="overflow-x-auto">
                    {
                        data.length == 0 ? <div>
                            <p className='flex justify-center my-4 font-serif text-2xl text-black'>No User Found! </p>
                        </div> : <table className="table w-full">
                            <thead>
                                <tr>
                                    <th> <span className='flex justify-center'>SL</span></th>
                                    <th> <span className='flex justify-center'>User id</span></th>
                                    <th> <span className='flex justify-center'>Email</span> </th>
                                    <th> <span className='flex justify-center'>Withdraw</span> </th>
                                    <th> <span className='flex justify-center'>Joined</span> </th>
                                    <th> <span className='flex justify-center'>Wallet Address</span> </th>
                                    <th> <span className='flex justify-center'>Action</span> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((payAbleUser, index) => (payAbleUser?.withDrawAmount && payAbleUser?.walletAddress) && <tr key={index} className={`${FoodProductStyle.tableRow}`}>
                                        <th> <span className='flex justify-center'>{index + 1}</span> </th>
                                        <th> <span className='flex justify-center'>{payAbleUser?._id}</span> </th>
                                        <td> <span className='flex justify-center'>{payAbleUser?.email}</span> </td>
                                        <td> <span className='flex justify-center'>{payAbleUser?.withDrawAmount}</span> </td>
                                        <td> <span className='flex justify-center'>{payAbleUser?.joinedSince}</span> </td>
                                        <td> <span className='flex justify-center'>{payAbleUser?.walletAddress}</span> </td>
                                        <td> <span className='flex justify-center'> <label onClick={()=>handleCheckedWallet(payAbleUser?. _id)} style={{
                                                        backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                                        backgroundSize: "100%",
                                                        backgroundRepeat: "repeat",
                                                    }} className={`normal-case btn ${FoodProductStyle.paymentActionButton} border-0 mr-4 text-black btn-sm`}>Done</label> </span> 
                                            </td>
                                    </tr>)
                                }
    
                            </tbody>
                        </table>
                    }
    
                </div>
            }
            
        </div>
    );
};

export default Admin;
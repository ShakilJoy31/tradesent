import Link from 'next/link';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useRouter } from 'next/router';

const TradeBot = () => {
    const router = useRouter();
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 text-3xl text-black'>Trade bot</h1>
            <div className='grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex'>
                {/* 1st */}
                <div style={{
                        borderRadius: '5px',
                        backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className="w-full p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0">
                    <div className="">
                        <h2 className="card-title">Choose Trade Robot</h2>
                        <div className="mt-4">
                        <div className={`flex items-center justify-between ${FoodProductStyle.trading}`}>
                            <h1>COMBAT BOTS ALPHA</h1>
                            <label onClick={()=> router.push('/alpha')} style={{
                                backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-32 btn-sm`}>Trade
                            </label>
                        </div>

                        <div className={`flex items-center my-3 md:my-4 lg:my-5 justify-between ${FoodProductStyle.trading}`}>
                            <h1>COMBAT BOTS DELUXE</h1>
                            <label onClick={()=> router.push('/deluxe')} style={{
                                backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-32 btn-sm`}>Trade
                            </label>
                        </div>

                        <div className={`flex items-center justify-between ${FoodProductStyle.trading}`}>
                            <h1>COMBAT BOTS PREMIUM</h1>
                            <label onClick={()=> router.push('/premium')} style={{
                                backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-32 btn-sm`}>Trade
                            </label>
                        </div>
                    </div>
                    </div>
                </div>

                {/* 2nd */}
                <div style={{
                        borderRadius: '5px',
                        backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className="w-full p-2 lg:p-4 md:p-3">
                    <div className="">
                        <h2 className="my-3 card-title">Market</h2>
                        <div className='grid w-full grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-4'>
                                    <Link target='_blank' href='https://in.tradingview.com/symbols/USDTUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                    <div style={{
                                    borderRadius: '5px',
                                    background: 'black'
                                }} className={`w-full p-4 lg:p-1 md:p-1 cursor-pointer ${FoodProductStyle.tradingRight}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg" alt="" />
                                            <div className='grid flex-column'>
                                                <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'white'
                                        }} className='mr-1 text-black'>Trading view</span>
                                    </div>
                                </div>
                                    </Link>
                                

                                <Link target='_blank' href='https://in.tradingview.com/symbols/BTCUSDT/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                <div style={{
                                    borderRadius: '5px',
                                    background: 'black'
                                }} className={`w-full p-4 lg:p-1 md:p-1 cursor-pointer ${FoodProductStyle.tradingRight}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg" alt="" />
                                            <div className='grid flex-column'>
                                                <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'white'
                                        }} className='mr-1 text-black'>Trading view</span>
                                    </div>
                                </div>
                                </Link>

                                <Link target='_blank' href='https://in.tradingview.com/symbols/ETHUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                <div style={{
                                    borderRadius: '5px',
                                    background: 'black'
                                }} className={`w-full p-4 lg:p-1 md:p-1 cursor-pointer ${FoodProductStyle.tradingRight}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg" alt="" />
                                            <div className='grid flex-column'>
                                                <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'white'
                                        }} className='mr-1 text-black'>Trading view</span>
                                    </div>
                                </div>
                                </Link>


                                <Link target='_blank' href='https://in.tradingview.com/symbols/ETHUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                <div style={{
                                    borderRadius: '5px',
                                    background: 'black'
                                }} className={`w-full p-4 lg:p-1 md:p-1 cursor-pointer ${FoodProductStyle.tradingRight}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCXRP.svg" alt="" />
                                            <div className='grid flex-column'>
                                                <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'white'
                                        }} className='mr-1 text-black'>Trading view</span>
                                    </div>
                                </div>
                                </Link>
  
                                </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeBot;



{/*  */}

                    
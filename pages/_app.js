import "@/styles/globals.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useRouter } from "next/router";
import { getDataFromLocalStore } from "./../getDataFromLocalStorage";
import Footer from "./Components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          backgroundImage: `${
            router.pathname == "/"
              ? "linear-gradient(45deg, black, black"
              : "linear-gradient(45deg, #BFEAF5, #FEA1BF"
          })`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
        className="min-h-screen"
      >
        <div className="">
          <div className="flex">
            {router.pathname == "/login" ||
              router.pathname == "/signup" ||
              router.pathname == "/" || (
                <div className="hidden h-auto lg:block md:block">
                  <Sidebar></Sidebar>
                </div>
              )}

            <div className={`${router.pathname != "/deposit" ? "w-full" : ""}`}>
              <Component {...pageProps} />
              {/* {router.pathname !== "/deposit" && <Footer></Footer>} */}
              <div style={{width:'100%'}}>
              <Footer></Footer>
              </div>
            </div>
          </div>
        </div>

        {router.pathname == "/login" ||
          router.pathname == "/signup" ||
          router.pathname == "/" || (
            <div
              style={{
                position: "fixed",
                bottom: "0px",
                backgroundColor: "#247f9e",
              }}
              className="block w-full lg:hidden md:hidden"
            >
              <Sidebar></Sidebar>
            </div>
          )}
      </div>
    </div>
  );
}

// className={`${(router.pathname == '/profile' || router.pathname == '/login' || router.pathname == '/signup' || router.pathname == '/tradeBot' || router.pathname == '/alpha' || router.pathname == '/myTrade' || router.pathname == '/withdrawal' || router.pathname == '/internalTransfer' ) ? 'w-full' : ''}`}

import { useRouteError, Link } from "react-router-dom";
import Navbar from "./Navbar/NewNavbar";
import { Helmet } from "react-helmet";
import { MetaData } from "../CustomComponents";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const contentDescription = "ERROR 404".toLowerCase();
  return (
    <>
      <MetaData path="error" />
      <Navbar />
      <div className=" min-h-[75vh] flex justify-center items-center justify-items-center">
        <div className="h-full w-screen flex flex-col items-center justify-center gap-5">
          <h1 className="text-6xl md:text-[90px]">Oops!</h1>
          <p className="text-2xl md:text-[40px] text-center">Sorry, an unexpected error has occurred.</p>
          <p className="text-2xl md:text-[40px] text-center">
            <i>{error.statusText && `Error : ${error.statusText}`}</i>
          </p>
       
          <Link to="/" className="btn-link no-underline">back to home &rarr;</Link>

        </div>
      </div>
    </>
  );
}

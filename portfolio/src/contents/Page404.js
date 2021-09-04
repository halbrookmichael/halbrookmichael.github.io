import {
  useLocation 
} from "react-router-dom"

const Page404 = () => {
   const location = useLocation();

   return (
      <div>
         <h2>No match found for {location.pathname}</h2>
      </div>
   );
}

export default Page404;
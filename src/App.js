import { useEffect } from "react";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Header/Head";
import getLocation from "./utitls/getCordinates";

function App() {
  useEffect(() => {
    let a = getLocation();
    console.log(a);
  }, []);

  return (
    <div>
      {/* <Head />
      <Body/>
      <Footer/> */}
    </div>
  );
}

export default App;

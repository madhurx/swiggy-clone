import { useEffect } from "react";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Header/Head";
import getLocation from "./utils/getCordinates";
import C from "./C";
import { Provider } from "react-redux";
import store from './utils/redux/store';

function App() {
  useEffect(() => {
    let a = getLocation();
    console.log(a);
  }, []);

  return (
    <Provider store={store}>
      <C/>
      {/* <Head />
      <Body/>
      <Footer/> */}
    </Provider>
  );
}

export default App;

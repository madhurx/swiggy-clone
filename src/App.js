import { useEffect } from "react";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Header/Head";
import {useLocation} from "./utils/getCordinates";
import C from "./C";
import { Provider } from "react-redux";
import store from './utils/redux/store';
import LocationComponent from "./utils/LocationComponent";

function App() {

  return (
    <Provider store={store}>
      <LocationComponent/>
      {/* <Head />
      <Body/>
      <Footer/> */}
    </Provider>
  );
}

export default App;

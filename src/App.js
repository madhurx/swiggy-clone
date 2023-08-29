import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Header/Head";
import { Provider } from "react-redux";
import store from './utils/redux/store';
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  // const latitude = store.getState().location.coordinates.latitude;
  // const longitude = store.getState().location.coordinates.longitude;

  return (
    <Provider store={store}>
      <LandingPage/>
      <Head /> 
      <Body /> 
      <Footer /> 
    </Provider>
  );
}

export default App;

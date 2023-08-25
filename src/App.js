import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Header/Head";
import { Provider } from "react-redux";
import store from './utils/redux/store';
import SearchLocation from "./Components/LandingPage/SearchLocation";

function App() {

  return (
    <Provider store={store}>
      <SearchLocation/>
      {/* <Head />  */}
    </Provider>
  );
}

export default App;

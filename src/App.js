import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Header/Head";
import { Provider } from "react-redux";
import store from './utils/redux/store';

function App() {

  return (
    <Provider store={store}>
      <Head />
      <Body/>
      <Footer/>
    </Provider>
  );
}

export default App;

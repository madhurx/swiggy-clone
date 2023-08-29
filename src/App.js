import { Provider } from "react-redux";
import store from './utils/redux/store';
import LandingPage from "./Components/LandingPage/LandingPage";
import MainComponent from "./Components/MainComponent";

function App() {
  
  
    return (
      <Provider store={store}>
        <MainComponent/> 
      </Provider>
    );
}

export default App;

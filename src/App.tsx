import { Provider } from "react-redux";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MainContainer />
      </Provider>
    </>
  );
}

export default App;

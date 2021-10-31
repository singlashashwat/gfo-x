import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Home from "../views/Home";
import HistoryPage from "../views/HistoryPage";
import TransferPage from "../views/TransferPage";
import Header from "../components/Header";

function App() {
  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
        <Header /> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={HistoryPage} />
            <Route exact path="/transfer" component={TransferPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/index";
import HomePage from "../views/HomePage";

function App() {
  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;

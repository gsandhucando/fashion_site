import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Item from "./pages/Item";
import Checkout from "./pages/Checkout";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import userReducer from "./reducers/index";
import axios from "axios";

let store = createStore(userReducer);

let getUser = (dispatch) => {
  if (document.cookie.length > 0) {
    let id = document.cookie.slice(12, -3);
    axios
      .post("/api/user", { id })
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        dispatch({type: "CHANGE_USER", payload: response.data})
      })
      .catch(err => console.log(err));
  }
};



let MainApp = (props) => {
  console.log(props, '*********mainapp');
  useEffect(()=> {
    props.getUser()
  }, [])

  return (
    <div>
      <Router>
        <Route
          path="/"
          render={({ location }) => {
            return (
              <Nav
                nav={["men", "women", "cart", "contact"]}
                location={location}
              />
            );
          }}
        />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/item/:id" component={Item} />
          <Route exact path="/men/item/:id" component={Item} />
          <Route exact path="/women/item/:id" component={Item} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/men" component={Men} />
          <Route path="/women" component={Women} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};


let MapStateToProps = (state) => {
  return{
    user: state.user
  }
}

let MapDispatchToProps = (dispatch) => {
  return{
    getUser: () => {
      getUser(dispatch)
    }
  }
}

MainApp = connect(MapStateToProps, MapDispatchToProps)(MainApp)

const WrapperApp = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

ReactDOM.render(<WrapperApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

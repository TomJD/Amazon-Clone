import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Cart from './components/Cart.js'
import Home from './components/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { db, auth } from './firebase'
import Login from './components/Login'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <div className="App">
            <Header cartItems={cartItems} user={user} signOut={signOut} />
            <Switch>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        )
      }
    </Router>
  );
}

export default App;

import React from 'react';
import Home from "./components/Home"
import {Switch, Route} from "react-router-dom"
import ProductsPage from './components/pages/products/Products'
import Header from "./components/header/header"
import Signin from "./components/pages/signin/signin"
import SignIn from "./components/sign-in/Sign-in"
import {GlobalStyles} from "./GlobalStyles"
import { auth, createUserProfileDocument } from "./fb/firebase.utils"


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null 
    };
  }


  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
     
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
           
          });
        });
        console.log(this.state);
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render(){
 return( 
 <div>
 <GlobalStyles/>
 <Header/>
 <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/Products' component={ProductsPage}/>
  <Route path='/signin' component={Signin}/>
  <Route path='/Sign-in' component={SignIn}/>
 </Switch>
 </div>
 )
}
}
export default App;

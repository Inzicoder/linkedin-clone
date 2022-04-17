import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, userSignedIn, userSignedOut } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase.util";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const userLoggedIn = useSelector(state=> state.userData.isSignedIn)
  const dispatch = useDispatch()

  React.useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
    console.log(userAuth,'userAuth')
       if (userAuth) {
         dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
         }))
         dispatch(userSignedIn())
       }
       else{
         dispatch(logout())
         dispatch(userSignedOut())
       }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!userLoggedIn ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <div className="app__body">
            <Sidebar />
            <Feed />
           <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

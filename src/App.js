import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import EditProfile from "./components/pages/editProfile/EditProfile";
import Feed from './components/feed/Feed';
import Reels from './components/pages/reels/Reels';
import { useUserContext } from './context/UserContext';
import { UserContextProvider } from './context/UserContext';
import { useAuthState } from "react-firebase-hooks/auth";
import Watch from './components/pages/watch/Watch';


function App() {
  const { auth } = useUserContext();
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error)
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    console.log("RERENDER")
  }, [user])
  return (
    <UserContextProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route >
              <Route path='/' element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/profile">
                <Route path=":userId" element={<Profile />} />
                <Route path=":userId/edit" element={<EditProfile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
};

export default App;


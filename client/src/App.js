import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import List from "./component/List";
import CreatePost from "./component/CreatePost";
import EditPost from "./component/EditPost";
import Registration from "./component/Registration";
import Login from "./component/Login";
import AuthContext from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/validateToken",{
      headers:{
        accessToken: sessionStorage.getItem("accessToken")
      }
    }).then((res) => {
      if (res.data.error) {
        setAuthState(false);
      } else {
        setAuthState(true);
      }
    });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/createpost">Create A Post</Link>

            {!authState && (
              <>
                <Link to="/login"> Login</Link>
                <Link to="/registration"> Registration</Link>
              </>
            )}
          </div>

          <Routes>
            <Route path="/" exact Component={List}>
              {" "}
            </Route>
            <Route path="/createpost" exact Component={CreatePost}>
              {" "}
            </Route>
            <Route path="/post/:id" exact Component={EditPost}>
              {" "}
            </Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

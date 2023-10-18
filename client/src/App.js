import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import List from "./component/List";
import CreatePost from "./component/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="navbar">
      <Link to="/">Home</Link>
        <Link to="/createpost">Create A Post</Link>
        </div>
        <Routes>
          <Route path="/" exact Component={List}> </Route>
          <Route path="/createpost" exact Component={CreatePost}> </Route>
            
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;

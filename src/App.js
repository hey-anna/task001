// import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Post from "./pages/Post";
import PostView from "./pages/PostView";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Navbar /> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                    <NavLink className="nav-link" to="/pages/post">
                        Post*
                    </NavLink>
                    <NavLink className="nav-link" to="/pages/postview">
                        Postview*
                    </NavLink>
                </nav>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" exact element={<Users />}></Route>
                        <Route path="/pages/Post" exact element={<Post />}></Route>
                        <Route path="/pages/PostView" exact element={<PostView />}></Route>
                        {/* <Route path="/Users/:id" exact element={<User />}></Route> */}
                    </Routes>
                </div>
                <div className="card-footer">아뮤즈</div>
            </Router>
        </div>
    );
}

export default App;

//Navbar는 스위치 바깥에 위치하기때문에, 그대로 있고
// 라우터즈 안에 있는 부분만 바뀌게 되는 것

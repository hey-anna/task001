import React from 'react';
import Users from './pages/Users';
import Post from './pages/Post';
import PostView from './pages/PostView';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// 추가됨
// import './styles/global.css';
function App() {
  // const id = useParams();
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            {/* <NavLink className="nav-link" to="/pages/Post">
                            Post*
                        </NavLink>
                        <NavLink className="nav-link" to="/pages/Postview">
                            Postview*
                        </NavLink> */}
          </nav>
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="/Post/:id" element={<Post />} />
              <Route path="/Post/:id/PostView/:id" element={<PostView />} />
            </Routes>
          </div>
          <div className="footerStyle card-footer text-500 text-3xl">LOGO</div>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;

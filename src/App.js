import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { AuthContext } from "./components/context/AuthContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import Singlepage from "./pages/singlepage/Singlepage";
import Newpage from "./pages/newpage/Newpage";
function App() {

  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login" />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":userId" element={<RequireAuth><Singlepage/></RequireAuth>}/>
              <Route path="new" element={<RequireAuth><Newpage inputs={userInputs} title="Add new user"/></RequireAuth>}/>
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":productId" element={<RequireAuth><Singlepage/></RequireAuth>}/>
              <Route path="new" element={<RequireAuth><Newpage inputs={productInputs} title="Add new product"/></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

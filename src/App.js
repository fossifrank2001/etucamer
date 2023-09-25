import {BrowserRouter, Route, Routes} from "react-router-dom";
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/web/Home";
import NotFound from "./components/utils/NotFound";
import Login from "./pages/web/auth/Login";
import Registration from "./pages/web/auth/Registration";
import ResetPassword from "./pages/web/auth/ResetPassword";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/web' element={<WebLayout />}>
                  <Route index element={<Home/>} />
              </Route>
              <Route path='/auth'>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='registration' element={<Registration />}></Route>
                    <Route path='forgot-password' element={<ResetPassword />}></Route>
              </Route>
              <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

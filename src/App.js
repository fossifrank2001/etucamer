import {BrowserRouter, Route, Routes} from "react-router-dom";
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/web/Home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/web' element={<WebLayout />}>
                  <Route index element={<Home/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

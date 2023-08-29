import {BrowserRouter, Route, Routes} from "react-router-dom";
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/web/Home";
import NotFound from "./components/utils/NotFound";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/web' element={<WebLayout />}>
                  <Route index element={<Home/>} />
              </Route>
              <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Check} from "./pages/Check";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path={"/"}/>
            <Route element={<Check/>} path={"/check"}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

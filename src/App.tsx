import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-5 text-2xl z-10">
        <a href="/login">LOGIN</a>
        <a href="/register">REG</a>
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

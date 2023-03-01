import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

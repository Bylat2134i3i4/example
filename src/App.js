import { log, reg } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const Do_Request_Registration = () => {
    dispatch(reg());
  }

  const Do_Request_Autorization = () => {
    dispatch(log());
  }
  return (
    <div>
      <button onClick={() => Do_Request_Autorization()}>Авторизоваться</button>
      <button onClick={() => Do_Request_Registration()}>Зарегистрироваться</button>
    </div>
  );
}

export default App;

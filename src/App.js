import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

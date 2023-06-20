import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import NotExist from "./pages/NotExist";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<NotExist />} />
    </Routes>
  );
}

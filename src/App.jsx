import React from "react";
import Nav from "./components/Nav/Index";
import MainPage from "./pages/MainPage/Index";
import Footer from "./components/Footer/Index";
import SearchPage from "./pages/SearchPage/Index";
import DetailPage from "./pages/DetailPage/Index";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
};
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          {/* (Outlet) : "/" path 에서 모든것을 해결하고자 함 그니까 localhost:3000/:movieId 처럼 중첩 라우팅을 허용함 */}
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

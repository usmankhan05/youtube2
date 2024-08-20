import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Creators from "./components/Creators";

// import Loading from "./loader/Loading";

const App = () => {
  const { loading } = useAuth();
  return (
    <div>
      {/* {loading && <Loading />} */}
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchChildrensData, fetchLadiesData, fetchMensData } from "../src/store/slices/UserSlice";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mens from "./components/products/mens";
import Ladies from "./components/products/ladies";
import Childrens from "./components/products/childrens";
import Beauty from "./components/products/Beauty";
import Jewellery from "./components/products/Jewellery";
import Profile from "./components/products/Profile";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMensData());
    dispatch(fetchLadiesData());
    dispatch(fetchChildrensData());
  }, [dispatch]);



  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Mens />} />
        <Route path="/ladies" element={<Ladies />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/childrens" element={<Childrens />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;

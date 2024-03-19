/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavigationBar from "./TopNavigationBar";
import TeamSection from "./TeamSection";
import Members from "./Members";
import Member from "./Member";

function Services() {
  
  return (
      <>
      
      <BrowserRouter>
      <TopNavigationBar/>
      <Routes>
              <Route path="" element={<TeamSection/>}></Route>
              <Route path="/members" element={<Members/>}></Route>
              <Route path="/members/:id" element={<Member/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default Services;
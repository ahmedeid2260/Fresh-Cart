import { Outlet } from "react-router-dom"
// import * as LayoutCss from "./Layout.module.css"
import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

export default function Layout() {
  return <>
  <Navbar/>
  <div className="min-vh-100 py-5">
  <Outlet/>
  </div>
  <Footer/>
  </>
}

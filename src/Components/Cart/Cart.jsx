import { Helmet } from "react-helmet"
import * as CartCss from "./Cart.module.css"

import React from 'react'

export default function Cart() {
  return <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
  <div className="container py-5 my-5 fw-bolder bg-secondary-subtle">
    <h2>Shop Cart</h2>
    <h3>Your Cart Is Empty</h3>
  </div>
  </>
}

import React from 'react'
import { Helmet } from 'react-helmet'

export default function WishList() {
  return <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Wish List</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
  <div className="container py-5 my-5 fw-bolder bg-secondary-subtle">
    <h2>My WishList</h2>
    <h3>Your WishList Is Empty</h3>
  </div>
  </>
}

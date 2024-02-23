import { ThreeCircles } from "react-loader-spinner";
import * as BrandsCss from "./Brands.module.css"
import React from 'react'
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Brands() {
    // cache Data
    const { data, isError, isLoading, error } = useQuery(
      "getAllBrands",
      getAllBrands,
      { cacheTime: 60000 }
    );
    // loading spinner
    if (isLoading) {
      return (
        <div className="vh-100 d-flex justify-content-center bg-primary bg-opacity-50 align-items-center">
          <ThreeCircles
            visible={true}
            height="150"
            width="150"
            color="#09c"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      );
    }
    if (isError) {
      return (
        <>
          <div className="d-flex justify-content-center align-content-center fw-bolder">
            <h3 className="h1">{error}</h3>
          </div>
        </>
      );
    }
    const brand = data?.data.data;
  
  function getAllBrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  return <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Brands</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
  <div className="container py-5">
    <div className="row g-4">
      
    {brand.map((brand,index)=>
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className="brand position-relative border border-3">
                <Link to={`/brands/${brand._id}`}>
                  <img
                    className="w-100 "
                    style={{height:"200px",
                          }}
                    src={brand.image}
                    alt={brand.name}
                  />
                  <h3 className="text-success fw-bold py-3 text-center">
                    {brand.name}
                  </h3>
                </Link>
              </div>
            </div>        
      )}
    </div>
  </div>
  </>
}

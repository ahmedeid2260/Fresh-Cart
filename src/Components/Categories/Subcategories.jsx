import axios from 'axios';
import React from 'react'
import { Helmet } from 'react-helmet';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

export default function Subcategories() {
  const {id} = useParams();
  // cache Data
  const { data, isError, isLoading, error } = useQuery(
    `getsubcategories-${id}`,
    getsubcategories,
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
  const subcategories = data?.data.data;
  // if(subcategories.length===0){
  //   return<>
  //   <div className="bg-main text-white text-center  container py-5">
  //     <h1>Brand List is Empty </h1>
  //   </div>
  //   </>
  // }
  // console.log(subcategories);
function getsubcategories(){
  return axios.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}/subcategories`)
}

return <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category Details</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
<div className="container py-5">
<Link to="/categories"><span role='button' className="text-white back border rounded bg-success bg-opacity-75 ms-3 mb-1 p-1 d-inline-block">
        <i className="fa-solid fa-arrow-left fa-2x"></i>
        </span></Link>
  <div className="row g-4 my-5">
    {subcategories.length===0?<div className="bg-main text-white text-center  container py-5">
      <h1>Brand List is Empty </h1>
    </div>: <>{subcategories.map((subcategories,index)=>
          <div key={index} className="col-xl-3 col-lg-4 col-md-6">
            <div className="subcategories position-relative border border-3">
              <Link to={`/subcategories/${subcategories.id}`}>
                <h2 style={{height:"100px"}} className=" text-success fw-bold py-3 text-center">
                  {subcategories.name}
                </h2>
              </Link>
            </div>
          </div>        
    )}</>
    }
  {subcategories.map((subcategories,index)=>
          <div key={index} className="col-xl-3 col-lg-4 col-md-6">
            <div className="subcategories position-relative border border-3">
              <Link to={`/subcategories/${subcategories.id}`}>
                <h2 style={{height:"100px"}} className=" text-success fw-bold py-3 text-center">
                  {subcategories.name}
                </h2>
              </Link>
            </div>
          </div>        
    )}
  </div>
</div>
</>
}
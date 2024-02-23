import axios from "axios";
import ProductsCss from "./Products.module.css";
import { ThreeCircles } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartAuthContext } from "../../Context/CartAuthProvider/CartAuthProvider";
import { Helmet } from "react-helmet";

export default function Products() {
  const {addToFavorite,addToCart} = useContext(cartAuthContext);

  // cache Data
  const { data, isError, isLoading, error } = useQuery(
    `getproduct`,
    getAllProduct,
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
  const product = data?.data.data;
  console.log(product);
  async function getAllProduct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  return (
    <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
    <input className="form my-5 form-control w-75 mx-auto" placeholder="Search...." type="text" />
      <div className="container py-5">
        <div className="row g-4">
          {product.map((product, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className="product position-relative">
                <Link to={`/productDetails/${product.id}`}>
                  <img
                    className="w-100"
                    src={product.imageCover}
                    alt={product.title}
                  />
                  {product.priceAfterDiscount ? (
                    <div className={ProductsCss.sale}>Sale</div>
                  ) : (
                    ""
                  )}
                  <h3 className="h6 text-success fw-bold">
                    {product.category.name}
                  </h3>
                  <h2 className="h5 fw-bold text-center">
                    {product.title.split(" ").splice(0, 2).join(" ")}
                  </h2>
                  <div className="d-flex justify-content-between">
                    {product.priceAfterDiscount ? (
                      <p>
                        <span className="text-decoration-line-through">
                          {product.price}
                        </span>
                        /{product.priceAfterDiscount} Egp
                      </p>
                    ) : (
                      <p>{product.price} Egp</p>
                    )}
                    <p>
                      <span className="text-warning">
                        <i className="fa-solid fa-star"></i>
                      </span>
                      {product.ratingsAverage}
                    </p>
                  </div>
                  <h6>remains:{product.quantity}</h6>
                </Link>
                <div className="d-flex justify-content-between fa-2x">
                  <button
                    onClick={function () {
                      addToCart(product.id);
                    }}
                    className="btn btn-success"
                  >
                    Add To Cart
                  </button>
                  <div onClick={function(){
                    addToFavorite(product.id)
                  }} role="button" >
                  <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import "./ListProduct.css";

function ListProduct() {
  return (
    <ul className="list-product row">
      <li className="col l-3 product-item">
        <div className="product-item__img">
          <img
            src="https://cdn-demo.algolia.com/bestbuy-0118/5116500_rb.jpg"
            alt="name"
          />
        </div>
        <div className="product-item__info">
          <p className="product-category">Cameras & Camcorders</p>
          <h1>
            <span className="product-highlight">
              Insignia™ - Tripod Thread Mount Adapter
            </span>
          </h1>

          <p className="product-description">
            Get the perfect stabilized shot with your camera by using …
          </p>

          <p>
            <span className="primary-text">$</span>
            <strong>6.99</strong>
            <span className="primary-text product-rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#e2a400"
                  fillRule="evenodd"
                  d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                ></path>
              </svg>
              4
            </span>
          </p>
        </div>
      </li>
      
    </ul>
  );
}

export default ListProduct;

import { store } from "../../../Redux/store";
import "./ListProduct.css";

function ListProduct() {
  const { filtedList, categoryList, pageSize, currentPage } = store.getState();
  return (
    <ul className="list-product row">
      {filtedList &&
        filtedList.map((item, index) => {
          if (
            index < pageSize * currentPage &&
            index >= pageSize * currentPage - pageSize
          ) {
            return (
              <li key={item.id} className="col l-3 product-item">
                <div className="product-item__img">
                  <img src={item.img} alt="name" />
                </div>
                <div className="product-item__info">
                  <p className="product-category">
                    {categoryList[item.categoryId - 1].name}
                  </p>
                  <h1>
                    <span className="product-highlight">{item.name}</span>
                  </h1>

                  <p className="product-description">{item.description}</p>

                  <p>
                    <span className="primary-text">$</span>
                    <strong>{item.price}</strong>
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
                      {item.rate}
                    </span>
                  </p>
                </div>
              </li>
            );
          }
        })}
    </ul>
  );
}

export default ListProduct;

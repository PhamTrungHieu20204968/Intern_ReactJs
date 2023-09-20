import { Slider, Switch } from "antd";
import { StarFilled } from "@ant-design/icons";

import "./Sidebar.css";
import styles from "./library.css";
import { store } from "../../../Redux/store";

function Sidebar() {
  const {
    categoryList,
    filtedList,
    brandList,
    selectedCategory,
    selectedBrands,
  } = store.getState();

  const handleSelectCategory = (id) => {
    if (id !== selectedCategory) {
      store.dispatch({
        type: "Filter by category",
        payload: id,
      });
    } else {
      store.dispatch({
        type: "Filter by category",
        payload: 0,
      });
    }
  };

  const handleSelectBrand = (id) => {
    if (selectedBrands.indexOf(id) === -1) {
      store.dispatch({
        type: "Filter by brand",
        payload: [...selectedBrands, id],
      });
    } else {
      store.dispatch({
        type: "Filter by brand",
        payload: selectedBrands.slice(selectedBrands.indexOf(id), 1),
      });
    }
  };
  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <h2>Filters</h2>
        <div className="clear-filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h11v11H0z"></path>
              <path
                fill="#000"
                fillRule="nonzero"
                d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
              ></path>
            </g>
          </svg>
          Clear filters
        </div>
      </div>
      <div className="sidebar-body">
        <div className="category content-border">
          <div className="sidebar-body__header">category</div>
          <div className="sidebar-body__content">
            <ul className="sidebar-list">
              {categoryList &&
                categoryList.map((category) => {
                  const count = filtedList.filter(
                    (product) => product.categoryId === category.id
                  ).length;
                  return (
                    count > 0 && (
                      <li
                        key={category.id}
                        className={
                          selectedCategory == category.id
                            ? "sidebar-item active"
                            : "sidebar-item"
                        }
                        onClick={() => handleSelectCategory(category.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                        >
                          <path
                            fill="%2390919E"
                            fillRule="nonzero"
                            d="M0 4l4-4 4 4z"
                          />
                        </svg>
                        <span className="sidebar-item__label">
                          {category.name}
                        </span>
                        <span className="sidebar-item__count">{count}</span>
                      </li>
                    )
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="brand content-border">
          <div className="sidebar-body__header">brand</div>
          <div className="sidebar-body__content">
            <div className="search-box">
              <form className="search-form">
                <input
                  type="text"
                  className="search-box-input"
                  placeholder="Search for brands…"
                />
                <button className="search-box-button">
                  <svg
                    className="ais-SearchBox-submitIcon"
                    width="10"
                    height="10"
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                  >
                    <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                  </svg>
                </button>
              </form>

              <ul className="sidebar-list">
                {brandList &&
                  brandList.map((brand) => {
                    const count = filtedList.filter(
                      (product) => product.brandId === brand.id
                    ).length;
                    return (
                      count > 0 && (
                        <li
                          key={brand.id}
                          className={
                            selectedBrands.includes(brand.id)
                              ? "sidebar-item sidebar-item--selected"
                              : "sidebar-item"
                          }
                          onClick={() => handleSelectBrand(brand.id)}
                        >
                          <label className="sidebar-item__title">
                            <input
                              className="ais-RefinementList-checkbox"
                              type="checkbox"
                            />
                            <span className="sidebar-item__label">
                              {brand.name}
                            </span>
                            <span className="sidebar-item__count">{count}</span>
                          </label>
                        </li>
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>

        <div className="price content-border">
          <div className="sidebar-body__header">price</div>
          <div className="sidebar-body__content">
            <Slider
              min={4}
              max={650}
              range
              defaultValue={[4, 650]}
              tooltip={{
                open: true,
              }}
              trackStyle={styles.sliderTrack}
            />
          </div>
        </div>

        <div className="shipping content-border">
          <div className="sidebar-body__header">FREE SHIPPING</div>
          <div className="sidebar-body__content">
            <div className="toggle-label">
              <div className="toggle-label__btn">
                <span className="toggle-label__btn-text">No</span>
                <Switch size="small" />
              </div>
              <div className="toggle-label__text">
                Display only items with free shipping
              </div>
            </div>
          </div>
        </div>

        <div className="rating content-border">
          <div className="sidebar-body__header">ratings</div>
          <div className="sidebar-body__content">
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon disable" />
                <span className="sidebar-item__count">
                  {filtedList.filter((product) => product.rate >= 4).length}
                </span>
              </li>
              <li className="sidebar-item">
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon disable" />
                <StarFilled className="rating-icon disable" />
                <span className="sidebar-item__count">
                  {filtedList.filter((product) => product.rate === 3).length}
                </span>
              </li>
              <li className="sidebar-item">
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon disable" />
                <StarFilled className="rating-icon disable" />
                <StarFilled className="rating-icon disable" />
                <span className="sidebar-item__count">
                  {filtedList.filter((product) => product.rate === 2).length}
                </span>
              </li>
              <li className="sidebar-item">
                <StarFilled className="rating-icon" />
                <StarFilled className="rating-icon disable" />
                <StarFilled className="rating-icon disable" />
                <StarFilled className="rating-icon disable" />
                <StarFilled className="rating-icon disable" />
                <span className="sidebar-item__count">
                  {filtedList.filter((product) => product.rate === 1).length}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;

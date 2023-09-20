import { Select, Pagination } from "antd";

import "./Body.css";
import Sidebar from "./Sidebar/Sidebar";
import ListProduct from "./ListProduct/ListProduct";
import { store } from "../../Redux/store";

function Body() {
  const { filtedList, pageSize } = store.getState();

  const handleOrderChange = (value) => {
    store.dispatch({
      type: "Filter by order",
      payload: value,
    });
  };

  const handleCHangePageSize = (value) => {
    store.dispatch({
      type: "Pagination",
      payload: value,
    });
  };
  
  const handleChangePage = (value) => {
    store.dispatch({
      type: "Change page",
      payload: value,
    });
  };

  return (
    <main className="grid wide">
      <div className="row no-gutters">
        <div className="col l-3 m-0 c-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col l-9 m-0 c-0">
          <section className="body-content">
            <header className="content-header">
              <Select
                defaultValue="Sort by featured"
                style={{
                  width: 160,
                }}
                options={[
                  {
                    value: 0,
                    label: "Sort by featured",
                  },
                  {
                    value: 1,
                    label: "Price ascending",
                  },
                  {
                    value: 2,
                    label: "Price descending",
                  },
                ]}
                onChange={(value) => handleOrderChange(value)}
              />
              <Select
                defaultValue="8"
                style={{
                  width: 160,
                }}
                options={[
                  {
                    value: 8,
                    label: "8 hits per page",
                  },
                  {
                    value: 16,
                    label: "16 hits per page",
                  },
                ]}
                onChange={(value) => handleCHangePageSize(value)}
              />
            </header>

            <div className="list-product__wrapper container">
              <ListProduct></ListProduct>
            </div>

            <div className="pagination">
              <Pagination
                defaultCurrent={1}
                total={filtedList.length}
                pageSize={pageSize}
                onChange={(value) => handleChangePage(value)}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Body;

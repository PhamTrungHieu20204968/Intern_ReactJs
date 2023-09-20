import { Select, Pagination } from "antd";

import "./Body.css";
import Sidebar from "./Sidebar/Sidebar";
import ListProduct from "./ListProduct/ListProduct";
import { store } from "../../Redux/store";

function Body() {
  const { filtedList, pageSize } = store.getState();
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
                    value: "default",
                    label: "Sort by featured",
                  },
                  {
                    value: "ascending",
                    label: "Price ascending",
                  },
                  {
                    value: "descending",
                    label: "Price descending",
                  },
                ]}
              />
              <Select
                defaultValue="8"
                style={{
                  width: 160,
                }}
                options={[
                  {
                    value: "8",
                    label: "8 hits per page",
                  },
                  {
                    value: "16",
                    label: "16 hits per page",
                  },
                ]}
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
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Body;

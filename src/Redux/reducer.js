import axios from "axios";
let categoryList, brandList, listProducts, filtedList;
await axios
  .get("http://localhost:3004/categories")
  .then((res) => (categoryList = res.data));

await axios
  .get("http://localhost:3004/brands")
  .then((res) => (brandList = res.data));

await axios
  .get("http://localhost:3004/products")
  .then((res) => (listProducts = res.data));

const initialState = {
  listProducts,
  filtedList: listProducts,
  brandList,
  categoryList,
  headerInputSearch: "",
  pageSize: 8,
  brandInputSearch: "",
  currentPage: 1,
  selectedCategory: 0,
  selectedBrands: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "Header search":
      filtedList = state.filtedList.filter((p) => {
        return (
          p.name.includes(action.payload) ||
          p.description.includes(action.payload)
        );
      });
      return {
        listProducts,
        brandList,
        categoryList,
        filtedList,
        headerInputSearch: action.payload,
        pageSize: state.pageSize,
        brandInputSearch: state.brandInputSearch,
        currentPage: state.currentPage,
        selectedCategory: state.selectedCategory,
        selectedBrands: state.selectedBrands,
      };

    case "Filter by category":
      if (action.payload != 0) {
        filtedList = state.filtedList.filter((p) => {
          return p.categoryId === action.payload;
        });
      } else {
        filtedList = state.listProducts;
      }
      return {
        listProducts,
        brandList,
        categoryList,
        filtedList,
        headerInputSearch: state.headerInputSearch,
        pageSize: state.pageSize,
        brandInputSearch: state.brandInputSearch,
        currentPage: state.currentPage,
        selectedCategory: action.payload,
        selectedBrands: state.selectedBrands,
      };

    case "Filter by brand":
      console.log(action);
      if (action.payload.length > 0) {
        filtedList = state.filtedList.filter((p) => {
          return action.payload.includes(p.brandId);
        });
      } else {
        filtedList = state.listProducts;
      }
      return {
        listProducts,
        brandList,
        categoryList,
        filtedList,
        headerInputSearch: state.headerInputSearch,
        pageSize: state.pageSize,
        brandInputSearch: state.brandInputSearch,
        currentPage: state.currentPage,
        selectedCategory: state.selectedCategory,
        selectedBrands: action.payload,
      };
    default:
      return state;
  }
}

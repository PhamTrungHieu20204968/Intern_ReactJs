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
  price: [4, 650],
  rate: 0,
  order: 0,
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
        price: state.price,
        rate: state.rate,
        order: state.order,
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
        price: state.price,
        rate: state.rate,
        order: state.order,
      };

    case "Filter by brand":
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
        price: state.price,
        rate: state.rate,
        order: state.order,
      };

    case "Filter by price":
      filtedList = state.filtedList.filter((p) => {
        return p.price >= action.payload[0] && p.price <= action.payload[1];
      });
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
        selectedBrands: state.selectedBrands,
        price: action.payload,
        rate: state.rate,
        order: state.order,
      };

    case "Filter by rate":
      if (action.payload !== 0) {
        filtedList = state.listProducts.filter((p) => {
          return p.rate === action.payload;
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
        selectedBrands: state.selectedBrands,
        price: state.price,
        rate: action.payload,
        order: state.order,
      };

    case "Filter by order":
      if (action.payload !== 0) {
        filtedList = state.filtedList.sort(function (a, b) {
          return action.payload === 1 ? a.price - b.price : b.price - a.price;
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
        selectedBrands: state.selectedBrands,
        price: state.price,
        rate: state.rate,
        order: action.payload,
      };

    case "Pagination":
      return {
        listProducts,
        brandList,
        categoryList,
        filtedList: state.filtedList,
        headerInputSearch: state.headerInputSearch,
        pageSize: action.payload,
        brandInputSearch: state.brandInputSearch,
        currentPage: state.currentPage,
        selectedCategory: state.selectedCategory,
        selectedBrands: state.selectedBrands,
        price: state.price,
        rate: state.rate,
        order: state.order,
      };

    case "Change page":
      return {
        listProducts,
        brandList,
        categoryList,
        filtedList: state.filtedList,
        headerInputSearch: state.headerInputSearch,
        pageSize: state.pageSize,
        brandInputSearch: state.brandInputSearch,
        currentPage: action.payload,
        selectedCategory: state.selectedCategory,
        selectedBrands: state.selectedBrands,
        price: state.price,
        rate: state.rate,
        order: state.order,
      };

    case "Clear filter":
      return initialState;
    default:
      return state;
  }
}

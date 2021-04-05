import useAxios from "./useAxios";
import useGetMultuAxios from "./useMultiAxios";

function useProducts() {
    return useAxios("/products", "GET");
}
function useProduct() {
    return useAxios("/products", "GET");
}
function useProductsWithCategory(category) {
    return useAxios(`/products/category/${category}`, "GET");
}
function useSelectedProducts(cart) {
    let pathArray = cart.map(({ id }) => `/products/${id}`);
    return useGetMultuAxios(pathArray, "GET");
}

export { useProduct, useProducts, useProductsWithCategory, useSelectedProducts };

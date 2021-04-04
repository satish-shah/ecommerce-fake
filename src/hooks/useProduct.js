import useAxios from "./useAxios";

function useProduct() {
    return useAxios("/products", "GET");
}
function useProductsWithCategory(category) {
    return useAxios(`/products/category/${category}`, "GET");
}

export { useProduct, useProductsWithCategory };

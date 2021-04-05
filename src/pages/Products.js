import { useProductsWithCategory } from "../hooks/useProduct";
import Loading from "../components/Loading";
import Container from "@material-ui/core/Container";
import ProductGrid from "../components/ProductGrid";
import { useParams } from "react-router";


const Products = () => {
    const { category } = useParams();

    const { response: products, loading } = useProductsWithCategory(category);
    if (loading) {
        return <Loading text={`Loading the products`} />;
    }
    return (
        <Container>
            <ProductGrid products={products} />
        </Container>
    );
};

export default Products;
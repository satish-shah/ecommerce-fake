import { useProduct } from "../hooks/useProduct";
import Loading from "../components/Loading";
import Container from "@material-ui/core/Container";
import ProductGrid from "../components/ProductGrid";
const Products = () => {
    const { response: products, loading } = useProduct();
    if (loading) {
        return <Loading text={`Fetching the products`} />;
    }
    return (
        <Container>
            <ProductGrid products={products} />
        </Container>
    );
};

export default Products;
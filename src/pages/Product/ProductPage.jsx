import React, { useState } from "react";
import { Container } from "../../style/Product/Product-Layout";
import ProductListPage from "../../component/Product/ProductListPage";
import ArtistListPage from "../../component/Product/ArtistListPage";

// 상품 리스트 페이지
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Container>
        <ArtistListPage></ArtistListPage>
        <ProductListPage products={products} setProducts={setProducts}/>
      </Container>
    </>
  );
}

export default ProductPage;

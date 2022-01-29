import styled from "styled-components";
import Product from "./Product";
import { popProducts } from "../data";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {

  const [products, Setproducts] = useState([])
  const [filteredProducts, SetFilteredProducts] = useState([])

  useEffect(() => {
    
  }, [cat])

  return (
    <Container>
      {popProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

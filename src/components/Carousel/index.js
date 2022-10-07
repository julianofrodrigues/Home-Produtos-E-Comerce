import React from 'react';
import Slider from "react-slick";
import { ProductContainer, ProductImg, Title, TextCarroseulNull, TextProduct} from './styles';



function Carousel({title,products, backgroundColor, icon, emptyMsg}) {
  const settings = {
    dots: true,
    infinite: products.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div>
      <Title style={{backgroundColor}}>{title} {icon}</Title> 
      <Slider {...settings}>
       
        {products.length < 1 ? <TextCarroseulNull> <div> <h1 > {emptyMsg}  </h1> </div></TextCarroseulNull> : products.map(product => {
          const posterPathIsNull = product.thumbnail.split("/").at(-1) == 'null';
          if(!posterPathIsNull) {
            return (
              <ProductContainer  key = {product.id} >
                  <ProductImg src = {product.thumbnail} alt= {product.title}  />
                  <TextProduct>Produto: {product.title}</TextProduct>
                  <TextProduct>Preço: R$ {product.price}</TextProduct>
              </ProductContainer>
            )
          }
        })}
      </Slider>
    </div>
  );
}
 
export default Carousel;
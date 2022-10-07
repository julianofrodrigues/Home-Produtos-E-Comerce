import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  line-height: 1;
  border-radius: 25px;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const ProductContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: 20%;
  color: white;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const TextProduct = styled.h2`
  color: #FFFFFF;
  text-align: center;
`;

export const TextCarroseulNull = styled.div`
  margin-bottom: 16px;
  display: flex !important;
  width:90vw !important;
  justify-content: center;
  align-content: center;
  line-height: 1;


`;




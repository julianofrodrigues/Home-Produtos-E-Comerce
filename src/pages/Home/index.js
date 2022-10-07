import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import api from '../../services/api';
import { FiSmartphone } from 'react-icons/fi';
import { AiOutlineLaptop, AiFillCar } from 'react-icons/ai';
import { GiFragrance } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa';



function Home() {
  const [smartPhones, setSmartPhones] = useState([])
  const [laptops, setLaptops] = useState([])
  const [fragrances, SetFragrances] = useState([])
  const [automotive, SetAutomotive] = useState([])
  const [lighting, SetLighting] = useState([])


  
  useEffect(() => {
    api.get('/smartphones').then((products) => {
      setSmartPhones(products.data.products);
    })
    api.get('/laptops').then((products) => {
      setLaptops(products.data.products);
    })
    api.get('/fragrances').then((products) => {
      SetFragrances(products.data.products);
    })
    api.get('/automotive').then((products) => {
      SetAutomotive(products.data.products);
    })
    api.get('/lighting').then((products) => {
      SetLighting(products.data.products);
    })
  }, [])
  

  return (
    <PageDefault>
      <Carousel  title = {"SmartPhone"} icon={<FiSmartphone style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />}  products = {smartPhones} backgroundColor={"#30475E"}/>
      <Carousel  title = {"Laptops"} icon={<AiOutlineLaptop style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />} products = {laptops} backgroundColor={"#A1B57D"}/>
      <Carousel  title = {"Fragrances"} icon={<GiFragrance style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />} products = {fragrances} backgroundColor={"#B33030"}/> 
      <Carousel  title = {"Automotive"} icon={<AiFillCar style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />} products = {automotive} backgroundColor={"#990000"}/> 
      <Carousel  title = {"Lighting"} icon={<FaRegLightbulb style={{ color: '#FFFFFF', fontSize: '30px', marginLeft: '1%' }} />} products = {lighting} backgroundColor={"#ff9900"}/> 
    </PageDefault>
  );
}

export default Home;
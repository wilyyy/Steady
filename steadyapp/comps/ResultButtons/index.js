import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ResultCont = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: space-between;
`;
const ResultBackground = styled.button`
    display: flex;
    width: 22.5rem;
    height: 5rem;
    background-color: #F86D34;
    border-radius: 15px;
`;
const ResultImage = styled.div`
    display: flex;
    background-image: url(${props=>props.src});
    width: 8rem;
    height: 8rem;
`;
const ResultText = styled.p`
    display: flex;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 3rem;
    color: #FFF6E0;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  width: 400px;
`;

const Div2 = styled.div`
  display: flex;
  max-width: 473px;
  height: 115px;
  width: 397px;
  border-radius: 30px;
  background-color: #F57C33;
`;

const Div3 = styled.div`
  display: flex;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  max-width: 187px;
  width: 187px;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const ImageSizer = styled.div`
  width: 100%;
  padding-top: 100%;
  pointer-events: none;
  font-size: 0;
`;

const Div4 = styled.div`
  max-width: 119px;
  color: #FFF6E0;
  font-size: 42px;
  letter-spacing: 0%;
  text-align: center;
  font-family: Lexend Deca, sans-serif;
  padding-top: 32px;
  margin-right: 35px;
  margin-left: 32px;
`;

const Div5 = styled.div`
  max-width: 25px;
  color: #FFF6E0;
  font-size: 42px;
  letter-spacing: 0%;
  text-align: center;
  font-family: Lexend Deca, sans-serif;
  padding-top: 30px;
  margin-right: 35px;
`;

const Result = ({
    src="../../meal_icon.png",

}) => {

    

    return  <Div>
    <Div2>
      <Div3>
        <picture>
          <source
            srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F47290f5c80f74ef58163f0fc7719c2db"
            type="image/webp"
          />
          <Image
          ></Image>
        </picture>

        <ImageSizer className="builder-image-sizer"></ImageSizer>
      </Div3>
      <Div4>Meals</Div4>
      <Div5>+</Div5>
    </Div2>
  </Div>
}

export default Result;

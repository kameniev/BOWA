import React, {Fragment} from 'react'
import Icon from './UI/Icon'
import styled from 'styled-components/native'







const FirstScreenBG = () => (
    <Fragment>
    <BG1Container><Icon name={"bgSVG1_1"} width={125}></Icon></BG1Container>
    <BG2Container><Icon name={"bgSVG1_2"} width={125}></Icon></BG2Container>
    <BG3Container><Icon name={"bgSVG1_3"} width={125}></Icon></BG3Container>
    <BG4Container><Icon name={"bgSVG1_4"} width={125}></Icon></BG4Container>
    </Fragment>
    
)

export default FirstScreenBG



const BG1Container = styled.View`
position: absolute;
width: 162px;
height: 162px;


z-index: -1;





`

const BG2Container = styled.View`
position: absolute;
width: 161.89px;
height: 161.89px;
left: 70%;
top: 81%;
z-index: -1;


transform: rotate(70.95deg);

`

const BG3Container = styled.View`

position: absolute;
top: 53.5%;
left: 7%;
transform: scale(1.5);
z-index: -1;


`

const BG4Container = styled.View`

position: absolute;

left: 58%;
transform: scale(1.5);
z-index: -1;


`



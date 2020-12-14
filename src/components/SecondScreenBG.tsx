import React, {Fragment} from 'react'
import Icon from './UI/Icon'
import styled from 'styled-components/native'







const SecondScreenBG = () => (
    <Fragment>
    <BG1Container><Icon name={"bgSVG2_1"}></Icon></BG1Container>
    <BG2Container><Icon name={"bgSVG2_2"}></Icon></BG2Container>
    <BG3Container><Icon name={"bgSVG2_3"}></Icon></BG3Container>
   
    </Fragment>
    
)

export default SecondScreenBG



const BG1Container = styled.View`
position: absolute;
width: 162px;
height: 162px;


top: 82%;
left: -4%;
z-index: -1;




`

const BG2Container = styled.View`
position: absolute;
width: 161.89px;
height: 161.89px;
top: 10%;
left: 60%;
z-index: -1;




`

const BG3Container = styled.View`

position: absolute;
height: 372px;
width: 210px;
left: 30%;
top: 49%;
z-index: -1;
transform: scale(1.6);






`





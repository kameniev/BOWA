import React, {Fragment} from 'react'
import Icon from './UI/Icon'
import styled from 'styled-components/native'







const ThirdScreenBG = () => (
    <Fragment>
    <BG1Container><Icon name={"bgSVG3_1"} width={380}></Icon></BG1Container>
    <BG2Container><Icon name={"bgSVG3_2"} width={542}></Icon></BG2Container>
    </Fragment>
    
)

export default ThirdScreenBG



const BG1Container = styled.View`
position: absolute;
left: 0px;
top: -2px;


z-index: -2;





`

const BG2Container = styled.View`
position: absolute;
left: -35%;
top: 19%;




z-index: -1;

`


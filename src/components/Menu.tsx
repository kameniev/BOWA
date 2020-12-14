import React, { Fragment } from 'react'
import styled from 'styled-components/native'
import MenuElement from './UI/MenuElement'
import {TouchableOpacity} from 'react-native'





const Menu = () => {
    return(
    <Fragment>
    <TouchableOpacity><Container1><MenuElement name={"MenuSVG1"} title={"Заявка на ремонт"}></MenuElement></Container1></TouchableOpacity>
    <TouchableOpacity><Container2><MenuElement name={"MenuSVG2"} title={"Відео-інструкції"}></MenuElement></Container2></TouchableOpacity>
    <TouchableOpacity><Container3><MenuElement name={"MenuSVG3"} title={"Чат з менеджером"}></MenuElement></Container3></TouchableOpacity>
    <TouchableOpacity><Container4><MenuElement name={"MenuSVG4"} title={"Дзвінок у підтримку"}></MenuElement></Container4></TouchableOpacity>
    <TouchableOpacity><Container5><MenuElement name={"MenuSVG5"} title={"Мій кабінет"}></MenuElement></Container5></TouchableOpacity>
    <TouchableOpacity><Container6><MenuElement name={"MenuSVG6"} title={"Контакти"}></MenuElement></Container6></TouchableOpacity>
    <TouchableOpacity><Container7><MenuElement name={"MenuSVG7"} title={"Продукція"}></MenuElement></Container7></TouchableOpacity>
    </Fragment>
    )
}

export default Menu




const Container1 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

width: 153px;
height: 182px;
left: 25px;
top: 116px;

`

const Container2 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

height: 145px;
width: 153px;
left: 197px;
top: 116px;

`

const Container3 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

height: 165px;
width: 153px;
left: 25px;
top: 318px;


`

const Container4 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

height: 162px;
width: 153px;
left: 197px;
top: 281px;



`

const Container5 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

height: 182px;
width: 153px;
left: 25px;
top: 503px;

padding-top: 20%;



`

const Container6 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

height: 145px;
width: 153px;
left: 197px;
top: 463px;



`

const Container7 = styled.View`

position: absolute;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};

height: 145px;
width: 153px;
left: 197px;
top: 628px;



`




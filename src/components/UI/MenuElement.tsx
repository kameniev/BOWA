import React, {Fragment} from 'react'
import {View, Button} from 'react-native'
import styled from 'styled-components/native'
import Icon, {IconName} from './Icon'


type MenuProps = {
    title: string,
    name: IconName
}


const MenuElement = ({title, name} : MenuProps) => {
   return(
       <Fragment>
   <IconContainer><Icon name={name}></Icon></IconContainer><MenuText>{title}</MenuText>
   </Fragment>
   
   )
}

export default MenuElement

const IconContainer = styled.View`
margin-top: 12%;

`



const MenuText = styled.Text`

width: 153px;
font-style: normal;
font-weight: bold;
text-align: center;
letter-spacing: 1px;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};

color: ${props => props.theme.colors.ui.purple};

position: absolute;
bottom: 0;
margin-bottom: 12%;


`

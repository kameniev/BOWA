import * as React from 'react';
import styled from 'styled-components/native'
import {View} from 'react-native'
import Icon from '../../components/UI/Icon'





type ButtonProps = {
    sent?: boolean,
    go: Function
}

const NextButton = ( {sent, go} :ButtonProps) => {
   
  if (sent) return(<ButtonNext onPress={() => go()}><ButtonText>Далі   <IconContainer><Icon name={"arrow"} width={20}></Icon></IconContainer></ButtonText></ButtonNext>)
    return(<View></View>)
    
}

export default NextButton



const ButtonNext = styled.TouchableOpacity`
position: absolute;
width: 187px;
height: 42px;
left: 148px;
top: 710px;


background: ${props => props.theme.colors.ui.orange};


box-shadow: ${props => props.theme.shadow.basic};
border-radius: ${props => props.theme.borderRadius.basic};
`

const ButtonText = styled.Text`
text-align: center;
color: ${props => props.theme.colors.system.white};
line-height: ${props => props.theme.lineHeight.big};
`

const IconContainer = styled.View`
margin-top: 7%;
margin-left: 3%;
`
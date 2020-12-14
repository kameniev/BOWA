import * as React from 'react';
import styled from 'styled-components/native'
import { Text, View } from 'react-native';
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Background from '../components/ThirdScreenBG'



class ThirdScreen extends React.Component{
  render(){
    return(
    <Container>
      <Logo></Logo>
      <Menu></Menu>
      <Background></Background>
    </Container>
    )
  }
}

export default ThirdScreen

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.ui.bg}; 
`


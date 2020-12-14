import * as React from 'react';
import styled from 'styled-components/native'
import InfoContaner from '../components/InfoContainer'
import NextButton from '../components/UI/NextButton'
import Logo from '../components/Logo'
import Background from '../components/SecondScreenBG'
import {Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native'





interface SecondScreenProps {
  history: any
}

class SecondScreen extends React.Component<SecondScreenProps>{
state = {
  sent: false
}

updateData = () => {
  this.setState({sent: true})
}

  render(){
const {history} = this.props

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
        <Logo></Logo>
        <KeyboardAvoidingView behavior="padding">
      <InfoContaner updateData={this.updateData}></InfoContaner>
      <NextButton go={()=>history.push('/menu')} sent={this.state.sent}></NextButton>
      </KeyboardAvoidingView>
      <Background></Background>
      </Container>
   </TouchableWithoutFeedback>
    )
  }
}



export default SecondScreen

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.ui.bg}; 
`
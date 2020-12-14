import * as React from 'react';
import styled from 'styled-components/native'
import InputNumberContainer from '../components/InputNumberContainer'
import CodeMessageContainer from '../components/CodeMessageContainer'
import NextButton from '../components/UI/NextButton'
import Logo from '../components/Logo'
import Background from '../components/FirstScreenBG'
import {Keyboard, TouchableWithoutFeedback} from 'react-native'




interface FirstScreenProps {
  history: any
}

class FirstScreen extends React.Component<FirstScreenProps> {
  
  


  state = {
    confirmed: false,
    sent: false
  }

  updateData = () => {
    this.setState({confirmed: true})
  }

  updateSentData = () => {
    this.setState({sent: true})
  }

  

  render() {
    const {history} = this.props
    return(
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        
      <Logo></Logo> 
      <InputNumberContainer updateData={this.updateData} ></InputNumberContainer>
      <CodeMessageContainer updateSentData={this.updateSentData} confirmed={this.state.confirmed}></CodeMessageContainer>
      <NextButton go={() => history.push('/info')}sent={this.state.sent} ></NextButton>
      <Background></Background>
      
   </Container>
   </TouchableWithoutFeedback>
    )
  }
}



export default FirstScreen

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.ui.bg}; 
`









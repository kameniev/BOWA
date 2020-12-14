import React from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native'


type ConfirmProps = {
    confirmed: boolean,
    updateSentData: Function
}

const CodeMessageContainer = ({confirmed, updateSentData} : ConfirmProps) => {

  if (confirmed) return(
    <View>
<CodeMessageText>Введіть код із смс:</CodeMessageText>
<InputCodeMessage keyboardType={'phone-pad'} keyboardAppearance={'default'} maxLength={6} onChangeText={() => updateSentData()}></InputCodeMessage>

</View>) 

return (<View></View>)
}

export default CodeMessageContainer




const CodeMessageText = styled.Text`
position: absolute;
width: 165px;
height: 22px;
left: 105px;
top: 344px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.main};
line-height: ${props => props.theme.lineHeight.main};

color: ${props => props.theme.colors.system.black};
`


const InputCodeMessage = styled.TextInput`
position: absolute;
width: 155px;
height: 42px;
left: 110px;
top: 386px;

text-align: center;
font-style: normal;
font-weight: normal;
letter-spacing: 5px;
background: ${props => props.theme.colors.ui.background};
border: 1px solid ${props => props.theme.colors.ui.border};
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.main};
line-height: ${props => props.theme.lineHeight.main};
border-radius: ${props => props.theme.borderRadius.basic};
`
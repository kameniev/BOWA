import React from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native'
import {Keyboard} from 'react-native'

type InputProps = {
    updateData: Function
}


const inputNumber = ({updateData} :InputProps) => {
    return(
    <View>
<MainText>Введіть номер телефону</MainText>
<InputNumber keyboardType={'phone-pad'} keyboardAppearance={'dark'} maxLength={13}></InputNumber>
<ConfirmButton onPress={() => {updateData(); Keyboard.dismiss()}}><ButtonText>Відправити код</ButtonText></ConfirmButton>
</View>
)
}

export default inputNumber



const ButtonText = styled.Text`
text-align: center;
color: ${props => props.theme.colors.system.white};
line-height: ${props => props.theme.lineHeight.big};
`


const MainText = styled.Text`
position: absolute;
width: 211px;
height: 22px;
left: 82px;
top: 125px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.main};
line-height: ${props => props.theme.lineHeight.main};
color: ${props => props.theme.colors.system.black};
`

const InputNumber = styled.TextInput`
position: absolute;
width: 325px;
height: 42px;
left: 25px;
top: 185px;


text-align: center;
border: 1px solid ${props => props.theme.colors.ui.border};
background: ${props => props.theme.colors.ui.background};

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.main};
line-height: ${props => props.theme.lineHeight.main};


border-radius: ${props => props.theme.borderRadius.basic};
`

const ConfirmButton = styled.TouchableOpacity`
position: absolute;
width: 325px;
height: 42px;
left: 25px;
top: 250px;



background: ${props => props.theme.colors.ui.orange};


box-shadow: ${props => props.theme.shadow.basic};
border-radius: ${props => props.theme.borderRadius.basic};
`



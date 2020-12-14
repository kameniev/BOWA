import React, { useState } from 'react'
import styled from 'styled-components/native'
import {View} from 'react-native'



type InputProps = {
    updateData: Function
}



function infoContainer({updateData}:InputProps) {
   
    const [poped, setPoped] = useState(false);


    return(
        
<View>
<MainText>Введіть номер телефону</MainText>
<NameText>Ім’я:</NameText>
<InputName onChangeText={()=>updateData()} keyboardAppearance={'default'}></InputName>

<SurnameText>Прізвище:</SurnameText>
<InputSurname keyboardAppearance={'default'}></InputSurname>

<CityText>Місто:</CityText>
<InputCity keyboardAppearance={'default'}></InputCity>

<MedInstText>Медичний заклад:</MedInstText>
<InputMedInst keyboardAppearance={'default'} placeholder="не обов’язково"></InputMedInst>
</View>
)
}

export default infoContainer




const MainText = styled.Text`
position: absolute;
width: 65px;
height: 22px;
left: 155px;
top: 198px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.main};
line-height: ${props => props.theme.lineHeight.main};

color: ${props => props.theme.colors.system.black};
`

const NameText = styled.Text`
position: absolute;
width: 35px;
height: 20px;
left: 25px;
top: 260px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};

color: ${props => props.theme.colors.system.black};

`

const SurnameText = styled.Text`
position: absolute;
width: 78px;
height: 19px;
left: 25px;
top: 352px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};



color: ${props => props.theme.colors.system.black};
`

const CityText = styled.Text`
position: absolute;
width: 104px;
height: 19px;
left: 25px;
top: 443px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};



color: ${props => props.theme.colors.system.black};
`

const MedInstText = styled.Text`
position: absolute;
width: 168px;
height: 19px;
left: 25px;
top: 534px;

font-style: normal;
font-weight: normal;
font-family: ${props => props.theme.fontFamilyRegular};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};



color: ${props => props.theme.colors.system.black};
`

const InputName = styled.TextInput`
position: absolute;
width: 325px;
height: 42px;
left: 25px;
top: 290px;
text-align: center;

background: ${props => props.theme.colors.ui.background};


border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};
`

const InputSurname = styled.TextInput`
position: absolute;
width: 325px;
height: 42px;
left: 25px;
top: 381px;
text-align: center;

background: ${props => props.theme.colors.ui.background};

border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};
`

const InputCity = styled.TextInput`
position: absolute;
width: 325px;
height: 42px;
left: 25px;
top: 472px;
text-align: center;

background: ${props => props.theme.colors.ui.background};

border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};
`

const InputMedInst = styled.TextInput`
position: absolute;
width: 325px;
height: 42px;
left: 25px;
top: 563px;
text-align: center;

background: ${props => props.theme.colors.ui.background};

border: 1px solid ${props => props.theme.colors.ui.border};
border-radius: ${props => props.theme.borderRadius.basic};
`
import React, {Fragment} from 'react'
import Icon, { IconName } from './UI/Icon'
import styled from 'styled-components/native'
import {View} from 'react-native'
import { render } from 'react-dom'




const Logo = () => (
    <Fragment>
    <BowaContainer><Icon name={"BOWA"} width={125}></Icon></BowaContainer>
    <MedicalContainer><Icon name={"medical"} width={125}></Icon></MedicalContainer>
    </Fragment>
    
)

export default Logo



const BowaContainer = styled.View`
position: absolute;
left: 33.33%;
right: 33.33%;
top: 4.93%;
bottom: 92.61%;

`

const MedicalContainer = styled.View`
position: absolute;
left: 33.33%;
right: 33.33%;
top: 8.87%;
bottom: 90.34%;
flex: 1;
`




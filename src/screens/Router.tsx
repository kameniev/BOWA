import { FirstScreen, SecondScreen, ThirdScreen } from './index'
import React, { Component } from 'react'
import {NativeRouter, Route, Switch} from 'react-router-native'
import {View} from 'react-native'



export default class Router extends Component {
    render() {
        return(
           
            <NativeRouter>
                    <Switch>
                        <Route exact path="/" component={FirstScreen}></Route>
                        <Route exact path="/info" component={SecondScreen}></Route>
                        <Route exact path="/menu" component={ThirdScreen}></Route>
                    </Switch>
                
            </NativeRouter>
           
        )
    }
}








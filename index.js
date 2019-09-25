/**
 * @format
 */
import React from "react";
import { createAppContainer } from "react-navigation";
import { AsyncStorage, AppState, AppRegistry, Linking, StatusBar, Alert, SafeAreaView, StyleSheet } from "react-native";
import { name as appName } from './app.json';

import { createRootNavigator } from "PlayIO/src/app/router/router";
import LaunchScreen from "PlayIO/src/components/LaunchScreen/LaunchScreen";

//TODO: Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from 'PlayIO/src/redux/reducers';
const store = createStore( allReducers );
export default class PlayIO extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            status: true,
            isStartPage: "TabNavigator",
            appState: AppState.currentState
        };
        StatusBar.setBarStyle( 'light-content', true );
    }





    onComplited ( status, pageName )
    {
        try  
        {
            this.setState( {
                status: status,
                isStartPage: pageName
            } );
        } catch ( e )
        {
            console.log( {
                e
            } );
        }
    }

    render ()
    {
        const Layout = createRootNavigator(
            this.state.status,
            this.state.isStartPage
        );
        const AppContainer = createAppContainer( Layout );
        return this.state.status ? (
            <Provider store={ store }>
                <LaunchScreen
                    screenProps={ {
                        currentFriends: this.state.currentFriends,
                        possibleFriends: this.state.possibleFriends,
                        addFriend: this.addFriend,
                    } }
                    onComplited={ ( status: boolean, pageName: string ) =>
                        this.onComplited( status, pageName )
                    }
                />

            </Provider>
        ) : (
                <Provider store={ store }>

                    <AppContainer
                        screenProps={ {
                            currentFriends: this.state.currentFriends,
                            possibleFriends: this.state.possibleFriends,
                            addFriend: this.addFriend,
                        } }
                    />

                </Provider>
            );
    }
}

console.disableYellowBox = true;
AppRegistry.registerComponent( appName, () => PlayIO );

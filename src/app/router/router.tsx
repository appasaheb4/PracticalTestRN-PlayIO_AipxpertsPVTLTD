import React from "react";
import { colors, images } from "PlayIO/src/app/constants/constants";
import IconFontAwe from "react-native-vector-icons/FontAwesome";


//TODO: Custome Object
import utils from "PlayIO/src/app/constants/utils";


import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
} from "react-navigation";



//TODO: Tabbar Screen                       
import HomeScreen from "PlayIO/src/components/TabbarScreen/HomeScreen/HomeScreen";
import DifficultyScreen from "PlayIO/src/components/TabbarScreen/DifficultyScreen/DifficultyScreen";
import QuestionsScreen from "PlayIO/src/components/TabbarScreen/QuestionsScreen/QuestionsScreen";
import ResultScreen from "PlayIO/src/components/TabbarScreen/ResultScreen/ResultScreen";




//MemberNavigator
const TabNavigator = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: "Home", //localization("TabBarItem.Payment"),
                drawerLockMode: "locked-open",
                tabBarIcon: ( { tintColor } ) => (
                    <IconFontAwe name="home" color={ tintColor } size={ 22 } />
                )

            }
        },
        DifficultyScreen: {
            screen: DifficultyScreen,
            navigationOptions: {
                tabBarLabel: "Difficulty", //localization("TabBarItem.Payment"),
                drawerLockMode: "locked-open",
                tabBarIcon: ( { tintColor } ) => (
                    <IconFontAwe name="bars" color={ tintColor } size={ 22 } />
                )

            }
        },
        QuestionsScreen: {
            screen: QuestionsScreen,
            navigationOptions: {
                tabBarLabel: "Questions", //localization("TabBarItem.Payment"),
                drawerLockMode: "locked-open",
                tabBarIcon: ( { tintColor } ) => (
                    <IconFontAwe name="help" color={ tintColor } size={ 22 } />
                )

            }
        },
        ResultScreen: {
            screen: ResultScreen,
            navigationOptions: {
                tabBarLabel: "Result", //localization("TabBarItem.Payment"),
                drawerLockMode: "locked-open",
                tabBarIcon: ( { tintColor } ) => (
                    <IconFontAwe name="print" color={ tintColor } size={ 22 } />
                )

            }
        },

    },
    {
        initialRouteName: "HomeScreen",
        tabBarOptions: {
            showLabel: true,
            //swipeEnabled: true,
            showIcon: true,
            activeTintColor: colors.appColor,
            labelStyle: {
                fontSize: 11,
                fontFamily: "FiraSans-Medium"
            },
            style: {
                backgroundColor: "#ffffff"
            },
            tabStyle: {}
        }
    }
);





//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
    signedIn = false,
    screenName = "PasscodeScreen"
) => {
    return createStackNavigator(
        {
            TabNavigator: {
                screen: TabNavigator,
                navigationOptions: { header: null }
            }
        },
        {
            initialRouteName: signedIn ? "TabNavigator" : screenName
        }
    );
};

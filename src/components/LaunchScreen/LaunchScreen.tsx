import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Alert,
  StatusBar,
  Animated,
  Easing
} from "react-native";

import { colors, images, asyncStorageKeys } from "PlayIO/src/app/constants/constants";
import utils from "PlayIO/src/app/constants/utils";


export default class LaunchScreen extends Component<any, any> {
  constructor ( props: any ) {
    super( props );
    this.state = ( {
      centerLogo: null,
      centerLogoOpticy: new Animated.Value( 0 )
    } )
  }


  async componentDidMount() {
    let rootViewController = await AsyncStorage.getItem( asyncStorageKeys.rootViewController );
    setTimeout( async () => {
      if ( rootViewController != null ) {
        this.props.onComplited( false, rootViewController );
      }
      else {
        this.props.onComplited( false, "TabNavigator" );
      }
    }, 3000 );
  }

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar hidden />
        <Image
          source={ images.launchScreen.appiocn }
          style={ [ { height: 100, width: 300 } ] }
          resizeMode="stretch"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
} );

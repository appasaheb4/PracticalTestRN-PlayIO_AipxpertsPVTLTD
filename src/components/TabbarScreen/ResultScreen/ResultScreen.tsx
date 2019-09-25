import React, { Component } from "react";
import {
    StyleSheet,
    View,
    AsyncStorage,
    Platform,
    Dimensions,
    Image,
    SafeAreaView,
    Keyboard,
    StatusBar,
    Linking,
    Alert,
    TouchableOpacity
} from "react-native";
import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Item,
    Input,
    Textarea, Form,
    Left,
    Right,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Picker,
    Fab
} from "native-base";
import { StackActions, NavigationActions } from "react-navigation";
import { Avatar } from 'react-native-elements';
import IconFontAwe from "react-native-vector-icons/FontAwesome";


import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//TODO: Custome Comp
import CustomeStatusBar from "PlayIO/src/components/Custom/StatusBar/CustomeStatusBar";



//TODO: Custome Alert 
import AlertSimple from "PlayIO/src/components/Custom/Alert/AlertSimple";
let alert = new AlertSimple();


//TODO:Custome Object
import { colors, images, icons } from "PlayIO/src/app/constants/constants";
import utils from "PlayIO/src/app/constants/utils";

export default class ResultScreen extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = {

        };
    }

    click_Ok = async () => {
        console.log( 'comming  soon' );

    }


    render() {
        return (
            <Container>
                <Header style={ { backgroundColor: colors.appColor } }>
                    <Left>
                        <Button
                            transparent
                            onPress={ () => alert.simpleOkAction( "Opps", "comming soon", this.click_Ok )
                            }
                        >
                            <IconFontAwe name="bars" size={ 25 } color="#ffffff" />
                        </Button>
                    </Left>
                    <Body style={ { flex: 0, alignItems: "center" } }>
                        <Title
                            adjustsFontSizeToFit={ true }
                            numberOfLines={ 1 }
                        >
                            PlayIO
                        </Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={ () => alert.simpleOkAction( "Opps", "comming soon", this.click_Ok )
                            }
                        >
                            <IconFontAwe name="bell" size={ 15 } color="#ffffff" />
                        </Button>

                    </Right>
                </Header>
                <Content
                    contentContainerStyle={ styles.container }
                >
                    <Text>Congratulation</Text>
                </Content>
                <CustomeStatusBar backgroundColor={ colors.appColor } hidden={ false } barStyle="light-content" />
            </Container>
        );
    }
}



let styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

} );

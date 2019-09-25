import React, { Component } from "react";
import {
    View,
    Platform,
    StatusBar
} from "react-native";
import {
    Header,
    Title,
    Button,
    Left,
    Icon,
    Right,
    Body,
    Text
} from "native-base";


//TODO:Custome Object
import { colors, images, icons } from "SocietyManage/src/app/constants/constants";



export default class HeaderTitle extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
    }
    render() {
        return (
            <Header style={ { backgroundColor: colors.appColor } }>
                <Left style={ { flex: 1 } }>
                    <Button
                        transparent
                        onPress={ () => this.props.pop() }
                    >
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={ { flex: 8 } }>
                    <Title style={ [ { fontSize: 18, alignSelf: "flex-start" } ] }>{ this.props.title }</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}

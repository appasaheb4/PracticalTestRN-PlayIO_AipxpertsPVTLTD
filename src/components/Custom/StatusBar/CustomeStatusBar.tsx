import React, { Component } from "react";
import {
    View,
    Platform,
    StatusBar
} from "react-native";



export default class CustomeStatusBar extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
    }
    render() {
        return (
            <StatusBar
                barStyle={ this.props.barStyle }
                backgroundColor={ this.props.backgroundColor }
                translucent={ false }
                hidden={ this.props.hidden }
            />
        );
    }
}

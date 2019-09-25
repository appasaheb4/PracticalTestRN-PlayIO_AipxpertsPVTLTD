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
    FlatList,
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
import { Avatar } from 'react-native-elements';
import IconFontAwe from "react-native-vector-icons/FontAwesome";


import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//TODO: Custome Comp
import CustomeStatusBar from "PlayIO/src/components/Custom/StatusBar/CustomeStatusBar";
import FullLinearGradientButton from "PlayIO/src/components/Custom/LinearGradient/Button/FullLinearGradientButton";
import Loader from "PlayIO/src/components/Custom/Loader/ModelLoader";

//TODO: Custome Alert 
import AlertSimple from "PlayIO/src/components/Custom/Alert/AlertSimple";
let alert = new AlertSimple();


//TODO:Custome Object
import { colors, apiary, icons } from "PlayIO/src/app/constants/constants";
import utils from "PlayIO/src/app/constants/utils";

//TODO: Api  manage
import { postGetData } from "PlayIO/src/app/manage/Models/ModelHome/ModelHome";

export default class QuestionsScreen extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = {
            data: [],
            flag_Loading: true,
        };
    }

    async componentWillMount() {
        console.log( { url: apiary.getCategory } );

        var resEvent = await postGetData( apiary.getCategory );
        resEvent = resEvent.data.results;
        console.log( { resEvent } );
        this.setState( {
            flag_Loading: false,
            data: resEvent,
        } )
    }

    click_Ok = async () => {
        console.log( 'comming  soon' );

    }

    click_LoadData = async () => {
        this.setState( {
            flag_Loading: true,
        } )
        var resEvent = await postGetData( apiary.getCategoryrandom + Math.floor( Math.random() * 10 ) );
        resEvent = resEvent.data.results;
        console.log( { resEvent } );
        this.setState( {
            flag_Loading: false,
            data: resEvent,
        } )
    }


    render() {
        //array
        let { data } = this.state;
        //flag
        let { flag_Loading } = this.state;
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
                    <View style={ { flex: 1, marginTop: 20 } }>
                        <FlatList
                            data={
                                data
                            }
                            showsVerticalScrollIndicator={ false }
                            renderItem={ ( { item } ) => (
                                <TouchableOpacity style={ {
                                } } onPress={ () => {
                                    alert.simpleOkAction( "Opps", "comming soon", this.click_Ok )
                                } }>
                                    <View style={ { flex: 1, backgroundColor: "#ffffff", marginLeft: 10, marginRight: 10, marginBottom: 10, borderRadius: 10 } }>
                                        <View style={ { flex: 1, flexDirection: 'row', backgroundColor: "#ffffff", margin: 5, borderRadius: 10 } } >
                                            <Avatar rounded title={ item.category != null && item.category.charAt( 0 ) } />
                                            <Text style={ [ { alignSelf: "center", marginLeft: 10 } ] }>{ item.category }</Text>
                                            <View style={ {
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                justifyContent: 'center'
                                            } }>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ) }
                            keyExtractor={ item => item.recordID }
                            extraData={ this.state }
                        />
                    </View>
                    <View style={ { flex: 0.12 } }>
                        <FullLinearGradientButton
                            title="Get Ramdon List"
                            disabled={ false }
                            style={ [ false ? { opacity: 0.4 } : { opacity: 1 }, { borderRadius: 10 } ] }
                            click_Done={ () => this.click_LoadData() } />
                    </View>
                </Content>
                <CustomeStatusBar backgroundColor={ colors.appColor } hidden={ false } barStyle="light-content" />
                <Loader loading={ flag_Loading } color={ colors.appColor } size={ 30 } />
            </Container>
        );
    }
}



let styles = StyleSheet.create( {
    container: {
        flex: 1,

    },

} );

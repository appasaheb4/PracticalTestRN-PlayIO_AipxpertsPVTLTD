import React from 'react';
import { StyleSheet, View, Modal, Text, Image } from 'react-native';
import {
    MaterialIndicator
} from 'react-native-indicators';

//TODO: Custome Object 
import { colors, images } from "PlayIO/src/app/constants/constants";

const Loader = ( { loading = false, color = "#000000", size = 30, opacity = 0.4, message = "Loading" } ) => {
    return (
        <Modal
            transparent
            animationType={ 'none' }
            visible={ loading }
            onRequestClose={ () => null }
        >
            <View
                style={ [
                    styles.modalBackground,
                    { backgroundColor: `rgba(0,0,0,${ opacity })` }
                ] }
            >
                <View style={ styles.activityIndicatorWrapper }>
                    <MaterialIndicator color={ colors.appColor } />
                </View>
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create( {
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
} );

export default Loader;

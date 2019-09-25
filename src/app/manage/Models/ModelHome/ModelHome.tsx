import axios from "axios";
import { Alert } from "react-native";


const postAddData = ( url: string, data: any ) => {
    return new Promise( ( resolve, reject ) => {
        try {
            axios( {
                method: "post",
                url,
                data
            } )
                .then( ( response: any ) => {
                    let data = response.data;
                    resolve( { data } );
                } )
                .catch( function ( error: any ) {
                    console.log( error );
                } );
        }
        catch ( error ) {
            Alert.alert( error )
        }
    } );
};


const postGetData = ( url: string, data: any ) => {
    return new Promise( ( resolve, reject ) => {
        try {

            axios( {
                method: "get",
                url,
                data
            } )
                .then( ( response: any ) => {
                    let data = response.data;
                    resolve( { data } );
                } )
                .catch( function ( error: any ) {
                    console.log( error );
                } );
        }
        catch ( error ) {
            Alert.alert( error )
        }
    } );
};

export {
    postAddData,
    postGetData
};
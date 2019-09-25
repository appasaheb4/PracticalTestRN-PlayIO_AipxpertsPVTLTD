import moment from "moment";
//import ConnectivityTracker from "react-native-connectivity-tracker";
import DeviceInfo from "react-native-device-info";
import Singleton from "SocietyManage/src/app/constants/Singleton";

//TODO: Date Format  

const getUnixTimeDate = date => {
  const dateTime = new Date( date ).getTime();
  const lastUpdateDate = Math.floor( dateTime / 1000 );
  return lastUpdateDate;
};

const getUnixToDateFormat = unixDate => {
  return moment.unix( unixDate ).format( "DD-MM-YYYY HH:mm:ss" );
};
const getUnixToNormaDateFormat = unixDate => {
  return moment.unix( unixDate ).format( "DD-MM-YYYY" );
};

const getDateForYYYYMMDD = ( unixDate: any ) => {
  console.log( { unixDate } );
  return moment.unix( unixDate ).format( "YYYY-MM-DD" );
};

const getUnixToDateFormat1 = () => {
  return moment().format( 'hh:mm a , DD MMM YYYY' );
}

const getUnixToDateFormat2 = () => {
  return moment().format( 'DD MMM YYYY , hh:mm a' );
}


//TODO: for sorting date wise transaction data
const sortFunction = ( a: any, b: any ) => {
  var dateA = new Date( a.received ).getTime();
  var dateB = new Date( b.received ).getTime();
  return dateA < dateB ? 1 : -1;
};

//TODO: func two date diff days count
const date_diff_indays = ( date1: any, date2: any ) => {
  try {
    let dt1 = new Date( date1 );
    let dt2 = new Date( date2 );
    return Math.floor(
      ( Date.UTC( dt2.getFullYear(), dt2.getMonth(), dt2.getDate() ) -
        Date.UTC( dt1.getFullYear(), dt1.getMonth(), dt1.getDate() ) ) /
      ( 1000 * 60 * 60 * 24 )
    );
  } catch ( error ) {
    console.log( error );
  }
};

const getRandomBetweenNumber = ( min: number, max: number ) => {
  let arr_Number = [];
  for ( let i = 0; i < 3; i++ ) {
    let value = min + Math.floor( Math.random() * ( max - min ) )
    if ( arr_Number.indexOf( value ) !== -1 ) {
      arr_Number.push( min + Math.floor( Math.random() * ( max - min ) ) );
    } else {
      arr_Number.push( value )
    }
  }
  return arr_Number;
}

const getDeviceModel = () => {
  let model = DeviceInfo.getModel();
  let modelName;
  if ( model == "iPhone 6s" || model == "iPhone 6" ) {
    modelName = "Iphone6";
  } else if (
    model == "iPhone XS" ||
    model == "iPhone XS Max" ||
    model == "iPhone XR" ||
    model == "iPhone X"
  ) {
    modelName = "IphoneX";
  }
  return modelName;
};

const getStatusBarHeight = () => {
  let model = DeviceInfo.getModel();
  let height;
  if (
    model == "iPhone XS" ||
    model == "iPhone XS Max" ||
    model == "iPhone XR" ||
    model == "iPhone X"
  ) {
    height = 44;
  }
  else {
    height = 20;
  }
  return height;
}

const getIphoneSize = () => {
  let model = DeviceInfo.getModel();
  var iphoneSeries = "IPhone X";
  if (
    model == "iPhone XS" ||
    model == "iPhone XS Max" ||
    model == "iPhone XR" ||
    model == "iPhone X"
  ) {
    iphoneSeries = "iphone X";
  }
  else {
    iphoneSeries = "!iphone X"
  }
  return iphoneSeries;
}

const isJson = ( str: string ) => {
  try {
    JSON.parse( str );
  } catch ( e ) {
    return false;
  }
  return true;
}

const generateOTP = () => {
  var digits = '0123456789';
  var OTP = '';
  for ( var i = 0; i < 4; i++ ) {
    OTP += digits[ Math.floor( Math.random() * 10 ) ];
  }
  return OTP;
}

const capitalizeFirstLetter = ( value: string ) => {
  return value.charAt( 0 ).toUpperCase() + value.slice( 1 );
}


//TODO: Singleton Set and Get DeepLinkingType
const getRootViewController = () => {
  let commonData = Singleton.getInstance();
  return commonData.getRootViewController();
}


const setRootViewController = ( value: any ) => {
  let commonData = Singleton.getInstance();
  commonData.setRootViewController( value );
  return true;
}

//TODO: Singleton UserDetails
const getUserDetails = () => {
  let commonData = Singleton.getInstance();
  return commonData.getUserDetails();
}


const setUserDetails = ( value: any ) => {
  let commonData = Singleton.getInstance();
  commonData.setUserDetails( value );
  return true;
}

//TODO: Sinleton TokenNo

const getTokenNo = () => {
  let commonData = Singleton.getInstance();
  return commonData.getTokenNo();
}

const setTokenNo = ( value: any ) => {
  let commonData = Singleton.getInstance();
  commonData.setTokenNo( value );
  return true;
}




module.exports = {
  getUnixTimeDate,
  getUnixToDateFormat,
  getDateForYYYYMMDD,
  getUnixToNormaDateFormat,
  getUnixToDateFormat1,
  getUnixToDateFormat2,
  sortFunction,
  date_diff_indays,
  getRandomBetweenNumber,
  getDeviceModel,
  getStatusBarHeight,
  getIphoneSize,
  isJson,
  generateOTP,
  capitalizeFirstLetter,
  //Singleton  
  getRootViewController,
  setRootViewController,
  getUserDetails,
  setUserDetails,
  getTokenNo,
  setTokenNo
};   

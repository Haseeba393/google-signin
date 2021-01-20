import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

import { _gotoWelcome } from '../navigation/service';

const Login = ({navigation}) => {

    useEffect(()=>{
        GoogleSignin.configure({
            client_id: '896937735683-k0jt7bbfpduuvl02ucch0o87cd8utb68.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            "client_type": 3,
        });
    },[]);

    const _doSignin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn()
            .then((userInfo)=>{
                _gotoWelcome(navigation,userInfo);
            })
            .catch((err)=>{
                alert(err);
            });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.warn('user cancel it');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.warn('already in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.warn('play services are not available');
            } else {
                alert(JSON.stringify(error));
            }
        }
    }

    return(
        <View style={Styles._mainContainer}>
            <GoogleSigninButton 
                onPress={()=>{ _doSignin() }}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Login;
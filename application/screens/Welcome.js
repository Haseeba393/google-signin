import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

const Welcome = ({route}) => {

    const {userInfo} = route.params;

    return(
        <View style={Styles._mainContainer}>
            <Image 
                source={{ uri: userInfo.user.photo }}
                style={Styles._image}
            />
            <Text>{userInfo.user.givenName + ' ' + userInfo.user.familyName}</Text>
            <Text>{userInfo.email}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _image:{
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'cover'
    },
});

export default Welcome;
export const _gotoWelcome = (navigation,userInfo) => {
    navigation.navigate('welcome',({userInfo:userInfo}));
}

export const _gotoLogin = (navigation) => {
    navigation.navigate('login');
}
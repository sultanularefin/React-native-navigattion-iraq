import React, {Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    NetInfo
} from "react-native";
// import OfflineNoticeLogin from "../general/OfflineNoticeLogin";
import Snackbar from 'react-native-snackbar';
import {NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Icon,
} from 'native-base';


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            // loading: false,
            // playerId: null,
            connectionStatus: true,
        };
    }




    componentDidMount() {

        console.log("At componentDidMount() ");




    }

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed',
    };

    // openDrawer() {
    //     this.props.navigation.navigate('DrawerOpen'); // open drawer
    // }



    UNSAFE_componentWillMount() {

    }

    componentWillUnmount() {

    }





    validate_Email(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

    validate_Password(password)
    {
        if( !password || !typeof(password) || password === "" || password.length===0  || !isNaN(password))
            return null;

        return true;
    }

    handleRegister(){

        console.log("handleRegister() at Login Class");
        // const resetAction = NavigationActions.reset({
        //     index: 1,
        //     actions: [
        //         NavigationActions.navigate({
        //             routeName: 'Login'
        //         }),
        //         NavigationActions.navigate({
        //         routeName: 'Register'
        //     })],
        // });

      const navigateAction = NavigationActions.navigate({
        routeName: 'Register',
        params: {},
        action: NavigationActions.navigate({ routeName: 'Register' }),
      });

      // setTimeout(() => {
        this.props.navigation.dispatch(navigateAction);
      // }, 200);


        // this.props.navigation.dispatch(resetAction);
    }

    render() {

        if (this.state.loading) {
            return (
                <View style={[style2.container01_for_login_only]} key={'sasas1251231234123rArefin'}>
                    <ActivityIndicator
                        size="large"
                        color="#da6a41"
                    />
                </View>
            );
        }

            return (
                <Container>
                    <Content>


                        <View style={styles.container}>
                            <Image
                                source={require('../../../sunrise-logo.jpg')}
                                style={styles.image} />
                            <Text style={styles.text}>REACT NATIVE</Text>
                        </View>

                        {/*<View style={{justifyContent: 'center',*/}
                            {/*alignItems: 'center',}}>*/}
                            {/*<Image*/}
                                {/*style={{*/}
                                        {/*width: 100,*/}
                                        {/*height: 100,*/}
                                        {/*justifyContent: 'center',*/}
                                        {/*alignItems: 'flex-start',*/}
                                        {/*marginTop: 40,*/}
                                    {/*}}*/}

                            {/*/>*/}
                        {/*</View>*/}
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={email => this.setState({email})}
                                    autoCorrect={false}
                                    textContentType={'emailAddress'}
                                    autoCapitalize={'none'}
                                    keyboardType={'email-address'}
                                    returnKeyType={"next"}

                                    onSubmitEditing={() =>{
                                        this.Password._root.focus();
                                    }
                                    }
                                    getRef={(c) => this.Email = c}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    secureTextEntry
                                    textContentType={'password'}
                                    onChangeText={password => this.setState({ password })}
                                    getRef={(c) => this.Password = c}
                                    onSubmitEditing={() => {

                                        this.handleLogin.bind(this);
                                    }
                                    }
                                    blurOnSubmit
                                    returnKeyLabel={ "done" }
                                />
                            </Item>
                        </Form>
                        <Button block success

                        >
                            <Text style={{ color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: 15,
                                margin: 10,}}>Login</Text>
                        </Button>

                        <View style={{ alignItems: 'center', marginTop: 20,
                            marginBottom: 10, marginRight: 10 }}>
                            <TouchableOpacity onPress={this.handleRegister.bind(this)}
                            >
                                <View style={style2.buttonBillsList}>
                                    <Text
                                        style={{ fontSize: 16, color: '#fa5656', fontWeight: 'bold', padding: 5 }}>
                                        Don\'t have an account please register!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </Content>
                </Container>
            );

    }
}


const style2 = StyleSheet.create({

    container01_for_login_only: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonBillsList:{
        backgroundColor: "white",
        alignItems:'center',
        borderRadius: 5,
        borderColor:'#fa5656',
        borderWidth:0.5,

    },

});


const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});


Login.propTypes = {

    navigation:PropTypes.object,
};
Login.defaultProps = {

};

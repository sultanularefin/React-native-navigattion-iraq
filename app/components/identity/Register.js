import React, { Component } from 'react';
import {

  View,

  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  BackHandler

} from 'react-native';
import {
  Container,
  Header,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
} from "native-base";

// import {navigationOp} from 'react-navigation';

// import Header from './app/components/ge'
// import Header2 from '../general/Header';
import PropTypes from "prop-types";

import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ExtraDimensions from "react-native-extra-dimensions-android";

export default class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };





  }
  static navigationOptions = {
    // title: 'Hello!',
    headerLeft: null,
    headerTransparent:true,

  };




  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {

    //let a=true;

    console.log("onBackButtonPressAndroid");
    return this.props.navigation.navigate('Login');
  };



  testButton=()=> {
    console.log("testBuuton") ;
  };

  render() {

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
      ? Dimensions.get("window").height
      : ExtraDimensions.get("REAL_WINDOW_HEIGHT");
    console.log("Arefin you are in home:");


    console.log(this.props.navigation);




    return (
      <Container style={{backgroundColor: 'white'}}>


        {/*<Header headerText={'Newsfeed'} navigation={this.props.navigation}/>*/}

        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>

          </Left>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.testButton()}>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <KeyboardAwareScrollView>

          <View>
            <View style={{flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',}}
                  key={'fwerwerwertqewrtqwerArefin'}>

              <Text>Not implemented, please click the hardware back button to navigate to Login Screen</Text>
            </View>

          </View>

          <View style={{justifyContent: 'center',flex:1,
            marginBottom: 15,
            marginTop: 30,
          }}>
            <TouchableOpacity
              onPress={this.onBackButtonPressAndroid.bind(this)}>
              <View style={{ height: 40,
                backgroundColor: '#fa5656',
                alignItems: 'center',
                width:deviceWidth,
                flexDirection:'column',
              }}>
                <Text style={{ color: 'white',
                  fontSize: 20, fontWeight: 'bold',
                  padding: 5,
                }}>
                  Go Back!
                </Text>
              </View>
            </TouchableOpacity>
          </View>


        </KeyboardAwareScrollView>

      </Container>

    );

  }
}


Register.propTypes = {

  navigation:PropTypes.object,
};
Register.defaultProps = {

};
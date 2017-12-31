import React, { Component } from 'react'
import { Image, Linking, StyleSheet, Platform, Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SafariView from 'react-native-safari-view'

class Login extends Component {

    state = {
        user: undefined
    }

    componentDidMount() {
        // Add event listener to handle OAuthLogin:// URLs
        Linking.addEventListener('url', this.handleOpenURL)
        // Launched from an external URL
        Linking.getInitialURL().then((url) => {
            if (url) {
                this.handleOpenURL({ url })
            }
        })
    }

    componentWillUnmount() {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({ url }) => {
        // Extract stringified user string out of the URL
        const [, user_string] = url.match(/user=([^#]+)/);
        this.setState({
            // Decode the user string and parse it into JSON
            user: JSON.parse(decodeURI(user_string))
        });
        if (Platform.OS === 'ios') {
            SafariView.dismiss();
        }
        this.props.navigation.navigate('Menu')
    }

    loginWithFacebook = () => this.openURL('http://192.168.1.69:8080/auth/facebook')

    openURL = (url) => {
        // Use SafariView on iOS
        if (Platform.OS === 'ios') {
            SafariView.show({
                url: url,
                fromBottom: true,
            });
        }
        // Or Linking.openURL on Android
        else {
            Linking.openURL(url);
        }
    }

    render() {
        // const { user } = this.state;
        console.log(this.state.user)
        return (
            <View style={styles.container}>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={this.loginWithFacebook}
                    {...iconStyles}
                >
                    Login with Facebook
          </Icon.Button>
            </View>
        )
    }
}
export default Login

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: 20,
    },
    avatarImage: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
    },
});
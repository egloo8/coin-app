import React, { Component } from 'react'
import { Image, Linking, StyleSheet, Platform, Text, View, Button, Dimensions } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import SafariView from 'react-native-safari-view'

import { login } from '../actions/index'
import { apiBaseURL } from '../config/Constants'

class Login extends Component {

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
        Linking.removeEventListener('url', this.handleOpenURL)
    }

    handleOpenURL = ({ url }) => {
        // Extract stringified user string out of the URL
        const [, user_string] = url.match(/user=([^#]+)/);
        // this.setState({
        //     // Decode the user string and parse it into JSON
        //     user: JSON.parse(decodeURI(user_string))
        // })
        this.props.login(JSON.parse(decodeURI(user_string))._id, JSON.parse(decodeURI(user_string)).token)
        if (Platform.OS === 'ios') {
            SafariView.dismiss()
        }
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Menu' })]
            })
        )
    }

    loginWithFacebook = () => this.openURL(`${apiBaseURL}/auth/facebook`)
    loginWithGoogle = () => this.openURL(`${apiBaseURL}/auth/google`)

    openURL = (url) => {
        // Use SafariView on iOS
        if (Platform.OS === 'ios') {
            SafariView.show({
                url: url,
                fromBottom: true,
            })
        }
        // Or Linking.openURL on Android
        else {
            Linking.openURL(url)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.header}>
                        Welcome to Coin App!
                    </Text>
                    <Text style={styles.text}>
                        Please log in to continue {'\n'}
                        Login with:
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <Icon.Button
                        name="facebook"
                        backgroundColor="#3b5998"
                        onPress={this.loginWithFacebook}
                        {...iconStyles}
                        width={Dimensions.get('window').width / 2 - 40}
                    >
                        Facebook
                    </Icon.Button>
                    <Icon.Button
                        name="google"
                        backgroundColor="#DD4B39"
                        onPress={this.loginWithGoogle}
                        {...iconStyles}
                        width={Dimensions.get('window').width / 2 - 40}
                    >
                        Google+
                    </Icon.Button>
                </View>
            </View>

        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(login(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
}

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
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
    },
})
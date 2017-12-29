import React, { Component } from 'react'
import { Image, Linking, StyleSheet, Platform, Text, View, Button } from 'react-native'
import { WebBrowser } from 'expo'

class Login extends Component {

    state = {
        user: undefined
    }

    // componentDidMount() {
    //     // Add event listener to handle OAuthLogin:// URLs
    //     Linking.addEventListener('url', this.handleOpenURL)
    //     // Launched from an external URL
    //     // Linking.getInitialURL().then((url) => {
    //     //     if (url) {
    //     //         this.handleOpenURL({ url })
    //     //     }
    //     // })
    // }

    componentDidMount() {
        Linking.getInitialURL().then((ev) => {
            if (ev) {
                this._handleOpenURL(ev);
            }
        }).catch(err => {
            console.warn('An error occurred', err);
        });
        Linking.addEventListener('url', this._handleOpenURL);
    }

    handleOpenURL = ({ url }) => {
        console.log(url)

        // Extract stringified user string out of the URL
        console.log('i get called')
        const [, user_string] = url.match(/user=([^#]+)/)
        this.setState({
            // Decode the user string and parse it into JSON
            user: JSON.parse(decodeURI(user_string))
        })
    }

    _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('http://192.168.1.69:8080/auth/facebook')
    }

    render() {
        // const { user } = this.state;
        console.log(this.state.user)
        return (
            <View style={styles.container}>
                <Button
                    title="Open URL with Expo.WebBrowser"
                    onPress={this._handleOpenWithWebBrowser}
                    style={styles.button}
                />
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
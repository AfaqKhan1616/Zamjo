// ./screens/Home.js
import React, {useState} from 'react';
import {lightGreen, lightGrey, lightRed} from '../Assets/Colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);

    // Handlers
    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onPasswordChange = (text) => {
        setPassword(text);
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const onSubmit = () => {
        const isValidEmail = validateEmail(email);
        setEmailValid(isValidEmail);
        if (isValidEmail) {
            alert('ready to go');
        } else {
            alert('please enter correct Details');
        }

    };


    return (
        <SafeAreaView>
            <View style={styles.rootContainer}>

             <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Text //welcome text
                    style={{
                        fontSize: 42,
                        color: lightGreen,
                        fontWeight: 'bold',
                        marginTop: hp('15%'),
                        marginLeft: wp('6'),
                    }}>Welcome</Text>

                <Text //signIn to continue text
                    style={{
                        color: lightGrey,
                        fontSize: 20,
                        marginLeft: wp('6'),
                        fontWeight: '500',
                        marginBottom: hp('5'),
                    }}>SignIn to Continue</Text>


                <View //Email Text Container
                    style={{
                        backgroundColor: 'white',
                        marginBottom: -hp('0.75'),
                        height: hp('2'),
                        width: wp('14'),
                        alignItems: 'center',
                        marginLeft: wp('11'),
                        zIndex: 1,
                    }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 17,
                        color: isEmailValid ? lightGrey : lightRed,
                    }}>
                        Email
                    </Text>
                </View>


                <View //Email Container
                    style={{
                        width: wp('87%'),
                        height: hp('8.5'),
                        borderRadius: 6,
                        alignSelf: 'center',
                        paddingHorizontal: wp('5'),
                        justifyContent: 'center',
                        borderColor: isEmailValid ? lightGrey : lightRed,
                        borderWidth: 0.75,
                    }}>
                    <TextInput //Email TextInput
                        style={{
                            fontSize: 17,
                            color: 'grey',
                            fontWeight: '500',
                        }}
                        maxLength={30}
                        value={email}
                        onChangeText={onChangeEmail}
                        keyboardType="email-address"
                        autoCompleteType="email"
                        placeholder="example@mail.com"
                    />
                </View>


                <View //Password Text
                    style={{
                        backgroundColor: 'white',
                        marginBottom: -hp('0.75'),
                        height: hp('2'),
                        width: wp('22'),
                        marginTop: hp('1.5'),
                        alignItems: 'center',
                        marginLeft: wp('11'),
                        zIndex: 1,
                    }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 17,
                        color: isPasswordValid ? lightGrey : lightRed,
                    }}>
                        Password
                    </Text>
                </View>


                <View //Password Container
                    style={{
                        width: wp('87%'),
                        height: hp('8.5'),
                        borderRadius: 6,
                        alignSelf: 'center',
                        paddingHorizontal: wp('5'),
                        justifyContent: 'center',
                        borderColor: isPasswordValid ? lightGrey : lightRed,
                        borderWidth: 0.75,
                    }}>

                    <TextInput //Password TextInput
                        style={{
                            fontSize: 17,
                            color: 'grey',
                            fontWeight: '500',
                        }}
                        maxLength={20}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={onPasswordChange}
                        keyboardType="default"
                        placeholder="Your password"
                    />
                </View>


                <Text //Forget Password Text
                    style={{
                        fontSize: 19,
                        fontWeight: '500',
                        marginTop: hp('1'),
                        alignSelf: 'flex-end',
                        marginRight: wp('6'),
                        color: lightGrey,
                    }}>
                    Forget Password?
                </Text>


                <TouchableOpacity //SignIn Button
                    onPress={() => onSubmit()}
                    style={{
                        width: wp('87'),
                        backgroundColor: lightGreen,
                        alignSelf: 'center',
                        marginTop: hp('2'),
                        borderRadius: 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: hp('8.5'),
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: 'white',
                        }}>
                        Sign In
                    </Text>

                </TouchableOpacity>


                <View //Lower Text container
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: hp('22'),
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: lightGrey,
                            fontWeight: '400',
                        }}>Don't have an account?</Text>

                    <Text
                        style={{
                            fontSize: 20,
                            color: lightGreen,
                            fontWeight: '300',
                        }}
                    >
                        SignUp
                    </Text>
                </View>
             </ScrollView>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },
    rootContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
});
export default SignIn;

// ./screens/Home.js
import React,{useState} from 'react';
import {View, Button, Text, StyleSheet,TouchableOpacity, SafeAreaView,TextInput,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {grey, lightGreen, lightGrey} from '../Assets/Colors/colors';
import Forward from "../Assets/Icons/arrow-right.png"
import {set} from 'react-native-reanimated';

const CreateShed = ({navigation}) => {
    const [shedName,setShedName]=useState("");

    const onChangeShedName=(text)=>{
        setShedName(text);
    }


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.rootContainer}>


                <View //Progress Bar
                    style={{
                        width: wp('100'),
                        height: hp('10%'),
                        backgroundColor: 'yellow',
                    }}>
                </View>

                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginLeft:wp("5"),
                        color: lightGreen,
                    }}
                >
                About Shed
                </Text>

                <Text
                style={{
                    fontSize:19,
                    color:lightGrey,
                    marginLeft:wp("5"),
                    marginTop:hp("1"),
                    marginBottom:hp("1"),
                    fontWeight:"bold"
                }}>
                    Shed Name
                </Text>

                <View
                    style={{
                        width:wp("90%"),
                        height: hp("8.5%"),
                        backgroundColor:grey,
                        borderRadius:5,
                        justifyContent:"center",
                        alignSelf:"center",
                        paddingHorizontal:wp("2"),
                    }}>
                    <TextInput //Email TextInput
                        style={{
                            fontSize: 17,
                            color: 'grey',
                            fontWeight: '500',
                        }}
                        maxLength={30}
                        value={shedName}
                        onChangeText={onChangeShedName}
                        keyboardType="default"
                        placeholder="shed Name..."
                    />
                </View>

                <View style={{flex:1}} />

                <TouchableOpacity
                    style={{width:undefined,
                    height:hp("8"),
                    borderRadius:50,
                    justifyContent:"center",
                    alignItems:"center",
                    aspectRatio:1,
                    alignSelf:"flex-end",
                        marginRight:wp("5"),
                        marginBottom:hp("3"),
                    backgroundColor:lightGreen
                    }}>
                   <Image style={{width:"80%",height:"80%"}} source={Forward}/>
                </TouchableOpacity>

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
export default CreateShed;

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white'
    },
    title: {
textAlign:'center'
    },
    header:{
        width:350,
        height:50,
        backgroundColor:'#840084',
        margin:26,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,        
    },
    TextHeader:{
        color:'white',
        textAlign:'center',
        marginTop:13,
        fontSize:20,

    },
    logo: {
        flex: 1,
        height: 140,
        width: 230,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 35,
        backgroundColor: 'white',
        borderWidth: 0.3,
        borderColor:'gray',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#B208C7',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonFb:{
        backgroundColor: '#3b5998',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#B208C7",
        fontWeight: "bold",
        fontSize: 16
    }
})

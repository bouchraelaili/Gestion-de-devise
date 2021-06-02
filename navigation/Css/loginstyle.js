import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#bfb051',
        
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
        color:'#763857',
        textAlign:'center',
        marginTop:73,
        fontSize:26,
        fontWeight:'bold',

    },
    logo: {
        height: 140,
        width: 230,
        alignSelf: "center",
        margin: 90
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
        backgroundColor: '#763857',
        marginLeft: 30,
        marginRight: 30,
        width:200,
        marginTop:15,
        height: 48,
        borderRadius: 5,
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

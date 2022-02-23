
import { Dimensions, StyleSheet} from 'react-native';

const { width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
    },
    containerForm:{
        padding: 30,
        paddingBottom: 70,
        // justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderColor:'#CCCCCC',
        borderWidth:1,
        borderRadius: 5,
        margin: 15,        
    },
    formTitle:{        
        flexDirection: "row",
        padding: 10,
        backgroundColor: '#D9EDF7',
        borderColor:'#BCE8F1',
        borderWidth:1,
        borderRadius: 5,
        margin: 5,
    },
    textTitle:{
        color: '#517E96',
    },
    input:{
        color: '#222',
        height:40,
        fontSize: 14,
        backgroundColor: '#fff',
        borderColor:'#CCCCCC',
        borderWidth:1,
        marginHorizontal: 5,
        paddingLeft: 10,
    },
    dropDownPicker:{
        color: '#222',
        height:40,
        fontSize: 14,
        backgroundColor: '#fff',
        borderColor:'#CCCCCC',
        borderWidth:1, 
        marginHorizontal: 5,       
    },
    btnDiv:{
        height: 50,
        marginTop: 20,
        alignItems: 'center',
    },
    btnSubmit:{
        backgroundColor:'#008D4C',
        // marginTop: 15,
        width: '40%',
        height: '100%',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '1%',
    },
    txtSubmit:{
        color: '#fff',
        fontWeight: '500',
    },
    txtLabel:{
        color: 'black',
        fontSize: 14,
        fontWeight: '700',
        marginLeft: '1%',
        marginTop: 15,
        marginBottom: 5,
    },

});

export default styles;
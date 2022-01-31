
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   card:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       padding: 10,
       marginVertical: 10,
       width: '90%',
       height: 80,
       backgroundColor: '#337AB7',
       shadowColor:'#000',
       shadowOffset: {
           width: 75,
           height:2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 4,
       elevation: 4,
       borderRadius: 10,

   },
   cardLeft:{
       flexDirection: 'row',
       alignItems: 'center',
   },
   cardRight:{
       alignItems: 'flex-end',
       justifyContent: 'space-between',
       alignItems: 'center',
   },
   typeActive: {
       width: 50,
       height: 50,
   },
   cardTitle: {
       marginLeft: 10,
       fontWeight: 'bold',
       fontSize: 16,
       color: '#fff',
   },
   cardNumber:{
       width: '100%',
       height: 45,
       paddingTop: '20%',
       backgroundColor: '#fff',
       color: '#337AB7',
       borderRadius: 50,
       fontWeight: 'bold',
       fontSize: 16,
   }
});

export default styles;
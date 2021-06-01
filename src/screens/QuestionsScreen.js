import React from 'react';
import { View, StyleSheet,SafeAreaView,Text} from 'react-native';



const QuestionsScreen = (props) => {


    return(
        <SafeAreaView style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
            <View style={{marginTop : 100}}>
                <Text>This is Questions Screen</Text>
            </View>
        </SafeAreaView>
    )

};



const styles = StyleSheet.create({
	
});

export default QuestionsScreen;

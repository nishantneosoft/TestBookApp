import React from 'react';
import { View, StyleSheet,SafeAreaView,Text} from 'react-native';



const PollingScreen = (props) => {
	// `meals` is the reducer identifier (see in App.js)
	// const favMeals = useSelector((state) => state.meals.favoriteMeals);


	// if (favMeals.length === 0 || !favMeals) {
	// 	return (
	// 		<View style={styles.content}>
	// 			<DefaultText>No favorite meals found.</DefaultText>
	// 		</View>
	// 	);
	// }

    return(
        <SafeAreaView style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
           <View style={{marginTop : 100}}>
                <Text>This is Polling Screen</Text>
            </View>
        </SafeAreaView>
    )

};



const styles = StyleSheet.create({
	
});

export default PollingScreen;

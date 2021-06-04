import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput, Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



const PollingScreen = (props) => {
	const [question, setQuestion] = useState(props.route.params.userChoosenQuestion)
	// `meals` is the reducer identifier (see in App.js)
	// const favMeals = useSelector((state) => state.meals.favoriteMeals);


	// if (favMeals.length === 0 || !favMeals) {
	// 	return (
	// 		<View style={styles.content}>
	// 			<DefaultText>No favorite meals found.</DefaultText>
	// 		</View>
	// 	);
	// }
	const touchableBgColor = '#005792'


	return (
		<SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ marginTop: 50 }}>
				<Text style={{ fontSize: 20, margin: 10 }}>{question.name}</Text>
				{/* <FlatList 
				data={question.choices}
				contentContainerStyle={{marginTop : 20,alignSelf : 'center'}}
				keyExtractor={(item,index) =>  item.id }
				renderItem={(item,index) => {
					let touchableBgColor = item.index % 2 === 0 ? '#005792' : 'grey';
					return(
						<View style={{flexDirection : 'row',alignItems : 'center',marginBottom : 10}}>
						<View style={{justifyContent : 'center',alignItems : 'center',width : 30, height : 30,borderColor : '#005792',borderWidth : 1,borderRadius : 25,backgroundColor : touchableBgColor}}>
						  <Text style={{color : 'white'}}>{(item.item.id).toUpperCase()}</Text>	
						</View>	
						<View>
						   <TouchableOpacity style={{marginLeft : 10,justifyContent : 'center',alignItems : 'center',width : 250, minHeight : 50,borderColor : touchableBgColor,borderWidth : 1,borderRadius : 10,backgroundColor :touchableBgColor,padding : 5}}>
							   <Text style={{color : 'white'}}>{item.item.choice}</Text>
						   </TouchableOpacity>
						</View>	
						</View>
					)
				}} 
				/> */}
				{/* question.choices.filter(opt => opt.choice == null).map(opt => someNewObject) */}


				{question.choices.filter((filteredData) => filteredData.choice !== null).map((item, index) => {
					let bgColor = index % 2 === 0 ? '#005792' : 'grey'
					return (
						<View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10,justifyContent : 'space-evenly' }}>
							<View style={{ justifyContent: 'center', alignItems: 'center', width: 30 , height: 30, borderColor: '#005792', borderWidth: 1, borderRadius: 25, backgroundColor: bgColor }}>
								<Text style={{ color: 'white' }}>{(item.id).toUpperCase()}</Text>
							</View>
							<View>
								<TouchableOpacity style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width - 80, minHeight: 50, borderColor: bgColor, borderWidth: 1, borderRadius: 10, backgroundColor: 'white', padding: 5 }}>
									<Text style={{fontSize : 18}}>{item.choice}</Text>
								</TouchableOpacity>
							</View>
						</View>
					)

				}

				)}

			</View>
		</SafeAreaView>
	)

};



const styles = StyleSheet.create({

});

export default PollingScreen;

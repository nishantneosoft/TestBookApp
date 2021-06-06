import React, { useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput, Dimensions, Animated } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



const PollingScreen = (props) => {
	const [question, setQuestion] = useState(props.route.params.userChoosenQuestion);
	const [isPercentageVisible, setIsPercentageVisible] = useState(false);

	const pollAnimOptionA = useRef(new Animated.Value(320)).current;
	const pollAnimOptionB = useRef(new Animated.Value(320)).current;
	const pollAnimOptionC = useRef(new Animated.Value(320)).current;
	const pollAnimOptionD = useRef(new Animated.Value(320)).current;
	const pollAnimOptionE = useRef(new Animated.Value(320)).current;

	const pollInOptionA = (votes) => {
		Animated.timing(pollAnimOptionA, {
			toValue: 200 + votes,
			duration: 1000,
		}).start();
	};
	const pollInOptionB = (votes) => {
		Animated.timing(pollAnimOptionB, {
			toValue: 200 + votes,
			duration: 1000,
		}).start();
	};
	const pollInOptionC = (votes) => {
		Animated.timing(pollAnimOptionC, {
			toValue: 200 + votes,
			duration: 1000,
		}).start();
	};
	const pollInOptionD = (votes) => {
		Animated.timing(pollAnimOptionD, {
			toValue: 200 + votes,
			duration: 1000,
		}).start();
	};
	const pollInOptionE = (votes) => {
		Animated.timing(pollAnimOptionE, {
			toValue: 200 + votes,
			duration: 1000,
		}).start();
	};

	const getCorrectAnimWidth = (id) => {
		if (id === 'a') {
			return pollAnimOptionA;
		}
		if (id === 'b') {
			return pollAnimOptionB;
		}
		if (id === 'c') {
			return pollAnimOptionC;
		}
		if (id === 'd') {
			return pollAnimOptionD;
		}
		if (id === 'e') {
			return pollAnimOptionE;
		}
	}

	const executeAllAnim = (optionsArray) => {
		for (let i = 0; i < optionsArray.length; i++) {
			if(i === 0){pollInOptionA(optionsArray[0].votes)}
			if(i === 1){pollInOptionB(optionsArray[1].votes)}
			if(i === 2){pollInOptionC(optionsArray[2].votes)}
			if(i === 3){pollInOptionD(optionsArray[3].votes)}
			if(i === 4){pollInOptionE(optionsArray[4].votes)}					
		}
	}


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


				{question !== undefined && question.choices.filter((filteredData) => filteredData.choice !== null).map((item, index) => {
					let bgColor = index % 2 === 0 ? '#005792' : 'grey';
					return (
						<View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-evenly' }}>
							<View style={{ justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderColor: bgColor, borderWidth: 1, borderRadius: 25, backgroundColor: bgColor }}>
								<Text style={{ color: 'white' }}>{(item.id).toUpperCase()}</Text>
							</View>

							<TouchableOpacity onPress={() => { setIsPercentageVisible(true); executeAllAnim(question.choices)}} style={{ marginLeft: 10, justifyContent: 'space-evenly', width: Dimensions.get('window').width - 80, minHeight: 50, borderColor: bgColor, borderWidth: 1, borderRadius: 10, backgroundColor: 'white', }}>
								{isPercentageVisible && (
									<Animated.View style={{ justifyContent: 'center', alignItems: 'center', width: getCorrectAnimWidth(item.id), minHeight: 50, backgroundColor: 'powderblue', borderRadius: 10 }}>
										<Text style={{paddingLeft : 5, fontSize: 18, color: 'green', fontWeight: 'bold' }}>{item.votes}%</Text>
										<Text style={{paddingLeft : 5, fontSize: 18 }}>{item.choice}</Text>
									</Animated.View>)}
								{!isPercentageVisible && (<Text style={{ fontSize: 18,paddingLeft : 5 }}>{item.choice}</Text>)}
							</TouchableOpacity>
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

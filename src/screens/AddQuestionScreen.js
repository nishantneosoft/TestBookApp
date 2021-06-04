import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Platform, StatusBar, TextInput, FlatList, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Button, Alert } from 'react-native';
import Choice from '../../models/choices';
import Question from '../../models/question';
import { addQuestion } from '../store/actions/questions';
import { useSelector, useDispatch } from 'react-redux';



const AddQuestionScreen = (props) => {
	const [questionText, setQuestionText] = React.useState("");

	const [texInputOptionsArray, setTextInputOptionsArray] = React.useState([]);

	const [optionAText, setOptionAText] = React.useState(null);
	const [optionBText, setOptionBText] = React.useState(null);
	const [optionCText, setOptionCText] = React.useState(null);
	const [optionDText, setOptionDText] = React.useState(null);
	const [optionEText, setOptionEText] = React.useState(null);

	const INITIALNUMBEROFOPTIONS = 2;

	const dispatch = useDispatch();

	const onChangeTextHandler = text => { setQuestionText(text) };

	const onChangeOptionATextHandler = text => { setOptionAText(text) };
	const onChangeOptionBTextHandler = text => { setOptionBText(text) };
	const onChangeOptionCTextHandler = text => { setOptionCText(text) };
	const onChangeOptionDTextHandler = text => { setOptionDText(text) };
	const onChangeOptionETextHandler = text => { setOptionEText(text) };


	const [numberOfOptions, setNumberOfOptions] = useState(INITIALNUMBEROFOPTIONS);

	const getCorrectOptionName = (option) => {
		if (option === 0) {
			return 'A';
		} else if (option === 1) {
			return 'B';
		} else if (option === 2) {
			return 'C';
		} else if (option === 3) {
			return 'D';
		} else if (option === 4) {
			return 'E';
		}
	}

	useEffect(() => {
		renderOptionsTextInput(numberOfOptions) 
	}, [numberOfOptions]);


	const renderOptionsTextInput = (numberOfOptions) => {
		setTextInputOptionsArray([]);

		for (let i = 0; i < numberOfOptions; i++) {
			let currentOptionName = getCorrectOptionName(i);

			let value = 'option' + currentOptionName + 'Text';
			value = eval(value);

			let handler = 'setOption' + currentOptionName + 'Text';
			handler = eval(handler);
			// setOptionAText(text)
			let placeHolderName = 'Enter Option ' + currentOptionName + ' Here';

			console.log(handler, value, "DdDD");

			let textInput = <TextInput
				key={i}
				onSubmitEditing={Keyboard.dismiss}
				style={styles.input}
				onChangeText={handler}
				value={value}
				placeholder={placeHolderName}
				placeholderTextColor="#005792"
			/>;

			setTextInputOptionsArray(oldArray => [...oldArray, textInput]);

		}

	}
	const resetForm = async () => {
		onChangeOptionATextHandler(null);
		onChangeOptionBTextHandler(null);
		onChangeOptionCTextHandler(null);
		onChangeOptionDTextHandler(null);
		onChangeOptionETextHandler(null);
		setNumberOfOptions(INITIALNUMBEROFOPTIONS);
		setQuestionText(null);
	}

	const onSubmit = async () => {
		let formData = {
			question: questionText,
			optionA: optionAText,
			optionB: optionBText,
			optionC: optionCText,
			optionD: optionDText,
			optionE: optionEText
		};
		try {
			await dispatch(addQuestion(formData));
		    await resetForm();
		} catch (err) {
			console.log(JSON.stringify(err));
		}

	}


	return (
		<>
			<StatusBar barStyle={Platform.OS !== 'android' ? 'light-content' : 'dark-content'} backgroundColor="#000" />
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ScrollView>
					<View style={{ marginTop: 30 }}>
						<Text style={{ color: '#493323', alignSelf: 'center', fontSize: 16 }}>Enter The Question Below</Text>
						<TextInput
							style={{ ...styles.input, color: 'black' }}
							onChangeText={onChangeTextHandler}
							value={questionText}
							placeholder="Enter Question Here"
							placeholderTextColor="black"
						/>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
						<Text style={{ color: '#493323', fontSize: 16 }}>Enter The Options Below</Text>
						<Button title="Add Option" color="blue" onPress={() => {
							if (numberOfOptions === 5) {
								alert("Max 5 Options Allowed");
								return;
							}
							setNumberOfOptions(numberOfOptions + 1)
						}} />
					</View>


					{/* <FlatList
					data={texInputOptionsArray}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => index.toString()}
					renderItem={(item, index) => { return (item.item) }}
				/>  */}
					{texInputOptionsArray.map((data, index) => <View key={index}>{data}</View>)}

					<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 30 }}>
						<Button title="Submit" color="blue" onPress={() => { onSubmit() }} />
						<Button title="Done" color="blue" onPress={() => { props.navigation.goBack() }} />
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	)

};



const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
		width: 300,
		color: '#005792',
		borderColor: '#005792',
		paddingLeft: 10
	},
	container: {
		flex: 1
	},
});

export default AddQuestionScreen;

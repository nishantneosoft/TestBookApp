import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AddQuestionScreen from '../screens/AddQuestionScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import PollingScreen from '../screens/PollingScreen';

  
const QuestionStack = createStackNavigator();
  
export function QuestionStackScreen() {
    return (
      <QuestionStack.Navigator>
        <QuestionStack.Screen name="Questions" component={QuestionsScreen}/>
        <QuestionStack.Screen name="Add Question" component={AddQuestionScreen} />
        <QuestionStack.Screen name="Polling" component={PollingScreen} />
      </QuestionStack.Navigator>
    );
  }

  export default QuestionStackScreen;

  

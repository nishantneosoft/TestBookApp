import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AddQuestionScreen from '../screens/AddQuestionScreen';
import QuestionsScreen, { headerStyle } from '../screens/QuestionsScreen';
import PollingScreen from '../screens/PollingScreen';

  
const QuestionStack = createStackNavigator();
  
export function QuestionStackScreen({props}) {
    return (
      <QuestionStack.Navigator>
        <QuestionStack.Screen name="Questions" component={QuestionsScreen}
        options={headerStyle}
        />
        <QuestionStack.Screen name="Add Question" component={AddQuestionScreen} />
        <QuestionStack.Screen name="Polling" component={PollingScreen} />
      </QuestionStack.Navigator>
    );
  }

  export default QuestionStackScreen;

  

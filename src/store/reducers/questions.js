// File for marking the meal as a favorite and managing filters.
import { QUESTIONS } from '../../../data/dummy-data';
import Choice from '../../../models/choices';
import Question from '../../../models/question';
import { ADD_QUESTION, LOCK_USER_CHOOSEN_OPTION } from "../actions/questions";
const initialState = {
	questions: QUESTIONS,
};
const questionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_QUESTION:
			let newQuestion = new Question((Math.floor(Math.random() * 99999)).toString(), action.payload.question,
				[
					new Choice('a', action.payload.optionA, 20),
					new Choice('b', action.payload.optionB, 25),
					new Choice('c', action.payload.optionC, 30),
					new Choice('d', action.payload.optionD, 10),
					new Choice('e', action.payload.optionE, 10)
				]);
			return {
				...state,
				questions: state.questions.concat(newQuestion),
			};
		case LOCK_USER_CHOOSEN_OPTION:
			return [];
		default:
			return state; // is actually first reached when app starts
	}
};

export default questionsReducer;

import Question from '../models/question';
import Choice from "../models/choices";


export const QUESTIONS = [
	new Question('1', 'Which Shoes in Most Popular from Below',[new Choice('a','Adidas',20),new Choice('b','Nike',25),new Choice('c','Puma',30),new Choice('d','Reebox',10),new Choice('e','Esics',15)]),
];

// id: Math.floor(Math.random() * 99999)
import Question from '../models/question';
import Choice from "../models/choices";


export const QUESTIONS = [
	new Question('1', 'Which Shoes is Most Popular from Below',[new Choice('a','Adidas',20),new Choice('b','Nike',25),new Choice('c','Puma',30),new Choice('d','Reebox',10),new Choice('e','Esics',15)]),
	new Question('2', 'Which superpower would you like to have',[new Choice('a','Mind reading',20),new Choice('b','Invisibility',25),new Choice('c','Teleportation',30),new Choice('d','Flying',10),new Choice('e','I already have a superpower',15)]),
	new Question('3', 'What’s the strangest thing you did while attending a meeting online',[new Choice('a','Ate breakfast',20),new Choice('b','Wore pajamas',25),new Choice('c','Cooked lunch/dinner',30),new Choice('d','Brushed my teeth',10),new Choice('e','Watched Netflix',15)]),
	new Question('4', 'Should we keep our Wednesday syncs',[new Choice('a','Yes',55),new Choice('b','No',45)]),
	new Question('5', 'What type of Zoomer are you',[new Choice('a','The one walking around the house',20),new Choice('b','The one who just woke up',25),new Choice('c','The one without the camera on',30),new Choice('d','The one who always talks',10),new Choice('e','The one doing funny faces',15)]),
	new Question('6', 'Do you multitask when attending a meeting online',
	[
		new Choice('a','Yes, I’m guilty',20),
		new Choice('b','My mind tends to wander',25),
		new Choice('c','No, I’m 100% focused',30),
		new Choice('d','Sometimes',10)
	]),
	new Question('7', 'What type of Zoomer are you',
	[
		new Choice('a','The one walking around the house',20),
		new Choice('b','The one who just woke up',25),
		new Choice('c','The one without the camera on',30),
		new Choice('d','The one who always talks',10),
		new Choice('e','The one doing funny faces',15)
	]),
	new Question('8', 'How many hours a day do you spend online/on a Zoom call',
	[
		new Choice('a','1-2 hours',20),
		new Choice('b','2-5 hours',25),
		new Choice('c','5-8 hours',30),
		new Choice('d',' I lost count',10),
	]),
	new Question('9', 'If you could travel in time, what would you want to see',
	[
		new Choice('a','The past',20),
		new Choice('b','The future',25),
		new Choice('c','There is enough in the present',30),
	]),
	new Question('10', 'Describe your mood today',
	[
		new Choice('a','Sunshine',20),
		new Choice('b','Cloudy',25),
		new Choice('c','Rainy',30),
		new Choice('d','Thundery',10),
		new Choice('e','Rainbow',15)
	]),
];

// id: Math.floor(Math.random() * 99999)		
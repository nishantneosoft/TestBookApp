// implemented in dummy-data.js    
class Question {
	constructor(id,name,choices = []) {
		this.id = id,
		this.name = name,
        this.choices = choices
	}
}

export default Question;
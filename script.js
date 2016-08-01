console.log('script is running')

//jQuery pointers
var $document = $(document);
var $vowelButtons = $(".vowel");
var $start = $("#start");
//global variables
var vowel = '';
var sentence = '';
var score = 0;

//add event listeners to vowel buttons
$vowelButtons.on('click', retrieveVowel)
$start.on('click', createSentence)

//create sentence from word banks
function createSentence() {
	subjectIndex = Math.floor(Math.random()*array.length);
	verbIndex = Math.floor(Math.random()*array.length);
	objectIndex = Math.floor(Math.random()*array.length);
	sentence = 	
}

//selecting vowel
function retrieveVowel(e) {
	vowel = e.target.innerHTML;
	var test = checkWord();
	reward(test);
}

//compare word to word bank
function checkWord() {
	correct = false;
	//combine selected vowel with the rest of the word
	word = part[0] + vowel + part[1];
	for (var i=0; i<array.length; i++) {
		if (word == array[i]) {
			correct = true;
		}
	} 
	return correct;
}

//game logic
function reward(test) {
	if (test) {
		score++;
	}
}

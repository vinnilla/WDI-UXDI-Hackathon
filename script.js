console.log('script is running')

//jQuery pointers
var $instructions = $("#instructions");
var $vowelButtons = $(".pokeballVowel");
var $start = $(".pokeball");
var $sentence = $("#sentence");
var $score = $("#score");
var $character = $("#character");
//global variables
var nouns = ["couch", "brother", "door", "cat", "girl", "boy", "sister", "prince", "queen", "lion", "mouse", "turtle", "store", "beach", "house", "pillow", "watch"]
var adjectives =["brave", "bright", "calm", "strong", "nice", "honest", "grateful", "proud", "wild", "wise", "excited", "slim", "fair", "great", "smart", "fresh", "new", "blue", "green", "fast"]
var prepositions = ["over", "with", "below", "like", "before", "after", "around", "toward", "without", "behind"]
var verbs = ["danced", "laughed", "bounced", "shouted", "jumped", "swam", "kicked", "skipped", "walked", "ran", "jogged", "cried"]
var brokenVerbs = ["d_nced", "la_ghed", "b_unced", "sho_ted", "j_mped", "sw_m", "k_cked", "sk_pped", "w_lked", "r_n", "j_gged", "cr_ed"]
var charNames = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]
var charImages = ["url('http://media.pldh.net/pokemon/gen5/blackwhite/001.png')",
	"url('http://media.pldh.net/pokemon/gen5/blackwhite/004.png')",
	"url('http://media.pldh.net/pokemon/gen4/dp/007.png')",
	"url('http://media.pldh.net/pokemon/gen4/dp/025.png')"]
var vowel = '';
var word = '';
var check = '';
var score = 0;

//add event listeners to vowel buttons
$start.on('click', start)

function start() {
	createSentence();
	$start.hide();
	$vowelButtons.on('click', retrieveVowel)
}

//create sentence from word banks
function createSentence() {
	subjectIndex = Math.floor(Math.random()*charNames.length);
	verbIndex = Math.floor(Math.random()*brokenVerbs.length);
	prepIndex = Math.floor(Math.random()*prepositions.length);	
	adjectiveIndex = Math.floor(Math.random()*adjectives.length);
	objectIndex = Math.floor(Math.random()*nouns.length);
	$sentence.text(charNames[subjectIndex] + ' ' + brokenVerbs[verbIndex] + ' ' +
		prepositions[prepIndex] + ' the ' + adjectives[adjectiveIndex] + ' ' +
		nouns[objectIndex]+ '.');
	$character.css("background-image", charImages[subjectIndex]);
	word = brokenVerbs[verbIndex];
	check = verbs[verbIndex];
}

//selecting vowel
function retrieveVowel(e) {
	vowel = e.target.innerHTML.toLowerCase();
	var test = checkWord();
	reward(test);
	createSentence();
}

//compare word to word bank
function checkWord() {
	correct = false;
	word = word.split('_')
	//combine selected vowel with the rest of the word
	word = word[0] + vowel + word[1];
	if (word == check) {
		correct = true;
	}
	console.log(word)
	console.log(check)
	return correct;
}

//game logic
function reward(test) {
	console.log(test)
	if (test) {
		score++;
		$score.text(score);
	}
}

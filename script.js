console.log('script is running')

//jQuery pointers
var $instructions = $("#instructions");
var $vowelButtons = $(".pokeballVowel");
var $start = $(".pokeball");
var $sentence = $("#sentence");
var $score = $("#score");
var $character = $("#character");
//global variables
var nouns = ["brother", "cat", "girl", "boy", "sister", "prince", "queen", "lion", "mouse", "turtle", "trainer"]
var adjectives =["brave", "bright", "calm", "strong", "nice", "honest", "grateful", "proud", "wild", "wise", "excited", "slim", "fair", "great", "smart", "fresh", "new", "blue", "green", "fast"]
var prepositions = ["with"]
var verbs = ["danced", "laughed", "bounced", "shouted", "jumped", "swam", "skipped", "walked", "ran", "jogged", "cried", "complained", "spoke", "traveled", "read", "fought", "wrestled", "wrote", "dreamt", "played", "shared"]
var brokenVerbs = ["d_nced", "la_ghed", "b_unced", "sho_ted", "j_mped", "sw_m", "sk_pped", "w_lked", "r_n", "j_gged", "cr_ed", "c_mplained", "sp_ke", "tr_veled", "r_ad", "f_ught", "wr_stled", "wr_te", "dr_amt", "pl_yed", "sh_red"]
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

console.log('script is running')

//jQuery pointers
var $vowelButtons = $(".pokeballVowel");
$vowelButtons.hide();
var $start = $(".pokeball");
var $sentence = $("#sentence");
var $score = $("#score");
var $character = $("#character");
var $missed = $("#missed");
//global variables
var nouns = ["brother", "cat", "girl", "boy", "sister", "prince", "queen", "lion", "mouse", "turtle", "trainer"]
var adjectives =["brave", "bright", "calm", "strong", "nice", "honest", "grateful", "proud", "wild", "wise", "excited", "slim", "fair", "great", "smart", "fresh", "new", "blue", "green", "fast"]
var prepositions = ["with"]
var verbs = ["danced", "laughed", "bounced", "shouted", "jumped", "swam", "skipped", "walked", "ran", "jogged", "cried", "complained", "spoke", "traveled", "read", "fought", "wrestled", "wrote", "dreamt", "played", "shared"]
var brokenVerbs = ["d_nced", "la_ghed", "b_unced", "sho_ted", "j_mped", "sw_m", "sk_pped", "w_lked", "r_n", "j_gged", "cr_ed", "c_mplained", "sp_ke", "tr_veled", "r_ad", "f_ught", "wr_stled", "wr_te", "dr_amt", "pl_yed", "sh_red"]
var charNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]
var charImages = 
	["url('images/bulbasaur.gif')",
	"url('images/ivysaur.gif')",
	"url('images/venusaur.gif')",
	"url('images/charmander.gif')",
	"url('images/charmeleon.gif')",
	"url('images/charizard.gif')",
	"url('images/squirtle.gif')",
	"url('images/wartortle.gif')",
	"url('images/blastoise.gif')",
	"url('images/caterpie.gif')",
	"url('images/metapod.gif')",
	"url('images/butterfree.gif')",
	"url('images/weedle.gif')",
	"url('images/kakuna.gif')",
	"url('images/beedrill.gif')",
	"url('images/pidgey.gif')",
	"url('images/pidgeotto.gif')",
	"url('images/pidgeot.gif')",
	"url('images/rattata.gif')",
	"url('images/raticate.gif')",
	"url('images/spearow.gif')",
	"url('images/fearow.gif')",
	"url('images/ekans.gif')",
	"url('images/arbok.gif')",
	"url('images/pikachu.gif')",
	"url('images/raichu.gif')",
	"url('images/sandshrew.gif')",
	"url('images/sandslash.gif')",
	"url('images/nidoran-f.gif')",
	"url('images/nidorina.gif')",
	"url('images/nidoqueen.gif')",
	"url('images/nidoran-m.gif')",
	"url('images/nidorino.gif')",
	"url('images/nidoking.gif')",
	"url('images/clefairy.gif')",
	"url('images/clefable.gif')",
	"url('images/vulpix.gif')",
	"url('images/ninetales.gif')",
	"url('images/jigglypuff.gif')",
	"url('images/wigglytuff.gif')",
	"url('images/zubat.gif')",
	"url('images/golbat.gif')",
	"url('images/oddish.gif')",
	"url('images/gloom.gif')",
	"url('images/vileplume.gif')",
	"url('images/paras.gif')",
	"url('images/parasect.gif')",
	"url('images/venonat.gif')",
	"url('images/venomoth.gif')",
	"url('images/diglett.gif')",
	"url('images/dugtrio.gif')",
	"url('images/meowth.gif')",
	"url('images/persian.gif')",
	"url('images/psyduck.gif')",
	"url('images/golduck.gif')",
	"url('images/mankey.gif')",
	"url('images/primeape.gif')",
	"url('images/growlithe.gif')",
	"url('images/arcanine.gif')",
	"url('images/poliwag.gif')",
	"url('images/poliwhirl.gif')",
	"url('images/poliwrath.gif')",
	"url('images/abra.gif')",
	"url('images/kadabra.gif')",
	"url('images/alakazam.gif')",
	"url('images/machop.gif')",
	"url('images/machoke.gif')",
	"url('images/machamp.gif')",
	"url('images/bellsprout.gif')",
	"url('images/weepinbell.gif')",
	"url('images/victreebel.gif')",
	"url('images/tentacool.gif')",
	"url('images/tentacruel.gif')",
	"url('images/geodude.gif')",
	"url('images/graveler.gif')",
	"url('images/golem.gif')",
	"url('images/ponyta.gif')",
	"url('images/rapidash.gif')",
	"url('images/slowpoke.gif')",
	"url('images/slowbro.gif')",
	"url('images/magnemite.gif')",
	"url('images/magneton.gif')",
	"url('images/farfetchd.gif')",
	"url('images/doduo.gif')",
	"url('images/dodrio.gif')",
	"url('images/seel.gif')",
	"url('images/dewgong.gif')",
	"url('images/grimer.gif')",
	"url('images/muk.gif')",
	"url('images/shellder.gif')",
	"url('images/cloyster.gif')",
	"url('images/gastly.gif')",
	"url('images/haunter.gif')",
	"url('images/gengar.gif')",
	"url('images/onix.gif')",
	"url('images/drowzee.gif')",
	"url('images/hypno.gif')",
	"url('images/krabby.gif')",
	"url('images/kingler.gif')",
	"url('images/voltorb.gif')",
	"url('images/electrode.gif')",
	"url('images/exeggcute.gif')",
	"url('images/exeggutor.gif')",
	"url('images/cubone.gif')",
	"url('images/marowak.gif')",
	"url('images/hitmonlee.gif')",
	"url('images/hitmonchan.gif')",
	"url('images/lickitung.gif')",
	"url('images/koffing.gif')",
	"url('images/weezing.gif')",
	"url('images/rhyhorn.gif')",
	"url('images/rhydon.gif')",
	"url('images/chansey.gif')",
	"url('images/tangela.gif')",
	"url('images/kangaskhan.gif')",
	"url('images/horsea.gif')",
	"url('images/seadra.gif')",
	"url('images/goldeen.gif')",
	"url('images/seaking.gif')",
	"url('images/staryu.gif')",
	"url('images/starmie.gif')",
	"url('images/mr-mime.gif')",
	"url('images/scyther.gif')",
	"url('images/jynx.gif')",
	"url('images/electabuzz.gif')",
	"url('images/magmar.gif')",
	"url('images/pinsir.gif')",
	"url('images/tauros.gif')",
	"url('images/magikarp.gif')",
	"url('images/gyarados.gif')",
	"url('images/lapras.gif')",
	"url('images/ditto.gif')",
	"url('images/eevee.gif')",
	"url('images/vaporeon.gif')",
	"url('images/jolteon.gif')",
	"url('images/flareon.gif')",
	"url('images/porygon.gif')",
	"url('images/omanyte.gif')",
	"url('images/omastar.gif')",
	"url('images/kabuto.gif')",
	"url('images/kabutops.gif')",
	"url('images/aerodactyl.gif')",
	"url('images/snorlax.gif')",
	"url('images/articuno.gif')",
	"url('images/zapdos.gif')",
	"url('images/moltres.gif')",
	"url('images/dratini.gif')",
	"url('images/dragonair.gif')",
	"url('images/dragonite.gif')",
	"url('images/mewtwo.gif')",
	"url('images/mew.gif')"]
var vowel = '';
var word = '';
var check = '';
var score = 0;
var missed = 0;

// for testing all pokemon
// var counter = 0;

$start.on('click', start)
function start() {
	createSentence();
	$start.hide();
	$vowelButtons.show();
	//add event listeners to vowel buttons
	$vowelButtons.on('click', retrieveVowel)
}

//create sentence from word banks
function createSentence() {
	//randomize words taken from word banks
	subjectIndex = Math.floor(Math.random()*charNames.length);
	verbIndex = Math.floor(Math.random()*brokenVerbs.length);
	prepIndex = Math.floor(Math.random()*prepositions.length);	
	adjectiveIndex = Math.floor(Math.random()*adjectives.length);
	objectIndex = Math.floor(Math.random()*nouns.length);
	//form sentence
	$sentence.text(charNames[subjectIndex] + ' ' + brokenVerbs[verbIndex] + ' ' +
		prepositions[prepIndex] + ' the ' + adjectives[adjectiveIndex] + ' ' +
		nouns[objectIndex]+ '.');
	//show correct character
	$character.css("background-image", charImages[subjectIndex]);
	word = brokenVerbs[verbIndex];
	check = verbs[verbIndex];
	// counter++;
	//remove character name and image from array
	charNames.splice(subjectIndex,1);
	charImages.splice(subjectIndex,1);
}

//selecting vowel
function retrieveVowel(e) {
	//retrieve
	vowel = e.target.innerHTML.toLowerCase();
	var test = checkWord();
	reward(test);
	createSentence();
	end();
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
	return correct;
}

//game logic
function reward(test) {
	if (test) {
		score++;
		$score.text(score);
	}
	else {
		missed++;
		$missed.text(missed);
	}
}

function end() {
	if (charNames.length == 0) {
		$vowelButtons.hide();
		$character.hide();
		$sentence.text("GAME OVER");
		$('.game').css('background-image', "url('')");
	}
}

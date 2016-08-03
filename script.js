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
var charNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]
var charImages = 
	["url('https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/scyther-f.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif')",
	"url('https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif')"]
var vowel = '';
var word = '';
var check = '';
var score = 0;

// for testing all pokemon
var counter = 0;

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
	$sentence.text(charNames[counter] + ' ' + brokenVerbs[verbIndex] + ' ' +
		prepositions[prepIndex] + ' the ' + adjectives[adjectiveIndex] + ' ' +
		nouns[objectIndex]+ '.');
	$character.css("background-image", charImages[counter]);
	word = brokenVerbs[verbIndex];
	check = verbs[verbIndex];
	counter++;
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

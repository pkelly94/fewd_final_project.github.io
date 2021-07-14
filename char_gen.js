//Define Variables

let start = document.querySelector('#start');
let modal = document.querySelector(".settings-box");
let rating = document.querySelector("#rating");

//Define Arrays

var activity = [
	'chess club',
	'varsity sport',
	'debate team',
	'marching band',
	'cheerleading team',
	'drama club',
	'art club',
	'stoner',
	'church youth group',
	'young entrepreneurs',
	'scouts',
	'equestrian club',
	'fry cook',
	'anime club'
]

var activityPG = [
	'chess club',
	'varsity sport',
	'debate team',
	'marching band',
	'cheerleading team',
	'drama club',
	'art club',
	'church youth group',
	'young entrepreneurs',
	'scouts',
	'equestrian club',
	'fry cook',
	'anime club'
]

var reputation = [
	'was home schooled',
	'has rich parents',
	'has a cool older sibling',
	'was held back',
	'took acid once',
	'instagram model',
	'pretty hot now',
	'in a garage band',
	'school bully',
	'army brat',
	'performs slam poetry',
	'spiritual, not religious',
	'skater',
	'school mascot',
	'child actor',
	'communist',
	'soundcloud rapper',
	'has a face tattoo',
	'slut',
	'flower child',
	'teachers pet',
	'used to be popular',
	'loner',
	'class sweetheart',
	'goth',
	'allergic to everything',
	'woke af',
	'always friend zoned',
	'devout atheist',
	'avid gamer',
	'libertarian',
	'yallternative',
	'tiktok famous'
]

var reputationPG = [
	'was home schooled',
	'has rich parents',
	'has a cool older sibling',
	'was held back',
	'instagram model',
	'tiktok famous',
	'pretty hot now',
	'in a garage band',
	'school bully',
	'performs slam poetry',
	'spiritual, not religious',
	'can do a kickflip',
	'school mascot',
	'child actor',
	'communist!',
	'soundcloud rapper',
	'flower child',
	'teachers pet',
	'used to be popular',
	'loner',
	'class sweetheart',
	'goth',
	'allergic to everything',
	'woke',
	'always friend zoned',
	'devout atheist',
	'avid gamer',
	'libertarian',
	'yallternative'
]

var zodiac = [
	'leo',
	'aquarius',
	'virgo',
	'libra',
	'cancer',
	'gemini',
	'taurus',
	'capricorn',
	'pisces',
	'aries',
	'scorpio',
	'sagittarius'
]

var rumor = [
	'sells fake drugs to freshman',
	'is a reclaimed virgin',
	'is hooking up w/ a college drop out',
	'only hooks up w/ freshman',
	'hooked up w/ their bffs sweetheart',	
	'sent nudes to the gym teacher',
	'has never been kissed',
	'never wears underwear',
	'has vodka in their water bottle',
	'slept with the principal',
	'has an onlyfans account',
	'masturbates in the 3rd floor bathroom',
	'is always wearing a g string',
	'tried to make meth in the chem lab',
	'is into BDSM',
	'hooked up with their step-sibling',
	'steals underwear from the locker room',
	'watches porn in the computer lab',
	'reads hentai in the library',
	'bisexual for clout',
	'has a secret fetish',

	'actually really enjoyed the summer reading assignment',
	'isnt here for the right reasons',
	'bought their instagram followers',
	'still believes in santa',
	'is lying about their summer fling',
	'parents wont let them watch pg-13 rated movies',
	'cried when they didnt get into hogwarts',
	'got plastic surgery',
	'bought a love potion online',
	'has been arrested',
	'is a flat earther',
	'is only doing community service for the clout',
	'is in the witness protection program',

	'responsive-1',
	'responsive-2',
	'responsive-3',
	'responsive-4',
	'responsive-5',
	'responsive-6',
	'responsive-7'
]

var rumorPG = [

	'actually really enjoyed the summer reading assignment',
	'isnt here for the right reasons',
	'bought their instagram followers',
	'still believes in santa',
	'is lying about their summer fling',
	'parents wont let them watch pg-13 rated movies',
	'cried when they didnt get into hogwarts',
	'got plastic surgery',
	'bought a love potion online',
	'has been arrested',
	'is a flat earther',
	'is only doing community service for the clout',
	'is in the witness protection program',

	'smells bad',
	'is only wearing those glasses to look smart',
	'cheats on their calculus test',

	'responsive-1',
	'responsive-2',
	'responsive-3',
	'responsive-4'
]

function createPlayerBio(x) {

	let zodiacArray = shuffle(zodiac);
	let activityArray = shuffle(activity);
	let activityArrayPG = shuffle(activityPG);
	let reputationArray = shuffle(reputation);
	let reputationArrayPG = shuffle(reputationPG);
	let rumorArray = shuffle(rumor);
	let rumorArrayPG = shuffle(rumorPG);

	// Get Activities and Reputations Based on Rating Selection

	if (rating.checked) {
			
		// Get PG After School Activities
		
		for(i=1; i<=x; i++){
			let element = document.querySelectorAll('.activity');
			element[i-1].innerText = '';
			element[i-1].innerText = activityArrayPG[i-1];
		}

		// Get PG Reputations

		for(i=1; i<=x; i++){
			let element = document.querySelectorAll('.rep');
			element[i-1].innerText = '';
			element[i-1].innerText = reputationArrayPG[i-1];
		}

		// Get PG Rumors

		for(i=1; i<=x; i++){
			let element = document.querySelectorAll('.br-rumor');
			element[i-1].innerText = '';
			element[i-1].innerText = rumorArrayPG[i-1];
		}

	} else {
		
		// Get After School Activities

		for(i=1; i<=x; i++){
			let element = document.querySelectorAll('.activity');
			element[i-1].innerText = '';
			element[i-1].innerText = activityArray[i-1];
		}

		// Get Reputations

		for(i=1; i<=x; i++){
			let element = document.querySelectorAll('.rep');
			element[i-1].innerText = '';
			element[i-1].innerText = reputationArray[i-1];
		}

		// Get Rumors

		for(i=1; i<=x; i++){
			let element = document.querySelectorAll('.br-rumor');
			element[i-1].innerText = '';
			element[i-1].innerText = rumorArray[i-1];
		}
	}

	// Get Astrological Sign

	for(i=1; i<=x; i++){
		let element = document.querySelectorAll('.zodiac');
		element[i-1].innerText = '';
		element[i-1].innerText = zodiacArray[i-1];
	}
}

function calculateStats(x) {

	// Calculate stats

	for(i=1; i<=x; i++){

		// Define variables

		var ath = 0;
		var aca = 0;
		var alc = 0;
		var cre = 0;
		var chl = 0;
		var cha = 0;
		var emp = 0;
		var ngc = 0;
		var pp = 0;

		let playerAca = document.querySelectorAll('.aca')
		let playerAlc = document.querySelectorAll('.alc')
		let playerAth = document.querySelectorAll('.ath')
		let playerCre = document.querySelectorAll('.cre')
		let playerChl = document.querySelectorAll('.chl')
		let playerCha = document.querySelectorAll('.cha')
		let playerEmp = document.querySelectorAll('.emp')
		let playerNgc = document.querySelectorAll('.ngc')
		let playerPp = document.querySelectorAll('.pp')
		let playerActivity = document.querySelectorAll('.activity')
		let playerZodiac = document.querySelectorAll('.zodiac')

		// Case funtions

		switch(playerActivity[i-1].innerText) {
			case 'chess club':
				ath = ath-1;
				aca = aca+1;
				break;
			case 'varsity sport':
				ath = ath+1;
				aca = aca-1;
				break;
			case 'debate team':
				chl = chl-1;
				pp = pp+1;
				break;
			case 'marching band':
				aca = aca+1;
				cha = cha-1;
				break;
			case'cheerleading team':
				cha = cha+1;
				pp = pp-1;
				break;
			case 'drama club':
				cre = cre+1;
				chl = chl-1;
				break;
			case 'art club':
				cre = cre+1;
				emp = emp-1;
				break;
			case 'stoner':
				aca = aca-1;
				chl = chl+1
				break;
			case 'church youth group':
				cre = cre-1;
				emp = emp+1;
				break;
			case 'young entrepreneurs':
				cha = cha+1;
				emp = emp-1;
				break;
			case 'scouts':
				emp = emp+1;
				ngc = ngc-1;
				break;
			case 'equestrian club':
				ath = ath+1;
				chl = chl-1;
				break;
			case 'fry cook':
				chl = chl+1;
				cha = cha-1;
				break;
			case 'anime club':
				ath = ath-1;
				ngc = ngc+1;
				break;
		}

		switch(playerZodiac[i-1].innerText) {
			case 'leo':
				cha = cha+1;
				emp = emp-1;
				break;
			case 'aquarius':
				cre = cre+1;
				emp = emp-1;
				break;
			case 'virgo':
				aca = aca+1;
				cha = cha-1;
				break;
			case 'libra':
				ngc = ngc+1;
				pp = pp-1;
				break;
			case 'cancer':
				emp = emp+1;
				alc = alc-1;
				break;
			case 'gemini':
				cre = cre+1;
				aca = aca-1;
				break;
			case 'taurus':
				pp = pp+1;
				aca = aca-1;
				break;
			case 'capricorn':
				aca = aca+1;
				cre = cre-1;
				break;
			case 'pisces':
				emp = emp+1;
				pp = pp-1;
				break;
			case 'aries':
				ath = ath+1;
				chl = chl-1;
				break;
			case 'scorpio':
				cha = cha+1;
				chl = chl-1;
				break;
			case 'sagittarius':
				cha = cha+1;
				ngc = ngc-1;
				break;
		}

		playerAca[i-1].innerText = ''
		playerAlc[i-1].innerText = ''
		playerAth[i-1].innerText = ''
		playerCre[i-1].innerText = ''
		playerChl[i-1].innerText = ''
		playerCha[i-1].innerText = ''
		playerEmp[i-1].innerText = ''
		playerNgc[i-1].innerText = ''
		playerPp[i-1].innerText = ''

		playerAca[i-1].innerText = aca
		playerAlc[i-1].innerText = alc
		playerAth[i-1].innerText = ath
		playerCre[i-1].innerText = cre
		playerChl[i-1].innerText = chl
		playerCha[i-1].innerText = cha
		playerEmp[i-1].innerText = emp
		playerNgc[i-1].innerText = ngc
		playerPp[i-1].innerText = pp

	}
	
	// Format Stat Scores

	score = document.querySelectorAll('.score');

	for (i = 0; i < score.length; i++) {
		if (score[i].innerText != 0) {

			score[i].style.color = '#cc3399'
			score[i].style.fontweight = '900'

		} else {
			
			score[i].style.color = 'var(--border)';
		}
	}
}

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function Hide(array) {
	for(var i=0;i<=7;i++){
		let element = document.querySelectorAll(array)
		element[i].style.visibility = "hidden"
	}
  }

function Show(array, x) {
	for(var i=0;i<=x-1;i++){
		let element = document.querySelectorAll(array)
		element[i].style.visibility = "visible"
	}
  }

start.addEventListener('click', () =>{

// define player count

	var playercount = document.getElementById("myNumber").value;	
	let error = document.querySelector('#error')
	error.style.visibility = "hidden";
	
	if (playercount < 2) {
		
		let element = document.querySelector('#error')
		element.style.visibility = "visible"
		element.innerText = "that doesn't look like much of a democracy, please enter a value between 2 and 8."
		
	} else if (playercount > 8) {
		
		let element = document.querySelector('#error')
		element.style.visibility = "visible"
		element.innerText = "having "+playercount+" friends is impressive but it is time to pick your favorites, please enter a value between 2 and 8."
		
	} else {

		modal.style.visibility = "hidden"

		// Get header details

		let highschoolName = document.querySelector("#myHighschool").value;
		let highschool = document.querySelector('#highschoolName');
		let mascotName = document.querySelector("#myMascot").value;
		let mascot = document.querySelector('#mascotName');

		// Convert to uppercase

		highschoolName = highschoolName.toUpperCase()
		mascotName = mascotName.toUpperCase()

		// Show header

		highschool.innerText = "WELCOME TO "+highschoolName+" HIGH SCHOOL"
		highschool.style.visibility = "visible";
		
		if (mascotName.length > 0) {
			mascot.innerText = "HOME OF THE "+mascotName;
			mascot.style.visibility = "visible";
		}

		// Clear all elements	
	
		Hide('.player-box');
		Show('.player-box', playercount);
	
		// Get Activities and Reputations Based on Rating Selection

		createPlayerBio(playercount);

		// Calculate stats

		calculateStats(playercount);

	}
});

// Drop DOWN MENU

let menuTrigger = document.querySelector('#game-settings-menu');
let menuIcon = document.querySelector('#menu-icon');
let dropMenu = document.querySelector('.drop-down-menu');

console.log('hello world');

function activeIcon(x) {
    x.classList.toggle('active-icon');
  }

function toggleVisibility(x) {
	// x.classList.toggle('hidden-menu');
	x.classList.toggle('show-menu');
}

menuTrigger.addEventListener('click', () =>{
    activeIcon(menuIcon);
	toggleVisibility(dropMenu);
  })

// RESET BUTTON

let reset = document.querySelector('#reset');

reset.addEventListener('click', () =>{

	location.reload();

})

// RESHUFFLE BUTTON

let reshuffle = document.querySelector('#reshuffle');

reshuffle.addEventListener('click', () => {

	var playercount = document.getElementById("myNumber").value;

	createPlayerBio(playercount);
	calculateStats(playercount);

	// Make all reveal cards visible

	let button = document.querySelectorAll('.br-reveal');
	let bwRumor = document.querySelectorAll('.br-rumor');

	for(i=0; i<playercount; i++) {
		button[i].style.display = "inline-block";
		bwRumor[i].style.display = "none";
	}
})

// COLOR THEME PICKER

let fire = document.querySelector('#fire-theme');
let classic = document.querySelector('#default-theme');
let acid = document.querySelector('#acid-theme');
let cd = document.querySelector('#cd-theme');
let blue = document.querySelector('#blue-theme');
let canvas = document.querySelector('.game-canvas');

classic.addEventListener('click', () => {
	canvas.style.backgroundImage = "none";
	document.documentElement.style.setProperty('--background-color', 'white');
	document.documentElement.style.setProperty('--border', '#3300CC');
	document.documentElement.style.setProperty('--font-color', '#3300CC');
	document.documentElement.style.setProperty('--highlight-color', 'white');
})

fire.addEventListener('click', () => {
	canvas.style.backgroundImage = "url('CPG - BACKGROUND - FIRE SIGN.jpg')";
	canvas.style.backgroundSize = "100vw";
	document.documentElement.style.setProperty('--border', 'black')
	document.documentElement.style.setProperty('--font-color', 'black')
})

blue.addEventListener('click', () => {
	canvas.style.backgroundImage = "none";
	document.documentElement.style.setProperty('--border', '#3300CC')
	document.documentElement.style.setProperty('--font-color', '#3300CC')
	document.documentElement.style.setProperty('--background-color', 'white');
	document.documentElement.style.setProperty('--highlight-color', 'white');
})

acid.addEventListener('click', () => {
	canvas.style.backgroundImage = "none";
	document.documentElement.style.setProperty('--background-color', 'black');
	document.documentElement.style.setProperty('--border', '#cc3399');
	document.documentElement.style.setProperty('--font-color', '#cc3399');
	document.documentElement.style.setProperty('--highlight-color', 'black');
})
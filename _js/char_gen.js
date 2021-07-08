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
	'can do a kickflip',
	'school mascot',
	'child actor',
	'is a communist!',
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
	'yallternative'
]

var reputationPG = [
	'was home schooled',
	'has rich parents',
	'has a cool older sibling',
	'was held back',
	'instagram model',
	'pretty hot now',
	'in a garage band',
	'school bully',
	'performs slam poetry',
	'spiritual, not religious',
	'can do a kickflip',
	'school mascot',
	'child actor',
	'is a communist!',
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
		
		// Define arrays
	
		let zodiacArray = shuffle(zodiac);
		let activityArray = shuffle(activity);
		let activityArrayPG = shuffle(activityPG);
		let reputationArray = shuffle(reputation);
		let reputationArrayPG = shuffle(reputationPG);

		// clear all elements	
	
		Hide('.player-box')
		Show('.player-box', playercount)
	
		// Get Activities and Reputations Based on Rating Selection

		if (rating.checked) {
			
			// Get PG After School Activities
			
			for(i=1; i<=playercount; i++){
				let element = document.querySelectorAll('.activity');
				element[i-1].innerText = '';
				element[i-1].innerText = activityArrayPG[i-1];
			}

			// Get PG Reputations

			for(i=1; i<=playercount; i++){
				let element = document.querySelectorAll('.rep');
				element[i-1].innerText = '';
				element[i-1].innerText = reputationArrayPG[i-1];
			}

		} else {
			
			// Get After School Activities

			for(i=1; i<=playercount; i++){
				let element = document.querySelectorAll('.activity');
				element[i-1].innerText = '';
				element[i-1].innerText = activityArray[i-1];
			}

			// Get Reputations

			for(i=1; i<=playercount; i++){
				let element = document.querySelectorAll('.rep');
				element[i-1].innerText = '';
				element[i-1].innerText = reputationArray[i-1];
			}
		}

		// Get Astrological Sign
	
		for(i=1; i<=playercount; i++){
			let element = document.querySelectorAll('.zodiac');
			element[i-1].innerText = '';
			element[i-1].innerText = zodiacArray[i-1];
		}

		// Calculate stats

		for(i=1; i<=playercount; i++){

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

			// Case funtions

			switch(activityArray[i-1]) {
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

			switch(zodiacArray[i-1]) {
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

			}
		}
	}
});
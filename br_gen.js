//Define variables

let button = document.querySelectorAll('.br-reveal');
let bwRumor = document.querySelectorAll('.br-rumor');
let player = document.querySelectorAll('.player-name-desktop');

const playerOne = button[0];
const playerTwo = button[1];
const playerThree = button[2];
const playerFour = button[3];
const playerFive = button[4];
const playerSix = button[5];
const playerSeven = button[6];
const playerEight = button[7];

//Create function to hide the button and reveal the rumor

function reveal(i) {

	var playerCount = document.getElementById("myNumber").value;
	console.log(playerCount);
	var string = bwRumor[i].innerText;
	var x = (i - (playerCount - 1)) * (-1);
	var playerName = player[x].value;
	console.log(string);

	//If playerName is blank, default to player number

	if (playerName.length == 0) {
		playerName = 'Player '+(x+1);
	}

	// Check for responsive values and reveal

	if (string == "responsive-1") {
		bwRumor[i].innerText = "broke up with "+playerName+" via text";
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else if (string == "responsive-2") {
		bwRumor[i].innerText = "cheated on their sweetheart with "+playerName;
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else if (string == "responsive-3") {
		bwRumor[i].innerText = "has a shrine of "+playerName+" in their closet";
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else if (string == "responsive-4") {
		bwRumor[i].innerText = "ghosted "+playerName+" after one date";
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else if (string == "responsive-5") {
		bwRumor[i].innerText = "really hates "+playerName;
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else if (string == "responsive-6") {
		bwRumor[i].innerText = "is secretly half-siblings with "+playerName;
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else if (string == "responsive-7") {
		bwRumor[i].innerText = "slept with "+playerName+"'s parent";
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	} else {
		button[i].style.display = "none";
		bwRumor[i].style.display = "block";
	}
}

playerOne.addEventListener('click', () => {
	reveal(0);
});

playerTwo.addEventListener('click', () => {
	reveal(1);
});

playerThree.addEventListener('click', () => {
	reveal(2)
});

playerFour.addEventListener('click', () => {
	reveal(3)
});

playerFive.addEventListener('click', () => {
	reveal(4)
});

playerSix.addEventListener('click', () => {
	reveal(5)
});

playerSeven.addEventListener('click', () => {
	reveal(6)
});

playerEight.addEventListener('click', () => {
	reveal(7)
});
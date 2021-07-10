//Define variables

let br = document.querySelector('#br_wall');

//Define arrays

var rumor = [
	'sells fake drugs to freshman',
	'is a reclaimed virgin',
	'has a 30 yr old s/o',
	'only hooks up w/ freshman',
	'hooked up with bffs s/o',
	'broke up w/ person to their left via text',
	'ghosted person to their right',
	'bought their instagram followers',
	'still believes in santa',
	'slept with a teacher',
	's/o from camp is fake',
	'has a shrine in their closet for the person to their left',
	'sent nudes to the principal',
	'has never been kissed',
	'made out with a hot dog',
	'is cheating on s/o with person to their right',
	'parents wont let them watch pg-13 rated movies',
	'is always wearing a g string',
	'has vodka in their water bottle',
	'was on the show teen mom',
	'cried when they didnt get into hogwarts',
	'has a spray tan',
	'masturbates in the 3rd floor bathroom',
	'really wants to talk about the summer reading assignment',
	'bought a love potion online',
	'has a secret youtube channel they dont want the school knowing about',
	'has been arrested',
	'is a serial monogamist',
	'has an onlyfans account',
	'is a(n) [insert culturally relevant event] truther'
]

var rumorPG = [

	'broke up w/ person to their left via text',
	'ghosted person to their right',
	'bought their instagram followers',
	'still believes in santa',
	's/o from camp is fake',
	'has a shrine in their closet for the person to their left',
	'has never been kissed',
	'was on the show teen mom',
	'cried when they didnt get into hogwarts',
	'has a spray tan',
	'really wants to talk about the summer reading assignment',
	'bought a love potion online',
	'has a secret youtube channel they dont want the school knowing about',
	'has been arrested',
	'is a serial monogamist',
	'is a(n) [insert culturally relevant event] truther',
    'is failing at going viral on tik tok'
]

//Run function

br.addEventListener('click', () =>{

    // define player count
        
        var playercount = document.getElementById("myNumber").value;	
        
        let error = document.querySelector('#error')
        
        error.style.visibility = "hidden";
        
        if (playercount < 2) {
            
            let element = document.querySelector('#error')
            element.style.visibility = "visible"
            element.innerText = "that doesn't look like much of a democracy, please enter a value between 2 and 9"
            
        } else if (playercount > 9) {
            
            let element = document.querySelector('#error')
            element.style.visibility = "visible"
            element.innerText = "having "+playercount+" friends is impressive but it is time to pick your favorites, please enter a value between 2 and 9"
            
        } else {
            
            // Define arrays
        
            let rumor = shuffle(rumor);
    
            // clear all elements	
        
            Hide(allDivArray)
            Show(allDivArray, playercount)
        
            for(var i=1; i<=27; i++){
                let element = document.querySelector('#'+allelements[i-1]);
                element.innerText = '';
            }
        
            // Get Rumors
        
            for(i=1; i<=playercount; i++){
                let element = document.querySelector('#'+elementastroarray[i-1]);
                element.innerText = RumorArray[i-1];
            }
            
        }
    });
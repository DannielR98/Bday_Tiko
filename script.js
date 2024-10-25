const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const particles = [];
	const color = randomColor();
    const xMin = 0;
    const xMax = 200;
	
	const particle = document.createElement('span');
	particle.classList.add('particle', 'move');
	
	const { x, y } = randomLocation();
	particle.style.setProperty('--x', x);
	particle.style.setProperty('--y', y);
	particle.style.background = color;
	btn.style.background = color;
	
	btn.appendChild(particle);
	
	particles.push(particle);
	
	setTimeout(() => {
	
		for(let i=0; i<100; i++) {
			const innerP = document.createElement('span');
			innerP.classList.add('particle', 'move');
			innerP.style.transform = `translate(${x}, ${y})`;

			const xs = Math.random() * 200 - 100 + 'px';
			const ys = Math.random() * 200 - 100 + 'px';
			innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
			innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
			innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
			innerP.style.background = color;
			
			btn.appendChild(innerP);
			particles.push(innerP)
		}
		
		setTimeout(() => {
			particles.forEach(particle => {
				particle.remove();
			})
		}, 1000)
	}, 1000);
});

function randomLocation() {
	return {

		x: Math.random() * window.innerWidth - window.innerWidth / 3 + 'px',
		y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
	}
}

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}


function changeImage() {
    var birthdayImages = document.getElementsByClassName("birthday");
    
    for (var i = 0; i < birthdayImages.length; i++) {
        if (birthdayImages[i].src.endsWith("zuko.jpg")) {
            birthdayImages[i].src = "happy-birthday-avatar.gif";
        } else if (birthdayImages[i].src.endsWith("happy-birthday-avatar.gif")) {
            birthdayImages[i].src = "palpatine.jpg";
		} else if (birthdayImages[i].src.endsWith("palpatine.jpg")) {
            birthdayImages[i].src = "deploy.jpg";
			birthdayImages[i].style.width = "auto"; // Set smaller width for deploy.jpg
            birthdayImages[i].style.height = "auto"; // Maintain aspect ratio
		} else if (birthdayImages[i].src.endsWith("deploy.jpg")) {
            birthdayImages[i].src = "special.png";
		} else if (birthdayImages[i].src.endsWith("special.png")) {
            birthdayImages[i].src = "windu.png";
		} else if (birthdayImages[i].src.endsWith("windu.png")) {
            birthdayImages[i].src = "mummy.png";
		} else if (birthdayImages[i].src.endsWith("mummy.png")) {
            birthdayImages[i].src = "man.jpg";
        } else {
            birthdayImages[i].src = "zuko.jpg";
        }
    }
}

/*document.getElementById('login-button').addEventListener('click', () => {
	const enteredPassword = document.getElementById('password').value;
	const correctPassword = "miskas"; // Replace with your actual password

	if (enteredPassword === correctPassword) {
		// Password matches, show the protected content and hide the login box.
		document.getElementById('login-box').style.display = "none";
		document.getElementById('content').style.display = "flex";
	} else {
		// Password doesn't match, display an error message or take other actions.
		alert("Incorrect password. Please try again.");
	}
});

*/
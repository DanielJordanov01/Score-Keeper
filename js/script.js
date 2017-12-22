var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Points = document.querySelector("#p1Points");
var p2Points = document.querySelector("#p2Points");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("#PlayTo")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// Player 1 Button
p1Button.addEventListener("click", function() {
	if (!gameOver && winningScore !== 0 && winningScore > 0){
		p1Score++;
		if(p1Score === winningScore) {
			gameOver = true;
			p1Points.classList.add("winner");
		}
		p1Points.textContent = p1Score;
	}	
});

// Player 2 Button
p2Button.addEventListener("click", function() {
	if (!gameOver && winningScore !== 0 && winningScore > 0) {
		p2Score++;
		if (p2Score === winningScore){
			gameOver = true;
			p2Points.classList.add("winner");
		}
	}
	p2Points.textContent = p2Score;
});

// Reset Button
reset.addEventListener("click", function() {
	p1Points.textContent = 0;
	p2Points.textContent = 0;
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Points.classList.remove("winner");
	p2Points.classList.remove("winner");
});

// Playing To: 
numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
});

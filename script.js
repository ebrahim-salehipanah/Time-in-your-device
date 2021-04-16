(function () {
	setInterval(function setClock() {
		let hourHand = document.getElementsByClassName("hr")[0];
		let minuteHand = document.getElementsByClassName("mn")[0];
		let secondHand = document.getElementsByClassName("sc")[0];

		let time = new Date();
		let hour = time.getHours();
		let minute = time.getMinutes();
		let second = time.getSeconds(); 

		hourHand.style.transform = `rotate(${hourToDeg(hour, minute)}deg)`;
		minuteHand.style.transform = `rotate(${toDeg(minute) + second / 10}deg)`;
		secondHand.style.transform = `rotate(${toDeg(second)}deg)`;

		function toDeg(secOrMin) {
			// 360 deg / 60 second = 6 deg ==> 1 second = 6 deg
			return (parseInt(secOrMin) - 15) * 6;
		}

		function hourToDeg(hour, min) {
			// 60 min = 1 hour = 30deg ==> 2 min = 1 deg
			return (parseInt(hour) - 3) * 30 + parseInt(min) / 2;
		}
	}, 1000);
})();

document.addEventListener("DOMContentLoaded", function (event) {

	document.getElementById("resultBox").style.display = 'none';

	document.getElementById("submitAssignButton").addEventListener("click", assignTask);

	function assignTask() {

		var today = new Date();

		var todayDate = "";
		var todayMonth = "";
		var ampmhour = '';
		var ampmmin = '';

		if (today.getDate() < 10) {
			todayDate = "0" + (today.getDate());
		}

		if (today.getDate() >= 10) {
			todayDate = (today.getDate());
		}

		if (today.getMonth() < 10) {
			todayMonth = "0" + (today.getMonth());
		}

		if (today.getMonth() >= 10) {
			todayMonth = (today.getMonth());
		}

		var date = today.getFullYear() + '-' + todayMonth + '-' + todayDate;

		if (today.getHours() < 10) {
			ampmhour = "0" + (today.getHours());
		}

		if (today.getHours() >= 10) {
			ampmhour = (today.getHours());
		}

		if (today.getMinutes() < 10) {
			ampmmin = "0" + (today.getMinutes());
		}

		if (today.getMinutes() >= 10) {
			ampmmin = (today.getMinutes());
		}
		var time = ampmhour + ":" + ampmmin + ":00";

		var dateTime = date + ' ' + time;

		document.getElementById("inputarea").style.display = 'none';
		document.getElementById("loading").style.display = 'block';
		document.getElementById("wronginput").style.display = 'none';

		let trakingNum = document.getElementById("trackingNumber").value;
		let deliveryD = document.getElementById("deliveryDate").value;
		let agentNum = document.getElementById("agent").value;

		document.getElementById('trackingNumber').value = '';
		document.getElementById('deliveryDate').value = '';
		document.getElementById('agent').value = '';

		var responseot = '';
		var json_responseot = '';

		var responsejd = '';
		var json_responsejd = '';

		var request = new XMLHttpRequest();

		request.open('POST', 'https://api.tookanapp.com/v2/reassign_open_tasks');

		request.setRequestHeader('Content-Type', 'application/json');

		request.onreadystatechange = function () {
			if (this.readyState === 4) {
				console.log('Status:', this.status);
				console.log('Headers:', this.getAllResponseHeaders());
				console.log('Body:', this.responseText);
				responseot = this.responseText;
				json_responseot = JSON.parse(responseot);

				if (json_responseot.status != 404) {

					request.open('POST', 'https://api.tookanapp.com/v2/change_job_date');

					request.setRequestHeader('Content-Type', 'application/json');

					request.onreadystatechange = function () {
						if (this.readyState === 4) {
							console.log('Status:', this.status);
							console.log('Headers:', this.getAllResponseHeaders());
							console.log('Body:', this.responseText);

							responsejd = this.responseText;
							json_responsejd = JSON.parse(responsejd);

							if (json_responsejd.status != 404) {

								document.getElementById("trackingNumberSubmitted").innerHTML = trakingNum;
								document.getElementById("deliveryDateSubmitted").innerHTML = deliveryD;
								document.getElementById("agentSubmitted").innerHTML = agentNum;

								document.getElementById("loading").style.display = 'none';
								document.getElementById("resultBox").style.display = 'block';
								document.getElementById("submitagain").style.display = 'block';

								document.getElementById("submitagain").addEventListener("click", function () {
									document.getElementById("submitagain").style.display = 'none';
									document.getElementById("inputarea").style.display = 'block';
									document.getElementById("resultBox").style.display = 'none';
								});
							} if (json_responsejd.status == 404) {
								document.getElementById("loading").style.display = 'none';
								document.getElementById("wronginput").style.display = 'block';
								document.getElementById("inputarea").style.display = 'block';
							}
						};
						var body = {
							'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
							"job_ids": [trakingNum],
							'layout_type': 0,
							'start_time': dateTime,
							'end_time': deliveryD
						};
						request.send(JSON.stringify(body));
					}
				}
				if (json_responseot.status == 404) {
					document.getElementById("loading").style.display = 'none';
					document.getElementById("wronginput").style.display = 'block';
					document.getElementById("inputarea").style.display = 'block';
				}
			}
		};
		var body = {
			'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
			'deliveries': [
				{
					"fleet_id": agentNum,
					"job_ids": [trakingNum]
				}
			]
		};
		request.send(JSON.stringify(body));
	}
});

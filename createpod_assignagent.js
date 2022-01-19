let countTN = 1;
let createTable = 0;
let endLoop = 0;

var responsetn = '';
var json_responsetn = '';

//create table
let table = document.createElement('table');
table.setAttribute("id", "tasklisttable");
table.setAttribute("border", "1");
table.setAttribute('contenteditable', true);
table.className = "table table-striped table-hover table-bordered table-responsive";
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('tasklist').appendChild(table);

function jump001(field, autoMove) {
    endLoop = 0;
    if (field.value.length >= field.maxLength) {

        if ((countTN == 1) && (createTable == 0)) {

            var trackingNum = document.getElementById("trackingNumber" + countTN).value;

            var request = new XMLHttpRequest();

            request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = function () {
                if ((this.readyState === 4) && (createTable == 0)) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);

                    document.getElementById(autoMove).focus();

                    responsetn = this.responseText;
                    json_responsetn = JSON.parse(responsetn);

                    let row_1 = document.createElement('tr');
                    let heading_1 = document.createElement('th');
                    heading_1.innerHTML = "No.";
                    let heading_2 = document.createElement('th');
                    heading_2.innerHTML = "Item With Me";
                    let heading_3 = document.createElement('th');
                    heading_3.innerHTML = "Order ID";
                    let heading_4 = document.createElement('th');
                    heading_4.innerHTML = "Fridge Item";
                    let heading_5 = document.createElement('th');
                    heading_5.innerHTML = "Contact Name";
                    let heading_6 = document.createElement('th');
                    heading_6.innerHTML = "Address";
                    let heading_7 = document.createElement('th');
                    heading_7.innerHTML = "Contact No.";
                    let heading_8 = document.createElement('th');
                    heading_8.innerHTML = "Price";
                    let heading_9 = document.createElement('th');
                    heading_9.innerHTML = "Tracking No.";
                    let heading_10 = document.createElement('th');
                    heading_10.innerHTML = "Payment Status";
                    let heading_11 = document.createElement('th');
                    heading_11.innerHTML = "BT Uploaded";
                    let heading_12 = document.createElement('th');
                    heading_12.innerHTML = "Staging Remark";

                    row_1.appendChild(heading_1);
                    row_1.appendChild(heading_2);
                    row_1.appendChild(heading_3);
                    row_1.appendChild(heading_4);
                    row_1.appendChild(heading_5);
                    row_1.appendChild(heading_6);
                    row_1.appendChild(heading_7);
                    row_1.appendChild(heading_8);
                    row_1.appendChild(heading_9);
                    row_1.appendChild(heading_10);
                    row_1.appendChild(heading_11);
                    row_1.appendChild(heading_12);
                    thead.appendChild(row_1);

                    var row_2 = document.createElement('tr');

                    var row_2_data_1 = document.createElement('td');
                    row_2_data_1.innerHTML = countTN;
                    var row_2_data_2 = document.createElement('td');
                    var row_2_data_3 = document.createElement('td');
                    row_2_data_3.innerHTML = json_responsetn.data[0].order_id;
                    var row_2_data_4 = document.createElement('td');
                    var row_2_data_5 = document.createElement('td');
                    row_2_data_5.innerHTML = json_responsetn.data[0].customer_username;
                    var row_2_data_6 = document.createElement('td');
                    row_2_data_6.innerHTML = json_responsetn.data[0].job_address;
                    var row_2_data_7 = document.createElement('td');
                    row_2_data_7.innerHTML = json_responsetn.data[0].customer_phone;
                    var row_2_data_8 = document.createElement('td');
                    row_2_data_8.innerHTML = json_responsetn.data[0].job_description;
                    var row_2_data_9 = document.createElement('td');
                    row_2_data_9.innerHTML = json_responsetn.data[0].job_id;
                    var row_2_data_10 = document.createElement('td');
                    var row_2_data_11 = document.createElement('td');
                    var row_2_data_12 = document.createElement('td');

                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                    row_2.appendChild(row_2_data_6);
                    row_2.appendChild(row_2_data_7);
                    row_2.appendChild(row_2_data_8);
                    row_2.appendChild(row_2_data_9);
                    row_2.appendChild(row_2_data_10);
                    row_2.appendChild(row_2_data_11);
                    row_2.appendChild(row_2_data_12);
                    tbody.appendChild(row_2);

                    countTN = countTN + 1;
                    createTable = 1;
                }
            };

            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_ids': [trackingNum],
                'include_task_history': 0
            };
            request.send(JSON.stringify(body));
        }

        if ((countTN > 1) && (createTable > 0)) {
            var trackingNum = document.getElementById("trackingNumber" + countTN).value;

            var request = new XMLHttpRequest();

            request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = function () {
                if ((this.readyState === 4) && (endLoop == 0)) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);

                    document.getElementById(autoMove).focus();

                    responsetn = this.responseText;
                    json_responsetn = JSON.parse(responsetn);

                    var row_2 = document.createElement('tr');

                    var row_2_data_1 = document.createElement('td');
                    row_2_data_1.innerHTML = countTN;
                    var row_2_data_2 = document.createElement('td');
                    var row_2_data_3 = document.createElement('td');
                    row_2_data_3.innerHTML = json_responsetn.data[0].order_id;
                    var row_2_data_4 = document.createElement('td');
                    var row_2_data_5 = document.createElement('td');
                    row_2_data_5.innerHTML = json_responsetn.data[0].customer_username;
                    var row_2_data_6 = document.createElement('td');
                    row_2_data_6.innerHTML = json_responsetn.data[0].job_address;
                    var row_2_data_7 = document.createElement('td');
                    row_2_data_7.innerHTML = json_responsetn.data[0].customer_phone;
                    var row_2_data_8 = document.createElement('td');
                    row_2_data_8.innerHTML = json_responsetn.data[0].job_description;
                    var row_2_data_9 = document.createElement('td');
                    row_2_data_9.innerHTML = json_responsetn.data[0].job_id;
                    var row_2_data_10 = document.createElement('td');
                    var row_2_data_11 = document.createElement('td');
                    var row_2_data_12 = document.createElement('td');

                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                    row_2.appendChild(row_2_data_6);
                    row_2.appendChild(row_2_data_7);
                    row_2.appendChild(row_2_data_8);
                    row_2.appendChild(row_2_data_9);
                    row_2.appendChild(row_2_data_10);
                    row_2.appendChild(row_2_data_11);
                    row_2.appendChild(row_2_data_12);
                    tbody.appendChild(row_2);

                    endLoop = endLoop + 1;
                    countTN = countTN + 1;
                }
            };

            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_ids': [trackingNum],
                'include_task_history': 0
            };
            request.send(JSON.stringify(body));
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("loading").style.display = 'none';
    document.getElementById("inputarea").style.display = 'none';
    document.getElementById("excelbuttonarea").style.display = 'none';
    document.getElementById("assigntaskbuttonarea").style.display = 'none';
    document.getElementById("control").style.display = 'none';
    document.getElementById("trackingNumField").style.display = 'none';
    document.getElementById("captchaBox").style.display = 'none';
    document.getElementById("savetoDB").style.display = 'none';

    document.getElementById("createPODTemplateButton").addEventListener("click", createPODTemplate);

    document.getElementById("submitAssignButton").addEventListener("click", assignTask);

    function createPODTemplate() {

        var numOfTN = document.getElementById("numOfTN").value;

        if ((numOfTN < 1) || (numOfTN.length == 0)) {
            alert("Please do not leave the Number of Tracking Number(s) field empty or 0!");
        }

        if ((numOfTN >= 1) && (numOfTN.length != 0)) {
            let areaCode = document.getElementById("areaCode").value;
            let podDoneBy = document.getElementById("podDoneBy").value;
            let podDate = document.getElementById("podDate").value;

            var numOfTNcheck = numOfTN - 1;

            for (let i = 0; i < numOfTN; i++) {
                var tnInput = document.createElement('input');
                tnInput.setAttribute('type', 'number');
                tnInput.setAttribute('class', 'text-field w-input');
                tnInput.setAttribute('name', 'trackingNumber' + (i + 1));
                tnInput.setAttribute('id', 'trackingNumber' + (i + 1));
                tnInput.setAttribute('placeholder', (i + 1));
                tnInput.setAttribute('maxlength', '9');

                if (numOfTNcheck != i) {
                    tnInput.setAttribute('onkeyup', "jump001(this, 'trackingNumber" + (i + 2) + "')");
                }

                if (numOfTNcheck == i) {
                    tnInput.setAttribute('onkeyup', "jump001(this, 'podArea')");
                }

                document.getElementById("inputarea").appendChild(tnInput);

                var tnQty = document.createElement('input');
                tnQty.setAttribute('type', 'hidden');
                tnQty.setAttribute('class', 'text-field w-input');
                tnQty.setAttribute('name', 'qty' + (i + 1));
                tnQty.setAttribute('id', 'qty' + (i + 1));
                tnQty.setAttribute('value', 1);

                document.getElementById("inputareaquantity").appendChild(tnQty);
            }

            // Creating and adding data to first row of the table
            let row_h = document.createElement('tr');
            let row_h_data_1 = document.createElement('th');
            row_h_data_1.innerHTML = "Area: ";
            let row_h_data_2 = document.createElement('td');
            row_h_data_2.innerHTML = areaCode;;
            let row_h_data_3 = document.createElement('th');
            row_h_data_3.innerHTML = "Done By: ";
            let row_h_data_4 = document.createElement('td');
            row_h_data_4.innerHTML = podDoneBy;
            row_h_data_4.setAttribute('colspan', '7');
            let row_h_data_5 = document.createElement('th');
            row_h_data_5.innerHTML = "Date of POD: ";
            let row_h_data_6 = document.createElement('td');
            row_h_data_6.innerHTML = podDate;

            row_h.appendChild(row_h_data_1);
            row_h.appendChild(row_h_data_2);
            row_h.appendChild(row_h_data_3);
            row_h.appendChild(row_h_data_4);
            row_h.appendChild(row_h_data_5);
            row_h.appendChild(row_h_data_6);
            thead.appendChild(row_h);

            document.getElementById("areaCodeArea").style.display = 'none';
            document.getElementById("inputarea").style.display = 'block';
            document.getElementById("trackingNumField").style.display = 'block';
            document.getElementById("excelbuttonarea").style.display = 'block';
            document.getElementById("assigntaskbuttonarea").style.display = 'block';
        }
    }

    function assignTask() {
        document.getElementById("inputarea").style.display = 'none';
        document.getElementById("trackingNumField").style.display = 'none';
        document.getElementById("assigntaskbuttonarea").style.display = 'none';
        document.getElementById("control").style.display = 'block';
    }

    document.getElementById("submitAssignConfirmButton").addEventListener("click", function () {
        if (($("#agent").val().length == 0)) {
            alert("Please do not leave the agent field empty!");
        }

        if (($("#assignDate").val().length == 0)) {
            alert("Please do not leave the assign date field empty!");
        }

        if (($("#agent").val().length != 0) && ($("#assignDate").val().length != 0)) {
            assignTaskConfirm();
        }
    });

    function assignTaskConfirm() {
        var assignTaskDone = '';

        var responsetd = '';
        var json_responsetd = '';

        var responseat = '';
        var json_responseat = '';

        var assignTaskToAgent = 0;
        var assignDateTimeToTask = 0;

        document.getElementById("control").style.display = 'none';
        document.getElementById("loading").style.display = 'block';

        var assignDate = document.getElementById("assignDate").value;
        var numOfAssignTN = document.getElementById("numOfTN").value;
        var agentNum = document.getElementById("agent").value;

        var today = new Date();
        var todayDate = "";
        var todayMonth = "";

        var nextMonth = (today.getMonth()) + 1;

        if (today.getDate() < 10) {
            todayDate = "0" + (today.getDate());
        }

        if (today.getDate() >= 10) {
            todayDate = (today.getDate());
        }

        if (nextMonth < 10) {
            todayMonth = "0" + (nextMonth);
        }

        if (nextMonth >= 10) {
            todayMonth = (nextMonth);
        }

        var date = today.getFullYear() + '-' + todayMonth + '-' + todayDate;
        var time = "01:00:00";
        var timeClose = "23:00:00";
        var dateTime = date + ' ' + time;
        var dateTimeClose = assignDate + ' ' + timeClose;

        for (let j = 0; j < numOfAssignTN; j++) {

            assignTaskToAgent = 0;
            var trackingNumAssign = document.getElementById("trackingNumber" + (j + 1)).value;

            var request = new XMLHttpRequest();

            request.open('POST', 'https://api.tookanapp.com/v2/assign_task');

            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = function () {
                if ((this.readyState === 4) && (assignTaskToAgent == 0)) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);

                    assignTaskToAgent = 1;

                    var assignTaskCheck = (j + 1);

                    if (assignTaskCheck == numOfAssignTN) {
                        assignTaskDone = 1;
                    }
                }
            };

            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_id': trackingNumAssign,
                'fleet_id': agentNum,
                'job_status': '0'
            };
            request.send(JSON.stringify(body));
        }

        if (assignTaskDone == 1) {
            for (let k = 0; k < numOfAssignTN; k++) {

                assignDateTimeToTask = 0;
                var trackingNumAssignDate = document.getElementById("trackingNumber" + (k + 1)).value;

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/change_job_date');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if ((this.readyState === 4) && (assignDateTimeToTask == 0)) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        assignDateTimeToTask = 1;

                        var assignDateCheck = (k + 1);

                        if (assignDateCheck == numOfAssignTN) {
                            document.getElementById("loading").style.display = 'none';
                            document.getElementById("captchaBox").style.display = 'block';
                            document.getElementById("savetoDB").style.display = 'block';
                        }
                    }
                };

                var body = {
                    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                    "job_ids": [trackingNumAssignDate],
                    'layout_type': 0,
                    'start_time': dateTime,
                    'end_time': dateTimeClose
                };
                request.send(JSON.stringify(body));
            }
        }
    }
});

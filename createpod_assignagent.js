var countBarcode = 1;
        var endLoop = 0;

        let table = document.createElement('table');
        table.setAttribute("id", "tasklisttable");
        table.className = "table table-striped table-hover table-bordered table-responsive";
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        document.getElementById('tasklist').appendChild(table);

        function jump001(field, autoMove) {

            endLoop = 0;

            if (field.value.length >= field.maxLength) {
                document.getElementById(autoMove).focus();

                if ((countBarcode == 1) && (endLoop == 0)) {

                    let trakingNum = document.getElementById("trackingNumber").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn1 = this.responseText;
                            json_responsetn1 = JSON.parse(responsetn1);

                            let row_1 = document.createElement('tr');
                            let heading_1 = document.createElement('th');
                            heading_1.innerHTML = "No.";
                            let heading_2 = document.createElement('th');
                            heading_2.innerHTML = "Item With Me";
                            let heading_3 = document.createElement('th');
                            heading_3.innerHTML = "Order ID";
                            let heading_4 = document.createElement('th');
                            heading_4.innerHTML = "Contact Name";
                            let heading_5 = document.createElement('th');
                            heading_5.innerHTML = "Address";
                            let heading_6 = document.createElement('th');
                            heading_6.innerHTML = "Contact No.";
                            let heading_7 = document.createElement('th');
                            heading_7.innerHTML = "Price";
                            let heading_8 = document.createElement('th');
                            heading_8.innerHTML = "Tracking No.";
                            let heading_9 = document.createElement('th');
                            heading_9.innerHTML = "Payment Status";
                            let heading_10 = document.createElement('th');
                            heading_10.innerHTML = "BT Uploaded";
                            let heading_11 = document.createElement('th');
                            heading_11.innerHTML = "Staging Remark";

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
                            thead.appendChild(row_1);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "1";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn1.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn1.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn1.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn1.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn1.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn1.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 2) && (endLoop == 0)) {

                    let trakingNum2 = document.getElementById("trackingNumber2").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn2 = this.responseText;
                            json_responsetn2 = JSON.parse(responsetn2);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "2";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn2.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn2.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn2.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn2.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn2.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn2.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum2],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 3) && (endLoop == 0)) {
                    let trakingNum3 = document.getElementById("trackingNumber3").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn3 = this.responseText;
                            json_responsetn3 = JSON.parse(responsetn3);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "3";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn3.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn3.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn3.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn3.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn3.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn3.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum3],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 4) && (endLoop == 0)) {
                    let trakingNum4 = document.getElementById("trackingNumber4").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn4 = this.responseText;
                            json_responsetn4 = JSON.parse(responsetn4);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "4";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn4.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn4.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn4.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn4.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn4.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn4.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum4],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 5) && (endLoop == 0)) {

                    let trakingNum5 = document.getElementById("trackingNumber5").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn5 = this.responseText;
                            json_responsetn5 = JSON.parse(responsetn5);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "5";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn5.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn5.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn5.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn5.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn5.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn5.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum5],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 6) && (endLoop == 0)) {

                    let trakingNum6 = document.getElementById("trackingNumber6").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn6 = this.responseText;
                            json_responsetn6 = JSON.parse(responsetn6);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "6";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn6.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn6.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn6.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn6.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn6.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn6.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum6],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 7) && (endLoop == 0)) {

                    let trakingNum7 = document.getElementById("trackingNumber7").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn7 = this.responseText;
                            json_responsetn7 = JSON.parse(responsetn7);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "7";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn7.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn7.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn7.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn7.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn7.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn7.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum7],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 8) && (endLoop == 0)) {

                    let trakingNum8 = document.getElementById("trackingNumber8").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn8 = this.responseText;
                            json_responsetn8 = JSON.parse(responsetn8);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "8";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn8.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn8.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn8.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn8.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn8.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn8.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum8],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 9) && (endLoop == 0)) {

                    let trakingNum9 = document.getElementById("trackingNumber9").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn9 = this.responseText;
                            json_responsetn9 = JSON.parse(responsetn9);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "9";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn9.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn9.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn9.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn9.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn9.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn9.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum9],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 10) && (endLoop == 0)) {

                    let trakingNum10 = document.getElementById("trackingNumber10").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn10 = this.responseText;
                            json_responsetn10 = JSON.parse(responsetn10);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "10";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn10.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn10.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn10.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn10.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn10.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn10.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum10],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 11) && (endLoop == 0)) {

                    let trakingNum11 = document.getElementById("trackingNumber11").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn11 = this.responseText;
                            json_responsetn11 = JSON.parse(responsetn11);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "11";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn11.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn11.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn11.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn11.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn11.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn11.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum11],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 12) && (endLoop == 0)) {

                    let trakingNum12 = document.getElementById("trackingNumber12").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn12 = this.responseText;
                            json_responsetn12 = JSON.parse(responsetn12);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "12";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn12.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn12.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn12.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn12.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn12.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn12.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum12],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 13) && (endLoop == 0)) {

                    let trakingNum13 = document.getElementById("trackingNumber13").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn13 = this.responseText;
                            json_responsetn13 = JSON.parse(responsetn13);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "13";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn13.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn13.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn13.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn13.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn13.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn13.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum13],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 14) && (endLoop == 0)) {

                    let trakingNum14 = document.getElementById("trackingNumber14").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn14 = this.responseText;
                            json_responsetn14 = JSON.parse(responsetn14);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "14";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn14.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn14.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn14.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn14.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn14.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn14.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum14],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 15) && (endLoop == 0)) {

                    let trakingNum15 = document.getElementById("trackingNumber15").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn15 = this.responseText;
                            json_responsetn15 = JSON.parse(responsetn15);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "15";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn15.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn15.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn15.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn15.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn15.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn15.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum15],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 16) && (endLoop == 0)) {

                    let trakingNum16 = document.getElementById("trackingNumber16").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn16 = this.responseText;
                            json_responsetn16 = JSON.parse(responsetn16);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "16";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn16.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn16.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn16.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn16.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn16.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn16.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum16],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 17) && (endLoop == 0)) {

                    let trakingNum17 = document.getElementById("trackingNumber17").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn17 = this.responseText;
                            json_responsetn17 = JSON.parse(responsetn17);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "17";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn17.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn17.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn17.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn17.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn17.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn17.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum17],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 18) && (endLoop == 0)) {

                    let trakingNum18 = document.getElementById("trackingNumber18").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn18 = this.responseText;
                            json_responsetn18 = JSON.parse(responsetn18);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "18";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn18.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn18.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn18.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn18.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn18.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn18.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum18],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 19) && (endLoop == 0)) {

                    let trakingNum19 = document.getElementById("trackingNumber19").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn19 = this.responseText;
                            json_responsetn19 = JSON.parse(responsetn19);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "19";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn19.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn19.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn19.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn19.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn19.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn19.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum19],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }

                if ((countBarcode == 20) && (endLoop == 0)) {

                    let trakingNum20 = document.getElementById("trackingNumber20").value;

                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            responsetn20 = this.responseText;
                            json_responsetn20 = JSON.parse(responsetn20);

                            endLoop = endLoop + 1;
                            countBarcode = countBarcode + 1;

                            let row_2 = document.createElement('tr');

                            let row_2_data_1 = document.createElement('td');
                            row_2_data_1.innerHTML = "20";
                            let row_2_data_2 = document.createElement('td');
                            let row_2_data_3 = document.createElement('td');
                            row_2_data_3.innerHTML = json_responsetn20.data[0].order_id;
                            let row_2_data_4 = document.createElement('td');
                            row_2_data_4.innerHTML = json_responsetn20.data[0].customer_username;
                            let row_2_data_5 = document.createElement('td');
                            row_2_data_5.innerHTML = json_responsetn20.data[0].job_address;
                            let row_2_data_6 = document.createElement('td');
                            row_2_data_6.innerHTML = json_responsetn20.data[0].customer_phone;
                            let row_2_data_7 = document.createElement('td');
                            row_2_data_7.innerHTML = json_responsetn20.data[0].job_description;
                            let row_2_data_8 = document.createElement('td');
                            row_2_data_8.innerHTML = json_responsetn20.data[0].job_id;
                            let row_2_data_9 = document.createElement('td');
                            let row_2_data_10 = document.createElement('td');
                            let row_2_data_11 = document.createElement('td');

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
                            tbody.appendChild(row_2);
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_ids': [trakingNum20],
                        'include_task_history': 0
                    };

                    request.send(JSON.stringify(body));
                }
            }
        }

        document.addEventListener("DOMContentLoaded", function (event) {

            document.getElementById("loading").style.display = 'none';
            document.getElementById("wronginput").style.display = 'none';
            document.getElementById("inputarea").style.display = 'none';
            document.getElementById("excelbuttonarea").style.display = 'none';
            document.getElementById("assigntaskbuttonarea").style.display = 'none';
            document.getElementById("control").style.display = 'none';
            document.getElementById("resultBox").style.display = 'none';
            document.getElementById("submitagain").style.display = 'none';

            document.getElementById("resultBox").style.display = 'none';

            document.getElementById("createPODTemplateButton").addEventListener("click", createPODTemplate);

            document.getElementById("submitAssignButton").addEventListener("click", assignTask);

            document.getElementById("submitAssignConfirmButton").addEventListener("click", assignTaskConfirm);

            function createPODTemplate() {

                let areaCode = document.getElementById("areaCode").value;
                let podDoneBy = document.getElementById("podDoneBy").value;
                let podDate = document.getElementById("podDate").value;


                // Creating and adding data to first row of the table
                let row_h = document.createElement('tr');
                let row_h_data_1 = document.createElement('th');
                row_h_data_1.innerHTML = "Area: ";
                let row_h_data_2 = document.createElement('td');
                row_h_data_2.innerHTML = areaCode;;
                let row_h_data_3 = document.createElement('th');
                row_h_data_3.innerHTML = "Done By: ";
                row_h_data_3.setAttribute('colspan', '2');
                let row_h_data_4 = document.createElement('td');
                row_h_data_4.innerHTML = podDoneBy;
                row_h_data_4.setAttribute('colspan', '3');
                let row_h_data_5 = document.createElement('th');
                row_h_data_5.innerHTML = "Date of POD: ";
                row_h_data_5.setAttribute('colspan', '2');
                let row_h_data_6 = document.createElement('td');
                row_h_data_6.innerHTML = podDate;
                row_h_data_6.setAttribute('colspan', '3');

                row_h.appendChild(row_h_data_1);
                row_h.appendChild(row_h_data_2);
                row_h.appendChild(row_h_data_3);
                row_h.appendChild(row_h_data_4);
                row_h.appendChild(row_h_data_5);
                row_h.appendChild(row_h_data_6);
                thead.appendChild(row_h);
                document.getElementById("createPODTemplateButton").style.display = 'none';
                document.getElementById("inputarea").style.display = 'block';
                document.getElementById("excelbuttonarea").style.display = 'block';
                document.getElementById("assigntaskbuttonarea").style.display = 'block';
            }

            function assignTask() {
                document.getElementById("assigntaskbuttonarea").style.display = 'none';
                document.getElementById("control").style.display = 'block';
            }

            function assignTaskConfirm() {

                document.getElementById("control").style.display = 'none';
                document.getElementById("loading").style.display = 'block';
                document.getElementById("wronginput").style.display = 'none';

                var assignDate = document.getElementById("assignDate").value;

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

                let trakingNum = document.getElementById("trackingNumber").value;
                let trakingNum2 = document.getElementById("trackingNumber2").value;
                let trakingNum3 = document.getElementById("trackingNumber3").value;
                let trakingNum4 = document.getElementById("trackingNumber4").value;
                let trakingNum5 = document.getElementById("trackingNumber5").value;
                let trakingNum6 = document.getElementById("trackingNumber6").value;
                let trakingNum7 = document.getElementById("trackingNumber7").value;
                let trakingNum8 = document.getElementById("trackingNumber8").value;
                let trakingNum9 = document.getElementById("trackingNumber9").value;
                let trakingNum10 = document.getElementById("trackingNumber10").value;
                let trakingNum11 = document.getElementById("trackingNumber11").value;
                let trakingNum12 = document.getElementById("trackingNumber12").value;
                let trakingNum13 = document.getElementById("trackingNumber13").value;
                let trakingNum14 = document.getElementById("trackingNumber14").value;
                let trakingNum15 = document.getElementById("trackingNumber15").value;
                let trakingNum16 = document.getElementById("trackingNumber16").value;
                let trakingNum17 = document.getElementById("trackingNumber17").value;
                let trakingNum18 = document.getElementById("trackingNumber18").value;
                let trakingNum19 = document.getElementById("trackingNumber19").value;
                let trakingNum20 = document.getElementById("trackingNumber20").value;

                let agentNum = document.getElementById("agent").value;

                document.getElementById('trackingNumber').value = '';
                document.getElementById('trackingNumber2').value = '';
                document.getElementById('trackingNumber3').value = '';
                document.getElementById('trackingNumber4').value = '';
                document.getElementById('trackingNumber5').value = '';
                document.getElementById('trackingNumber6').value = '';
                document.getElementById('trackingNumber7').value = '';
                document.getElementById('trackingNumber8').value = '';
                document.getElementById('trackingNumber9').value = '';
                document.getElementById('trackingNumber10').value = '';
                document.getElementById('trackingNumber11').value = '';
                document.getElementById('trackingNumber12').value = '';
                document.getElementById('trackingNumber13').value = '';
                document.getElementById('trackingNumber14').value = '';
                document.getElementById('trackingNumber15').value = '';
                document.getElementById('trackingNumber16').value = '';
                document.getElementById('trackingNumber17').value = '';
                document.getElementById('trackingNumber18').value = '';
                document.getElementById('trackingNumber19').value = '';
                document.getElementById('trackingNumber20').value = '';
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

                                        if (trakingNum.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted").innerHTML = trakingNum;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum2.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted2").innerHTML = trakingNum2;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum2,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum3.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted3").innerHTML = trakingNum3;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum3,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum4.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted4").innerHTML = trakingNum4;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum4,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum5.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted5").innerHTML = trakingNum5;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum5,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum6.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted6").innerHTML = trakingNum6;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum6,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum7.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted7").innerHTML = trakingNum7;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum7,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum8.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted8").innerHTML = trakingNum8;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum8,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum9.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted9").innerHTML = trakingNum9;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum9,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum10.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted10").innerHTML = trakingNum10;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum10,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum11.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted11").innerHTML = trakingNum11;

                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum11,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum12.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted12").innerHTML = trakingNum12;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum12,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum13.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted13").innerHTML = trakingNum13;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum13,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum14.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted14").innerHTML = trakingNum14;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum14,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum15.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted15").innerHTML = trakingNum15;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum15,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum16.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted16").innerHTML = trakingNum16;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum16,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum17.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted17").innerHTML = trakingNum17;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum17,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum18.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted18").innerHTML = trakingNum18;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum18,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum19.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted19").innerHTML = trakingNum19;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum19,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        if (trakingNum20.value != 0) {
                                            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
                                            request.setRequestHeader('Content-Type', 'application/json');
                                            request.onreadystatechange = function () {
                                                if (this.readyState === 4) {
                                                    console.log('Status:', this.status);
                                                    console.log('Headers:', this.getAllResponseHeaders());
                                                    console.log('Body:', this.responseText);

                                                    document.getElementById("trackingNumberSubmitted20").innerHTML = trakingNum20;
                                                }
                                            };
                                            var body = {
                                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                                'job_id': trakingNum20,
                                                'job_status': '0'
                                            };
                                            request.send(JSON.stringify(body));
                                        }

                                        document.getElementById("deliveryDateSubmitted").innerHTML = dateTimeClose;
                                        document.getElementById("agentSubmitted").innerHTML = agentNum;

                                        document.getElementById("loading").style.display = 'none';
                                        document.getElementById("resultBox").style.display = 'block';
                                        document.getElementById("submitagain").style.display = 'block';

                                        document.getElementById("submitagain").addEventListener("click", function () {
                                            countBarcode = 1;
                                            endLoop = 0;

                                            document.getElementById("submitagain").style.display = 'none';
                                            document.getElementById("resultBox").style.display = 'none';

                                            document.getElementById("inputarea").style.display = 'none';
                                            document.getElementById("createPODTemplateButton").style.display = 'block';

                                            document.getElementById("tasklist").innerHTML = '';

                                            document.getElementById("trackingNumberSubmitted").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted2").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted3").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted4").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted5").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted6").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted7").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted8").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted9").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted10").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted11").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted12").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted13").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted14").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted15").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted16").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted17").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted18").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted19").innerHTML = '';
                                            document.getElementById("trackingNumberSubmitted20").innerHTML = '';
                                            document.getElementById("deliveryDateSubmitted").innerHTML = '';
                                            document.getElementById("agentSubmitted").innerHTML = '';

                                            document.getElementById("Tracking Number").value = '';
                                            document.getElementById("Tracking Number2").value = '';
                                            document.getElementById("Tracking Number3").value = '';
                                            document.getElementById("Tracking Number4").value = '';
                                            document.getElementById("Tracking Number5").value = '';
                                            document.getElementById("Tracking Number6").value = '';
                                            document.getElementById("Tracking Number7").value = '';
                                            document.getElementById("Tracking Number8").value = '';
                                            document.getElementById("Tracking Number9").value = '';
                                            document.getElementById("Tracking Number10").value = '';
                                            document.getElementById("Tracking Number11").value = '';
                                            document.getElementById("Tracking Number12").value = '';
                                            document.getElementById("Tracking Number13").value = '';
                                            document.getElementById("Tracking Number14").value = '';
                                            document.getElementById("Tracking Number15").value = '';
                                            document.getElementById("Tracking Number16").value = '';
                                            document.getElementById("Tracking Number17").value = '';
                                            document.getElementById("Tracking Number18").value = '';
                                            document.getElementById("Tracking Number19").value = '';
                                            document.getElementById("Tracking Number20").value = '';

                                            document.getElementById("areaCode").value = '';
                                            document.getElementById("podDoneBy").value = '';
                                            document.getElementById("podDate").value = '';
                                            document.getElementById("agent").value = '';
                                            document.getElementById("assignDate").value = '';
                                        });
                                    } if (json_responsejd.status == 404) {
                                        document.getElementById("loading").style.display = 'none';
                                        document.getElementById("wronginput").style.display = 'block';
                                        document.getElementById("inputarea").style.display = 'block';
                                    }
                                }
                            }
                            var body = {
                                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                                "job_ids": [trakingNum, trakingNum2, trakingNum3, trakingNum4, trakingNum5, trakingNum6, trakingNum7, trakingNum8, trakingNum9, trakingNum10, trakingNum11, trakingNum12, trakingNum13, trakingNum14, trakingNum15, trakingNum16, trakingNum17, trakingNum18, trakingNum19, trakingNum20],
                                'layout_type': 0,
                                'start_time': dateTime,
                                'end_time': dateTimeClose
                            };
                            request.send(JSON.stringify(body));

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
                    "fleet_id": agentNum,
                    "job_ids": [trakingNum, trakingNum2, trakingNum3, trakingNum4, trakingNum5, trakingNum6, trakingNum7, trakingNum8, trakingNum9, trakingNum10, trakingNum11, trakingNum12, trakingNum13, trakingNum14, trakingNum15, trakingNum16, trakingNum17, trakingNum18, trakingNum19, trakingNum20]
                };
                request.send(JSON.stringify(body));
            }
        });

document.addEventListener("DOMContentLoaded", function (event) {
                            document.getElementById("trackbutton").addEventListener("click", tracknumber);

                            function tracknumber() {
                                document.getElementById("trackingnumberarea").style.display = 'none';
                                document.getElementById("trackingpagearea").style.display = 'none';

                                var orderid = '';
                                orderid = document.getElementById("order_id").value;
                                document.getElementById('order_id').value = '';

                                var responsejd = '';
                                var json_responsejd = '';

                                var request = new XMLHttpRequest();

                                document.getElementById("jobresultbox").style.display = 'none';
                                document.getElementById("wronginput").style.display = 'none';
                                document.getElementById("loading").style.display = 'inline';

                                request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');

                                request.setRequestHeader('Content-Type', 'application/json');

                                request.onreadystatechange = function () {
                                    if (this.readyState === 4) {
                                        console.log('Status:', this.status);
                                        console.log('Headers:', this.getAllResponseHeaders());
                                        console.log('Body:', this.responseText);
                                        responsejd = this.responseText;
                                        json_responsejd = JSON.parse(responsejd);

                                        if (json_responsejd.status != 404) {

                                            document.getElementById("patientname").innerHTML = json_responsejd.data[0].customer_username;
                                            document.getElementById("patientnumber").innerHTML = json_responsejd.data[0].order_id;

                                            let table = document.createElement('table');
                                            table.setAttribute("id", "tasklisttable");
                                            table.className = "table table-striped table-hover table-bordered table-responsive";
                                            let thead = document.createElement('thead');
                                            let tbody = document.createElement('tbody');

                                            table.appendChild(thead);
                                            table.appendChild(tbody);

                                            document.getElementById('orderlist').appendChild(table);

                                            // Creating and adding data to first row of the table
                                            let row_1 = document.createElement('tr');
                                            let heading_1 = document.createElement('th');
                                            heading_1.innerHTML = "Tracking No.";
                                            let heading_2 = document.createElement('th');
                                            heading_2.innerHTML = "Job Status";
                                            let heading_3 = document.createElement('th');
                                            heading_3.innerHTML = "Address";
                                            let heading_4 = document.createElement('th');
                                            heading_4.innerHTML = "Date/Time";

                                            row_1.appendChild(heading_1);
                                            row_1.appendChild(heading_2);
                                            row_1.appendChild(heading_3);
                                            row_1.appendChild(heading_4);
                                            thead.appendChild(row_1);

                                            var countorderhistory = json_responsejd.data.length;

                                            for (let i = 0; i < countorderhistory; i++) {

                                                var today = new Date(json_responsejd.data[i].creation_datetime);
                                                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                                                var ampm = '';
                                                var ampmhour = '';
                                                var ampmmin = '';

                                                if (today.getHours() < 12) {
                                                    ampm = 'am';
                                                    ampmhour = (today.getHours());
                                                }

                                                if (today.getHours() == 12) {
                                                    ampm = 'pm';
                                                    ampmhour = (today.getHours());
                                                }

                                                if (today.getHours() > 12) {
                                                    ampm = 'pm';
                                                    ampmhour = (today.getHours() - 12);
                                                }

                                                if (today.getMinutes() < 10) {
                                                    ampmmin = "0" + (today.getMinutes());
                                                }

                                                if (today.getMinutes() >= 10) {
                                                    ampmmin = (today.getMinutes());
                                                }
                                                var time = ampmhour + ":" + ampmmin + " " + ampm;

                                                var dateTime = date + ' ' + time;

                                                if (json_responsejd.data[i].job_status == 0) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 1) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 2) {
                                                    var statusJob = "Successful";
                                                }

                                                if (json_responsejd.data[i].job_status == 3) {
                                                    var statusJob = "Failed";
                                                }

                                                if (json_responsejd.data[i].job_status == 4) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 6) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 7) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 8) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 9) {
                                                    var statusJob = "Processing";
                                                }

                                                if (json_responsejd.data[i].job_status == 10) {
                                                    var statusJob = "Processing";
                                                }

                                                let row_2 = document.createElement('tr');

                                                let row_2_data_1 = document.createElement('td');
                                                row_2_data_1.innerHTML = json_responsejd.data[i].job_id;
                                                let row_2_data_2 = document.createElement('td');
                                                row_2_data_2.innerHTML = statusJob;
                                                let row_2_data_3 = document.createElement('td');
                                                row_2_data_3.innerHTML = json_responsejd.data[i].job_address;
                                                let row_2_data_4 = document.createElement('td');
                                                row_2_data_4.innerHTML = dateTime;

                                                row_2.appendChild(row_2_data_1);
                                                row_2.appendChild(row_2_data_2);
                                                row_2.appendChild(row_2_data_3);
                                                row_2.appendChild(row_2_data_4);
                                                tbody.appendChild(row_2);
                                            }

                                            document.getElementById("loading").style.display = 'none';
                                            document.getElementById("jobresultbox").style.display = 'block';

                                            document.getElementById("trackagain").style.display = 'block';

                                            document.getElementById("trackingpagearea").style.display = 'block';

                                            document.getElementById("trackbuttonagain").addEventListener("click", function () {
                                                document.getElementById("trackingpagearea").style.display = 'none';
                                                document.getElementById("trackagain").style.display = 'none';
                                                document.getElementById("trackingnumberarea").style.display = 'block';
                                                document.getElementById("jobresultbox").style.display = 'none';
                                                document.getElementById("orderlist").innerHTML = '';
                                            });
                                        }
                                        if (json_responsejd.status == 404) {
                                            document.getElementById("loading").style.display = 'none';
                                            document.getElementById("wronginput").style.display = 'block';
                                            document.getElementById("trackingnumberarea").style.display = 'block';
                                        }
                                    }
                                };
                                var body = {
                                    'api_key': '53626885f0400f401d527c6514516c471ae7cdfe2fdf7c38591403c4',
                                    'order_ids': [orderid],
                                    'include_task_history': 1
                                };
                                request.send(JSON.stringify(body));
                            }
                        });

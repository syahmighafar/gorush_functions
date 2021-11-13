document.addEventListener("DOMContentLoaded", function(event) {
    
document.getElementById("resultBox").style.display = 'none';

document.getElementById("submitAssignButton").addEventListener("click", assignTask);

function assignTask(){
    
    document.getElementById("inputarea").style.display = 'none';
    document.getElementById("loading").style.display = 'block';
    document.getElementById("wronginput").style.display = 'none';
    
    let trakingNum = document.getElementById("trackingNumber").value;
    let deliveryD = document.getElementById("deliveryDate").value;
    let agentNum = document.getElementById("agent").value;
    
    document.getElementById('trackingNumber').value = '';
    document.getElementById('deliveryDate').value = '';
    document.getElementById('agent').value = '';
    
    var responseet = '';
    var json_responseet = '';
    
    var request = new XMLHttpRequest();

    request.open('POST', 'https://api.tookanapp.com/v2/edit_multiple_tasks');

    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        responseet = this.responseText;
        json_responseet = JSON.parse(responseet);
          
        if(json_responseet.status != 404){
            document.getElementById("trackingNumberSubmitted").innerHTML = trakingNum;
            document.getElementById("deliveryDateSubmitted").innerHTML = deliveryD;
            document.getElementById("agentSubmitted").innerHTML = agentNum;
            
            document.getElementById("loading").style.display = 'none';
            document.getElementById("resultBox").style.display = 'block';                           
            document.getElementById("submitagain").style.display = 'block';

            document.getElementById("submitagain").addEventListener("click", function(){
                document.getElementById("submitagain").style.display = 'none';
                document.getElementById("inputarea").style.display = 'block';
                document.getElementById("resultBox").style.display = 'none';
            });
        }

        if (json_responseet.status == 404){
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
          'job_id': trakingNum,
          'fleet_id': agentNum,
          'time': deliveryD,
        }
      ]
    };
    request.send(JSON.stringify(body));
    }
});

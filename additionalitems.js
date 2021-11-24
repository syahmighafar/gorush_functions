document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {

        $("#remove_fields").hide();

        document.getElementById("add_more_fields").addEventListener("click", addItems);
        document.getElementById("remove_fields").addEventListener("click", removeItems);

        var additional_item = document.getElementById('additional_item');
        var countadd = 0;

        function addItems() {

            var newheading = document.createElement('h4');
            newheading.innerHTML = "Additional ltem " + (countadd + 1);
            additional_item.appendChild(newheading);

            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "itemnamearea" + (countadd + 1))
            additional_item.appendChild(newDiv);


            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Item:*";
            document.getElementById("itemnamearea" + (countadd + 1)).appendChild(newLabel);

            var newField = document.createElement('input');
            newField.setAttribute('type', 'text');
            newField.setAttribute('class', 'text-field w-input');
            newField.setAttribute('maxlength', '256');
            newField.setAttribute('name', 'Item ' + (countadd + 1));
            newField.setAttribute('data-name', 'Item ' + (countadd + 1));
            newField.setAttribute('id', 'item' + (countadd + 1));
            newField.setAttribute('placeholder', 'Item');
            newField.required = true;
            document.getElementById("itemnamearea" + (countadd + 1)).appendChild(newField);

            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "quantityarea" + (countadd + 1))
            additional_item.appendChild(newDiv);

            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Quantity:*";
            document.getElementById("quantityarea" + (countadd + 1)).appendChild(newLabel);

            var newField = document.createElement('input');
            newField.setAttribute('type', 'number');
            newField.setAttribute('class', 'text-field w-input');
            newField.setAttribute('maxlength', '5');
            newField.setAttribute('name', 'Quantity ' + (countadd + 1));
            newField.setAttribute('data-name', 'Quantity ' + (countadd + 1));
            newField.setAttribute('id', 'Quantity-' + (countadd + 1));
            newField.setAttribute('placeholder', 'Quantity');
            newField.required = true;
            document.getElementById("quantityarea" + (countadd + 1)).appendChild(newField);

            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "itempricearea" + (countadd + 1))
            additional_item.appendChild(newDiv);

            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Item Price:*";
            document.getElementById("itempricearea" + (countadd + 1)).appendChild(newLabel);

            var newField = document.createElement('input');
            newField.setAttribute('type', 'number');
            newField.setAttribute('class', 'text-field w-input');
            newField.setAttribute('maxlength', '256');
            newField.setAttribute('name', 'Item Price ' + (countadd + 1));
            newField.setAttribute('data-name', 'Item Price ' + (countadd + 1));
            newField.setAttribute('id', 'Item-Price-' + (countadd + 1));
            newField.setAttribute('placeholder', 'Item Price');
            newField.required = true;
            document.getElementById("itempricearea" + (countadd + 1)).appendChild(newField);

            countadd = countadd + 1;

            $("#remove_fields").fadeIn();
        }

        function removeItems() {
            var div_tags = additional_item.getElementsByTagName('div');
            var heading_tags = additional_item.getElementsByTagName('h4');
            if (div_tags.length != 0) {
                additional_item.removeChild(div_tags[(div_tags.length) - 1]);
                additional_item.removeChild(div_tags[(div_tags.length) - 1]);
                additional_item.removeChild(div_tags[(div_tags.length) - 1]);
                additional_item.removeChild(heading_tags[(heading_tags.length) - 1]);
                countadd = countadd - 1;

                if (div_tags.length == 0) {
                    $("#remove_fields").hide();
                }
            }
        }
    });
});

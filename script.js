var sno = 0;
$("form button.btn").click(function() {
    var item_name = $("#item_name").val();
    var quantity = $("#quantity").val();
    var new_row = "<tr><td>" +sno + "</td><td>" + item_name + "</td><td>" + quantity + "</td></tr>";
    $("table tbody").append(new_row);
    return false;
});


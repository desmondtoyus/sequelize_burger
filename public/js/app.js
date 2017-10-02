$(document).ready(function () {
    view();
    $('#addBurger').on('click', function (event) {
        event.preventDefault();

        var burger = $("#burger_name").val().trim();
        if (burger === '') {
            alert("Enter a burger you would like to eat");
        } else {
            var burgers = {
                name: burger,
                devoured: false
            }
            $("#addBurger").val('');
            $.post('api/burgers/', burgers, function (data) {

            }).then(view)
        }


    })

    function view(params) {
        $('#devour_this').empty();
        $('#devoured').empty();

        $.get('/api/burgers/', function (data) {
            for (var index = 0; index < data.length; index++) {
                if (!data[index].devoured) {
                    var newDiv = $("<div>");
                    newDiv.append('<input type="text" class="form-control" name="burger" id="eatBurger" value=' + data[index].id + '.' + data[index].name + '>');
                    newDiv.append('<button type="submit" class="btn btn-info" id="eatBtn" value=' + data[index].id + '>EAT!</button>');
                    $('#devour_this').append(newDiv);
                } else {
                    var newDiv = $("<div>");
                    newDiv.append('<input type="text" class="form-control" name="burger" value=' + data[index].id + '.' + data[index].name + '>');

                    $('#devoured').append(newDiv);
                }

            }
        })
    }

    $(document).on('click', '#eatBtn', function (event) {
        event.preventDefault;
        var id = $(this).val();
        console.log(id);
        $.ajax({
            method: 'PUT',
            url: '/api/burgers/' + id,

        }).then(view);

    })

})
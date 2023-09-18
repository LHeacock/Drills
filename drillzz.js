const $newDiv = $('<div></div>').appendTo('body');

const $submitBtn = $('#submit-btn');
const $inputEle = $('#my-input');

$submitBtn.attr('disabled', true);



$inputEle.on('input', function () {
    const validForm = $inputEle.val() !== '';
    if (validForm) {
      
        $submitBtn.attr('disabled', false);
    } else {
        
        $submitBtn.attr('disabled', true);
    }
});

const $myUl = $('<ul id="submitList"></ul>');
$('body').append($myUl);

$submitBtn.on('click', function (e) {
    e.preventDefault();

    const inputVal = $inputEle.val();
alert('omg, everyone did you hear: ' + inputVal);

    let $li = $('<li>' + inputVal + '</li>')
        .click(function () {
            $li.css('color', '#' + Math.floor(Math.random() * 16777215).toString(16));
        })
        .dblclick(function () {
            $li.remove();
        });

    $myUl.append($li);
});
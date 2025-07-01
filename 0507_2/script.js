$(document).ready(function () {
    function calculate() {
        let num1 = parseFloat($('#num1').val());
        let num2 = parseFloat($('#num2').val());
        let operator = $('#operator').val();

        if (isNaN(num1) || isNaN(num2)) {
            alert('Please, enter both numbers');
            return;
        }

        let res;
        switch (operator) {
            case '+': res = num1 + num2; break;
            case '-': res = num1 - num2; break;
            case '*': res = num1 * num2; break;
            case '/':
                if (num2 === 0) {
                    alert('Can\'t divide by zero');
                    return;
                }
                res = num1 / num2;
                break;
        }

        $('#result').html(`Result: ${num1} ${operator} ${num2} = ${res}`);

        setTimeout(() => {
            if (!confirm('One more?')) {
                $('#calculator').html('<h3>Thanks for using the calculator!</h3>');
            } else {
                $('#num1, #num2').val('');
                $('#num1').focus();
            }
        }, 300);
    }

    $('#calculate').click(calculate);

    $('#num1, #num2').keypress(function (e) {
        if (e.which === 13) calculate();
    });
});
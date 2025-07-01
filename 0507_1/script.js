$(document).ready(function () {
    let numbers = [];
    let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;

    $('#submitNumber').click(function () {
        if (numbers.length >= 10) {
            alert('You have entered 10 numbers!');
            return;
        }

        let num = parseFloat($('#numberInput').val());
        if (isNaN(num)) {
            alert('Please enter number');
            return;
        }

        numbers.push(num);
        $('#numberInput').val('');

        positive = negative = zero = even = odd = 0;
        numbers.forEach(n => {
            if (n > 0) positive++;
            else if (n < 0) negative++;
            else zero++;

            if (n % 2 === 0) even++;
            else odd++;
        });

        $('#stats').html(`
                    <h3>Stat (input: ${numbers.length}/10 numbers:</h3>
                    <p>Pos: ${positive}</p>
                    <p>Neg: ${negative}</p>
                    <p>Zeros: ${zero}</p>
                    <p>Even: ${even}</p>
                    <p>Odd: ${odd}</p>
                `);

        if (numbers.length === 10) {
            $('#numberInput').prop('disabled', true);
            $('#submitNumber').prop('disabled', true);
        }
    });
});

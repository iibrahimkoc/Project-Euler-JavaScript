var value = 600851475143;
var max;

function LargestPrimeFactor() {

    for (var i = 2; value > 1; i++) {
        if (value % i === 0) {
            value = value / i;
            max = i;
        }

    }
    console.log("600851475143 değerinin en büyük asal çarpanı: ",max);
}

LargestPrimeFactor();
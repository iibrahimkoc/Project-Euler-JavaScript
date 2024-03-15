var sum1 = 0;
var sum2 = 1;
var tmp = 0;

var doubleSum = 0;

var limit = 4000000;

function fibonacci() {
    while (sum2 + sum1 < limit) {
        tmp = sum1 + sum2;
        sum1 = sum2;
        sum2 = tmp;

        if (tmp % 2 == 0) {
            doubleSum += tmp;
        }
    }
    console.log("4.000.000 değerinin altındaki çift fibonacci sayılarının toplamı: ",doubleSum);
}
fibonacci();
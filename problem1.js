var sum = 0;
var limit = 1000;

function problem1() {
    for (var i = 1; i < limit; i++) {
        if(i %3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    console.log("1000' in altındaki 3'ün veya 5'in katlarının toplamı:", sum); 
}
problem1();


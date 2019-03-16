// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    if (currency <= 0) {
        return result;
    } else if (currency > 10000) {
        return result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        let h = Math.floor( currency / 50 );
        let q = Math.floor( (currency % 50) / 25 );
        let d = Math.floor( (currency - (h * 50) - (q * 25)) / 10 );
        let n = Math.floor( (currency - (h * 50) - (q * 25) - (d * 10)) / 5 );
        let p = Math.floor( (currency - (h * 50) - (q * 25) - (d * 10) - (n * 5)) / 1 );

        if (h >= 1) {
            result.H = h;
        }
        if (q >= 1) {
            result.Q = q;
        };
        if (d >= 1) {
            result.D = d;
        }
        if (n >= 1) {
            result.N = n;
        }
        if (p >= 1) {
            result.P = p;
        }
        return result;
    }
    
}

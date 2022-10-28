function fatorial(n) {
    let res = 1
    for (let c = n; c > 1; c--){
        res *= c
    }
    return `${n}! = ${res}`
}

console.log(fatorial(5))
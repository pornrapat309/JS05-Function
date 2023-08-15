function max(a=0,b=0,c=0,d=0) {
    if (a > b && a > c && a > d) return a;
    else if (b > a && b > c && a > d) return b;
    else if (c > a && c > b && c > d) return c;
    else if (d > a && d > b && d > c) return d;
    else if ( isNaN(a) || isNaN(b) || isNaN(b) || isNaN(b) ) return NaN;
}
console.log (max()); 
console.log (max(2)); 
console.log (max(3,1)); 
console.log (max(7,3,9,2)); 
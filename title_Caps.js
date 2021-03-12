var str = "guvi geeks coding"
let titleCase = str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')
console.log(titleCase);

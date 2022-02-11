
let numb = 4;
function addgrid() {
    let l = '';
    let ht = '';
    for(let i=0; i<(numb ** 2); i++) {
        ht = ht + "<div class = 'u'></div>"
    }
    for(let i=0; i<numb; i++) {
        l = l + " 1fr";
    }
    document.getElementsByClassName('wrapper')[0].style.gridTemplateColumns = l;
    document.getElementsByClassName('wrapper')[0].innerHTML=ht;
    document.getElementsByClassName('wrapper')[0].style.gridTemplateRows = l;
    document.getElementById('b').addEventListener('click', newgrid);
    addcolor();
};

function addcolor() {
    const con = document.querySelectorAll('.u');
    con.forEach(e => e.addEventListener('mouseover', function() {
        if(e.classList.contains('col')) {
            e.style.background = increment(e.style.background)
        } else {
            e.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            e.classList.add('col');
        };
    }));
};

function newgrid() {
    numb = Number(window.prompt('Enter the number of squares for the new grid'));
    if(!Number.isInteger(numb)){
        alert('Plsease enter a positive number below 101');
        newgrid();
        return
    };
    if(numb<1 || numb > 100){
        alert('Plsease enter a positive number below 101');
        newgrid();
        return
    };
    document.querySelectorAll('.u').forEach(y => y.style.background = "rgb(0,0,0)");
    addgrid();
};

function increment(a) {
    const map1 = a.match(/[\.\d]+/g).map(function (b) {
        let c = Number(b);
        c = c - 50;
        if(c<0) {
            c = 0;
        };
        return c;
    }); 
    return `rgb(${map1[0]},${map1[1]},${map1[2]})`;
};

setTimeout(addgrid, 500)

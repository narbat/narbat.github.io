var bobo = JSON.parse(localStorage.answer);


const positiv = document.getElementById("positiv")
positiv.addEventListener("click", () => {
    bobo = bobo + 1;
    localStorage.answer = JSON.stringify(bobo);
    alert(bobo);
})


const neg = document.getElementById("neg")
neg.addEventListener("click", () => {
    bobo = bobo - 1;
    localStorage.answer = JSON.stringify(bobo);
    alert(bobo);
})


if(localStorage.length === 0){
    localStorage.setItem('Notes',"[]");
}
var Test = '["Beans"]'
var Notes = JSON.parse(localStorage.getItem("Notes"));



var Num = 0;
Notes.forEach(N => {
    Num++;
    var A = document.createElement('h1');
    A.innerHTML = N;
    A.setAttribute('onclick',`Delete(${Num-1})`);
    document.getElementById('LIST').append(A);
});

function Delete(Dlt){

    if(Dlt === 0){
        Notes.splice(Dlt,1)
    }else{
Notes.splice(Dlt,Dlt)
    }


localStorage.setItem('Notes',JSON.stringify(Notes))
location.reload();
}

document.getElementById("button").addEventListener("click",(e)=>{
    let Note = document.getElementById("Antioch").value;
    Notes.push(Note);
    localStorage.setItem('Notes',JSON.stringify(Notes))
})
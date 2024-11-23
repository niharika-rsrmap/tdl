function sub() {
    let t = document.getElementById('enter'); 
    let r = t.value.trim(); 
    if (r) {
        let li = document.createElement('li'); 
        let check = document.createElement('input');

        check.type = 'checkbox';
        check.onclick = function () { 
            li.classList.toggle('completed'); 
        }

        let u = document.createTextNode(r); 
        li.appendChild(check);
        li.appendChild(u); 

        let re = document.createElement('button');
        re.textContent = "×"; 
        re.className = 'remove';

        re.onclick = function() { 
            li.remove(); 
        }

        li.appendChild(re);
        document.getElementById('tl').appendChild(li); 
        t.value = "";
        t.focus();  
    } else {
        alert('Enter details');
    }
}
const punct = "!,\;\.-?"
let b=document.getElementById('btn')
let c=document.getElementById('point')
let d=document.getElementById('point2')
let e=document.getElementById('sub')
b.addEventListener('click',function(e){
    let u=document.getElementById('user').value;
    let p=document.getElementById('pass').value;
    if(u === ""){
        document.getElementById('action1').innerHTML="you cannot leave this field empty"
    }else if(u.length<3){
        document.getElementById('action1').innerHTML="you have to insert at least 3 characters"
    }else{
        document.getElementById('action1').innerHTML=""
    }
    if(p === ""){
        document.getElementById('action2').innerHTML="you cannot leave this field empty"
    }else if(p.length<3){
        document.getElementById('action2').innerHTML="you have to insert at least 3 characters"
    }
    else{
        document.getElementById('action2').innerHTML=""
    }
})

e.addEventListener('click',function(e){
    let n=document.getElementById('name').value
    let m=document.getElementById('email').value
    let o=document.getElementById('phone').value
    let p=document.getElementById('age').value
    let q=document.getElementById('p').value

    if(n === ''){
        document.getElementById('na').innerHTML="you cannot leave this field empty"
    }else if(n.length<3){
        document.getElementById('na').innerHTML="you have to insert at least 3 characters"
    }else{
        document.getElementById('na').innerHTML=" "
    }
    if(m === ''){
        document.getElementById('em').innerHTML="you cannot leave this field empty"
    }else if(m.length<11){
        document.getElementById('em').innerHTML="you have to insert at least 11 characters"
    }else{
        document.getElementById('em').innerHTML=" "
    }
    if(o === ''){
        document.getElementById('nu').innerHTML="you cannot leave this field empty"
    }else if(o.length<10){
        document.getElementById('nu').innerHTML="invalid phone number"
    }else{
        document.getElementById('nu').innerHTML=" "
    }
    if(p === ''){
        document.getElementById('ag').innerHTML="you cannot leave this field empty"
    }else if(p<18){
        document.getElementById('ag').innerHTML="you can create your account after 18"
    }else{
        document.getElementById('ag').innerHTML=" "
    }
    if(q === ""){
        document.getElementById('po').innerHTML="you cannot leave this field empty"
    }else if(q.length<3){
        document.getElementById('po').innerHTML="you have to insert at least 3 characters"
    }
    else{
        document.getElementById('po').innerHTML=""
    }
})

c.addEventListener('click',function(e){
    document.getElementsByClassName('inner')[0].style.display='none'
    document.getElementsByClassName('signup')[0].style.display='flex'
})

d.addEventListener('click',function(e){
    document.getElementsByClassName('signup')[0].style.display='none'
    document.getElementsByClassName('inner')[0].style.display='flex'
})
document.getElementById('open-modal').addEventListener('click',function(){
    document.getElementById('modal-base').classList.remove("fade-out");
    document.getElementById('modal').removeAttribute('hidden');
})

document.getElementById('close-modal').addEventListener('click',function(){
    document.getElementById('modal-body').classList.remove("slide-in-top");
    document.getElementById('modal-body').classList.add("slide-out-top");
    setTimeout(function(){
        document.getElementById('modal-body').classList.remove("slide-out-top");
        document.getElementById('modal-body').classList.add("slide-in-top");
        document.getElementById('modal-base').classList.add("fade-out");
        document.getElementById('modal').setAttribute('hidden',true);
    },800);
    
})
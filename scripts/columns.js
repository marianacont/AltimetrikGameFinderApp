const oneCol = document.querySelector('.one-col');
const threeCol = document.querySelector('.three-col');
const gallery = document.querySelector('.gallery');

function changeColumnView(){
    if(this.classList.contains("one-col")){
        gallery.classList.add('one-column');
        oneCol.classList.add('active');
        threeCol.classList.remove('active');
    } else if (this.classList.contains("three-col")) {
        gallery.classList.remove('one-column');
        oneCol.classList.remove('active');
        threeCol.classList.add('active');  
    }
}

export function changeColumnViewListener(btn) {
    btn.addEventListener('click', changeColumnView)    
}
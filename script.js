const panels=document.querySelectorAll(".Panel");
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add("Active");
    })
});
function removeActiveClasses(){
    panels.forEach(panel=>{
     panel.classList.remove("Active");
    });
}


const panels = document.querySelectorAll('.panel')
//by using selectorAll it puts all panels in something like an array (node list)
//console.log(panels[index]) to check all the panels

panels.forEach((panel) => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses()
{
    panels.forEach((panel)=> {
        panel.classList.remove('active')
    })
}
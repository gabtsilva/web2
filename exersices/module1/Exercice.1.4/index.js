let obj = {"red": document.getElementById('red'), "orange": document.getElementById('orange'), "green": document.getElementById('green')};
let blocs = document.getElementsByClassName("blocs");
order = ["red","orange","green","orange"];
const switchLights = () => {
    for (let index = 0; index < order.length; index++) {
        setTimeout(() => {
            for (let i = 0; i < blocs.length; i++) {
                blocs[i].style.backgroundColor = 'transparent';
            }
            obj[order[index]].style.backgroundColor = order[index];
        }, 2000 * index);
    }
}
setInterval(switchLights,8000);
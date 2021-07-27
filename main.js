
function openNavigation(){
    document.getElementById("navigation_hamburger").classList.toggle('open');
    document.getElementById("site-navigation").classList.toggle('open');
    document.getElementById("sidenav").classList.toggle('open');

}

function openGit(name){
    if (name == "ah-mun"){
        window.open("https://github.com/JessicaMcclure97/AH_MUN_2019");
    }else if(name == "halloween-pp"){
        window.open("https://github.com/wlabarron/HalloweenPlanner-2020");
    }else if (name == "mathematically-curious") {
        window.open("https://maths.curious-sta.org");
    }else{
        window.open("https://github.com/JessicaMcclure97");
    }
}

function GitNotAvailable(){
    if (window.confirm("Due to the University of St Andrew\'s good academic practice policy" +
        " I am not allowed to publish any of the code for this project. \n\nIf you click \"ok\" you " +
        "will be open a new tab to my GitHub portfolio. Cancelling will let you stay on my website."))
    {
        window.open("https://github.com/JessicaMcclure97");
    }
}
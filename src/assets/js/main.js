let overlay = document.querySelector(".overlay");
let body = document.body;

// Click function Open and Close
let openFunc = (e,elm,class1='show',class2='hidden') => {
    elm.classList.remove(class2)
    elm.classList.add(class1)
    overlay.classList.remove('hidden')
    body.classList.add('overflow-hidden')
}

let closeFunc = (e,elm,class1='show',class2='hidden') => {
    elm.classList.remove(class1)
    elm.classList.add(class2)
    overlay.classList.add('hidden')
    body.classList.remove('overflow-hidden')
}
///////////////////////////////////////////

// click to open and close popup menu search
let btnSearch = document.getElementById('btnSearch')
let popupMenuSearch = document.querySelector('.popupMenuSearch')
let closePopupSearch = document.querySelector(".closePopupSearch")

btnSearch.addEventListener("click" , e => openFunc(e,popupMenuSearch,'top-0','-top-full'))
closePopupSearch.addEventListener("click" , e => closeFunc(e,popupMenuSearch,'top-0','-top-full'))
overlay.addEventListener("click" , e => closeFunc(e,popupMenuSearch,'top-0','-top-full'))

// ///////////////////////////////////

// click to open and close popup menu map
let btnMap = document.getElementById('btnMap')
let popupMenuMap = document.querySelector('.popupMenuMap')
let closePopupMap = document.querySelector(".closePopupMap")

btnMap.addEventListener("click" , e => openFunc(e,popupMenuMap))
closePopupMap.addEventListener("click" , e => closeFunc(e,popupMenuMap))
overlay.addEventListener("click" , e => closeFunc(e,popupMenuMap))
/////////////////////////////////////

// Click to link advertising view content
let linkAdNew = document.getElementById("linkAdNew");
let linkAdPopular = document.getElementById("linkAdPopular");
let linkAdAll = document.getElementById("linkAdAll");
let boxAd = document.querySelectorAll(".boxAd");


let filterSelection = (advertising) =>{

    boxAd.forEach(elem => {
        elem.classList.remove('show')
        elem.classList.add('hidden')
        if(elem.classList.contains(advertising)){
            elem.classList.remove('hidden')
            elem.classList.add('show')
        }
    });
}

linkAdAll.addEventListener("click", () => {
    linkAdPopular.classList.remove("text-gray-900");
    linkAdPopular.classList.remove("border-b-2");
    linkAdPopular.classList.add("text-gray-400");

    linkAdNew.classList.remove("text-gray-900");
    linkAdNew.classList.remove("border-b-2");
    linkAdNew.classList.add("text-gray-400")

    linkAdAll.classList.remove('text-gray-400');
    linkAdAll.classList.add("text-gray-900")
    linkAdAll.classList.add("border-b-2")

    boxAd.forEach(elem => {
        elem.classList.remove('hidden')
    });
})

linkAdNew.addEventListener("click", () => {
    linkAdPopular.classList.remove("text-gray-900");
    linkAdPopular.classList.remove("border-b-2");
    linkAdPopular.classList.add("text-gray-400");

    linkAdAll.classList.remove("text-gray-900");
    linkAdAll.classList.remove("border-b-2");
    linkAdAll.classList.add("text-gray-400");

    linkAdNew.classList.remove('text-gray-400');
    linkAdNew.classList.add("text-gray-900");
    linkAdNew.classList.add("border-b-2");

    filterSelection('boxAdNew')
})

linkAdPopular.addEventListener("click", () => {
    linkAdNew.classList.remove("text-gray-900");
    linkAdNew.classList.remove("border-b-2");
    linkAdNew.classList.add("text-gray-400");

    linkAdAll.classList.remove("text-gray-900");
    linkAdAll.classList.remove("border-b-2");
    linkAdAll.classList.add("text-gray-400");

    linkAdPopular.classList.remove('text-gray-400');
    linkAdPopular.classList.add("text-gray-900");
    linkAdPopular.classList.add("border-b-2");

    filterSelection('boxAdPopular')
})



///////////////
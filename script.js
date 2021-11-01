const addbtnlist = document.querySelectorAll(".add-btn")
const plases = document.querySelector(".selected")

//console.log(addbtnlist)//تجربتي
addbtnlist.forEach(function (addbtn) {
  addbtn.addEventListener("click", function () {
    const imge = addbtn.previousElementSibling
    console.log(imge)

    plases.innerHTML = `<img src=${imge.src} width ="500px">`

    //console.log("suaad")
  })
})

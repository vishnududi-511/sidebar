let slide_btn = document.querySelector(".Sidebar-btn");
let sidebar = document.querySelector(".sidebar");
let cut_btn = document.querySelector(".cut-btn");
let sec_1 = document.querySelector(".section-1");


slide_btn.addEventListener('click', function () {
    sidebar.classList.add("show");
    sec_1.classList.add("bg-grey")
});
cut_btn.addEventListener('click', function () {
    sidebar.classList.remove("show");
    sec_1.classList.remove("bg-grey")
})




// slide_btn.addEventListener('click', function () {
//     if (sidebar.style.display = "none") {
//         sidebar.style.display = "block"
//     }
//     if (sec_1.style.background = "white") {
//         sec_1.style.background = "#B8B8B8"
//     }
// });
// cut_btn.addEventListener('click', function () {
//     sidebar.style.display = "none";
//     sec_1.style.background = "white"
// })

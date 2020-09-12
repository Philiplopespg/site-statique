function main_naive_version () {
    const tabHeaderHtml = document.getElementById("tab-header-html");
    const tabHeaderCss = document.getElementById("tab-header-css");
    const tabHeaderJs = document.getElementById("tab-header-js");
  
    const tabContentHtml = document.getElementById("tab-content-html");
    const tabContentCss = document.getElementById("tab-content-css");
    const tabContentJs = document.getElementById("tab-content-js");
    
    tabHeaderHtml.addEventListener("click", function () {
      tabHeaderHtml.classList.toggle("is-active", true);
      tabHeaderCss.classList.toggle("is-active", false);
      tabHeaderJs.classList.toggle("is-active", false);
      tabContentHtml.style.display = "block";
      tabContentCss.style.display = "none";
      tabContentJs.style.display = "none";
    });
  
    tabHeaderCss.addEventListener("click", function () {
      tabHeaderHtml.classList.toggle("is-active", false);
      tabHeaderCss.classList.toggle("is-active", true);
      tabHeaderJs.classList.toggle("is-active", false);
      tabContentHtml.style.display = "none";
      tabContentCss.style.display = "block";
      tabContentJs.style.display = "none";
    });
  
    tabHeaderJs.addEventListener("click", function () {
      tabHeaderHtml.classList.toggle("is-active", false);
      tabHeaderCss.classList.toggle("is-active", false);
      tabHeaderJs.classList.toggle("is-active", true);
      tabContentHtml.style.display = "none";
      tabContentCss.style.display = "none";
      tabContentJs.style.display = "block";
    });
}

function main() {
    const tabs = document.querySelectorAll('.main-header nav ul.menu>li');
    const contents = document.querySelectorAll('article.tab-content');
    tabs.forEach ((tab, index) => {
        tab.addEventListener('click', function(){
            tabs.forEach ( (t,i) => {
                t.classList.toggle("is-active", i === index);
            })
            contents.forEach ( (c,i) => {
                if (i === index) {
                    c.style.display = "block";
                } else {
                    c.style.display = "none";
                }             
            })
        })
    })
}


document.addEventListener("DOMContentLoaded", main);

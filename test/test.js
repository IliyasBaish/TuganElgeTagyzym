arrow = false

const callback = (entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                entry.target.style.animation = entry.target.dataset.animate;
            } else {
                entry.target.style.animation="none"
            }
        }
    )
}

let observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll('.scroll-anim');

animationItems.forEach(item => {
    observer.observe(item)
})

function scrollToTop() {
    document.getElementById("top-link").scrollIntoView();
}

const topHeaderObsRev = (entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                console.log("intersecting")
                document.getElementById("arrow").style.animation = "arrow-appearing-rev 0.5s forwards"
            } else if(!entry.isIntersecting) {
                console.log("not intersecting")
                document.getElementById("arrow").style.animation = document.getElementById("arrow").dataset.animate;
                //arrow = true
            }
        }
    )
}

let observer2 = new IntersectionObserver(topHeaderObsRev);
observer2.observe(document.getElementById("header-text"))

function book1redirect() {
    window.location.href = "https://tilalemi.kz/viewer/viewer.php?file=/books/7446.pdf";
}

function book2redirect() {
    window.location.href = "https://e-history.kz/ru/news/show/5749/";
}
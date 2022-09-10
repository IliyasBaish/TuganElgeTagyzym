arrow = false

const callback = (entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                console.log("The element is intersecting >");
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

const topHeaderObs = (entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                document.getElementById("arrow").style.animation = document.getElementById("arrow").dataset.animate;
                arrow = true
            } else {
            }
        }
    )
}

let observer1 = new IntersectionObserver(topHeaderObs);
observer1.observe(document.getElementById("text-one"))

const topHeaderObsRev = (entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting && arrow) {
                document.getElementById("arrow").style.animation = "arrow-appearing-rev 0.5s forwards"
            } else {
            }
        }
    )
}

let observer2 = new IntersectionObserver(topHeaderObsRev);
observer2.observe(document.getElementById("header-text"))

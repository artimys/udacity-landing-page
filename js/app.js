const data = [
    {
        id: 1,
        link: "Section 1",
        title: "Section 1",
        content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum quaerat facilis excepturi, rem numquam corrupti tempore quas beatae omnis suscipit doloribus aut dignissimos sit assumenda non voluptas cupiditate qui?
            Incidunt, ut reiciendis voluptate amet provident debitis numquam tenetur rem fugiat quod deserunt saepe earum assumenda ad, facere laudantium enim autem mollitia vero cum atque animi. Magnam dolorum soluta nobis?
            Omnis dicta aperiam, dolor iure atque consequatur eum cum quisquam autem deleniti voluptatum tempora architecto voluptate reprehenderit hic magnam aspernatur doloribus nesciunt vitae velit, ipsum natus incidunt modi tempore! Eos!  Laborum dolores nulla sed. Aperiam minima cum repellendus fugit nihil et iste iusto ipsam non mollitia obcaecati, sapiente minus voluptates rem magnam numquam sequi suscipit expedita nisi quod placeat molestiae!
            </p>`
    },
    {
        id: 2,
        link: "Section 2",
        title: "Section 2",
        content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum quaerat facilis excepturi, rem numquam corrupti tempore quas beatae omnis suscipit doloribus aut dignissimos sit assumenda non voluptas cupiditate qui?
            Incidunt, ut reiciendis voluptate amet provident debitis numquam tenetur rem fugiat quod deserunt saepe earum assumenda ad, facere laudantium enim autem mollitia vero cum atque animi. Magnam dolorum soluta nobis?
            Omnis dicta aperiam, dolor iure atque consequatur eum cum quisquam autem deleniti voluptatum tempora architecto voluptate reprehenderit hic magnam aspernatur doloribus nesciunt vitae velit, ipsum natus incidunt modi tempore! Eos!  Laborum dolores nulla sed. Aperiam minima cum repellendus fugit nihil et iste iusto ipsam non mollitia obcaecati, sapiente minus voluptates rem magnam numquam sequi suscipit expedita nisi quod placeat molestiae!
            </p>`
    },
    {
        id: 3,
        link: "Section 3",
        title: "Section 3",
        content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum quaerat facilis excepturi, rem numquam corrupti tempore quas beatae omnis suscipit doloribus aut dignissimos sit assumenda non voluptas cupiditate qui?
            Incidunt, ut reiciendis voluptate amet provident debitis numquam tenetur rem fugiat quod deserunt saepe earum assumenda ad, facere laudantium enim autem mollitia vero cum atque animi. Magnam dolorum soluta nobis?
            Omnis dicta aperiam, dolor iure atque consequatur eum cum quisquam autem deleniti voluptatum tempora architecto voluptate reprehenderit hic magnam aspernatur doloribus nesciunt vitae velit, ipsum natus incidunt modi tempore! Eos!  Laborum dolores nulla sed. Aperiam minima cum repellendus fugit nihil et iste iusto ipsam non mollitia obcaecati, sapiente minus voluptates rem magnam numquam sequi suscipit expedita nisi quod placeat molestiae!
            </p>`
    },
    {
        id: 4,
        link: "Section 4",
        title: "Section 4",
        content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum quaerat facilis excepturi, rem numquam corrupti tempore quas beatae omnis suscipit doloribus aut dignissimos sit assumenda non voluptas cupiditate qui?
            Incidunt, ut reiciendis voluptate amet provident debitis numquam tenetur rem fugiat quod deserunt saepe earum assumenda ad, facere laudantium enim autem mollitia vero cum atque animi. Magnam dolorum soluta nobis?
            Omnis dicta aperiam, dolor iure atque consequatur eum cum quisquam autem deleniti voluptatum tempora architecto voluptate reprehenderit hic magnam aspernatur doloribus nesciunt vitae velit, ipsum natus incidunt modi tempore! Eos!  Laborum dolores nulla sed. Aperiam minima cum repellendus fugit nihil et iste iusto ipsam non mollitia obcaecati, sapiente minus voluptates rem magnam numquam sequi suscipit expedita nisi quod placeat molestiae!
            </p>`
    }
]

let sectionList = document.querySelector("#section-list");
const navbarList = document.querySelector(".navbar-list");
const scrollToTop = document.querySelector("#scroll-to-top");


/* INSERT DATA TO DOM */
function addSectionToNavbar(section) {
    // Template
    // <li class="navbar__item"><a href="#" class="navbar__link">Section 2</a></li>

    // Create <li>
    const li = document.createElement("li");
    li.className = "navbar__item"

    // Create <a>
    const a = document.createElement("a");
    a.href = `#panel-${section.id}`;
    a.className = "navbar__link";
    a.textContent = section.link;

    li.appendChild(a);
    navbarList.append(li);
}

function addSectionToPanel(section) {
    // Unique ID to reference panel
    const sectionUniqueId = `panel-${section.id}`

    // Keep appending existing HTML with new HTML snippet
    // for section list
    sectionList.innerHTML += `
        <section id="${sectionUniqueId}" class="panel">
            <h2 class="panel__title">
                <a href="#" data-id="${sectionUniqueId}" class="panel__toggle">
                   ${section.title}
                </a>
            </h2>
            <div class="panel__body">
                <p>${section.content}</p>
            </div>
        </section>
    `;
}



/* COLLAPSE PANEL EVENT */
function togglePanel(event) {
    event.preventDefault();

    if (event.target.className == "panel__toggle") {
        const panel = document.querySelector("#" + event.target.dataset.id);
        panel.classList.toggle("panel--collapse");
    }
    // let panel_toggle = document.querySelectorAll(".panel__toggle");
    // panel_toggle.addEventListener("click",  function(event) {
    //     event.preventDefault();
    //         console.log("adsf");
    // });
}



/* SCROLL TO TOP */
function scrollToTopFadeIn() {
    if (window.scrollY > 200) {
        scrollToTop.style.visibility = "visible";
    } else {
        scrollToTop.style.visibility = "hidden";
    }
}

function scrollUpToHeader() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}





/* PAGE LOAD SETUP */
document.addEventListener('DOMContentLoaded', function () {
    for (const section of data) {
        // Add link to navbar
        addSectionToNavbar(section);

        // Add section to panel
        addSectionToPanel(section)
    }

    // Event to trigger collapse panel toggle
    sectionList.addEventListener("click", togglePanel);

    // Scroll window event
    document.addEventListener("scroll", function() {
        // Make scroll btn appear after scrolling
        scrollToTopFadeIn();
    });

    // Scroll back to header
    scrollToTop.addEventListener("click", scrollUpToHeader);
});
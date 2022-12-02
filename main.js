try {
  console.log("applaction start");
  // /*--------------- navigation menu -----------------*/
  (() => {
    // Import
    const menuBtn = document.querySelector(".hamburger-btn");
    const navMenu = document.querySelector(".nav-menu");
    const closeNavBtn = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
      navMenu.classList.add("open");
    }
    function hideNavMenu() {
      navMenu.classList.remove("open");
      fadeOutEffect();
    }
    function fadeOutEffect() {
      document.querySelector(".fade-out-effect").classList.add("active");
      setTimeout(() => {
        document.querySelector(".fade-out-effect").classList.remove("active");
      }, 300);
    }
    // attach an event handler to document
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("link-item")) {
        /* make sure event.target.hash has a value before overriding default behavior */
        if (event.target.hash !== "") {
          //  prevent default anchor click
          event.preventDefault();
          const hash = event.target.hash;
          document.querySelector(".section.active").classList.add("hide");
          document.querySelector(".section.active").classList.remove("active");
          // activate new 'section'
          document.querySelector(hash).classList.add("active");
          document.querySelector(hash).classList.remove("hide");
          /* deactivate existing active navigaation menu 'link-item' */
          navMenu
            .querySelector(".active")
            .classList.add("outer-shadow", "hover-in-shadow");
          navMenu
            .querySelector(".active")
            .classList.remove("active", "inner-shadow");

          // event.target.classList.add("active", "inner-shadow");
          // event.target.classList.remove("outer-shadow", "hover-in-shadow");
          // // hide navigation menu
          // hideNavMenu();
          if (navMenu.classList.contains("open")) {
            // activate new navigation menu 'link-item'
            event.target.classList.add("active", "inner-shadow");
            event.target.classList.remove("outer-shadow", "hover-in-shadow");
            // hide navigation menu
            hideNavMenu();
          } else {
            let navItems = document.querySelectorAll(".link-item");
            navItems.forEach((item) => {
              if (hash === item.hash) {
                item.classList.add("active", "inner-shadow");
                item.classList.remove("outer-shadow", "hover-in-shadow");
              }
            });
            fadeOutEffect();
          }
          // add hash(#) to url
          window.location.hash = hash;
        }
      }
    });
  })();

  /*--------------- hide all sections except active -----------------*/
  (() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      if (!section.classList.contains("active")) {
        // section.classList.add("hide");
      }
    });
  })();
  /*--------------- about section tabs -----------------*/
  (() => {
    // import
    const aboutSection = document.querySelector(".about-section");
    const tabs = document.querySelector(".about-tabs");

    tabs.addEventListener("click", (event) => {
      /* if event.target containas "tab-item" class not contains "active" class */
      if (
        event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")
      ) {
        const target = event.target.getAttribute("data-target");
        // deactivate existing active "tab-item"
        tabs
          .querySelector(".active")
          .classList.remove("outer-shadow", "active");
        // activate new "tab-item"
        event.target.classList.add("active", "outer-shadow");
        // deactivate existing active "tab-content"
        aboutSection
          .querySelector(".tab-content.active")
          .classList.remove("active");
        // activate new "tab-content"
        aboutSection.querySelector(target).classList.add("active");
      }
    });
  })();
} catch (error) {
  console.log("Алдаа: " + error);
}

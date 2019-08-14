window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        const navClasses = document.getElementById('navbar-scroll').classList;
        const logoClasses = document.getElementById('logo-scroll').classList;

        navClasses.add('nav-scroll');
        logoClasses.add('logo-scroll')

    } else {

        const navClasses = document.getElementById('navbar-scroll').classList;
        const logoClasses = document.getElementById('logo-scroll').classList;

        navClasses.remove('nav-scroll');
        logoClasses.remove('logo-scroll');
    }
}



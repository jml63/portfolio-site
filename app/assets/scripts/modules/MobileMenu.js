import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".navigation__icon");
        this.menuContent = $(".navigation__content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.toggleClass("navigation__content--visible");
        this.menuIcon.toggleClass("fa-bars");
        this.menuIcon.toggleClass("fa-times");
    }
}

export default MobileMenu;
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.lazyImages = $(".lazyload");
        this.itemsToReveal = els;
        this.offsetVal = offset;
        this.hideInitially();
        this.createWaypoints();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
       this.lazyImages.on('load', function() {
            Waypoint.refreshAll();
       });
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var par = this;
        this.itemsToReveal.each(function() {
            var currItem = this;
            new Waypoint({
                element: currItem,
                handler: function() {
                    $(currItem).addClass("reveal-item--is-visible");
                },
                offset: par.offsetVal
            });
        });
    }
}

export default RevealOnScroll;
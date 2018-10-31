(() =>{
    const topEl = document.querySelector("#beer1");

    // define a waypoint and have something happen on scroll
    var waypoint = new Waypoint({
        element: document.querySelector('#beer2').querySelector('.svg-graphic'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          runAnimation(this.element, ["rGlass", "cGlass", "lGlass"]);
        },
        offset: 100
      });

    function runAnimation(parent, elements) {
        // should run on a waypoint or user interaction
        console.log("run animations here");

        let innerSVG = parent.contentDocument;
        
        // set up animation properties
        let animProps = {};

        switch(parent.id) {
            case "bottle":
            animProps = {scaleX: 1.2, scaleY:1.2, rotation: 360, transformOrigin: " 50% 50%"};
            break;

            case "barrels":
            animProps = {scaleX: 1.2, scaleY:1.2}
            break;

            case "glasses":
            animProps = {scaleX: 2.2, scaleY:2.2}
            break;

            default:
            // do nothing
            break;
        }

        // simple vector animation with Greensock
        elements.forEach(item => {
            let target = innerSVG.querySelector(`#${item}`);
            TweenMax.to(target, 0.6, animProps);
        });
    }

    topEl.addEventListener("mouseover", function() {
        //debugger
        runAnimation(this.querySelector('.svg-graphic'), ["lStar", "rStar"]);
    });
})();
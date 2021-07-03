
var tl,
imagesLoaded = false,
backup = false;

$(document).ready(function(){
preloadAssets();
});

function preloadAssets() {

var i = [
  "logo_aa.svg",
  "logo-qantas-colour.svg",
  "logo-qantas-mono.svg",
  "shape-mask.svg",
  "shape-red.svg",
  "shape-blue.svg",
  "shape-red-end-frame.svg",
  "shape-red-end-frame2.svg",
  "shape-white.svg"
];

preloadimages(i).done(function (images) {

    imagesLoaded = true;
    setTimeout(beginAnimation,2100);

})
}




//ANIMATION CODES
function beginAnimation(){
   const vid  = document.querySelector('#video-el'),
      banner  = document.querySelector('.banner'),
bannerContainer = document.querySelector('.container'),
       f1copy = document.querySelector('#f1-copy'),
       f2copy = document.querySelector('#f2-copy'),
    blueShape = document.querySelector('#blue-shape'),
    redShape  = document.querySelector('#red-shape'),
   whiteShape = document.querySelector('#white-shape'),
    maskShape = document.querySelector('#mask-shape'),
   qantasMono = document.querySelector('#qantas-logo-mono'),
   qantasColor= document.querySelector('#qantas-logo-colour'),
       aalogo = document.querySelector('#aa-logo'),
        terms = document.querySelector('.terms-wrapper'),
       loader = document.querySelector('.loader'),
       f3copy = document.querySelector('#f3-copy'),
      divider =  document.querySelector('#logo-divider'),
        btn   =  document.querySelector('.button'),
       shadow =  document.querySelector('#red-shape-end-frame2')
;



    console.log("start animation");

    // YOUR CODE STARTS HERE
    function cleanUp(){
            let cleanObj = new TimelineMax();

                cleanObj
                        .set(f1copy, {autoAlpha: 0})
                        .set(f2copy, {autoAlpha: 0})
                        .set(blueShape, {autoAlpha: 0})
                        .set(redShape, {autoAlpha: 0})
                        .set(whiteShape, {autoAlpha: 0})
                        .set(qantasColor, {autoAlpha: 0})
                        .set(qantasMono, {autoAlpha: 0})
                        .set(aalogo, {autoAlpha: 0})
                        .set(terms, {autoAlpha: 0})
                        .set(f3copy, {autoAlpha: 0})
                        .set(divider, {autoAlpha: 0})
                        .set(btn, {autoAlpha: 0})
                        .set(shadow, {autoAlpha: 0})
                        .set(maskShape, {autoAlpha: 0, x: '-=15', y:'-=20'})
                        .set(vid, {autoAlpha: 0})


                ;
            return cleanObj;

    }

    function vidPlay(){
        let videoPlayer =  vid;

            videoPlayer.play()

            return videoPlayer;
    }


    function animate(){
        let animations = new TimelineMax();

            animations
                .set(maskShape, {x:'+=100'})
                .to(vid, 1,{autoAlpha: 1})
                .add('video-played')
                .fromTo(maskShape, 0.7, {autoAlpha: 0, scale:1,  rotation: 90, transformOrigin: 'center center'},
                {autoAlpha: 1, scale:15,  rotation: 0,transformOrigin: 'center center' }, 'video-played-=1.5')
                .to(maskShape, 0.5,{x: '-=20', y:'-=70',rotation:'-=30'}, '-=0.95')
                .to(maskShape, 0.4,{scale:12, transformOrigin: 'center center', ease: Power4.easeOut}, '-=0.2')
                .to(maskShape, 0.3,{y:'-=35',x: '+=480',scale:100, ease: Power4.easeOut, transformOrigin: 'center center', onComplete: textAppear}, '-=0.2')
                .fromTo(whiteShape, 0.5,{autoAlpha: 0, scale: 3, transformOrigin: 'center center' , x:'+=50', y: '+=250'}, {autoAlpha: 0.7,scale:6, transformOrigin: 'center center'})
                .to(whiteShape, 0.5,{x:'-=40', y:'+=40'})
                .to(whiteShape, {autoAlpha: 1,scale: 15, x:'+=370', y:'-=135', ease: Power4.easeInOut},'+=4')
                .fromTo(qantasMono, 1.5,{autoAlpha: 0, y:'-=20'}, {autoAlpha: 1, y:'+=30'})
                .fromTo(aalogo, 1.5,{x:'+=',autoAlpha: 0, y:'+=30'}, {autoAlpha: 1, y:'-=20', onComplete:removeVideo}, '-=1.5')
                .fromTo(qantasMono, 1, {autoAlpha: 1}, {autoAlpha:0, y:'+=80', scale:0.9})
                .fromTo(qantasColor,1,{x:'+=5',y:'-=10',autoAlpha:0},{y:'+=85', autoAlpha:1}, '-=1')
                .to(aalogo,1,{autoAlpha:1, y:'+=85',x:'-=20'},'-=1')
                .to(whiteShape,1,{x:'-=250', y:'+=260'},'-=1')
                .fromTo(redShape,1,{rotation:'+=20',autoAlpha:0,scale:0.2, transformOrigin:'top right',x:'+=290',y:'+=40'},
                 {autoAlpha: 0.5,scale:'9', transformOrigin:'top right'},'-=1')
                 .to(terms, {autoAlpha:1}, '-=1')
                 .fromTo(divider, 2,{autoAlpha:1, scale:0, x:'+=5', y:'+=25'}, {scale:1}, '-=1')
                 .fromTo(f3copy, 1.5,{autoAlpha:0,x:'-=10',y:'-=15'}, {autoAlpha:1, y:'+=25'},'-=1')
                 .to(btn, {autoAlpha:1, y:'+=5'}, '-=1.5')




            ;

            function textAppear(){
                let textOneTimeLine = new TimelineMax();

                textOneTimeLine
                    .to(f1copy, {autoAlpha: 1})
                    .to(f1copy,{autoAlpha:0}, '+=3')
                    .to(f2copy,{autoAlpha: 1})
                    .to(f2copy,{autoAlpha:0},'+=1.5')

                return textOneTimeLine;
            }

         

            function removeVideo(){
                TweenMax.to(vid, {autoAlpha: 0})

            }

        return animations;
    }


    tl = new TimelineMax();
        tl
            .add(cleanUp(), 'clean-scene')
            .add(vidPlay(), 'video-player')
            .set(loader, {autoAlpha: 0, onComplete:showContainers})
            .set(banner, {y:'-=250'})
            .add(animate(), 'start-animating')






    ;

        function showContainers(){
            banner.style.display = 'block';
            bannerContainer.style.display ='block';
        }

}


// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------
function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}

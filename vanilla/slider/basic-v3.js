window.Webflow?.push(function () {
    $(window).on('load resize', function() {
        if (window.innerWidth > 991) {
            initializeBasicSlider()
        } else {
            $('.teaser-text-wrap').css('opacity', 1);
        }
    });
})

function initializeBasicSlider() {
    let isRunning = false;
    let basicCurrentSlide = 1;
    let basicSlideCount = $('.slider-img').length

    initializeSlider()

    function disableScrollWhileAnimation() {
        document.body.style.overflow = 'hidden';
    }

    function enableScrollAfterAnimation() {
        document.body.style.overflow = 'auto';
    }

    function findHigherAndLower(arr, num) {
        const higher = [];
        const lower = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > num) {
                higher.push(arr[i]);
            } else if (arr[i] < num) {
                lower.push(arr[i]);
            }
        }
        return { higher, lower };
    }

    function getLevel2Order () {
        return $('.teaser-text-wrap').index($(`${window.location.hash}`))
    }


    function initializeSlider() {
        basicCurrentSlide = (getLevel2Order() + 1) || 1

        const slides = Array.from({ length: basicSlideCount }, (_, index) => index + 1)
        const {higher, lower} = findHigherAndLower(slides, basicCurrentSlide);
        higher.forEach(slide => {
            $(`.slide-img-order-${slide}`).css('transform', 'translateY(100%)');
        });
        lower.forEach(slide => {
            $(`.slide-img-order-${slide}`).css('transform', 'translateY(-100%)');
        });

        $(`.slide-img-order-${basicCurrentSlide}`).css('transform', 'translateY(0%)');

        
        $(`.text-wrap-${basicCurrentSlide}`).css('opacity', 1);
        $(`.teaser-text-wrap:not(.text-wrap-${basicCurrentSlide})`).css('opacity', 0);

    }

    function runAnimation(direction) {
        isRunning = true;
        disableScrollWhileAnimation()
        imageTransition(direction);
        textTransition(direction);

        setTimeout(() => {
            isRunning = false;
            enableScrollAfterAnimation()
            basicCurrentSlide = direction === 'up' ? basicCurrentSlide - 1 : basicCurrentSlide + 1;
        }, 1000);
    }


    document.querySelector('.basic-slider').addEventListener('wheel', function(e) {
        const isSliderVisible = calculateVisibility(document.querySelector('.basic-slider')) === 0;
        if(!isSliderVisible) return;

        const direction = e.deltaY > 0 ? 'down' : 'up'
        if(direction === 'up' && basicCurrentSlide === 1) return;
        if(direction === 'down' && basicCurrentSlide === basicSlideCount) return;
        
        if (!isRunning) {
            runAnimation(direction);
        }
    });


    function imageTransition(direction) {
        const slidetoShow = direction === 'up' ? basicCurrentSlide - 1 : basicCurrentSlide + 1;
        $(`.slide-img-order-${slidetoShow}`).css('transform', 'translateY(0%)');
        
        const moveTo = direction === 'up' ? 'translateY(100%)' : 'translateY(-100%)';
        $(`.slide-img-order-${basicCurrentSlide}`).css('transform', moveTo);
        // console.log("INTRansition", slidetoShow, basicCurrentSlide)
    }

    function textTransition(direction) {
        const slidetoShow = direction === 'up' ? basicCurrentSlide - 1 : basicCurrentSlide + 1;
        $(`.text-wrap-${slidetoShow}`).css('opacity', 1);
        $(`.teaser-text-wrap:not(.text-wrap-${slidetoShow})`).css('opacity', 0);
    }

    function calculateVisibility(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const topVisible = rect.top >= 0 && rect.top < windowHeight;
        const bottomVisible = rect.bottom > 0 && rect.bottom <= windowHeight;
        const height = Math.min(rect.height, windowHeight);
        let visibilityPercentage;
        
        if (topVisible && bottomVisible) {
            visibilityPercentage = 100; // Fully visible
        } else if (topVisible) {
            visibilityPercentage = (rect.bottom / height) * 100; // Partially visible from top
        } else if (bottomVisible) {
            visibilityPercentage = ((windowHeight - rect.top) / height) * 100; // Partially visible from bottom
        } else {
            visibilityPercentage = 0; // Not visible
        }
        
        return visibilityPercentage;
    }
}

window.history.scrollRestoration = "manual"; 
window.scrollTo(0, 0);

function disableScrollWhileSliding() {
    document.body.style.overflow = 'hidden';
}

function enableScrollAfterSliding() {
    document.body.style.overflow = 'auto';
}

window.Webflow?.push(function () {
    $(window).scrollTop(0,0)
    
    ;(() => {
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        let disableSlider = false;
        let animatedSlides = []
        
        async function slideAnimation(i) {
            if(animatedSlides.includes(i)) return;
        
            disableSlider = true
            disableScrollWhileSliding()
            const pageInfo = $($('.transition-pageinfo')[i])
            const pageList = $($('.transition-pagelist')[i])
        
            const pageInfoTitle = pageInfo.find('.transition-pageinfo-title')
            const pageInfoSubtitle = pageInfo.find('.transition-pageinfo-subtitle')
            const dim = pageList.find('.dim')
        
            await sleep(1000)
            pageInfoTitle.css('transform', 'translateY(0%)');
            pageInfoSubtitle.css('transform', 'translateY(0%)');
            await sleep(1000)
            pageInfoTitle.css('transform', 'translateY(-100%)');
            pageInfoSubtitle.css('transform', 'translateY(-100%)');
            await sleep(1000)
            dim.css('opacity', 1)
            await sleep(600)
            pageInfo.css('opacity', 0)
            pageList.css('opacity', 1)
            disableSlider = false
            enableScrollAfterSliding()
            animatedSlides.push(i)
        }

        const checkNextSlide = setInterval(() => {
            const isNextSlide = $('.next-sticky')[0].style.transform.includes('-100vh')
            
            if(isNextSlide) {
                slideAnimation(0)
                clearInterval(checkNextSlide)
            }
        }, 50)

        const checkNextSlideDone = setInterval(() => {
            const isNextSlideDone = $('.transition-pageinfo')[0].style.opacity === '0'
            
            if(isNextSlideDone) {
                // let target;

                // if (window.innerWidth <= 1445) {
                //    target = $('.reservation-wrapper-tab')
                // } else {
                //     target = $(".reservation-wrapper")
                // }
                
                $('.reservation').css({
                    "position": "sticky",
                    "bottom": "0"
                  });

                  clearInterval(checkNextSlideDone)
                }
        }, 50)
        
        
        function navigation(slider) {
            let wrapper, dots;
          
            function markup(remove) {
              wrapperMarkup(remove);
              dotMarkup(remove);
            }
          
            function removeElement(elment) {
              elment.parentNode.removeChild(elment);
            }
            function createDiv(className) {
              var div = document.createElement("div");
              var classNames = className.split(" ");
              classNames.forEach((name) => div.classList.add(name));
              return div;
            }
          
            function wrapperMarkup(remove) {
              if (remove) {
                var parent = wrapper.parentNode;
                while (wrapper.firstChild)
                  parent.insertBefore(wrapper.firstChild, wrapper);
                removeElement(wrapper);
                return;
              }
              wrapper = createDiv("navigation-wrapper");
              slider.container.parentNode.appendChild(wrapper);
              wrapper.appendChild(slider.container);
            }
          
            function dotMarkup(remove) {
              if (remove) {
                removeElement(dots);
                return;
              }
              dots = createDiv("dots");
              console.log("slider", slider)
              slider.track.details.slides.forEach((_e, idx) => {
                var dot = createDiv("dot");
                dot.addEventListener("click", () => slider.moveToIdx(idx));
                dots.appendChild(dot);
              });
              wrapper.appendChild(dots);
            }
          
            function updateClasses() {
              var slide = slider.track.details.rel;
              Array.from(dots.children).forEach(function (dot, idx) {
                idx === slide
                  ? dot.classList.add("dot--active")
                  : dot.classList.remove("dot--active");
              });
            }
          
            slider.on("created", () => {
              markup();
              updateClasses();
            });
            slider.on("optionsChanged", () => {
              markup(true);
              markup();
              updateClasses();
            });
            slider.on("slideChanged", () => {
              updateClasses();
            });
            slider.on("destroyed", () => {
              markup(true);
            });
          }
          
          function WheelControls(slider) {
            var touchTimeout;
            var position;
            var wheelActive;
          
            function wheelStart(e) {
              position = {
                x: e.pageX,
                y: e.pageY,
              };
              dispatch(e, "ksDragStart");
            }
          
            function wheel(e) {
              dispatch(e, "ksDrag");
            }
          
            function wheelEnd(e) {
              dispatch(e, "ksDragEnd");
            }
          
            function eventWheel(e) {
              if (!wheelActive) {
                wheelStart(e);
                wheelActive = true;
              }
              wheel(e);
              clearTimeout(touchTimeout);
              touchTimeout = setTimeout(() => {
                wheelActive = false;
                wheelEnd(e);
              }, 50);
            }
          
            slider.on("created", () => {
              slider.container.addEventListener("wheel", eventWheel, {
                passive: true,
              });
            });
        
            slider.on("slideChanged", () => {
                slideAnimation(slider.track.details.rel)
            });
        
        
          }
          
          var slider = new KeenSlider(
            "#transition-slider",
            {
            defaultAnimation: {
                duration: 1100,   
            },
              loop: false,
              size: 100,
              rubberband: false,
              vertical: true,
              selector: ".first > .keen-slider__slide",
            },
            [navigation, WheelControls]
          );
          function dispatch(e, name) {
            if (name === "ksDragStart" && !disableSlider) {
              const scrollDirection = e.deltaY > 0 ? 1 : -1;
              const currentSlide = slider.track.details.rel;
              slider.moveToIdx(currentSlide + scrollDirection);
            }
          }
          
          //
          (function () {
            function WheelControls(slider) {
              var touchTimeout;
              var position;
              var wheelActive;
          
              function dispatch(e, name) {
                position.x -= e.deltaX;
                position.y -= e.deltaY;
                slider.container.dispatchEvent(
                  new CustomEvent(name, {
                    detail: {
                      x: position.x,
                      y: position.y,
                    },
                  })
                );
              }
          
              function wheelStart(e) {
                position = {
                  x: e.pageX,
                  y: e.pageY,
                };
                dispatch(e, "ksDragStart");
              }
          
              function wheel(e) {
                dispatch(e, "ksDrag");
              }
          
              function wheelEnd(e) {
                dispatch(e, "ksDragEnd");
              }
          
              function eventWheel(e) {
                if (!wheelActive) {
                  wheelStart(e);
                  wheelActive = true;
                }
                wheel(e);
                clearTimeout(touchTimeout);
                touchTimeout = setTimeout(() => {
                  wheelActive = false;
                  wheelEnd(e);
                }, 50);
              }
          
              slider.on("created", () => {
                slider.container.addEventListener("wheel", eventWheel, {
                  passive: false,
                });
              });
        
        
              slider.on("changed", () => {
              })
            }
        
            [2,3,4,5,6].forEach(el => {
                new KeenSlider(
                    `#my-keen-slider-${el}`,
                    {
                      loop: false,
                      rubberband: false,
                      slides: {
                          // loop: true
                      origin: "auto",
                        perView: "auto",
                        spacing: 24,
                      },
                    },
                    [WheelControls]
                  );
            })
        })();  
    })()    
});

const links =document.querySelectorAll('.link');
const section = document.querySelectorAll('section');

let activeLink = 0;
links.forEach((link,i)=>{
    link.addEventListener('click',()=>{
        if(activeLink!=i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            section[activeLink].classList.remove('active');

            setTimeout(()=>{
                activeLink = i;
                section[i].classList.add('active');
            },1000)
        }
    })
})

window.addEventListener('scroll', function() {
    var projectHeading = document.querySelector('.project-heading');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        projectHeading.classList.add('hide');
    } else {
        projectHeading.classList.remove('hide');
    }
});



        // JavaScript code to animate the welcome message
        var welcomeText = document.getElementById('welcome-text');
        var container = document.querySelector('.container');
        var message = "Hola,\nI'm Faruk, and welcome to my portfolio!\nI am thrilled to share my journey and accomplishments with \nyou.\nLets begin...";
        var index = 0;
        
        function typeWelcomeText() {
            if (index < message.length) {
                welcomeText.textContent += message.charAt(index);
                index++;

                // Check if the container width exceeds the maximum width
                if (container.scrollWidth > container.offsetWidth) {
                    // Start a new line
                    welcomeText.innerHTML += "<br>";
                }
                
                setTimeout(typeWelcomeText, 100);
            }
            else{
                setTimeout(deleteWelcomeText, 1500);
            }
        }
        function deleteWelcomeText() {
            if (index >= 0) {
                welcomeText.textContent = message.substr(0, index);
                index--;
                setTimeout(deleteWelcomeText, 50);
            } else {
                setTimeout(typeWelcomeText, 1000); // Wait for 1 second before typing the text again
            }
        }
        
        typeWelcomeText();



    //PARTICLE CODE //


particlesJS("particles-js", {
    particles: {
        // Particle configuration options...
        number: {
            value: 100,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .5,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        // Interactivity configuration options...
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "grab"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
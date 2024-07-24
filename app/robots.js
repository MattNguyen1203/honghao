export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${process.env.DOMAIN}/sitemap.js`
  }
}


window.addEventListener("DOMContentLoaded", function () {


  const child = document.querySelector('.ami-chaodon-fixed');
  const bodyToPin = document.getElementsByClassName('co-hoi-viec-lam');
  const parent = child.parentElement;
  parent.style.setProperty('pointer-events', 'none', 'important');


  let mm = gsap.matchMedia();

  mm.add("(min-width: 767px)", () => {
    let st = ScrollTrigger.create({
      trigger: 'body',
      pin: '.ami-chaodon-fixed',
      start: "top top",
      end: "99999 bottom",
      pinSpacing: false,
      //   markers: true
    });
  });

  mm.add("(max-width: 767px)", () => {
    let st = ScrollTrigger.create({
      trigger: 'body',
      pin: '.ami-chaodon-fixed',
      start: "top top",
      end: "bottom -50%",
      pinSpacing: false,
      //   markers: true
    });
  });
});
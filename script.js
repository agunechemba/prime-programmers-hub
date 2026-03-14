// Mobile drawer
(function () {
  const btn = document.getElementById('menuBtn');
  const drawer = document.getElementById('mobileNav');
  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
})();

// Intersection-based reveal animations
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// Testimonials rotator
(function () {
  const quotes = [
    { t: "Pepe Programmers Hub gave me the confidence to build my first website. Now I'm teaching my friends how to code too!", a: "— Sarah, 15" },
    { t: "My mentor is so friendly and helpful. I love the community projects and challenges!", a: "— James, 16" },
    { t: "Before joining, I thought coding was too hard. But the bootcamps made it easy and fun!", a: "— Emily, 14" },
    { t: "I've learned Python, made a game, and even presented my app to my school! Thanks Pepe Hub!", a: "— Aiden, 17" },
    { t: "Joining Pepe Programmers Hub connected me with peers who pushed me to complete real projects and sharpen my skills.", a: "— Daniel, 18" },
    { t: "The community is amazing! I collaborated on web apps, attended bootcamps, and now mentor juniors.", a: "— Fatima, 19" },
    { t: "From coding my first app to presenting it online, the support from Pepe Programmers Hub was incredible.", a: "— Leo, 20" },
    { t: "I never imagined I'd learn robotics and web development while making lifelong friends in one place.", a: "— Amaka, 21" },
    { t: "Pepe Programmers Hub helped me turn my coding hobby into serious projects I’m proud of sharing.", a: "— Chike, 22" }
  ];

  let i = 0; const el = document.getElementById('tList');
  const render = () => { el.style.opacity = 0; setTimeout(() => { el.innerHTML = `<div>“${quotes[i].t}”</div><div style="margin-top:.6rem;font-weight:800;color:var(--brand)">${quotes[i].a}</div>`; el.style.opacity = 1; }, 200); };
  render(); setInterval(() => { i = (i + 1) % quotes.length; render(); }, 4200);
})();





// Hero Slideshow Controller
(function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  const interval = 5000; // 5 seconds per slide

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Optional: Pause when tab is not active to save Chromebook resources
  let sliderTimer = setInterval(nextSlide, interval);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(sliderTimer);
    } else {
      sliderTimer = setInterval(nextSlide, interval);
    }
  });
})();



(function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  
  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
})();



(function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let timer;

  function rotate() {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    current = (current + 1) % slides.length;
    
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startTimer() {
    timer = setInterval(rotate, 6000); // 6 seconds to allow for the zoom effect
  }

  // Handle visibility to save Chromebook resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(timer);
    else startTimer();
  });

  startTimer();
})();
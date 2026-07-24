const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main section[id]")];
const detailTocLinks = [...document.querySelectorAll(".detail-toc a[href^='#']")];
const detailSections = [...document.querySelectorAll(".detail-section[id]")];

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const activeSectionObserver = new IntersectionObserver((entries) => {
  const active = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!active) return;

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${active.target.id}`);
  });
}, {
  rootMargin: "-18% 0px -68% 0px",
  threshold: [0.05, 0.2, 0.5],
});

sections.forEach((section) => activeSectionObserver.observe(section));

let detailTocTicking = false;

const updateDetailToc = () => {
  if (!detailSections.length) return;

  const marker = window.scrollY + 240;
  let current = detailSections[0];

  detailSections.forEach((section) => {
    if (section.offsetTop <= marker) current = section;
  });

  detailTocLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  detailTocTicking = false;
};

if (detailSections.length) {
  updateDetailToc();
  window.addEventListener("scroll", () => {
    if (detailTocTicking) return;
    detailTocTicking = true;
    window.requestAnimationFrame(updateDetailToc);
  }, { passive: true });
}

const revealItems = document.querySelectorAll(".principles article, .method, .policy-card, .resource-list > *, .portal-card, .policy-mini");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, {
  rootMargin: "0px 0px -8% 0px",
  threshold: 0.08,
});

revealItems.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

const today = new Date();
const yearElement = document.getElementById("year");
const updatedDateElement = document.getElementById("updatedDate");
if (yearElement) yearElement.textContent = String(today.getFullYear());
if (updatedDateElement) updatedDateElement.textContent = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(today);

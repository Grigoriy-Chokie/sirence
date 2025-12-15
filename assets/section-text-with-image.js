(()=>{
  const button = document.currentScript.closest('section')?.querySelector('[data-sticky-button]');
  const sections = document.querySelectorAll('section');

  if(!button) return

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const sectionIndex = [...sections].indexOf(entry.target)
      if (!entry.isIntersecting) return

      button.classList.toggle('hidden', sectionIndex < 2);
    });
  }, { rootMargin: '-80px 0px -80px 0px', threshold: 0 });

  sections.forEach(block => observer.observe(block));
})()
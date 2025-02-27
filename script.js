    const links = document.querySelectorAll('.header-link, .header-title-link');

    links.forEach(link => {
      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const mouseX = e.clientX - (rect.left + rect.width / 2);
        const mouseY = e.clientY - (rect.top + rect.height / 2);
        const moveAmountX = mouseX * 0.5;
        const moveAmountY = mouseY * 0.5;

        link.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0px, 0px)';
      });
    });
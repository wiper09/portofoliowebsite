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


    const footerLinks = document.querySelectorAll('.footer-link');

    footerLinks.forEach(link => {
      const icon = link.querySelector('.icon');
      let offsetX = 0;
      let offsetY = 0;
      let iconOffsetX = 0;
      let iconOffsetY = 0;

      link.addEventListener('mousemove', (e) => {
        let rect = link.getBoundingClientRect();
        let mouseX = e.clientX - (rect.left + rect.width / 2);
        let mouseY = e.clientY - (rect.top + rect.height / 2);
        let moveAmountX = mouseX * 0.5;
        let moveAmountY = mouseY * 0.5;

        offsetX = moveAmountX;
        offsetY = moveAmountY;
        iconOffsetX = moveAmountX * 0.6;
        iconOffsetY = moveAmountY * 0.6;

        link.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        icon.style.transform = `translate(${iconOffsetX}px, ${iconOffsetY}px)`;
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = `translate(0px, 0px)`;
        icon.style.transform = `translate(0px, 0px)`;
      });
    });


    const contactLinks = document.querySelectorAll('.footer-contact-list a');

    contactLinks.forEach(link => {
      link.addEventListener('mousemove', (e) => {
        let rect = link.getBoundingClientRect();
        let mouseX = e.clientX - (rect.left + rect.width / 2);
        let mouseY = e.clientY - (rect.top + rect.height / 2);
        let moveAmountX = mouseX * 0.2; 
        let moveAmountY = mouseY * 0.2; 

        link.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = `translate(0px, 0px)`;
      });
    });

      const showcaseOptions = document.querySelectorAll('.showcase-option');


    showcaseOptions.forEach(button => {
      const text = button.querySelector('span'); 
      let offsetX = 0;
      let offsetY = 0;
      let textOffsetX = 0;
      let textOffsetY = 0;

      button.addEventListener('mousemove', (e) => {
        let rect = button.getBoundingClientRect();
        let mouseX = e.clientX - (rect.left + rect.width / 2);
        let mouseY = e.clientY - (rect.top + rect.height / 2);
        let moveAmountX = mouseX * 0.2;
        let moveAmountY = mouseY * 0.2; 

        offsetX = moveAmountX;
        offsetY = moveAmountY;
        textOffsetX = moveAmountX * 0.6; 
        textOffsetY = moveAmountY * 0.6; 

        button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        text.style.transform = `translate(${textOffsetX}px, ${textOffsetY}px)`;
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = `translate(0px, 0px)`;
        text.style.transform = `translate(0px, 0px)`;
      });
    });


    
    const recentAction = document.querySelector('.recent-action');
    const text = recentAction.querySelector('span') || recentAction; // Use the text directly if no span
    let offsetX = 0;
    let offsetY = 0;
    let textOffsetX = 0;
    let textOffsetY = 0;

    recentAction.addEventListener('mousemove', (e) => {
      let rect = recentAction.getBoundingClientRect();
      let mouseX = e.clientX - (rect.left + rect.width / 2);
      let mouseY = e.clientY - (rect.top + rect.height / 2);
      let moveAmountX = mouseX * 0.3; // Adjust sensitivity
      let moveAmountY = mouseY * 0.3; // Adjust sensitivity

      offsetX = moveAmountX;
      offsetY = moveAmountY;
      textOffsetX = moveAmountX * 0.6; // Text moves slower than the button
      textOffsetY = moveAmountY * 0.6; // Text moves slower than the button

      recentAction.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      text.style.transform = `translate(${textOffsetX}px, ${textOffsetY}px)`;
    });

    recentAction.addEventListener('mouseleave', () => {
      recentAction.style.transform = `translate(0px, 0px)`;
      text.style.transform = `translate(0px, 0px)`;
    });




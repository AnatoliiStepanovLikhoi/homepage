document.addEventListener('DOMContentLoaded', function () {
  const avatarPhoto = document.querySelector('.contact-info__avatar');
  const headerName = document.querySelector('.contact-info__header');

  if (avatarPhoto) {
    avatarPhoto.addEventListener('dblclick', showEasterEgg);
  }

  if (headerName) {
    headerName.addEventListener('dblclick', showEasterEgg);
  }

  function showEasterEgg() {
    const easterEgg = document.createElement('div');

    easterEgg.textContent = 'Hooray! You found the Easter egg!🥚 🎉';
    easterEgg.style.position = 'fixed';
    easterEgg.style.bottom = '20px';
    easterEgg.style.right = '20px';
    easterEgg.style.backgroundColor = 'orange';
    easterEgg.style.color = 'white';
    easterEgg.style.padding = '15px';
    easterEgg.style.borderRadius = '5px';
    easterEgg.style.zIndex = '999';
    easterEgg.style.animation = 'fadeInOut 3s forwards';
    easterEgg.style.fontWeight = 'bold';

    const animation = document.createElement('style');

    animation.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(20px); }
        10% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-20px); }
      }
    `;

    document.head.appendChild(animation);
    document.body.appendChild(easterEgg);

    setTimeout(() => {
      easterEgg.remove();
    }, 3000);
  }
});

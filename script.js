function showMessage() {
      alert('Сигурни ли сте, че искате да илезете от профила си?'); 
}


 const countDownDate = new Date("Feb 9, 2024 00:00:00").getTime();

    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result
      document.querySelector('.days').innerHTML = days < 10 ? '0' + days : days;
      document.querySelector('.hours').innerHTML = hours < 10 ? '0' + hours : hours;
      document.querySelector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
      document.querySelector('.seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

      if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown-timer').innerHTML = "EXPIRED";
      }
}, 1000);

let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', function () {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        // Скролираме надолу
        const fadeOutText = document.getElementById('scroll-counter');
        fadeOutText.classList.add('hidden');
      } else {
        // Скролираме нагоре
        const fadeOutText = document.getElementById('scroll-counter');
        fadeOutText.classList.remove('hidden');
      }

      lastScrollPosition = currentScrollPosition;
});
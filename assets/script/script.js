const carouselInner = document.querySelector('.carousel-inner');
const paginationDots = document.querySelectorAll('.dot');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
let currentCard = 0;

const carouselInner1 = document.querySelector('.carousel-inner1');
const carouselPrev1 = document.querySelector('.carousel-prev');
const carouselNext1 = document.querySelector('.carousel-next');

let currentCard1 = 0;

const Home = document.querySelector('#Home');
const About = document.querySelector('#About');
const Destination = document.querySelector('#Destination');
const Services = document.querySelector('#Services');
const Blogs = document.querySelector('#Blogs');
const Contact = document.querySelector('#Contact');

carouselPrev.addEventListener('click', () => {
  currentCard--;
  if (currentCard < 0) {
    currentCard = paginationDots.length - 1;
  }
  updateCarousel();
});

carouselNext.addEventListener('click', () => {
  currentCard++;
  if (currentCard >= paginationDots.length) {
    currentCard = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(${currentCard * -100}%)`;
  paginationDots.forEach((dot, index) => {
    if (index === currentCard) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}



carouselPrev1.addEventListener('click', () => {
  currentCard1--;
  if (currentCard1 < 0) {
    currentCard1 = 2; // assuming 3 cards
  }
  updateCarousel1();
});

carouselNext1.addEventListener('click', () => {
  currentCard1++;
  if (currentCard1 > 2) { // assuming 3 cards
    currentCard1 = 0;
  }
  updateCarousel1();
});

function updateCarousel1() {
  carouselInner1.style.transform = `translateX(${currentCard1 * -104}%)`;
}

// CLOSE BUTTON 1 TO SEE MORE

function ShowMoreBrief1() {
  const MoreBrief = document.getElementById('MoreBrief1')
  if (MoreBrief.classList.contains('displayN')) {
    MoreBrief.classList.remove('displayN')
    MoreBrief.classList.add('displayB')
  }
}

function CrossButton1() {
  const MoreBrief = document.getElementById('MoreBrief1')
  if (MoreBrief.classList.contains('displayB')) {
    MoreBrief.classList.remove('displayB')
    MoreBrief.classList.add('displayN')
  }
}

// CLOSE BUTTON 2 TO SEE MORE

function ShowMoreBrief2() {
  const MoreBrief = document.getElementById('MoreBrief2')
  if (MoreBrief.classList.contains('displayN')) {
    MoreBrief.classList.remove('displayN')
    MoreBrief.classList.add('displayB')
  }
}

function CrossButton2() {
  const MoreBrief = document.getElementById('MoreBrief2')
  if (MoreBrief.classList.contains('displayB')) {
    MoreBrief.classList.remove('displayB')
    MoreBrief.classList.add('displayN')
  }
}

// CLOSE BUTTON 3 TO SEE MORE

function ShowMoreBrief3() {
  const MoreBrief = document.getElementById('MoreBrief3')
  if (MoreBrief.classList.contains('displayN')) {
    MoreBrief.classList.remove('displayN')
    MoreBrief.classList.add('displayB')
  }
}

function CrossButton3() {
  const MoreBrief = document.getElementById('MoreBrief3')
  if (MoreBrief.classList.contains('displayB')) {
    MoreBrief.classList.remove('displayB')
    MoreBrief.classList.add('displayN')
  }
}

// READ MORE BUTTON 1

function ReadMoreCont1() {
  const ReadMoreCont1 = document.getElementById('ReadMoreCont1')
  if (ReadMoreCont1.classList.contains('displayN')) {
    ReadMoreCont1.classList.remove('displayN')
    ReadMoreCont1.classList.add('displayB')
  }
}

function CrossButton21() {
  const ReadMoreCont1 = document.getElementById('ReadMoreCont1')
  if (ReadMoreCont1.classList.contains('displayB')) {
    ReadMoreCont1.classList.remove('displayB')
    ReadMoreCont1.classList.add('displayN')
  }
}

// READ MORE BUTTON 2

function ReadMoreCont2() {
  const ReadMoreCont2 = document.getElementById('ReadMoreCont2')
  if (ReadMoreCont2.classList.contains('displayN')) {
    ReadMoreCont2.classList.remove('displayN')
    ReadMoreCont2.classList.add('displayB')
  }
}

function CrossButton22() {
  const ReadMoreCont2 = document.getElementById('ReadMoreCont2')
  if (ReadMoreCont2.classList.contains('displayB')) {
    ReadMoreCont2.classList.remove('displayB')
    ReadMoreCont2.classList.add('displayN')
  }
}

// READ MORE BUTTON 3

function ReadMoreCont3() {
  const ReadMoreCont3 = document.getElementById('ReadMoreCont3')
  if (ReadMoreCont3.classList.contains('displayN')) {
    ReadMoreCont3.classList.remove('displayN')
    ReadMoreCont3.classList.add('displayB')
  }
}

function CrossButton23() {
  const ReadMoreCont3 = document.getElementById('ReadMoreCont3')
  if (ReadMoreCont3.classList.contains('displayB')) {
    ReadMoreCont3.classList.remove('displayB')
    ReadMoreCont3.classList.add('displayN')
  }
}

// READ MORE BUTTON 4

function ReadMoreCont4() {
  const ReadMoreCont4 = document.getElementById('ReadMoreCont4')
  if (ReadMoreCont4.classList.contains('displayN')) {
    ReadMoreCont4.classList.remove('displayN')
    ReadMoreCont4.classList.add('displayB')
  }
}

function CrossButton24() {
  const ReadMoreCont4 = document.getElementById('ReadMoreCont4')
  if (ReadMoreCont4.classList.contains('displayB')) {
    ReadMoreCont4.classList.remove('displayB')
    ReadMoreCont4.classList.add('displayN')
  }
}

// READ MORE BUTTON 5

function ReadMoreCont5() {
  const ReadMoreCont5 = document.getElementById('ReadMoreCont5')
  if (ReadMoreCont5.classList.contains('displayN')) {
    ReadMoreCont5.classList.remove('displayN')
    ReadMoreCont5.classList.add('displayB')
  }
}

function CrossButton25() {
  const ReadMoreCont5 = document.getElementById('ReadMoreCont5')
  if (ReadMoreCont5.classList.contains('displayB')) {
    ReadMoreCont5.classList.remove('displayB')
    ReadMoreCont5.classList.add('displayN')
  }
}

// READ MORE BUTTON 6

function ReadMoreCont6() {
  const ReadMoreCont6 = document.getElementById('ReadMoreCont6')
  if (ReadMoreCont6.classList.contains('displayN')) {
    ReadMoreCont6.classList.remove('displayN')
    ReadMoreCont6.classList.add('displayB')
  }
}

function CrossButton26() {
  const ReadMoreCont6 = document.getElementById('ReadMoreCont6')
  if (ReadMoreCont6.classList.contains('displayB')) {
    ReadMoreCont6.classList.remove('displayB')
    ReadMoreCont6.classList.add('displayN')
  }
}

// READ MORE BUTTON 7

function ReadMoreCont7() {
  const ReadMoreCont7 = document.getElementById('ReadMoreCont7')
  if (ReadMoreCont7.classList.contains('displayN')) {
    ReadMoreCont7.classList.remove('displayN')
    ReadMoreCont7.classList.add('displayB')
  }
}

function CrossButton27() {
  const ReadMoreCont7 = document.getElementById('ReadMoreCont7')
  if (ReadMoreCont7.classList.contains('displayB')) {
    ReadMoreCont7.classList.remove('displayB')
    ReadMoreCont7.classList.add('displayN')
  }
}

// READ MORE BUTTON 8

function ReadMoreCont8() {
  const ReadMoreCont8 = document.getElementById('ReadMoreCont8')
  if (ReadMoreCont8.classList.contains('displayN')) {
    ReadMoreCont8.classList.remove('displayN')
    ReadMoreCont8.classList.add('displayB')
  }
}

function CrossButton28() {
  const ReadMoreCont8 = document.getElementById('ReadMoreCont8')
  if (ReadMoreCont8.classList.contains('displayB')) {
    ReadMoreCont8.classList.remove('displayB')
    ReadMoreCont8.classList.add('displayN')
  }
}





// SEASONAL MORE BUTTON 1

function SeeMoreSeason1() {
  const SeasonalMore1 = document.getElementById('SeasonalMore1')
  if (SeasonalMore1.classList.contains('displayN')) {
    SeasonalMore1.classList.remove('displayN')
    SeasonalMore1.classList.add('displayB')
  }
}

function CrossButton51() {
  const SeasonalMore1 = document.getElementById('SeasonalMore1')
  if (SeasonalMore1.classList.contains('displayB')) {
    SeasonalMore1.classList.remove('displayB')
    SeasonalMore1.classList.add('displayN')
  }
}
// SEASONAL MORE BUTTON 2

function SeeMoreSeason2() {
  const SeasonalMore2 = document.getElementById('SeasonalMore2')
  if (SeasonalMore2.classList.contains('displayN')) {
    SeasonalMore2.classList.remove('displayN')
    SeasonalMore2.classList.add('displayB')
  }
}

function CrossButton52() {
  const SeasonalMore2 = document.getElementById('SeasonalMore2')
  if (SeasonalMore2.classList.contains('displayB')) {
    SeasonalMore2.classList.remove('displayB')
    SeasonalMore2.classList.add('displayN')
  }
}
// SEASONAL MORE BUTTON 3

function SeeMoreSeason3() {
  const SeasonalMore3 = document.getElementById('SeasonalMore3')
  if (SeasonalMore3.classList.contains('displayN')) {
    SeasonalMore3.classList.remove('displayN')
    SeasonalMore3.classList.add('displayB')
  }
}

function CrossButton53() {
  const SeasonalMore3 = document.getElementById('SeasonalMore3')
  if (SeasonalMore3.classList.contains('displayB')) {
    SeasonalMore3.classList.remove('displayB')
    SeasonalMore3.classList.add('displayN')
  }
}
// SEASONAL MORE BUTTON 4

function SeeMoreSeason4() {
  const SeasonalMore4 = document.getElementById('SeasonalMore4')
  if (SeasonalMore4.classList.contains('displayN')) {
    SeasonalMore4.classList.remove('displayN')
    SeasonalMore4.classList.add('displayB')
  }
}

function CrossButton54() {
  const SeasonalMore4 = document.getElementById('SeasonalMore4')
  if (SeasonalMore4.classList.contains('displayB')) {
    SeasonalMore4.classList.remove('displayB')
    SeasonalMore4.classList.add('displayN')
  }
}



// SCROLL OF NAVS



Home.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight * 0 + 20,
    behavior: 'smooth'
  });
});





About.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});




Destination.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight * 3 / 2,
    behavior: 'smooth'
  });
});




Services.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight * 3,
    behavior: 'smooth'
  });
});




Blogs.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight * 4,
    behavior: 'smooth'
  });
});



Contact.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight * 6,
    behavior: 'smooth'
  });
});


// CHATBOX

function HeightInc() {
  const CHATBOX = document.getElementById('CHATBOX')
  const HeightInc = document.getElementById('HeightInc')

  if (CHATBOX.classList.contains('SM')) {
    CHATBOX.classList.remove('SM')
    CHATBOX.classList.add('LG')
  } else {
    CHATBOX.classList.add('SM')
    CHATBOX.classList.remove('LG')
  }

  if (HeightInc.classList.contains('Before')) {
    HeightInc.classList.remove('Before')
    HeightInc.classList.add('After')
  } else {
    HeightInc.classList.add('Before')
    HeightInc.classList.remove('After')
  }
}


function ShowForm1() {
  const CHATBOX = document.getElementById('CHATBOX')
  const HeightInc = document.getElementById('HeightInc')

  if (CHATBOX.classList.contains('SM')) {
    CHATBOX.classList.remove('SM')
    CHATBOX.classList.add('LG')
  } else {
    CHATBOX.classList.add('SM')
    CHATBOX.classList.remove('LG')
  }

  if (HeightInc.classList.contains('Before')) {
    HeightInc.classList.remove('Before')
    HeightInc.classList.add('After')
  } else {
    HeightInc.classList.add('Before')
    HeightInc.classList.remove('After')
  }
}



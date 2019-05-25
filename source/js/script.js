var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__nav-toggle');
var orderBtn = document.querySelector('.popular__order-btn');
var orderBtns = document.querySelectorAll('.itemcard__order-btn');
var modalClose = document.querySelector('.modal__bg');
var modalBlock = document.querySelector('.modal');

pageHeader.classList.remove('page-header--nav-opened');
pageHeader.classList.add('page-header--nav-closed');
navToggle.classList.remove('visually-hidden');


navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (pageHeader.classList.contains('page-header--nav-closed')) {
    pageHeader.classList.remove('page-header--nav-closed');
    pageHeader.classList.add('page-header--nav-opened');
  } else {
    pageHeader.classList.add('page-header--nav-closed');
    pageHeader.classList.remove('page-header--nav-opened');
  }
});

if (orderBtn) {
  orderBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (!modalBlock.classList.contains('modal__show')) {
      modalBlock.classList.add('modal__show');
    }
  });
}

if (orderBtns) {
  for (var i = 0; i < orderBtns.length; i++) {
    orderBtns[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      if (!modalBlock.classList.contains('modal__show')) {
        modalBlock.classList.add('modal__show');
      }
    });
  }
}

modalClose.addEventListener('click' , function () {
  if (modalBlock.classList.contains('modal__show')) {
    modalBlock.classList.remove('modal__show');
  }
});

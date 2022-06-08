function openSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.add('open');
  }

  function closeSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.remove('open');
  }

  function openDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    var svgIcon = document.querySelector('.my-svg');
    var isOpen = dropdownContent.classList.contains('open');

    if (isOpen) {
      dropdownContent.classList.remove('open');
      svgIcon.classList.remove('open');
    } else {
      dropdownContent.classList.add('open');
      svgIcon.classList.add('open');
    }
  }

  window.addEventListener('scroll', function (e) {
    const arrow = document.querySelector('.arrow-up');
    if (window.scrollY > 100) {
      arrow.classList.add('visible');
    } else {
      arrow.classList.remove('visible');
    }
  });

  function _scrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }


  function barcelona2() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona2.jpg?alt=media&token=b6623417-574d-426e-9800-59518f6b2a58)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona3() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona3.jpg?alt=media&token=af31e75b-2854-4a06-9258-1ba5f5508bb0)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona4() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona4.jpg?alt=media&token=ff906a9b-0a9c-496e-89cc-3ed04968632c)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona5() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona5.jpg?alt=media&token=81fccbd6-80f1-4358-9854-d8749ddb1c87)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona6() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona6.jpg?alt=media&token=db576488-02c7-4e2e-9313-0ab146b2e837)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona7() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona7.jpg?alt=media&token=978b294e-305d-45d0-b402-96886672ab78)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona8() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona8.jpg?alt=media&token=2313e630-1ad2-4a67-9e72-4ecbdb58bd1b)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }
  
  function barcelona9() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona9.jpg?alt=media&token=e20b22f8-08e5-4efe-9a78-6bc2ed09f364)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona10() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona10.jpg?alt=media&token=e9845f34-07a4-4a5a-8045-4ce6b83a6be6)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona11() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona11.jpg?alt=media&token=dbff4c90-ba2a-4e1d-8bb4-7fa852ea4853)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function barcelona12() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/barcelona12.jpg?alt=media&token=2cf3a079-11a4-46de-9f6d-229043433190)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid1() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid1.jpg?alt=media&token=98625c5a-08b2-4c3a-9e01-e50b3910d27b)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid2() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid2.jpg?alt=media&token=ba916ffc-9cb3-4f5e-a008-1cc0e8c7f890)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid3() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid3.jpg?alt=media&token=6cc05632-3ee7-41ab-bac4-d09a90e7bcfb)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid4() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid4.jpg?alt=media&token=4926e014-c750-4e3f-a369-9d8660ea372b)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid5() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid5.jpg?alt=media&token=df13ee22-21dc-465c-8cb8-79a033d41168)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid6() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid6.jpg?alt=media&token=b57e3037-97c5-4ab5-a555-b10bfd0bf8af)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid7() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid7.jpg?alt=media&token=27c10fc2-c089-4d33-8acc-9b707576e8dc)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid8() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid8.jpg?alt=media&token=64c966c8-1a2a-4e7c-a371-105fab3e068a)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid9() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid9.jpg?alt=media&token=423373d2-7903-4e62-b4d1-3dd3ae47aad5)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid10() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid10.jpg?alt=media&token=d3aa1375-4113-4b80-a0e2-0e0596ef0f3e)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid11() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid11.jpg?alt=media&token=0b1749d0-1bcb-478c-b75d-cdf9d8d8ccec)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }

  function madrid12() {
    document.getElementById('visor').style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/imagenes-web-258e1.appspot.com/o/madrid12.jpg?alt=media&token=cd944097-9468-4f49-b544-7e341edb09a1)";
    window.scroll({
      top: 123,
      behavior: 'smooth'
    });
  }
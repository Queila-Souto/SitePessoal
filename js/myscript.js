/* INSTRUÇÃO DE JQUERY PARA INICIALIZAR O SCRIPT APENAS QUANDO O DOCUMENTO ESTIVER PRONTO */ 
$(document).ready(function(){
	setTimeout(function(){ //função para dar um tempo para carregar o HTML antes do Parallax e evitar bugs

		$('#apply-area').parallax({imageSrc:"img/Rainbow-Gradient-Pink-and-Purple-Zoom-Virtual-Background.png"});
		
		
		}
		
		,250);
		
		
		
		
		
	//scroll
	let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let hardSkillSection = $('#skill-area-hs');
  let softSkillSection = $('#skill-area-ss');
  let projectSection = $('#project-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  //evento
  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'hs-menu') {
      scrollTo = hardSkillSection;
    } else if(btnId == 'ss-menu') {
      scrollTo = softSkillSection;
    } else if(btnId == 'projects-menu') {
      scrollTo = projectSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }
	

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 2000);
  });

});

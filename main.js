// 스크롤 시 상단 메뉴 반응 및 부드러운 스크롤 이동
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav a, .hero-buttons a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // 헤더 높이만큼 오프셋 적용
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
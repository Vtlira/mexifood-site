const menuItem = document.querySelectorAll('#topo a'); /* a "const" esta recebendo todo o id="topo" <a> do index.html;*/

  menuItem.forEach(item => {          /*Para cada <a> do topo atribuindo uma funcão quando clicado */
      item.addEventListener('click' , scrollquandoClicado)
  })

  function scrollquandoClicado(event){
      event.preventDefault();
      const element = event.target; /* elemento recebendo o target(a) do event -
      exemplo: <a href="#home" style="background-color: white;">Cardápio</a> */

      const id = element.getAttribute('href'); /*const id recebendo o atributo de "href" do elemento que "a" que foi clicado no topo - ex: #cardapio */

      /* Primeiro Método = const to = document.querySelector(id); - Linkando a section onde consta a id clicada. ex: <section id="cardapio" class="cardapiofood"> 
      console.log(to); */
    
      const to = document.querySelector(id).offsetTop; 
      
      
      window.scroll({
          top:to - 60,
          behavior:"smooth"
      });

      
  }

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };



  
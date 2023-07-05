const titulo = document.getElementById("Titulo");  /* se le asigna a uan const el id necesitado */

titulo.addEventListener("click", function(){  /* a la const le agregamos un evento tipo "click", escuchamos el evento click */
    window.location.href = 'https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC'; /* al clikear nos lleva a la URL */
});

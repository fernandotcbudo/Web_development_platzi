addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 1000

    const animar_contadores= () => {
        for (const contador of contadores) {
            const actualizar_contador = () =>{
                let cantidad_maxima= +contador.dataset.cantidadTotal,
                    valor_actual= +contador.innerText,
                    incremento= cantidad_maxima / velocidad;

                if (valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 5);
                } else{
                    contador.InnerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    //IntersectionObserver

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animar_contadores, 300)
                
            }
            
        });
    }

    const observer= new IntersectionObserver(mostrarContadores, {
        threshold:0.75
    })

    const elementos_html = document.querySelectorAll('.contador')
    elementos_html.forEach(elemento_html => {
        observer.observe(elemento_html)
    })
})
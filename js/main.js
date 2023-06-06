$(document).ready(function () {

    //Slider
    $('.gallery').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    //Posts

    var posts = [{
        title: 'Prueba de título',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tempus elit nec lacinia. Proin arcu nisl, faucibus non turpis sed, ultricies pharetra felis. Ut a enim elit. Integer lectus quam, feugiat tempus sem non, rutrum mollis elit. Aenean congue nisl ipsum, eget maximus lorem faucibus at. Nullam finibus ipsum id dignissim euismod. Fusce achendrerit diam. In nec erat sem. In sit amet aliquet augue. Sed nec tincidunt magna. Praesent eget libero mollis, pulvinar tellus eu, porta elit. Nunc vehicula erat urna, lobortis convallis quam iaculis sed. Vestibulum ornare, felis at bibendum mollis, nulla magna pretium lorem, in sagittis dolor purus eu tortor. Cras varius malesuada elementum."
    },
    {
        title: 'Prueba de título 2',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tempus elit nec lacinia. Proin arcu nisl, faucibus non turpis sed, ultricies pharetra felis. Ut a enim elit. Integer lectus quam, feugiat tempus sem non, rutrum mollis elit. Aenean congue nisl ipsum, eget maximus lorem faucibus at. Nullam finibus ipsum id dignissim euismod. Fusce achendrerit diam. In nec erat sem. In sit amet aliquet augue. Sed nec tincidunt magna. Praesent eget libero mollis, pulvinar tellus eu, porta elit. Nunc vehicula erat urna, lobortis convallis quam iaculis sed. Vestibulum ornare, felis at bibendum mollis, nulla magna pretium lorem, in sagittis dolor purus eu tortor. Cras varius malesuada elementum."
    },
    {
        title: 'Prueba de título 3',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tempus elit nec lacinia. Proin arcu nisl, faucibus non turpis sed, ultricies pharetra felis. Ut a enim elit. Integer lectus quam, feugiat tempus sem non, rutrum mollis elit. Aenean congue nisl ipsum, eget maximus lorem faucibus at. Nullam finibus ipsum id dignissim euismod. Fusce achendrerit diam. In nec erat sem. In sit amet aliquet augue. Sed nec tincidunt magna. Praesent eget libero mollis, pulvinar tellus eu, porta elit. Nunc vehicula erat urna, lobortis convallis quam iaculis sed. Vestibulum ornare, felis at bibendum mollis, nulla magna pretium lorem, in sagittis dolor purus eu tortor. Cras varius malesuada elementum."
    },
    {
        title: 'Prueba de título 4',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tempus elit nec lacinia. Proin arcu nisl, faucibus non turpis sed, ultricies pharetra felis. Ut a enim elit. Integer lectus quam, feugiat tempus sem non, rutrum mollis elit. Aenean congue nisl ipsum, eget maximus lorem faucibus at. Nullam finibus ipsum id dignissim euismod. Fusce achendrerit diam. In nec erat sem. In sit amet aliquet augue. Sed nec tincidunt magna. Praesent eget libero mollis, pulvinar tellus eu, porta elit. Nunc vehicula erat urna, lobortis convallis quam iaculis sed. Vestibulum ornare, felis at bibendum mollis, nulla magna pretium lorem, in sagittis dolor purus eu tortor. Cras varius malesuada elementum."
    },
    {
        title: 'Prueba de título 5',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tempus elit nec lacinia. Proin arcu nisl, faucibus non turpis sed, ultricies pharetra felis. Ut a enim elit. Integer lectus quam, feugiat tempus sem non, rutrum mollis elit. Aenean congue nisl ipsum, eget maximus lorem faucibus at. Nullam finibus ipsum id dignissim euismod. Fusce achendrerit diam. In nec erat sem. In sit amet aliquet augue. Sed nec tincidunt magna. Praesent eget libero mollis, pulvinar tellus eu, porta elit. Nunc vehicula erat urna, lobortis convallis quam iaculis sed. Vestibulum ornare, felis at bibendum mollis, nulla magna pretium lorem, in sagittis dolor purus eu tortor. Cras varius malesuada elementum."
    },];

    posts.forEach((item, index) => {
        let post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}
        </p>
        <a href="#" class="button-more">Leer más...</a>
        </article>`;

        $('#posts').append(post);
    });

    //Selector de tema
    let theme = $('#theme')
    $('#to-green').click(function(){
        theme.attr('href', './css/green.css')
    });
    $('#to-blue').click(function(){
        theme.attr('href', './css/blue.css')
    });
    $('#to-red').click(function(){
        theme.attr('href', './css/red.css')
    });

    //Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        } ,500);
        return false;
    })
});
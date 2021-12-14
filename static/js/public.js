if ($('.nav-link').length) {
    let href = $('.breadcrumb-item:nth-of-type(2) a').attr('href') || location.pathname
    console.log($(`.nav-link[href='${href}']`))
    $(`.nav-link[href='${href}']`).parent().addClass('active')
}

if ($('.badge').length) {
    $('.badge').each(function () {
        $(this).addClass('badge-' + ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'][Math.ceil((Math.random() * 6))])
    })
}

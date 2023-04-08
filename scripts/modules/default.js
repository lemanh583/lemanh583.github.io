function MonaCreateModuleDefault() {
    $('select[name="your-system"]').on('change', function() {

        var system_id = $(this).find(':selected').data('system_id');
        // alert( system_id );

        if ($('select[name="your-categories-system"]').length) {

            $('select[name="your-categories-system"] > option:not(:first-child)').each(function() {

                const system_ids = $(this).data('system_ids');
                var flagCheck = false;
                for (var i = 0; i < system_ids.length; i++) {
                    if (system_id == system_ids[i]) {
                        flagCheck = true;
                    }
                }
                if (!flagCheck) {
                    $(this).fadeOut();
                    $(this).removeClass('show');
                    $(this).addClass('hiden');
                } else {
                    $(this).addClass('show');
                    $(this).fadeIn();
                    $(this).removeClass('hiden');
                }

            });

            if ($('select[name="your-categories-system"] > option.show').length) {
                $('select[name="your-categories-system"] > option.show:first').prop("selected", "selected");
                $('select[name="your-categories-system"] > option.hiden').prop("disabled", "true");
            } else {
                $('select[name="your-categories-system"] > option:first').prop("selected", "selected");
                $('select[name="your-categories-system"] > option.hiden').prop("disabled", "true");
            }

        }

    });

    const speed = 800;
    const hash = window.location.hash;
    if ($(hash).length) scrollToID(hash, speed);

    // $('.btn').each(function() {

    //     const href = $(this).find("> a").attr("href") || $(this).attr("href");
    //     alert(href);
    //     const id = href.slice(href.lastIndexOf("#"));
    //     if ( $(id).length ) {
    //         $(this).addClass('btn-scroll');
    //     }

    // });

    $(".btn-scroll").on("click", function(e) {
        e.preventDefault();
        const href = $(this).find("> a").attr("href") || $(this).attr("href");
        const id = href.slice(href.lastIndexOf("#"));
        if ($(id).length) {
            scrollToID(id, speed);
        } else {
            window.location.href = href;
        }
    });

    function scrollToID(id, speed) {
        const offSet = $(".header").outerHeight();
        const section = $(id).offset();
        const targetOffset = section.top - offSet - 20;
        $("html,body").animate({
            scrollTop: targetOffset
        }, speed);
    }


    $('.widget.widget_nav_menu ul li > a').each(function() {

        $(this).prepend('<i class="fas fa-caret-right"></i>');

    });

    $(".mona-content blockquote").each(function(index) {
        $(this).prepend('<img src="' + window.location.origin + '/template/assets/images/icon-quote.svg" alt="">');
    });

    function copyToClipboard(text) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    };

    $(document).on('click', '.copylink_function', function(e) {
        var data_link = $(this).data('link');
        copyToClipboard(data_link);
        $('.copylink_message').fadeIn();

        setTimeout(function() {
            $('.copylink_message').fadeOut();
        }, 3000);
    });

    $(document).on('click', '.btn-mona-popup', function(e) {
        var popup = $(this).data('popup');
        if ($('.popup.' + popup).length) {
            var file = $(this).data('file');
            if ($('.popup.' + popup).find('input[name="your-file"]').length) {
                $('.popup.' + popup).find('input[name="your-file"]').val(file);
            }
            $('.popup.' + popup).addClass('open');
        }

    });

    // const select_contact_page = document.querySelector(".select-contact-page-input");
    // select_contact_page.addEventListener("change", () => {
    //     alert(select_contact_page.value);
    // });

    $('.select-contact-page-input').on('change', function() {

        var system_id = $(this).val();
        if ($('.contact-form select[name="your-system"]').length) {
            $('.contact-form select[name="your-system"] > option').prop('selected', false);
            $('.contact-form select[name="your-system"] > option').each(function() {
                if (system_id == $(this).val()) {
                    $(this).prop('selected', true);
                }
            });
        }

    });

    document.addEventListener('wpcf7mailsent', function(event) {
        if ('2757' == event.detail.contactFormId) {
            var inputs = event.detail.inputs;
            for (var i = 0; i < inputs.length; i++) {
                if ('your-file' == inputs[i].name) {
                    window.open(inputs[i].value);
                }
            }
        }
    }, false);

}

MonaCreateModuleDefault()
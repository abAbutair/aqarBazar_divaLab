$(function () {
    if ( $(window).width() < 991 ) {
        var headerHeight = $('header').outerHeight();
        $('.search-back').css('padding-top', headerHeight + 40);
    }
});

//-----------------------------------------------------------
//account-edit----------------------------
function addDisabled() {
    $('.account-edit').removeClass('account-view');
    $('.account-edit input').attr('disabled', 'disabled');
    $('.account-edit .sel .custom-select').attr('disabled', 'disabled');
    $('.account-edit .common-btn').addClass('d-none');
    $('.account-edit .edit-btn').removeClass('d-none');
}
function removeDisabled() {
    $('.account-edit').addClass('account-view');
    $('.account-edit input').removeAttr('disabled', 'disabled');
    $('.account-edit .sel .custom-select').removeAttr('disabled', 'disabled');
    $('.account-edit .common-btn').removeClass('d-none');
    $('.account-edit .edit-btn').addClass('d-none');
}
//-------------calendar-------------------
var separator = ' - ', dateFormat = 'YYYY/MM/DD';
var options = {
    singleDatePicker:true,
    autoUpdateInput: false,
    autoApply: true,
    locale: {
        format: dateFormat,
        separator: separator,
        applyLabel: '確認',
        cancelLabel: '取消'
    },
    minDate: moment().add(1, 'days'),
    maxDate: moment().add(359, 'days'),
    opens: "center"
};

$('[data-datepicker=separateRange]')
    .daterangepicker(options)
    .on('apply.daterangepicker', function (ev, picker) {
        var boolStart = this.name.match(/value_from_start_/g) == null ? false : true;
        var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;

        var mainName = this.name.replace('value_from_start_', '');
        if (boolEnd) {
            mainName = this.name.replace('value_from_end_', '');
            $(this).closest('form').find('[name=value_from_end_' + mainName + ']').blur();
        }

        $(this).closest('form').find('[name=value_from_start_' + mainName + ']').val(picker.startDate.format(dateFormat));
        $(this).closest('form').find('[name=value_from_end_' + mainName + ']').val(picker.endDate.format(dateFormat));

        $(this).trigger('change').trigger('keyup');
    })
    .on('show.daterangepicker', function (ev, picker) {
        var boolStart = this.name.match(/value_from_start_/g) == null ? false : true;
        var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;
        var mainName = this.name.replace('value_from_start_', '');
        if (boolEnd) {
            mainName = this.name.replace('value_from_end_', '');
        }

        var startDate = $(this).closest('form').find('[name=value_from_start_' + mainName + ']').val();
        var endDate = $(this).closest('form').find('[name=value_from_end_' + mainName + ']').val();

        $('[name=daterangepicker_start]').val(startDate).trigger('change').trigger('keyup');
        $('[name=daterangepicker_end]').val(endDate).trigger('change').trigger('keyup');

        if (boolEnd) {
            $('[name=daterangepicker_end]').focus();
        }
    });
//-------------------------------------------------------------------------------------------------
var searchBtnHeight = $('.search-btn').height();
var searchSelWidth = $('.dark-form .col-lg-4').width();
var searchBtnWidth = searchSelWidth * 0.7;

$('.search-btn').css({'bottom': searchBtnHeight/-2 , 'width': searchBtnWidth});
$('.search-back .rent-search .dark-form').css('padding-bottom', searchBtnHeight/2);
// $('.jalendar').css('width' , searchSelWidth);

// $('input[name="daterange"]').val(' ');


function advancedSearch(){
    $(".search-control").toggleClass('search-control-open');
    $(".advanced button.btn").toggleClass('advanced-btn-open');
}

//avatar upload-----------------------------------------
$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    // $(".upload-button").on('click', function() {
    //     $(".file-upload").click();
    // });
});
//--------------------------------------------------------
$(function () {
    var usernameHeight = $('.user-name').height();
    var uploadPicHeight = $('.upload-pic').height() * 0.8;

    var uploadPicHeightHalf = $('.upload-pic').height() * 0.3;

    $('.upload-pic').css('top', usernameHeight);
    $('.profile-breadcrumb').css({'padding-top':uploadPicHeight, 'padding-bottom':uploadPicHeightHalf})
});
//----------------

$(document).on('click','.the-message .btn', function () {
    $(this).parent().removeClass("active");
});

$(document).on('click','.open-nav', function () {
    $("body").css("overflow", "hidden")
});
$(document).on('click','.close-nav', function () {
    $("body").css("overflow", "auto")
});

//-----------
$(window).on('load',function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);
});

/* 
 * CREATED BY : Diego Ramos 
 * DATE : 10/12/2018
 * VERSION : 1.0
 * 
 * This code is open source
 * If found any bugs, contact the author by email : diegoramosdrp@gmail.com
 * This script is a extension for select2
 * This only will work if select2.js is declared in your header
 * The script don't will work if params are null or empty
 * The its main function is add buttons add all and clear all at select
 * */

$.fn.select2All =
        function ($params) {
            var $id = $(this).attr('id');
            if (!$.isEmptyObject($params)) {

                $(this).select2({
                    placeholder: $params['placeholder'],
                    allowClear: $params['allowClear'],
                    containerCssClass: $params['containerCssClass'],
                    closeOnSelect: $params['closeOnSelect']
                });

                var selectAll = '<a id="all' + $id + '"> Todos</a>';
                var clearAll = '<a style="float: right;" id="clear' + $id + '"> Limpar </a>';
                var divSelect = '<div id="' + $id + '-select" class="form-control" style="position: absolute; z-index: 9999; display: none">' + selectAll + clearAll + '</div>';

                $('.' + $params['containerCssClass']).append(divSelect);

                $(this).on('select2:open', function () {
                    $('.select2-dropdown').css({'top': '34px'});
                    $('#' + $id + "-select").show();
                });
                $(this).on('select2:close select2:select select2:unselect', function () {
                    var uldiv = $(this).siblings('span.select2').find('ul');
                    var count = uldiv.find('li').length - 1;
                    if (count != 0) {
                        uldiv.html("<li class='select2-search__field'>" + count + " items selecionados</li>");
                    }
                });
                $(this).on('select2:closing', function () {
                    $('#' + $id + "-select").hide();
                });

                $('#all' + $id).click(function () {
                    $('#' + $id + ' > option').prop("selected", true);
                    $('#' + $id).trigger("change");
                });
                $('#clear' + $id).click(function () {
                    $('#' + $id + ' > option').prop("selected", false);
                    $('#' + $id).trigger("change");
                });
            } else {
                alert('The params are necessary for work');
                $(this).select2();
            }
        };
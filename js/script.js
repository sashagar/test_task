(function($) {
    Drupal.behaviors.test_task = {
        attach: function(context) {
            var limit;

            limit = 3;
            //считаем чекбоксы при загрузке страницы
            countItem = $("#test-task-form .form-type-checkbox input[type=checkbox]:checked").length;
            if(countItem > limit){
                $(this).attr('checked', false);

                if($('#content .messages.error').length < 1){
                    $('#content').prepend("<div class='messages error'><p>Превышен максимальный лимит команды.</p></div>");
                }
            } else{
                if($('#content .messages.error').length > 0){
                    $('#content .messages.error').remove();
                }

            }

            var teamMembers = '';
            $("#test-task-form .form-type-checkbox input[type=checkbox]:checked").each(function(i){
                teamMembers += $(this).siblings('label').text();
                teamMembers = $.trim(teamMembers) + '; ';
                $('#test-task-form .team-members').text(teamMembers);
            });

            //считаем чекбоксы при отметке чекбоксов
            $('#test-task-form .form-type-checkbox input').change(function(){
                countItem = $("#test-task-form .form-type-checkbox input[type=checkbox]:checked").length;
                if(countItem > limit){
                    $(this).attr('checked', false);

                    if($('#content .messages.error').length < 1){
                        $('#content').prepend("<div class='messages error'><p>Превышен максимальный лимит команды.</p></div>");
                    }
                } else{
                    if($('#content .messages.error').length > 0){
                        $('#content .messages.error').remove();
                    }
                }

                var teamMembers = '';
                $("#test-task-form .form-type-checkbox input[type=checkbox]:checked").each(function(i){
                    teamMembers += $(this).siblings('label').text();
                    teamMembers = $.trim(teamMembers) + '; ';
                    $('#test-task-form .team-members').text(teamMembers);
                });
                if($("#test-task-form .form-type-checkbox input[type=checkbox]:checked").length == 0){
                    $('#test-task-form .team-members').text('');
                }
            });

        }
    }
})(jQuery);
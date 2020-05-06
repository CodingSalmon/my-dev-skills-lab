$('.deleteSkill').click(function(){
    $(this).parent().fadeOut();
});

$('#addSkill').click(function(){
    let $skillText = $('input').val();
    let newSkill = $('ul').HTML(`<li><button class="deleteSkill">X</button>${$skillText}</li>`);
    
    $('ul').append(newSkill);
    console.log(newSkill)
});
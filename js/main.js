//Constants

//Cached Element References
let $addButtonEl = $('section > button');
let $delButtonEl = $('ul > li > button');
let $inputEl = $('input');
const $skillsListEl = $('#skills');

//Event Listeners
$addButtonEl.click(function(){
    let $skillText = $inputEl.val();
    let newSkill = (`<li><button class="delSkill">X</button>${$skillText}</li>`);
    if (!$skillText.length) return;
    $inputEl.val('');
    $('ul').append(newSkill);
});

$('ul').on('click','button',function(){
    $(this).parent().remove();
});
//Functions

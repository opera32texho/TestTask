$("#submit-modal-window").click(function () {
    let text = $("#task-name").val();
    let textDescribe = $("#describe-name").val();
  
    function getNewTabId() {
      // Генерим рандомный айдишник
      let randomId = 'task' + getRandomInt(1000000000);
      // проверяем - не сущесвтует ли уже элемент с таким ID
      let exists = $('#' + randomId).length !== 0;
  
      // если элемент с таким ID уже существует - генерируем новый
      return exists ? getNewTabId() : randomId;
    }
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    function getNewTabIdForCheck() {
      // Генерим рандомный айдишник
      let randomId = 'customControlValidation' + getRandomIntCheck(1000000000);
      // проверяем - не сущесвтует ли уже элемент с таким ID
      let exists = $('#' + randomId).length !== 0;
  
      // если элемент с таким ID уже существует - генерируем новый
      return exists ? getNewTabIdForCheck() : randomId;
    }
  
    function getRandomIntCheck(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  
    let tabId = getNewTabId();
    let tabIdForCheckbox = getNewTabIdForCheck();
    
    $("#list-tab").prepend('<a class="list-group-item list-group-item-action " href="#' + tabId + '" data-toggle="list" role="tab" aria-controls="task">' + text + '</a>'); 
    $("#nav-tabContent").prepend('<div class="tab-pane fade show " id="' + tabId + '">' + textDescribe + '</div>');
    $("#holder").prepend('<div class="custom-control custom-checkbox mb-3 changeedit"><input type="checkbox" class="custom-control-input" id="' + tabIdForCheckbox + '" required><label class="custom-control-label" for="' + tabIdForCheckbox + '"></label></div></form>' );
    $("#holder").prepend('<input class="btn btn-primary change-button" type="reset" value="Edit"  id="' + tabId + '">' );
    $('#exampleModal').modal('hide');

  });
 
  function example_append() {
    $('#containment').append(
       $('<div/>').addClass('className').text($('#example-textarea').val())
    );}
 
 $(document).ready( function() {
    $('#example_button').on('click', reset_text );});
 function reset_text() {
    $('#example-textarea').val('');
    $('.className').remove()
    ;}
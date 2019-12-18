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
    $("#holder").append('<div>' + '<div class="custom-control custom-checkbox mb-3 changeedit"><input type="checkbox" class="custom-control-input" id="' + tabIdForCheckbox + '" required><label class="custom-control-label" for="' + tabIdForCheckbox + '"></label></div></form> ' +'<button type="button" class="btn btn-primary change-button" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>' +'</div>');
    $('#exampleModal').modal('hide');
   
});
  $('#exampleModalCenter').on('show.bs.modal', function (e) {
    let idx = $(e.relatedTarget).parent().index();
    let taskName = $('#list-tab > a:nth-child(' + (idx + 1) + ')').text();
    $('#exampleModalCenter .task-name').val(taskName);
    $('#save-task-change').click(function(){
  
      let text = $('.task-name').val();

      $('#list-tab > a:nth-child(' + (idx + 1) + ')').text(text);
      $('#exampleModalCenter').modal('hide');
    });
  });


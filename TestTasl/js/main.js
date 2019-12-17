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
    $("#holder").prepend('<button type="button" class="btn btn-primary change-button" data-toggle="modal" data-target="#exampleModalCenter">Edit</button><div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLongTitle">Change your task</h5><button type="button" class="close" data-dismiss="modal" aria-label="Clos<span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div></div>' );
    
    $('#exampleModal').modal('hide');

});


let taskCount = $('.list-group-item a').length;
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
  
    let tabId = getNewTabId();
    
    $("#list-tab").prepend('<a class="list-group-item list-group-item-action " href="#' + tabId + '" data-toggle="list" role="tab" aria-controls="task">' + text + '</a>'); 
    $("#nav-tabContent").prepend('<div class="tab-pane fade show " id="' + tabId + '">' + textDescribe + '</div>');
    $('#exampleModal').modal('hide');
  });
 
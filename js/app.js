var listData = [];

function showData() {
  listData = _.sortBy(listData, 'position');
  localforage.getItem('benapp').then(function(benappValue) {
    if (typeof benappValue !== 'undefined' && benappValue !== null) {
      listData = benappValue;
    }
    $("#checklist").html(_.template($("#listTemplate").html(), listData));
  }).catch(function(err) {
    console.log(err);
  });
}

$(document).ready(function(){
  showData();
  $("#addButton").click(function() {
    var nextPosition = $('#checklist li').length ++;
    var itemInputValue = {
      name: $("#itemToAdd").val(),
      checked: false,
      position: nextPosition
    };
    $("#itemToAdd").val("");
    listData.push(itemInputValue);
    localforage.setItem('benapp', listData).then(function (value) {
      showData();
    }).catch(function(err) {
        console.log(err);
    });
  });

  $("#resetList").click(function() {
    $("#checklist").empty();
    $("#itemToAdd").val("");
  });

  $("body").on("click", ".listItem", function() {
    var currentItemName = 
    var currentItem = _.findWhere(listData, {name: currentItemName});
    if ($(this).hasClass("grayBG")) {
      //$(this).removeClass("grayBG");
      currentItem.checked = false;
    } else {
      //$(this).addClass("grayBG");
      $(this).insertAfter($('#checklist').children().last());
      currentItem.checked = true;
    }
    localforage.setItem('benapp', listData).then(function (value) {
      showData();
    }).catch(function(err) {
        console.log(err);
    });
  });

  $("body").on("click", ".deleteButton", function() {
    //_.reject(listData, function(ld){ return ld.name == currentItemName; });
    $(this).parent().remove();
    e.stopPropagation();
  });

});
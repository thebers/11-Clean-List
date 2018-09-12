$(document).ready(function(){

    $("#addButton").click(function() {
      var itemInputValue = $("#itemToAdd").val();
      $("#checklist").append("<li class='list-group-item listItem'>"+
        "<button type='button' class='btn btn-danger deleteButton'>remove</button>"+'  '+
        itemInputValue+"</li>");
        //localforage.setItem(1, itemInputValue, storedValue);
      $("#itemToAdd").val("");
    });


    $("#resetList").click(function() {
      $("#checklist").empty();
      $("#itemToAdd").val("");
    });

    $('body').on('click', '.listItem', function() {
      if ((this).css("background-color"=="#666666")) {
          $(this).css("background-color", "#FFFFFF");
      }
      else {
        $(this).css("background-color", "#666666");
        $(this).insertAfter($('#checklist').children().last());
      }  
    });

    $('body').on('click', '.deleteButton', function() {
      $(this).parent().remove();
      e.stopPropagation();
    });
  });


  // var listItems;
  // $("#listResults").html(_.template($("#listTemplate").html(), listItems));

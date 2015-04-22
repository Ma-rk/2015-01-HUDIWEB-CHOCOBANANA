// 투두 추가 버튼 누르면 display block
var addTodoBtn = document.getElementsByClassName("todo_add_btn")[0];
addTodoBtn.addEventListener('click', function(){
	document.getElementById("add_wrap").style.display = "block";
});

// cancel 버튼 누르면 display none
var cancelBtn = document.getElementsByClassName("cancel_btn")[0];
cancelBtn.addEventListener('click', function(){
	document.getElementById("add_wrap").style.display = "none";
});

function showSelectedParty() {
    var partyName = document.getElementById("select_party_list").value;
    document.getElementById("selected_party_name").innerHTML = partyName;
}



// 달력 나오는 j query
	$(function() {
  var mydatepicker = $("#datepicker");
  mydatepicker.datepicker({ 
    firstDay: 0,
    minDate: 0,
    dayNamesMin: 
        [ "일", "월", "화", "수", "목", "금", "토" ] ,
    dateFormat: "yy-mm-dd"
  });
  
  $("#ui-datepicker-div").addClass("ui-datepicker-default");
  
	mydatepicker.click(function() {
   $("#ui-datepicker-div").removeClass("ui-datepicker-default");
  });
});
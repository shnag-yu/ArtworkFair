$(document).ready(function() {
  // 鼠标悬停放大特效
  $("nav a, #search button, .recommendations img").hover(function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  });

  // 搜索按钮点击事件
  $("#search button").click(function() {
    var keyword = $("#search input[type='text']").val();
    // TODO: 根据搜索关键词和排序方式进行搜索
  });
});
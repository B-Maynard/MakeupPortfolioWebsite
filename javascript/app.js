function changePage(newTab) {
    var currentTab = $(".active");
    currentTab.removeClass("active");
    $(newTab).addClass("active");
}
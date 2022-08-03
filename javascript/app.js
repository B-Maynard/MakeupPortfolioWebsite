function changePage(newTab) {
    let currentTab = $(".active");
    currentTab.removeClass("active");
    $(newTab).addClass("active");

    let allContent = $(".content");
    let newContent = $(`div#${newTab.id}`);

    allContent.hide();
    $(newContent).fadeIn();

}
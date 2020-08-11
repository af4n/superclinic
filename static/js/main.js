"use strict";

$(document).ready(function () {
  $('.tabs-controls-link').on('click', function (e) {
    e.preventDefault();
    var item = $(this).closest('.tabs-controls-item'),
        contentItem = $('.tabs-item'),
        itemPosition = item.index();
    contentItem.eq(itemPosition).add(item).addClass('active').siblings().removeClass('active');
  });
});
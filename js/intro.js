// 탭 버튼
jQuery(function() {
  // jQuery('#main_tab').click(function() {
  //   jQuery('.target').show();
  // });
  jQuery('.single').click(function() {
    jQuery('.target').hide();
    jQuery('#tab' + $(this).attr('target')).show();
  });
});
$(document).ready(function(){
  $('#one').click(function(){
    $(this).addClass('one').hide(2000).show(3000)
    $('.body_box').css('border', '1px solid yellow')
    $('h1').text('ви нажали на 1 кнопку')
    $('img').attr('src', 'images/one.jpg')
  })

  $('#two').click(function(){
    $(this).addClass('two').hide(2000).show(3000)
    $('.body_box').css('border', '1px solid greenyellow')
    $('h1').text('ви нажали на 2 кнопку')
    $('img').attr('src', 'images/two.png')
  })

  $('#three').click(function(){
    $(this).addClass('three').hide(2000).show(3000)
    $('.body_box').css('border', '1px solid blue')
    $('h1').text('ви нажали на 3 кнопку')
    $('img').attr('src', 'images/three.png')
  })

  $('#four').click(function(){
    $(this).addClass('four').hide(2000).show(3000)
    $('.body_box').css('border', '1px solid red')
    $('h1').text('ви нажали на 4 кнопку')
    $('img').attr('src', 'images/four.png')
  })

  $('img').click(function(){
   $(this).hide(3000).show(5000)  
  })

  $('.header_box').mouseenter(function(){
    $(this).css('border', '2px solid greenyellow')
   })
   $('.header_box').mouseleave(function(){
    $(this).css('border', 'none')
   })

});
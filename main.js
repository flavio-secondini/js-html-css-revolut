$(document).ready(function() {
  var link1 = $("#link1")
  var link2 = $(".right-bar .link2")
  var link3 = $(".right-bar .link3")
  var link4 = $(".right-bar .link4")
  var dropdown1 = $(".dropdowns .drop1")
  var dropdown2 = $(".dropdowns .drop2")
  var dropdown3 = $(".dropdowns .drop3")
  var dropdown4 = $(".dropdowns .drop4")

// metodo1
  link1.hover( function() {
    dropdown1.removeClass("hidden")
  }, function() {
    dropdown1.addClass("hidden")
  })

// metodo2
  link2.mouseenter( function() {
    dropdown2.removeClass("hidden")
  })

  link2.mouseleave( function() {
    dropdown2.addClass("hidden")
  })

// metodo3
  link3.mouseenter( function() {
    dropdown3.removeClass("hidden")
  })

  link3.mouseout( function() {
    dropdown3.addClass("hidden")
  })

// metodo4
  link4.mouseenter( function() {
    dropdown4.removeClass("hidden")
  })

  $(document).click(function () {
    dropdown4.addClass("hidden")
  })

})

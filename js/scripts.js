$(document).ready(function() {
  $("#add-note").click(function() {
    $("#new-notes").append('<div class="new-note">' +
                              '<div clas="form-group">' +
                                '<label for="new-year">year went:</label>' +
                                '<input type="text" class="form-control new-year">' +
                              '</div>' +
                              '<div class="form-group">' +
                                  '<label for="new-landmarks">Landmarks:</label>' +
                                  '<input type="text" class="form-control new-landmarks">' +
                              '</div>' +
                              '<div class="form-group">' +
                                  '<label for="new-favorite-memories">Favorite Memories:</label>' +
                                  '<input type="text" class="form-control new-memories">' +
                              '</div>' +
                              '<div class="form-group">' +
                                  '<label for="new-other">Other:</label>' +
                                  '<input type="text" class="form-control new-other">' +
                              '</div>' +
                            '</div>');
  });
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputCountry = $("input#new-country-name").val();
    var inputCity = $("input#new-city-name").val();

    var newPlace = { country: inputCountry, city: inputCity, notes: [] };

    $(".new-note").each(function() {
      var inputYear = $(this).find("input.new-year").val();
      var inputLandmarks = $(this).find("input.new-landmarks").val();
      var inputMemory = $(this).find("input.new-memories").val();
      var inputOther = $(this).find("input.new-other").val();

      var newNote = { year: inputYear, landmarks: inputLandmarks, memories: inputMemory, other: inputOther };

      newPlace.notes.push(newNote);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.country + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.country);
      $(".country-name").text(newPlace.country);
      $(".city-name").text(newPlace.city);

      $("ul#notes").text("");
      newPlace.notes.forEach(function(note) {
        $("ul#notes").append("<li>" + note.year + ", " + note.landmarks + ", " + note.memories + ", " + note.other + "</li>");
      });
    });
    $("input#new-country-name").val("");
    $("input#new-city-name").val("");
    $("input.new-year").val("");
    $("input.new-landmarks").val("");
    $("input.new-memories").val("");
    $("input.new-other").val("");
  });
});

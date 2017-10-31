/*
$('#e').click(function () {
  console.log($("#id").val())
    
  $.get(url + "/"+$("#id").val(), function (data, status) {
    console.log(data);
    var newd = {};
    newd.id = data.id;
    newd.latitude = "zzzzzzzzzzzzzzz";
    newd.longitude = "zzzzzzzzzzzzzzz";
    console.log(JSON.stringify(newd));
    var updateUrl = url + "/3";
    $.ajax({
      url: updateUrl,
      type: 'PUT',
      data: newd,
      success: function (result) {
        console.log('Updated!');
      }
    });
  });
});
*/

$('#e').click(function () {
    console.log($("#id").val())
  var editlat = editlat;
  var editlon = editlon;
  var newposts = {};
  
  newposts.latitude = $("#editlat"+id).val();
  newposts.longitude = $("#editlon"+id).val();
  
  
  var url = "http://localhost:3000/location"+id;
  $.ajax({
     type: 'PUT',
     data: newposts,
     url: url,
     success: function () {
         //no data...just a success (200) status code
         console.log(newposts);
     }
  })
  });
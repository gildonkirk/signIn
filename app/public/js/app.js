$(document).on('click', '.newUserSubmit', function(event) {
  event.preventDefault();
  let newEmail = $('.newUserEmail').val().trim();
  let newName = $('.newUserName').val().trim();
  let newAge = $('.newUserAge').val().trim();
  let newUser = {
    email: newEmail,
    name: newName,
    age: parseInt(newAge)
  };

  console.log(newUser);

  $.post('/api/new', newUser)
    .done(function() {
      alert('User Added');
    })
});

$(document).on('click', '.loginSubmit', function(event) {
  event.preventDefault();
  let userEmail = $('.userEmail').val().trim();
  let userName = $('.userName').val().trim();
  let userAge = parseInt($('.userAge').val().trim());

  $.get('/api/all', function(data) {
    for(i = 0; i < data.length; i++) {
      if(userEmail === data[i].email && userName === data[i].name && userAge === data[i].age) {
        alert('Successful Login!')
      } else {
        alert('Unsuccessful Login!')
      }
    }
  });
});

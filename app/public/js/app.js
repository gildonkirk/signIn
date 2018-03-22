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

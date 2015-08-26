Accounts.onLogin(function() {
  // Add initial user to admin role
  Meteor.call('addFirstUserToAdminRole');
});

Meteor.methods({
  'addFirstUserToAdminRole': function () {
    /*
     Look for existing users and set initial user as admin
    */

    // Count registered users
    var userCount = Meteor.users().count();

    // If there is only one user
    if (userCount === 1) {
      // Get the only user
      var user = Meteor.users.findOne();

      // Get the user's roles
      var userRoles = Roles.getRolesForUser(user);

      // Define the admin role
      // TODO: refactor this to take the role name as input parameter
      // TODO: create role if it doesnt exist
      var adminRole = 'admin';

      // Check if current user is admin
      var userIsAdmin = _.contains(userRoles, adminRole);

      // If user is not admin
      if (!userIsAdmin) {
        // Add user to admin role
        Roles.addUsersToRoles(userId, ['admin']);
        console.log("Added first user as admin.");
      } else {
        console.log("First user already has admin role.")
      }
    }
  }
});

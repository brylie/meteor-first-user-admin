Meteor.methods({
  'addFirstUserToAdminRole': function () {
    /*
     Look for existing users and set initial user as admin
    */

    // Set default admin role if none provided
    var adminRoleName = Meteor.settings.adminRoleName || 'admin';

    // Create admin role if not existing
    Meteor.call('createRoleIfUndefined', adminRoleName);

    // Count registered users
    var userCount = Meteor.users().count();

    // If there is only one user
    if (userCount === 1) {
      // Get the only user
      var user = Meteor.users.findOne();

      // Get the user's roles
      var userRoles = Roles.getRolesForUser(user);

      // Check if current user is admin
      var userIsAdmin = _.contains(userRoles, adminRoleName);

      // If user is not admin
      if (!userIsAdmin) {
        // Add user to admin role
        Roles.addUsersToRoles(userId, [adminRoleName]);
        console.log("Added first user to ", adminRoleName, " role.");
      } else {
        console.log("First user already has admin role.")
      }
    }
  }
});

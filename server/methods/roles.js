Meteor.methods({
  "createRoleIfNotExisting": function (roleName) {
    /*
    Check if a given role exists
    create the role if it doesn't exist
    */


    // Placeholder variable for role check
    var roleExists;

    // Get all existing roles
    var roles = Meteor.roles.find().fetch();

    // Flatten the roles to an array of role names
    var roleNames = _.map(roles, function (role) {
      // Return the name of the role
      return role.name;
    });

    // Check if admin role is defined in Roles collection
    roleExists = _.contains(roleNames, roleName);

    // Create the admin role if it is not already defined
    if (!roleExists) {
      console.log('Defining "' + roleName + '" role.');
      Roles.createRole(roleName);
    }
  }
});

# meteor-first-user-admin
Adds methods to create an admin role and add the first Meteor user to the admin role.

# Methods
This package provides the following methods, defined in server-side code.

## addFirstUserToAdminRole
Takes an Admin Role (String) as first agrment. Checks if role exists and adds first user to Admin Role.

## createRoleIfNotExisting
Takes a Role name as first argment. Creates the Role if not existing. Used by the `addFirstUserToAdminRole` method to ensure the Admin Role exists.

# meteor-first-user-admin
Adds method to make the first Meteor user an admin, via an 'admin' role.

# Methods
This package provides the following methods, defined in server-side code.

## addFirstUserToAdminRole
Takes an Admin Role (String) as first agrment. Checks if role exists and adds first user to Admin Role.

# Admin Role configuration
By default, the package defines the 'admin' role.

If you would like a different Admin role name, add the following to your Meteor.settings:

```
{
  "adminRoleName": "admin-role-name"
}
```

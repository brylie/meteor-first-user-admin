Package.describe({
  summary: "Method to add first Meteor user to Admin Role.",
  version: "0.1.1",
  name: "brylie:first-admin",
  git: "https://github.com/brylie/meteor-first-user-admin"
});

Package.on_use(function (api, where) {
  api.versionsFrom("1.0.1");
  api.use("accounts-base", "server");
  api.use("alanning:roles@1.2.11", "server");
  api.use("brylie:create-role-if-undefined@0.1.0", "server");

  api.add_files('server/methods/users.js', "server");
	api.add_files('server/accounts.js', "server");
});

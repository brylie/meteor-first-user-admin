Package.describe({
	summary: "Methods to create admin role and add first admin user.",
  version: "0.1.0",
	name: "brylie:first-admin",
  git: "https://github.com/brylie/meteor-first-user-admin"
});

Package.on_use(function (api, where) {
  api.versionsFrom("1.0.1");
	api.use('accounts-base', ['server']);
	api.use("alanning:roles@1.2.11", ['server']);

	api.add_files('server/methods.js', ['server']);
});
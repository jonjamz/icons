Package.describe({
  name: "hybrid:icons",
  summary: "Platform specific icons",
  version: "0.0.1",
  git: "https://github.com/meteorhybrid/icons"
});

Package.on_use(function (api) {
  api.use(["hybrd:device@1.0.0"]);
  api.versionsFrom("METEOR@1.0");
  api.add_files(["icons.html"], "client");
});
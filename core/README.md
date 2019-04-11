# SPRKOS
![Screenshot](https://i.imgur.com/nZtjmls.png)

This is just a fun project, not intended to be taken seriously.

Uses port 1469 to serve apps.
Use the env var SPRK_APPS_LOCATION to set where apps should be loaded from, default: /sprk/apps
And use SPRK_CONFIG_LOCATION to point to the config file, by default this is in /sprk/config.json

Default config file:
```json
{
  "startup": [],
  "launcher": "/dock/"
}
```

Run using `npm run start` to use default env vars and to start with webpack server.
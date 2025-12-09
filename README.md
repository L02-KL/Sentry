# Setup Sentry

Run the following command and proceed with the on-screen instructions:

```bash
npx @sentry/wizard@latest -i reactNative --saas --org <org-name-slug> --project <sentry-project-name>
```

> [!note]
>  Change `org-name-slug` and `sentry-project-name` with your own values.

Next, add the following snippet to your `app/_layout.tsx` or `app/(tabs)/index.tsx` file:

```js
// Init Sentry
Sentry.init({
  dsn: <your-sentry-project-dsn>,
  debug: __DEV__,
  tracesSampleRate: 1.0,
});
```

# Experiment with this repository

First, update the `organization` and `project` values in the `app.json` file.
```json
[
  "@sentry/react-native/expo",
  {
    "url": "https://sentry.io/",
    "project": <sentry-project-name>,
    "organization": <org-name-slug>
  }
]
```

Next, update the `dsn` value in the `app/_layout.tsx` file.

```js
// Init Sentry
Sentry.init({
  dsn: <your-sentry-project-dsn>,
  debug: __DEV__,
  tracesSampleRate: 1.0,
});

````

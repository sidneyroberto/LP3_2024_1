import app from "./app";

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`),
);

const events = ["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "SIGTERM"];

events.forEach((e) => {
  process.on(e, () => server.close());
});

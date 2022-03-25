import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://wewanttosleep.de",
      changeOrigin: true,
    })
  );
};

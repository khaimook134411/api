import { createProxyMiddleware } from "http-proxy-middleware";
import { Express, Router } from "express";
import { RouteConfig } from "./types/proxy";

export const setupProxies = (app: Express, routes: RouteConfig[]) => {
  routes.forEach((r) => {
    app.use(r.url, createProxyMiddleware(r.proxy));
  });
};

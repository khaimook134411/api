import { Filter, Options } from "http-proxy-middleware";

export type RouteConfig = {
  url: string;
  auth: boolean;
  creditCheck: boolean;
  rateLimit?: rateLimit;
  proxy: Filter | Options;
};

type rateLimit = {
  windowMs: number;
  max: number;
};

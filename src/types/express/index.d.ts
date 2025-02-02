/// /// <reference path="@types/express" />
import RedisWrapper from "../../redisClient";

export {};

declare global {
  namespace Express {
    export interface Request {
      redisClient: RedisWrapper | null;
      disableCache: boolean;
    }
  }
}

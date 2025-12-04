import type { Application, NextFunction, Request, Response } from "express";
import express from "express";
import cookieParser from "cookie-parser";
import { corsConfig } from "../config/cors.js";
import { morganConfig } from "../config/morgan.js";
import { rateLimitConfig } from "../config/rateLimit.js";
import { globalErrorHandler } from "../middleware/errorHandler.js";
import { NotFoundError } from "../utils/AppError.js";

const HOST = process.env.HOST ?? "localhost";
const PORT = Number( process.env.PORT ?? 4000 );

const app: Application = express();

/* CORS */
app.use( corsConfig );

/* Logging */
app.use( morganConfig );

/* JSON Body Parsing */
app.use( express.json( { limit: "100mb" } ) );
app.use( express.urlencoded( { extended: true, limit: "100mb" } ) );

/* Cookies */
app.use( cookieParser() );
app.set( "trust proxy", 1 );

/* Rate Limiting */
app.use( rateLimitConfig );

/* Example Route */
app.get( "/", ( req: Request, res: Response ) => {
  res.send( "Hello from Express with TypeScript!" );
} );

/* 404 Handler */
app.use( ( req: Request, res: Response, next: NextFunction ) => {
  next( new NotFoundError( `Cannot find ${req.originalUrl}` ) );
} );


/* Global Error Handler */
app.use( globalErrorHandler );

/* Start Server */
const server = app.listen( PORT, HOST, () => {
  console.log( `[ ready ] http://${HOST}:${PORT}` );
} );

server.on( "error", console.error );

export default app;

import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isDev = process.env.NODE_ENV !== "production";
  
  // Normalize error
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";
  
  // Development — full info
  if ( isDev ) {
    console.error( "💥 ERROR:", err );
    
    return res.status( statusCode ).json( {
      status,
      message: err.message,
      details: err.details,
      stack: err.stack,
      cause: err.cause,
      name: err.name,
    } );
  }
  
  // Production — operational errors
  if ( err.isOperational ) {
    return res.status( statusCode ).json( {
      status,
      message: err.message,
      details: err.details,
    } );
  }
  
  // Unknown or programming errors
  console.error( "💥 UNEXPECTED ERROR:", err );
  
  return res.status( 500 ).json( {
    status: "error",
    message: "Something went wrong.",
  } );
};

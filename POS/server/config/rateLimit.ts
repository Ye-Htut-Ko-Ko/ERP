import rateLimit from "express-rate-limit";

export const rateLimitConfig = rateLimit( {
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: ( req: any ) => ( req.user ? 1000 : 100 ), // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: true,
  keyGenerator: ( req: any ) => req.ip
} );


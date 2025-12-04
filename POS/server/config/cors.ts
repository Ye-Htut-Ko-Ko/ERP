import cors from 'cors';

export const corsConfig = cors( {
  origin: [ 'http://localhost:3000' ],
  allowedHeaders: [ 'Content-Type', 'Authorization' ],
  credentials: true,
} );
#!/usr/bin/zsh

# Required Packages Installation
pnpm install dotenv cors morgan express-rate-limit swagger-ui-express cookie-parser

# Development Packages Installation
pnpm install -D @types/cors @types/morgan @types/express-rate-limit @types/swagger-ui-express @types/cookie-parser

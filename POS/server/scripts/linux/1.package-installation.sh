#!/usr/bin/zsh

# Required Packages Installation
pnpm install dotenv cors morgan express-rate-limit swagger-ui-express cookie-parser @prisma/client

# Development Packages Installation
pnpm add -D \
  prisma \
  @types/cors \
  @types/morgan \
  @types/swagger-ui-express \
  @types/cookie-parser \
  @types/node

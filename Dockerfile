FROM node:21-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Copy the .npmrc file to use the credentials during the build process
COPY .npmrc .npmrc

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
# RUN npm config set //npm.greensock.com/:_authToken=aed17840-5e79-41c3-9df8-25228f18d003
# RUN npm config set @gsap:registry https://npm.greensock.com
# RUN npm install @gsap/shockingly
# RUN npm install gsap --registry https://npm.greensock.com
# RUN npm config delete //npm.greensock.com/:_authToken
# RUN npm config delete @gsap:registry
# RUN npm install
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY jsconfig.json .
COPY tailwind.config.js .
COPY postcss.config.mjs .
COPY components.json .

# Ensure .next/cache directory exists and has the correct permissions
RUN mkdir -p /app/.next/cache/images && chmod -R 755 /app/.next/cache

# Environment variables must be present at build time
ARG DOMAIN
ENV DOMAIN=${DOMAIN}
ARG NEXT_PUBLIC_API
ENV NEXT_PUBLIC_API=${NEXT_PUBLIC_API}
ARG NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_HOST=${NEXT_PUBLIC_HOST}
ARG NEXT_PUBLIC_API_ACF
ENV NEXT_PUBLIC_API_ACF=${NEXT_PUBLIC_API_ACF}
ARG OPEN_WEATHER_API_KEY
ENV OPEN_WEATHER_API_KEY=${OPEN_WEATHER_API_KEY}
ARG NEXT_PUBLIC_SECRET_KEY_HASH
ENV NEXT_PUBLIC_SECRET_KEY_HASH=${NEXT_PUBLIC_SECRET_KEY_HASH}
ARG NEXT_PUBLIC_ONEPAY_HOST
ENV NEXT_PUBLIC_ONEPAY_HOST=${NEXT_PUBLIC_ONEPAY_HOST}
ARG NEXT_PUBLIC_ACCESS_CODE
ENV NEXT_PUBLIC_ACCESS_CODE=${NEXT_PUBLIC_ACCESS_CODE}
ARG NEXT_PUBLIC_MERCHANT_ID
ENV NEXT_PUBLIC_MERCHANT_ID=${NEXT_PUBLIC_MERCHANT_ID}
ARG NEXT_PUBLIC_REQUEST
ENV NEXT_PUBLIC_REQUEST=${NEXT_PUBLIC_REQUEST}

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi
# RUN npm run build

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Copy the .npmrc file to use the credentials during the build process
COPY .npmrc .npmrc

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir -p /app/.next/cache
RUN mkdir -p /app/.next/cache/images
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/cache ./.next/cache
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# COPY --chown=nextjs:nodejs --from=builder /app/ ./

# Environment variables must be redefined at run time
ARG DOMAIN
ENV DOMAIN=${DOMAIN}
ARG NEXT_PUBLIC_API
ENV NEXT_PUBLIC_API=${NEXT_PUBLIC_API}
ARG NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_HOST=${NEXT_PUBLIC_HOST}
ARG NEXT_PUBLIC_API_ACF
ENV NEXT_PUBLIC_API_ACF=${NEXT_PUBLIC_API_ACF}
ARG OPEN_WEATHER_API_KEY
ENV OPEN_WEATHER_API_KEY=${OPEN_WEATHER_API_KEY}
ARG NEXT_PUBLIC_SECRET_KEY_HASH
ENV NEXT_PUBLIC_SECRET_KEY_HASH=${NEXT_PUBLIC_SECRET_KEY_HASH}
ARG NEXT_PUBLIC_ONEPAY_HOST
ENV NEXT_PUBLIC_ONEPAY_HOST=${NEXT_PUBLIC_ONEPAY_HOST}
ARG NEXT_PUBLIC_ACCESS_CODE
ENV NEXT_PUBLIC_ACCESS_CODE=${NEXT_PUBLIC_ACCESS_CODE}
ARG NEXT_PUBLIC_MERCHANT_ID
ENV NEXT_PUBLIC_MERCHANT_ID=${NEXT_PUBLIC_MERCHANT_ID}
ARG NEXT_PUBLIC_REQUEST
ENV NEXT_PUBLIC_REQUEST=${NEXT_PUBLIC_REQUEST}

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]

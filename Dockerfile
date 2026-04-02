# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

WORKDIR /app

# Copy workspace root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./

# Copy ALL package.json files so pnpm can resolve the full workspace lockfile
COPY packages/slots/package.json            ./packages/slots/
COPY packages/tailwind/package.json         ./packages/tailwind/
COPY packages/vue/package.json              ./packages/vue/
COPY packages/vue-icons/package.json        ./packages/vue-icons/
COPY packages/docs/package.json             ./packages/docs/
COPY packages/react-icons/package.json      ./packages/react-icons/
COPY packages/solid/package.json            ./packages/solid/
COPY packages/solid-icons/package.json      ./packages/solid-icons/
COPY packages/solid-modular-form/package.json ./packages/solid-modular-form/
COPY packages/svg-icons/package.json        ./packages/svg-icons/

# Install all workspace deps
RUN pnpm install --no-frozen-lockfile

# Copy source for packages needed by docs
COPY packages/slots/    ./packages/slots/
COPY packages/tailwind/ ./packages/tailwind/
COPY packages/vue/      ./packages/vue/
COPY packages/vue-icons/ ./packages/vue-icons/
COPY packages/docs/     ./packages/docs/

# Build packages in order (docs depends on their dist/)
RUN pnpm --filter @kedataindo/slots build
RUN pnpm --filter @kedataindo/tailwind build
RUN pnpm --filter @kedataindo/vue-icons build
RUN pnpm --filter @kedataindo/vue build
RUN pnpm --filter @kedataindo/docs build

# ─── Stage 2: Serve ──────────────────────────────────────────────────────────
FROM nginx:alpine AS runner

COPY --from=builder /app/packages/docs/.vitepress/dist /usr/share/nginx/html

# Handle VitePress clean URLs (e.g. /components/button → button.html)
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri.html $uri/ /404.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

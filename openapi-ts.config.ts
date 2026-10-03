import { defineConfig } from "@hey-api/openapi-ts";

// Клиентский SDK фронтенда: типы и функции вызова эндпоинтов из OpenAPI-спецификации.
export default defineConfig({
  input: "spec/generated/openapi.yaml",
  output: "web/src/client",
  plugins: ["@hey-api/client-fetch", "@hey-api/typescript", "@hey-api/sdk"],
});

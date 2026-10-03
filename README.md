# Календарь звонков

[![hexlet-check](https://github.com/kicha3007-boop/java-project-386/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kicha3007-boop/java-project-386/actions)
[![CI](https://github.com/kicha3007-boop/java-project-386/actions/workflows/ci.yml/badge.svg)](https://github.com/kicha3007-boop/java-project-386/actions/workflows/ci.yml)

Разработайте совместно с ИИ сервис для бронирования календаря

Учебный проект Хекслета: https://ru.hexlet.io/programs/java
Как это должно работать: https://files.hexlet.app/a/2ipc5m

Опубликованное приложение: _ссылка появится после деплоя_ (тикет #14).

## Что умеет

- **Гость** открывает каталог типов встреч, выбирает день и свободный 30-минутный слот в ближайшие
  14 дней, оставляет имя и почту и видит подтверждение. Регистрации нет.
- Занятое время повторно не бронируется — даже через другой тип встречи: правило проверяет сервер
  (`409 slot_unavailable`), интерфейс показывает сообщение и обновляет слоты.
- **Владелец календаря** создаёт типы встреч и видит предстоящие встречи всех типов одним списком.

Время везде в UTC. Данные хранятся в памяти процесса и очищаются при перезапуске.

## Стек

- TypeScript: Fastify (API + раздача фронтенда) и React + Vite
- Контракт в TypeSpec → OpenAPI → клиентский SDK (`@hey-api/openapi-ts`), типы сервера
  (`openapi-typescript`), маршруты и проверка запросов (`fastify-openapi-glue`)
- vitest, Playwright, ESLint + Prettier, GitHub Actions, release-please, Docker

## Установка

Нужны Node.js 22 и npm (для образа — Docker).

```bash
git clone https://github.com/kicha3007-boop/java-project-386.git
cd java-project-386
npm ci
```

## Использование

```bash
npm run dev:server     # API на http://localhost:8080
npm run dev            # фронтенд на http://localhost:5173 (/api проксируется)

npm run build && npm start               # собранное приложение на PORT (по умолчанию 8080)
docker build -t calendar . && docker run -e PORT=8080 -p 8080:8080 calendar
```

Проверки и генерация:

```bash
npm run generate       # spec/main.tsp → OpenAPI → SDK и типы сервера
npm run lint
npm run typecheck
npm test               # правила слотов и API
npm run test:e2e       # Playwright по собранному приложению (после npm run build)
```

API (`/api`): `GET/POST /event-types`, `GET /event-types/{id}`, `GET /event-types/{id}/slots`,
`GET/POST /bookings`. Полный контракт — `spec/main.tsp` и `spec/generated/openapi.yaml`.

Как шла работа: правила для агента — `AGENTS.md`, словарь — `GLOSSARY.md`, решения — `docs/adr/`,
карта решений, спецификация и тикеты — в Issues (#2, #8, #9–#14).

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.

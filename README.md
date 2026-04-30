
```markdown
# 🎬 Movie Search

Фронтенд-приложение для поиска фильмов, просмотра детальной информации и добавления в избранное. Полностью работает на React без бэкенда.

## 📁 Структура проекта

```
movie-search/
├── public/                 # статические файлы
├── src/
│   ├── assets/            # изображения, шрифты, иконки
│   ├── components/
│   │   └── MovieCard.jsx  # компонент карточки фильма
│   ├── pages/
│   │   ├── FavoritesPage.jsx   # страница избранного
│   │   ├── MoviePage.jsx       # детальная страница фильма
│   │   └── SearchPage.jsx      # главная страница с поиском
│   ├── App.jsx            # корневой компонент
│   ├── main.jsx           # точка входа
│   └── style.css          # глобальные стили
├── .gitignore
├── eslint.config.js       # настройки линтера
├── index.html             # HTML-шаблон
├── navbar-links.json      # конфигурация навигации
└── package.json
```

## ✨ Функционал

- 🔍 **Поиск фильмов** — ввод названия и мгновенный поиск через API
- 📄 **Детальная страница** — полная информация о фильме (рейтинг, сюжет, актёры)
- ❤️ **Избранное** — добавление/удаление фильмов в LocalStorage
- 🧭 **Навигация** — переключение между страницами (Search, Favorites, Movie page)
- 📱 **Адаптивный дизайн** — корректное отображение на всех устройствах
- ⚡ **Оптимизация** — кэширование запросов, предотвращение дубликатов

## 🛠 Технологии

- **React 18+** (функциональные компоненты + хуки)
- **React Router DOM** — для маршрутизации между страницами
- **Axios / Fetch API** — HTTP-запросы к API фильмов
- **LocalStorage** — хранение списка избранных фильмов
- **CSS** — чистая стилизация (style.css)

## 📦 Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/your-username/movie-search.git

# Переход в папку проекта
cd movie-search

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173` (Vite) или `http://localhost:3000` (Create React App).

## 🔌 API интеграция

Проект использует внешний API фильмов (например, OMDB API, TMDB или Kinopoisk API). Пример настройки в `SearchPage.jsx`:

```javascript
// src/pages/SearchPage.jsx
const API_KEY = 'your_api_key';
const BASE_URL = 'https://www.omdbapi.com/';

const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}`
  );
  const data = await response.json();
  return data.Search || [];
};
```

> ⚠️ **Важно**: API-ключи не рекомендуется хранить в клиентском коде. Для учебного проекта можно использовать ограниченные ключи или создать простой прокси-сервер.

## 💾 Избранное (Favorites)

Избранные фильмы сохраняются в `localStorage` браузера:

```javascript
// Пример логики
const addToFavorites = (movie) => {
  const saved = JSON.parse(localStorage.getItem('favorites')) || [];
  const updated = [...saved, movie];
  localStorage.setItem('favorites', JSON.stringify(updated));
};
```

Страница `FavoritesPage.jsx` читает эти данные и отображает карточки фильмов.

## 🧭 Навигация

Настройка ссылок в `navbar-links.json`:

```json
[
  { "path": "/", "label": "Поиск", "icon": "🔍" },
  { "path": "/favorites", "label": "Избранное", "icon": "❤️" }
]
```

Маршрутизация в `App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🚀 Сборка и деплой

### Сборка проекта

```bash
npm run build
```

Папка `dist` (Vite) или `build` (CRA) содержит готовые статические файлы.

### Деплой на GitHub Pages

```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

В `package.json` добавьте:

```json
"homepage": "https://your-username.github.io/movie-search"
```

### Альтернативные хостинги

- **Netlify** — перетащите папку `dist`
- **Vercel** — импортируйте GitHub репозиторий
- **GitHub Pages** — как описано выше

## 📝 Доступные скрипты

```bash
npm run dev      # запуск в режиме разработки
npm run build    # сборка для продакшена
npm run preview  # preview собранного проекта
npm run lint     # проверка кода ESLint
```

## 🔧 Кастомизация

### Изменение API источника

1. Откройте `src/pages/SearchPage.jsx`
2. Найдите функцию `searchMovies`
3. Замените URL и обработку ответа под новое API

### Изменение стилей

Глобальные стили находятся в `src/style.css`. Стили компонентов можно добавлять в тот же файл или создать CSS-модули.

### Добавление новой страницы

1. Создайте `.jsx` файл в `src/pages/`
2. Добавьте маршрут в `App.jsx`
3. Добавьте ссылку в `navbar-links.json`

## 🐛 Возможные проблемы и решения

| Проблема | Решение |
|----------|---------|
| API не отвечает | Проверьте API-ключ и лимиты запросов |
| Не сохраняются избранные | Очистите localStorage или проверьте квоту |
| Не работает роутинг | Убедитесь, что BrowserRouter оборачивает App |
| CORS ошибка | Используйте прокси или API с поддержкой CORS |

## 📄 Лицензия

MIT — свободное использование, модификация и распространение.

## 🙏 Благодарности

- [OMDB API](https://www.omdbapi.com/) — данные о фильмах
- [React Router](https://reactrouter.com/) — навигация
- [Vite](https://vitejs.dev/) — быстрая сборка (если используется)

---

**Приятного использования! 🍿**

## 👨‍💻 Автор

**BallaZ-ooops**
GitHub: [@BallaZ-oops](https://github.com/BallaZ-oops)

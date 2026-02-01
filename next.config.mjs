import nextra from 'nextra'

const withNextra = nextra({
  // В Nextra 4 основные настройки темы переехали в layout.tsx
  // Если тебе нужен поиск или латекс, они настраиваются здесь:
  defaultShowCopyCode: true,
})

export default withNextra({
  // Здесь обычные настройки Next.js (если нужны)
  reactStrictMode: true,
})
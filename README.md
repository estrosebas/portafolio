# 🚀 Portfolio - Diego Sebastián

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### 🌟 Un portafolio moderno y dinámico que refleja mi pasión por el desarrollo de software

[Ver Portfolio Live](#) • [Reportar Bug](https://github.com/estrosebas/portafolio/issues) • [Solicitar Feature](https://github.com/estrosebas/portafolio/issues)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Sobre el Proyecto](#-sobre-el-proyecto)
- [✨ Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [🚀 Instalación](#-instalación)
- [💻 Uso](#-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Capturas de Pantalla](#-capturas-de-pantalla)
- [🤝 Contribuir](#-contribuir)
- [📞 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

## 🎯 Sobre el Proyecto

Este portafolio personal fue desarrollado para mostrar mis habilidades como desarrollador de software, especializado en **ciberseguridad** y **herramientas de automatización**. El sitio web presenta una interfaz moderna, responsiva y totalmente animada que refleja mi enfoque hacia la creación de experiencias digitales excepcionales.

### 🎓 Acerca de mí
- 🔭 Estudiante de **Ingeniería de Sistemas**
- 💼 Desarrollador de software enfocado en **ciberseguridad** y **automatización**
- 🎮 Gamer apasionado (Heavy Rain, Beyond: Two Souls)
- ☕ Amante del café fuerte
- 🤖 Creador de bots y herramientas de automatización

---

## ✨ Características

### 🎨 Diseño & UX
- **Diseño Responsivo**: Perfectamente adaptado a todos los dispositivos
- **Animaciones Fluidas**: Implementadas con Framer Motion para transiciones suaves
- **Tema Moderno**: Interfaz limpia y profesional
- **Navegación Intuitiva**: Experiencia de usuario optimizada

### 🔧 Funcionalidades
- **Sección Hero**: Presentación personal con enlaces a redes sociales
- **Sobre Mí**: Información detallada sobre mi background y pasiones
- **Habilidades**: Showcase interactivo de tecnologías y herramientas
- **Proyectos**: Galería de proyectos con enlaces a GitHub y demos
- **Contacto**: Formulario de contacto y información de redes sociales
- **Navbar Dinámico**: Navegación suave entre secciones

### ⚡ Rendimiento
- **Vite**: Build tool ultrarrápido para desarrollo
- **TypeScript**: Código type-safe y mantenible
- **Optimización**: Componentes optimizados para carga rápida

---

## 🛠️ Tecnologías

### Frontend Core
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

### Styling & UI
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)

### Animation & Icons
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=blue)
![Lucide React](https://img.shields.io/badge/Lucide_React-000000?style=flat&logo=lucide&logoColor=white)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)

---

## 🚀 Instalación

### Prerrequisitos
- **Node.js** (v16 o superior)
- **npm** o **yarn**

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/estrosebas/portafolio.git
   cd portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

---

## 💻 Uso

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Preview del build de producción
npm run lint         # Ejecuta ESLint para revisar código
```

### Personalización

Para personalizar el portafolio con tu información:

1. **Información Personal**: Edita `src/components/Hero.tsx`
2. **Proyectos**: Modifica el array `projects` en `src/components/Projects.tsx`
3. **Habilidades**: Actualiza el array `skills` en `src/components/Skills.tsx`
4. **Sobre Mí**: Edita el contenido en `src/components/About.tsx`
5. **Contacto**: Modifica `src/components/Contact.tsx`

---

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx      # Sección "Sobre Mí"
│   │   ├── About.css
│   │   ├── Contact.tsx    # Formulario de contacto
│   │   ├── Contact.css
│   │   ├── Hero.tsx       # Sección principal/banner
│   │   ├── Hero.css
│   │   ├── Navbar.tsx     # Barra de navegación
│   │   ├── Navbar.css
│   │   ├── Projects.tsx   # Galería de proyectos
│   │   ├── Projects.css
│   │   ├── Skills.tsx     # Habilidades técnicas
│   │   └── Skills.css
│   ├── styles/
│   │   └── globals.css    # Estilos globales
│   ├── App.tsx           # Componente principal
│   ├── App.css
│   ├── main.tsx          # Punto de entrada
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Capturas de Pantalla

### 🏠 Página Principal
> Sección Hero con animaciones fluidas y enlaces a redes sociales

### 👨‍💻 Sobre Mí
> Información personal y profesional con iconos interactivos

### 🛠️ Habilidades
> Grid interactivo de tecnologías con animaciones staggered

### 💼 Proyectos
> Galería de proyectos con overlays y enlaces directos

### 📞 Contacto
> Formulario de contacto y información de redes sociales

---

## 🤝 Contribuir

Las contribuciones son lo que hace que la comunidad open source sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas será **muy apreciada**!

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

**Diego Sebastián** - Desarrollador de Software

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/estrosebas)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](#)

**Link del Proyecto**: [https://github.com/estrosebas/portafolio](https://github.com/estrosebas/portafolio)

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

<div align="center">

### ⭐ ¡Si te gusta este proyecto, dale una estrella!

**Hecho con ❤️ por [Diego Sebastián](https://github.com/estrosebas)**

</div>

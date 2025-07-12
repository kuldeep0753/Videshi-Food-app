Here’s a **clean, well-documented, markdown-friendly version** of your note:
--
# 📚 React Revision

    ## 🖼 Layout of Food App
```
Header
  ├── Logo
  └── Nav Items (Home, About, Support, Cart)
Body
  └── Restaurant Card
        └── Image
Footer
  ├── Copyright
  ├── Links
  ├── Address
  └── Contact
```
---
## 📦 Exporting functions & variables in React
### ✅ Named export
* Syntax:
  ```js
  export { componentName };
  ```
* Multiple named exports are allowed from a single file.
* Import using curly braces:

  ```js
  import { componentName } from './file';
  ```
---

### ⭐ Default export
* Syntax:
  ```js
  export default componentName;
  ```
* Only **one** default export per file.
* Import without braces:
  ```js
  import componentName from './file';
  ```
---
## 🧠 Variables in React
1. **Normal variable**
   Just like standard JavaScript variables.
2. **State variable**
   * Created using React hooks like `useState`.
   * Has “superpowers”: when updated, React **automatically re-renders** the component.
---
## ⚙ React Hooks
Hooks are special **utility functions** provided by React:
* `useState()` – for state management.
* `useEffect()` – for side effects (like fetching data, subscriptions, etc.).

> Hooks help add React features to functional components.

---
## 🌐 Hosted web app
Check the hosted web app here:
🔗 [Foody Mood](https://foody-mood.netlify.app/)

> ⚠ To fetch the API correctly in Chrome, install a **CORS extension** to bypass CORS restrictions.


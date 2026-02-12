# react-lifecycle-z

[![NPM](https://img.shields.io/npm/v/react-lifecycle-z.svg)](https://www.npmjs.com/package/react-lifecycle-z) ![Downloads](https://img.shields.io/npm/dt/react-lifecycle-z.svg)

[LIVE DEMO](https://codesandbox.io/p/sandbox/dtknv4)


![Logo](https://github.com/delpikye-v/react-lifecycle/blob/main/react-lifecycle-z.png)

---

**react-lifecycle-z** is a tiny, declarative lifecycle utility toolkit
for React.

It provides clean, explicit lifecycle semantics without over-engineering or breaking React's mental model.

> Write lifecycle like intent. Keep effects predictable.

---

## 📖 Why react-lifecycle-z?

-   `useMount` -- run logic on mount
-   `useUpdate` -- run logic on dependency updates (skip first render)
-   `useUnmount` -- run cleanup logic
-   `useLayoutMount` -- layout-phase mount effect
-   `useLifecycle` -- object-style lifecycle API
-   StrictMode-safe mount option
-   Optional transition support for updates
-   Tiny, dependency-free core
-   Fully TypeScript-ready

---

## 📦 Installation

``` bash
npm install react-lifecycle-z
```

---

## 🚀 Usage

### Basic Mount / Update / Unmount

``` tsx
import {
  useMount,
  useUpdate,
  useUnmount
} from "react-lifecycle-z";

function Demo({ count }: { count: number }) {
  useMount(() => {
    console.log("Mounted");
  });

  useUpdate(() => {
    console.log("Updated:", count);
  }, [count]);

  useUnmount(() => {
    console.log("Unmounted");
  });

  return <div>{count}</div>;
}
```

---

### Layout Mount

``` tsx
useLayoutMount(() => {
  console.log("Layout mounted");
});
```

---

### StrictMode-safe mount

``` tsx
useMount(() => {
  console.log("Only once even in StrictMode dev");
}, { strict: true });
```

---

### Transition update

``` tsx
useUpdate(() => {
  setHeavyState(data);
}, [data], { transition: true });
```

---

## 🧩 Object Lifecycle API

A more declarative way to describe lifecycle behavior:

``` tsx
import { useLifecycle } from "react-lifecycle-z";

useLifecycle(
  {
    mount: () => console.log("Mounted"),
    update: () => console.log("Updated"),
    unmount: () => console.log("Unmounted")
  },
  [value]
);
```

This keeps lifecycle logic grouped and readable.

---

## 🧠 Design Philosophy

-   No lifecycle engine
-   No global orchestration
-   No async in render
-   No hidden magic

`react-lifecycle-z` keeps React effects explicit and predictable.

Lifecycle should remain simple --- just better expressed.

---

## 📊 Comparison

| Criteria                  | react-lifecycle-z | Raw useEffect               |
| ------------------------- | ------------------ | --------------------------- |
| **Mount helper**          | ✅                  | ⚠️ Manual setup             |
| **Update-only effect**    | ✅                  | ⚠️ Manual first-render skip |
| **Unmount helper**        | ✅                  | ⚠️ Manual cleanup return    |
| **Object-style API**      | ✅                  | ❌                          |
| **StrictMode-safe mount** | ✅                  | ❌                          |
| **Transition option**     | ✅                  | ⚠️ Manual `startTransition` |
| **Bundle size**           | 🟢 Tiny             | —                           |
| **Mental model**          | React-native       | React-native                |


---

## 📄 License

MIT

# use-toggl

Simple React hook to toggle between 2 values like booleans

### Install

```bash
yarn add use-toggl
```

```bash
npm i use-toggl
```

### Usage

```tsx
import { useToggl } from "use-toggle";

export const Component = () => {
  const [currentValue, isGood, isBad, toggle] = useToggl(["good", "bad"]);

  return (
    <div>
      <p>Im {value}</p>
      <button>Go to {isGood ? "dark" : "light"} side</button>
    </div>
  );
};
```

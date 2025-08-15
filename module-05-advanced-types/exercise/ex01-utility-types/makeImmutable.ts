/*
Write a generic type Immutable<T> that deeply applies Readonly to all nested properties of an object.
Test it on:
    interface Settings {
        theme: {mode: string; contrast: number};
        features: {beta: boolean};
    }
*/

interface Settings {
  theme: { mode: string; contrast: number };
  features: { beta: boolean };
}

type Immutable<T> = T extends (...args: any) => any
  ? T
  : T extends object
  ? { readonly [K in keyof T]: Immutable<T[K]> }
  : T;

const mySettings: Immutable<Settings> = {
  theme: { mode: "dark", contrast: 45 },
  features: { beta: true },
};

// mySettings.features.beta = false;
// mySettings.theme = { mode: "light", contrast: 50 };

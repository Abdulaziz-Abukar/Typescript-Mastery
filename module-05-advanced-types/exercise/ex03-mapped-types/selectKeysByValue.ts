/*
    Create a type KeysMatching<T, V> that extracts only keys from T whose values extend V
*/

interface Model {
  id: string;
  active: boolean;
  score: number;
}

type KeysMatching<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

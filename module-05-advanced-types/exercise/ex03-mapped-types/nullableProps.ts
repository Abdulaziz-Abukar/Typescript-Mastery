/*
    Create a mapped type NullableProps<T> that makes every property of T nullable except properties whose value type is already a union including null;

    Test with:
        interface Profile {id: number; bio?: string | null;}
*/

interface Profile {
  id: number;
  bio?: string | null;
}

type nullableProps<T> = {
  [K in keyof T]: null extends T[K] ? T[K] : T[K] | null;
};

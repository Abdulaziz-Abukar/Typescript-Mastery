// Overload #1: single key returns a single value
function pick<T, K extends keyof T>(obj: T, key: K): T[K];

// Overload #2: multiple keys returns a new object with those keys
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;

function pick(obj: any, keys: any) {
  if (Array.isArray(keys)) {
    // multiple keys -> build object
    const result: any = {};
    keys.forEach((key) => {
      result[key] = obj[key];
    });
    return result;
  }
  // single key -> return value
  return obj[keys];
}

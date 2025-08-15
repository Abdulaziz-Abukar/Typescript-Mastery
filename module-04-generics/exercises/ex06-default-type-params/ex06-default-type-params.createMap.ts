function createMap<K = string, V = number>(): Map<K, V> {
  return new Map<K, V>();
}

const defaultMap = new Map(); // Map<string, number>
const customMap = new Map<boolean, string>(); // Map<boolean, string>

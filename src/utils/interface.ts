type IOnChange<T = string> = { target: { name: string, value: T }};
type IIndexable = { [key: string]: string };
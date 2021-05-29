export type IOnChange<T = string> = { target: { name: string, value: T }};
export type IIndexable = { [key: string]: string };
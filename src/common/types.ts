export type MapAction<A, K = keyof A> = K extends keyof A
  ? [A[K]] extends [never]
    ? { type: K }
    : { type: K; payload: A[K] }
  : never;

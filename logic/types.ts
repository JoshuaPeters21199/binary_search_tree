// A interface for the plain object representation of a node. This allows us to render a node in a Next.js component.
export interface BinarySearchTreeNodePlain<T> {
    data: T;
    leftNode?: BinarySearchTreeNodePlain<T>;
    rightNode?: BinarySearchTreeNodePlain<T>;
}

// Interfaces for 
export type NestedValue = string | number | boolean | NestedObject | NestedArray;

export interface NestedObject {
    [key: string]: NestedValue;
}

export interface NestedArray extends Array<NestedValue> {}
import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly x?: number | null;
  readonly y?: number | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly x?: number | null;
  readonly y?: number | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cell = LazyLoading extends LazyLoadingDisabled ? EagerCell : LazyCell

export declare const Cell: (new (init: ModelInit<Cell>) => Cell) & {
  copyOf(source: Cell, mutator: (draft: MutableModel<Cell>) => MutableModel<Cell> | void): Cell;
}
/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCellInput = {
  id?: string | null,
  x: number,
  y: number,
  color?: string | null,
  _version?: number | null,
};

export type ModelCellConditionInput = {
  x?: ModelIntInput | null,
  y?: ModelIntInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelCellConditionInput | null > | null,
  or?: Array< ModelCellConditionInput | null > | null,
  not?: ModelCellConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Cell = {
  __typename: "Cell",
  id: string,
  x: number,
  y: number,
  color?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCellInput = {
  id: string,
  x?: number | null,
  y?: number | null,
  color?: string | null,
  _version?: number | null,
};

export type DeleteCellInput = {
  id: string,
  _version?: number | null,
};

export type ModelCellFilterInput = {
  id?: ModelIDInput | null,
  x?: ModelIntInput | null,
  y?: ModelIntInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelCellFilterInput | null > | null,
  or?: Array< ModelCellFilterInput | null > | null,
  not?: ModelCellFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCellConnection = {
  __typename: "ModelCellConnection",
  items:  Array<Cell | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCellFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  x?: ModelSubscriptionIntInput | null,
  y?: ModelSubscriptionIntInput | null,
  color?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCellFilterInput | null > | null,
  or?: Array< ModelSubscriptionCellFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCellMutationVariables = {
  input: CreateCellInput,
  condition?: ModelCellConditionInput | null,
};

export type CreateCellMutation = {
  createCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCellMutationVariables = {
  input: UpdateCellInput,
  condition?: ModelCellConditionInput | null,
};

export type UpdateCellMutation = {
  updateCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCellMutationVariables = {
  input: DeleteCellInput,
  condition?: ModelCellConditionInput | null,
};

export type DeleteCellMutation = {
  deleteCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCellQueryVariables = {
  id: string,
};

export type GetCellQuery = {
  getCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCellsQueryVariables = {
  filter?: ModelCellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCellsQuery = {
  listCells?:  {
    __typename: "ModelCellConnection",
    items:  Array< {
      __typename: "Cell",
      id: string,
      x: number,
      y: number,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCellsQueryVariables = {
  filter?: ModelCellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCellsQuery = {
  syncCells?:  {
    __typename: "ModelCellConnection",
    items:  Array< {
      __typename: "Cell",
      id: string,
      x: number,
      y: number,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCellSubscriptionVariables = {
  filter?: ModelSubscriptionCellFilterInput | null,
};

export type OnCreateCellSubscription = {
  onCreateCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCellSubscriptionVariables = {
  filter?: ModelSubscriptionCellFilterInput | null,
};

export type OnUpdateCellSubscription = {
  onUpdateCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCellSubscriptionVariables = {
  filter?: ModelSubscriptionCellFilterInput | null,
};

export type OnDeleteCellSubscription = {
  onDeleteCell?:  {
    __typename: "Cell",
    id: string,
    x: number,
    y: number,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

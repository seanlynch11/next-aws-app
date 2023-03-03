/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCell = /* GraphQL */ `
  mutation CreateCell(
    $input: CreateCellInput!
    $condition: ModelCellConditionInput
  ) {
    createCell(input: $input, condition: $condition) {
      id
      x
      y
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCell = /* GraphQL */ `
  mutation UpdateCell(
    $input: UpdateCellInput!
    $condition: ModelCellConditionInput
  ) {
    updateCell(input: $input, condition: $condition) {
      id
      x
      y
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCell = /* GraphQL */ `
  mutation DeleteCell(
    $input: DeleteCellInput!
    $condition: ModelCellConditionInput
  ) {
    deleteCell(input: $input, condition: $condition) {
      id
      x
      y
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

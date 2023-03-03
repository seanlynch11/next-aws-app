/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCell = /* GraphQL */ `
  query GetCell($id: ID!) {
    getCell(id: $id) {
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
export const listCells = /* GraphQL */ `
  query ListCells(
    $filter: ModelCellFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCells(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCells = /* GraphQL */ `
  query SyncCells(
    $filter: ModelCellFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCells(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

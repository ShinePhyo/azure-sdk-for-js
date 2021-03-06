/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/iotSecuritySolutionMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotSecuritySolution. */
export class IotSecuritySolution {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotSecuritySolution.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Use this method to get the list of IoT Security solutions by subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.IotSecuritySolutionListBySubscriptionOptionalParams): Promise<Models.IotSecuritySolutionListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.IotSecuritySolutionListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  listBySubscription(options?: Models.IotSecuritySolutionListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.IoTSecuritySolutionsList>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): Promise<Models.IotSecuritySolutionListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionListBySubscriptionResponse>;
  }

  /**
   * Use this method to get the list IoT Security solutions organized by resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.IotSecuritySolutionListByResourceGroupOptionalParams): Promise<Models.IotSecuritySolutionListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.IotSecuritySolutionListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.IotSecuritySolutionListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.IoTSecuritySolutionsList>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): Promise<Models.IotSecuritySolutionListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionListByResourceGroupResponse>;
  }

  /**
   * User this method to get details of a specific IoT Security solution based on solution name
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): void;
  get(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecuritySolutionModel>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): Promise<Models.IotSecuritySolutionGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionGetResponse>;
  }

  /**
   * Use this method to create or update yours IoT Security solution
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotSecuritySolutionData The security solution data
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, solutionName: string, iotSecuritySolutionData: Models.IoTSecuritySolutionModel, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotSecuritySolutionData The security solution data
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, solutionName: string, iotSecuritySolutionData: Models.IoTSecuritySolutionModel, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotSecuritySolutionData The security solution data
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, solutionName: string, iotSecuritySolutionData: Models.IoTSecuritySolutionModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): void;
  createOrUpdate(resourceGroupName: string, solutionName: string, iotSecuritySolutionData: Models.IoTSecuritySolutionModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecuritySolutionModel>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): Promise<Models.IotSecuritySolutionCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        iotSecuritySolutionData,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionCreateOrUpdateResponse>;
  }

  /**
   * Use this method to update existing IoT Security solution tags or user defined resources. To
   * update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param updateIotSecuritySolutionData The security solution data
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionUpdateResponse>
   */
  update(resourceGroupName: string, solutionName: string, updateIotSecuritySolutionData: Models.UpdateIotSecuritySolutionData, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param updateIotSecuritySolutionData The security solution data
   * @param callback The callback
   */
  update(resourceGroupName: string, solutionName: string, updateIotSecuritySolutionData: Models.UpdateIotSecuritySolutionData, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param updateIotSecuritySolutionData The security solution data
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, solutionName: string, updateIotSecuritySolutionData: Models.UpdateIotSecuritySolutionData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): void;
  update(resourceGroupName: string, solutionName: string, updateIotSecuritySolutionData: Models.UpdateIotSecuritySolutionData, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecuritySolutionModel>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionModel>): Promise<Models.IotSecuritySolutionUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        updateIotSecuritySolutionData,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionUpdateResponse>;
  }

  /**
   * Use this method to delete yours IoT Security solution
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, solutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Use this method to get the list of IoT Security solutions by subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecuritySolutionsList>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): Promise<Models.IotSecuritySolutionListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionListBySubscriptionNextResponse>;
  }

  /**
   * Use this method to get the list IoT Security solutions organized by resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotSecuritySolutionListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IotSecuritySolutionListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IoTSecuritySolutionsList>, callback?: msRest.ServiceCallback<Models.IoTSecuritySolutionsList>): Promise<Models.IotSecuritySolutionListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.IotSecuritySolutionListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotSecuritySolutions",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "iotSecuritySolutionData",
    mapper: {
      ...Mappers.IoTSecuritySolutionModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionModel
    },
    201: {
      bodyMapper: Mappers.IoTSecuritySolutionModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateIotSecuritySolutionData",
    mapper: {
      ...Mappers.UpdateIotSecuritySolutionData,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

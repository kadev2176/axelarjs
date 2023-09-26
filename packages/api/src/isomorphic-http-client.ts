import {
  HttpClient,
  type HttpClientOptions,
} from "@axelarjs/utils/http-client";

/**
 * Configuration options for creating an instance of `IsomorphicHTTPClient`.
 * The type is a discriminated union based on the target ("browser" or "node").
 */
export type IsomorphicClientOptions =
  | {
      /**
       * The underlying HTTP client instance for browser, based on Ky.
       */
      instance: HttpClient;
      /**
       * Optional metadata like name and version for the client.
       * This is used to identify the client in the user-agent header.
       * If not provided, the default values are "HTTPClient" and "0.0.0".
       */
      meta?: ClientMeta;
    }
  | {
      /**
       * The underlying HTTP client options.
       */
      clientOptions: HttpClientOptions;
      /**
       * Optional metadata like name and version for the client.
       * This is used to identify the client in the user-agent header.
       * If not provided, the default values are "HTTPClient" and "0.0.0".
       */
      meta?: ClientMeta;
    };

/**
 * Metadata to provide additional information about the client.
 */
export type ClientMeta = {
  /**
   * The name of the client.
   */
  name: string;
  /**
   * The version of the client.
   */
  version: string;
};

/**
 * Abstract class that defines an isomorphic HTTP client.
 * This can be used both in browser and Node.js environments.
 */
export abstract class IsomorphicHTTPClient {
  /**
   * The name of the HTTP client.
   */
  public name: string;
  /**
   * The version of the HTTP client.
   */
  public version: string;

  /**
   * The internal client instance
   */
  protected client: HttpClient;

  /**
   * Constructs a new instance of `IsomorphicHTTPClient`.
   *
   * @param clientConfig - Configuration options for the client instance.
   * @param meta - Optional metadata like name and version for the client.
   */
  constructor(clientConfig: IsomorphicClientOptions, meta?: ClientMeta) {
    const safeMeta = meta ?? {
      name: clientConfig.meta?.name ?? "HTTPClient",
      version: clientConfig.meta?.version ?? "0.0.0",
    };

    this.client =
      "instance" in clientConfig
        ? clientConfig.instance
        : HttpClient.extend(clientConfig.clientOptions);

    this.name = safeMeta.name;
    this.version = safeMeta.version;
  }
}

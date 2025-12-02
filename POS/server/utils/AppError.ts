export class AppError extends Error {
  public readonly statusCode: number;
  public readonly status: string;
  public readonly details?: any;
  public readonly isOperational: boolean;
  public readonly name: string;
  public readonly cause?: unknown;
  
  constructor(
    message: string,
    statusCode: number = 500,
    details?: any,
    isOperational: boolean = true,
    options?: { cause?: unknown }
  ) {
    super( message );
    this.name = this.constructor.name;
    
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith( "4" ) ? "fail" : "error";
    this.details = details;
    this.isOperational = isOperational;
    this.cause = options?.cause;
    
    Error.captureStackTrace( this, this.constructor );
    
    Object.freeze( this );
  }
}

export class NotFoundError extends AppError {
  constructor( message: string = "Resource not found", details?: any ) {
    super( message, 404, details );
  }
}

export class ValidationError extends AppError {
  constructor( message: string = "Validation error", details?: any ) {
    super( message, 400, details );
  }
}

export class UnauthorizedError extends AppError {
  constructor( message: string = "Unauthorized", details?: any ) {
    super( message, 401, details );
  }
}

export class ForbiddenError extends AppError {
  constructor( message: string = "Forbidden", details?: any ) {
    super( message, 403, details );
  }
}

export class ConflictError extends AppError {
  constructor( message: string = "Conflict", details?: any ) {
    super( message, 409, details );
  }
}

export class InternalServerError extends AppError {
  constructor( message: string = "Internal server error", details?: any ) {
    super( message, 500, details );
  }
}

export class BadRequestError extends AppError {
  constructor( message: string = "Bad request", details?: any ) {
    super( message, 400, details );
  }
}

export class ServiceUnavailableError extends AppError {
  constructor( message: string = "Service unavailable", details?: any ) {
    super( message, 503, details );
  }
}

export class GatewayTimeoutError extends AppError {
  constructor( message: string = "Gateway timeout", details?: any ) {
    super( message, 504, details );
  }
}

export class PayloadTooLargeError extends AppError {
  constructor( message: string = "Payload too large", details?: any ) {
    super( message, 413, details );
  }
}

export class TooManyRequestsError extends AppError {
  constructor( message: string = "Too many requests", details?: any ) {
    super( message, 429, details );
  }
}

export class NotImplementedError extends AppError {
  constructor( message: string = "Not implemented", details?: any ) {
    super( message, 501, details );
  }
}

export class BadGatewayError extends AppError {
  constructor( message: string = "Bad gateway", details?: any ) {
    super( message, 502, details );
  }
}

export class MethodNotAllowedError extends AppError {
  constructor( message: string = "Method not allowed", details?: any ) {
    super( message, 405, details );
  }
}

export class UnsupportedMediaTypeError extends AppError {
  constructor( message: string = "Unsupported media type", details?: any ) {
    super( message, 415, details );
  }
}

export class PreconditionFailedError extends AppError {
  constructor( message: string = "Precondition failed", details?: any ) {
    super( message, 412, details );
  }
}

export class ConflictResourceError extends AppError {
  constructor( message: string = "Conflict resource", details?: any ) {
    super( message, 409, details );
  }
}

export class UnprocessableEntityError extends AppError {
  constructor( message: string = "Unprocessable entity", details?: any ) {
    super( message, 422, details );
  }
}

export class RequestTimeoutError extends AppError {
  constructor( message: string = "Request timeout", details?: any ) {
    super( message, 408, details );
  }
}

export class RangeNotSatisfiableError extends AppError {
  constructor( message: string = "Range not satisfiable", details?: any ) {
    super( message, 416, details );
  }
}

export class ConflictStateError extends AppError {
  constructor( message: string = "Conflict state", details?: any ) {
    super( message, 409, details );
  }
}

export class InsufficientStorageError extends AppError {
  constructor( message: string = "Insufficient storage", details?: any ) {
    super( message, 507, details );
  }
}

export class LoopDetectedError extends AppError {
  constructor( message: string = "Loop detected", details?: any ) {
    super( message, 508, details );
  }
}

export class NotExtendedError extends AppError {
  constructor( message: string = "Not extended", details?: any ) {
    super( message, 510, details );
  }
}

export class NetworkAuthenticationRequiredError extends AppError {
  constructor( message: string = "Network authentication required", details?: any ) {
    super( message, 511, details );
  }
}

export class VariantAlsoNegotiatesError extends AppError {
  constructor( message: string = "Variant also negotiates", details?: any ) {
    super( message, 506, details );
  }
}

export class PreconditionRequiredError extends AppError {
  constructor( message: string = "Precondition required", details?: any ) {
    super( message, 428, details );
  }
}

export class MisdirectedRequestError extends AppError {
  constructor( message: string = "Misdirected request", details?: any ) {
    super( message, 421, details );
  }
}

export class UpgradeRequiredError extends AppError {
  constructor( message: string = "Upgrade required", details?: any ) {
    super( message, 426, details );
  }
}

export class HTTPVersionNotSupportedError extends AppError {
  constructor( message: string = "HTTP version not supported", details?: any ) {
    super( message, 505, details );
  }
}

export class NotAcceptableError extends AppError {
  constructor( message: string = "Not acceptable", details?: any ) {
    super( message, 406, details );
  }
}

export class ConflictModificationError extends AppError {
  constructor( message: string = "Conflict modification", details?: any ) {
    super( message, 409, details );
  }
}

export class RequestHeaderFieldsTooLargeError extends AppError {
  constructor( message: string = "Request header fields too large", details?: any ) {
    super( message, 431, details );
  }
}


export class ClientClosedRequestError extends AppError {
  constructor( message: string = "Client closed request", details?: any ) {
    super( message, 499, details );
  }
}

export class NetworkReadTimeoutError extends AppError {
  constructor( message: string = "Network read timeout", details?: any ) {
    super( message, 598, details );
  }
}

export class NetworkConnectTimeoutError extends AppError {
  constructor( message: string = "Network connect timeout", details?: any ) {
    super( message, 599, details );
  }
}

export class OriginError extends AppError {
  constructor( message: string = "Origin error", details?: any ) {
    super( message, 520, details );
  }
}

export class WebServerIsDownError extends AppError {
  constructor( message: string = "Web server is down", details?: any ) {
    super( message, 521, details );
  }
}

export class ConnectionTimedOutError extends AppError {
  constructor( message: string = "Connection timed out", details?: any ) {
    super( message, 522, details );
  }
}

export class ProxyDeclinedRequestError extends AppError {
  constructor( message: string = "Proxy declined request", details?: any ) {
    super( message, 523, details );
  }
}

export class ATimeoutOccurredError extends AppError {
  constructor( message: string = "A timeout occurred", details?: any ) {
    super( message, 524, details );
  }
}




export interface Buffer {
  write: (
    str: string,
    offset?: number,
    length?: number,
    encoding?: string
  ) => number;
  toString: (encoding?: string, start?: number, end?: number) => string;
}

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  connection: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

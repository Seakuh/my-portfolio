// Web MIDI API TypeScript Declarations

interface Navigator {
  requestMIDIAccess(): Promise<MIDIAccess>;
}

interface MIDIAccess extends EventTarget {
  readonly inputs: MIDIInputMap;
  readonly outputs: MIDIOutputMap;
  onstatechange: ((event: MIDIConnectionEvent) => void) | null;
}

interface MIDIInputMap extends Map<string, MIDIInput> {
  forEach(
    callbackfn: (value: MIDIInput, key: string, parent: MIDIInputMap) => void,
    thisArg?: any
  ): void;
}

interface MIDIOutputMap extends Map<string, MIDIOutput> {
  forEach(
    callbackfn: (
      value: MIDIOutput,
      key: string,
      parent: MIDIOutputMap
    ) => void,
    thisArg?: any
  ): void;
}

interface MIDIPort extends EventTarget {
  readonly id: string;
  readonly manufacturer?: string;
  readonly name?: string;
  readonly type: MIDIPortType;
  readonly version?: string;
  readonly state: MIDIPortDeviceState;
  readonly connection: MIDIPortConnectionState;
  onstatechange: ((event: MIDIConnectionEvent) => void) | null;
  open(): Promise<MIDIPort>;
  close(): Promise<MIDIPort>;
}

interface MIDIInput extends MIDIPort {
  onmidimessage: ((event: MIDIMessageEvent) => void) | null;
}

interface MIDIOutput extends MIDIPort {
  send(data: number[] | Uint8Array, timestamp?: number): void;
  clear(): void;
}

interface MIDIMessageEvent extends Event {
  readonly data: Uint8Array;
  readonly receivedTime: number;
}

interface MIDIConnectionEvent extends Event {
  readonly port: MIDIPort;
}

type MIDIPortType = "input" | "output";
type MIDIPortDeviceState = "connected" | "disconnected";
type MIDIPortConnectionState = "open" | "closed" | "pending";

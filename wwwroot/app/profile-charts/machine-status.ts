export class MachineStatus {
    ip: string;
    name: string;
    cpu: number;
    memory: {
        usage: number;
        capacity: number;
    };
    disk: number;
}
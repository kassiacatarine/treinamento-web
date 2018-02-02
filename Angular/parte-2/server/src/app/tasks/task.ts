export class Task {
    id: string;
    name: string;
    date: string;

    constructor() {
        this.id = this.generateId();
    }

    generateId(): string {
        const sorted: number = Math.ceil(Math.random() * Math.pow(10, 30));
        const id = sorted.toString(36).substring(2, 9);
        return id;
    }
}

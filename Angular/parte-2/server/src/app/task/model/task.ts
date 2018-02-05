export class Task {
    id: string;
    name: string;
    date: string;
    description?: string;

    constructor(name: string, date: string) {
        this.id = this.generateId();
        this.name = name;
        this.date = date;
    }

    generateId(): string {
        const sorted: number = Math.ceil(Math.random() * Math.pow(10, 30));
        const id = sorted.toString(36).substring(2, 9);
        return id;
    }
}

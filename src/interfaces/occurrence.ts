export interface Occurrence {
    id?: number,
    createdAt: string,
    name: string,
    latitude: number,
    longitude: number,
    obs: string,
    typeId: number,
    service: {
        serviceName: string
    }
}
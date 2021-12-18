export interface Occurrence {
    id?: number,
    createdAt: string,
    name: string,
    latitude: number,
    longitude: number,
    obs: string,
    serviceId: number,
    service: {
        serviceName: string
    }
}
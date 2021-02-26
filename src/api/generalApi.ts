import {Endpoints, getEndpoint} from "./endpoints";

class GeneralApi {
    Endpoint: string = Endpoints.Users;

    async getData() {
        return getEndpoint(this.Endpoint)
            .query({per_page: 12})
            .get()
            .res();
    }
}

export function getGeneralApiObj() {
    return new GeneralApi();
}

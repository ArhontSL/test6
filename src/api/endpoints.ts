import wretch, {Wretcher} from "wretch";

export const AUTHORIZATION_HEADER = 'X-AUTH-TOKEN';
export const REFRESH_HEADER = 'X-AUTH-REFRESH-TOKEN';
export const AUTHORIZATION_PREFIX = 'Bearer ';

export const Endpoints = {
    Users: '/api/users',
};

const getBase = (): Wretcher => {
    return wretch(process.env.REACT_APP_BASE_API_URL);
};

export type UrlPart = string | number;

export const getEndpoint = (
    endpoint: string,
    urlPart?: UrlPart
) => {
    return getBase().url(
        endpoint + (urlPart !== undefined ? `${urlPart}` : "")
    );
};

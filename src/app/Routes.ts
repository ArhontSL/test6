export interface IRoutes {
    Home: string;
    Employees: string;
}

export const Routes: IRoutes = {
    Home: '/',
    Employees: '/employees',
}

export const GetRoute = {
    full: (name: keyof IRoutes) => {
        return Routes[name];
    },
    clear: (name: keyof IRoutes) => {
        return Routes[name].split('/')[1]
    }
}

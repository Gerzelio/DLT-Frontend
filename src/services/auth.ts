
interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function login(): Promise<Response>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sfd4fsfsd54sg8fsgfaog8fsg1fg5dpqmaitnhfn5sdbf5w',
                user: {
                    name: 'Gerzelio',
                    email: 'gerzelio.saide@fgh.org.mz',
                },
            });
        }, 2000);
    });
}
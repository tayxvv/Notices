class User {

    id: number;
    username: string;
    email: string;
    password_hash: string;

    constructor(
        username: string,
        email: string,
        password_hash: string
    ) {
        this.username = username;
        this.email = email;
        this.password_hash = password_hash;
    }
}

export { User };
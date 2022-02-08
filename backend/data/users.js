import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@Koinonia.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jo Frenkel',
        email: 'Jo@Koinonia.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Vicky Hawley',
        email: 'Vix@Koinonia.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
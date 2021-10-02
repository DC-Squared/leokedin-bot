import knex from 'knex'
import path from 'path'
const __dirname = path.resolve()

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default connection
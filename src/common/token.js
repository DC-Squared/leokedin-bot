import knex from '../../config/database/connection.js'

async function getToken(clientId) {
    try {
        const rows = await knex('tokens')
            .where({ clientId })
        
        if (rows.length) {
            const isValidToken = new Date() < new Date(rows[0].expires)
            return isValidToken ? rows[0].token : false
        }

        return false
    } catch(err) {
        throw new Error(err.message)
    }
}

async function setToken({ token, expires, clientId }) {
    try {
        // Verify if token already exists
        const rows = await knex('tokens')
            .where({ clientId })

        if (rows.length) {
            return await updateToken(token, expires, clientId)
        }

        return await createToken(token, expires, clientId)
    } catch (err) {
        throw new Error(err.message)
    }
}

async function createToken(token, expires, clientId) {
    try {
        const createdAt = new Date().toISOString()
        await knex('tokens').insert({
            clientId,
            token,
            expires,
            createdAt,
            updatedAt: null
        })

        return true
    } catch (err) {
        throw new Error(err.message)
    }
}

async function updateToken(token, expires, clientId) {
    try {
        const updatedAt = new Date().toISOString()
        await knex('tokens')
            .update({ token, expires, updatedAt })
            .where({ clientId })

        return true
    } catch (err) {
        throw new Error(err.message)
    }
}

export { getToken, setToken }
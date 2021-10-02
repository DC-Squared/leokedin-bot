// Get keys from .env file just for dev
import dotenv from 'dotenv'
dotenv.config()

import axios from 'axios'
import { getToken, setToken } from '../common/token.js'
import ErrorGettingToken from '../common/errors/ErrorGettingToken.js'

const twitchCredentials = {
    clientId: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET,
    grantType: 'client_credentials'
}

const authUrl = 'https://id.twitch.tv/oauth2/token'
const apiUrl = 'https://api.twitch.tv/'

async function authenticate({ clientId, clientSecret, grantType }) {
    const config = {
        url: authUrl,
        method: 'post',
        data: {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: grantType
        }
    }

    try {
        let token = getToken(clientId)
        if (!token) {
            const res = await axios.request(config)
            if (!res || !res.data.access_token) {
                throw new ErrorGettingToken(
                    `Request was done but no access token returned. Response: ${res}`
                )
            }
            token = res.data.access_token
            setToken(clientId, res.data)
            return token
        }
    } catch (err) {
        console.error(err.message)
    }
}

async function searchChannels(query, first = null, after = null, liveOnly = null) {
    const token = await authenticate(twitchCredentials)

    const config = {
        url: `${apiUrl}helix/search/channels`,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
            "Client-Id": twitchCredentials.clientId
        },
        params: {
            query,
            first,
            after,
            live_only: liveOnly
        }
    }

    const res = await axios.request(config)

    return (res || res.data)
}

export { authenticate, searchChannels }
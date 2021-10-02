import twitch from '../clients/TwitchClient.js'
import StreamEmbed from '../views/embeds/StreamEmbed.js'

async function showmeastreamer({ channel }) {
    const streamers = await twitch.searchChannels('programming', null, null, true)
    const random = Math.floor(Math.random() * (streamers.data.length + 1))
    const selected = streamers.data[random]
    
    const { broadcaster_login: streamerUsername, display_name: streamerName, title: streamTitle, thumbnail_url: streamThumbnail } = selected
    
    const streamDetail = {
        streamUrl: `https://www.twitch.tv/${streamerUsername}`,
        streamTitle,
        streamerName,
        streamThumbnail
    }

    const streamEmbed = StreamEmbed(streamDetail)
    channel.send({ embeds: [streamEmbed] })
}

export default showmeastreamer
import { MessageEmbed } from "discord.js"

export default function StreamEmbed({
    streamUrl,
    streamTitle,
    streamerName,
    streamThumbnail,
}) {
    return new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(streamTitle)
        .setURL(streamUrl)
        .setAuthor(streamerName)
        .setThumbnail(streamThumbnail)
        .addFields(
            { name: 'Live status', value: 'Online' }
        )
}
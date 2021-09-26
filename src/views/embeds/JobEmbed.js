import { MessageEmbed } from "discord.js"

export default function JobEmbed({
    jobUrl,
    jobName,
    jobLocal,
    companyName,
    companyImage,
    recruiterName,
    recruiterPosition
}) {
    return new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(jobName)
        .setURL(jobUrl)
        .setAuthor(companyName)
        .setDescription(jobLocal)
        .setThumbnail(companyImage)
        .addFields(
            { name: `Recrutador(a): ${recruiterName}`, value: recruiterPosition }
        )
}
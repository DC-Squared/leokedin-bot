function getChannelByName(client, channelName) {
    const channel = client.channels.cache.find(
        channel => channel.name === channelName
    )

    return channel
}

export { getChannelByName }
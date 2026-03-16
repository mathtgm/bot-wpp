export async function sendMessage(client, message) {
    await client(message);
}
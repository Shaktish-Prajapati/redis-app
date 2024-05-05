const client = require('./client');

async function init() {
    // await client.set("msg:5", 'TTL: Time to Live');
    // await client.expire("msg:5", 10); // it will remove msg after 10 seconds
    const result = await client.get("msg:5")

    console.log('result-> ', result)
    process.exit(0)
}

init();
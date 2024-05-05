const client = require('./client');

async function init() {
    // await client.lpush('messages', "hello world") // pushing into "messages" list from left side
    // const result = await client.lpop('messages')
    // console.log(result);  // printing the popped element i.e., 'hello world' from "messages" list

    // blocking commands
    // const response = await client.blpop('messages', 10); // if "messages" list have message then it will instantly pop and return the data, 
    // but if 'message' does not have the data ino the list then it will wait for "10 sec" 
    // or provided time for data then also the data is not there then it will return the nil
    // console.log('response=> ', response)
    // console.log(await client.llen('messages'))

    // to read "messages"
    await client.lrange("messages", 0, -1) // for  reading all elements of the list we provide "-1" as second argument
    process.exit(0)
}
init();
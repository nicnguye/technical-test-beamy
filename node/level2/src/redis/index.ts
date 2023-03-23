import Redis from 'ioredis';
const redisClient = new Redis(6379);

redisClient.on("connect", () => console.log('Connected to Redis !'));
redisClient.on("error", (error) => console.error(`Error : ${error}`));

export default redisClient;
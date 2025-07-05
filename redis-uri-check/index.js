const Redis = require("ioredis");

const redis = new Redis("redis://default:WBEdpwDJYiLV9IAyhaEwPkKXSGmzrIZR@redis-14456.crce179.ap-south-1-1.ec2.redns.redis-cloud.com:14456");

redis.on("connect", () => {
  console.log("✅ Connected to Redis successfully!");
}); 

redis.on("error", (err) => {
  console.error("❌ Redis connection error:", err);
});

// Set and get a test key
(async () => {
  try {
    await redis.set("test-key", "Hello Redis!");
    const value = await redis.get("test-key");
    console.log("🔁 Retrieved value:", value);
    await redis.quit();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error during Redis operations:", err);
    process.exit(1);
  }
})();

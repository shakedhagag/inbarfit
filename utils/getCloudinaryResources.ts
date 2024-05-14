export async function getCloudinaryResources() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_SECRET).toString("base64")}`,
      },
    },
  ).then((r) => r.json());
  console.log(results.resources);
  return results.resources;
}

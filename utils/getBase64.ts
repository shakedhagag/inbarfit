"use server";

import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl: string) {
  try {
    const buffer = await fetch(imageUrl).then(async (res) =>
      Buffer.from(await res.arrayBuffer()),
    );

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e);
  }
}

export interface CldImg {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: "image";
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
  blurredDataUrl: string;
}
export default async function addBlurredDataUrls(): Promise<[]> {
  const images = await getCloudinaryResources();
  const base64Promises = images.map((photo: CldImg) => getBase64(photo.url));
  console.log(images);
  const base64Results = await Promise.all(base64Promises);
  const photosWithBlur = images.map((photo: CldImg, i: number) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });
  console.log(photosWithBlur);
  return photosWithBlur;
}

export async function getCloudinaryResources() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?max_results=30`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_SECRET).toString("base64")}`,
      },
    },
  ).then((r) => r.json());
  console.log(results.resources);
  return results.resources;
}

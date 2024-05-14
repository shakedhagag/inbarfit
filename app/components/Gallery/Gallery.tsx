"use client";
import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Card,
} from "@nextui-org/react";
import { CldImage } from "next-cloudinary";
import addBlurredDataUrls from "@/utils/getBase64";
import { CldImg } from "@/utils/getBase64";

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Gallery({ isOpen, onClose }: GalleryProps) {
  const [images, setImages] = useState<CldImg[]>([]);
  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const res = await addBlurredDataUrls();
        setImages(res);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImgs();
  }, []);

  if (!images?.length) return null;
  return (
    <Modal
      size="5xl"
      backdrop="blur"
      // placement="bottom"
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="outside"
    >
      <ModalContent className="p-4">
        <ModalHeader>גלריה</ModalHeader>
        <ModalBody className="grid grid-cols-4 ">
          {images.map((img) => {
            return (
              <Card
                className="relative place-self-center overflow-hidden w-56 h-56 m-2 group"
                key={img.asset_id}
              >
                <CldImage
                  alt="image"
                  fill
                  src={img.url}
                  className="object-cover group-hover:opacity-75"
                  placeholder="blur"
                  blurDataURL={img.blurredDataUrl}
                  loading="lazy"
                  sizes="(min-width: 480px ) 50vw,
          (min-width: 728px) 33vw,
          (min-width: 976px) 25vw,
          100vw"
                />
              </Card>
            );
          })}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

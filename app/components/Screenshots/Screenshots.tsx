import React, { Suspense, useEffect, useState } from "react";
import { Card, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import Image from "next/image";
import screenshots from "@/utils/screenshots";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
interface ImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}

interface ImportedImage {
  default: ImageData;
}

type ImportedImages = ImportedImage[];

export default function Screenshots() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const [modalImg, setModalImg] = useState<ImportedImage>(
    screenshots[0] as ImportedImage,
  );

  useEffect(() => {
    let controls;
    let finalPosition = Math.min(-width / 2 - 8, -window.innerWidth + width);
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 70,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslation, width]);
  return (
    <motion.div
      ref={ref}
      style={{ x: xTranslation }}
      className=" max-w-screen absolute left-0 flex gap-4 "
    >
      {[
        ...(screenshots as ImportedImages),
        ...(screenshots as ImportedImages),
      ].map((img: ImportedImage, i: number) => {
        return (
          <Suspense key={i} fallback={<>Loading...</>}>
            <Card
              isPressable
              className=" place-self-center  w-56 h-72 m-2 group"
              key={i}
              onPress={() => {
                setOpenPhotoModal(true);
                setModalImg(img);
              }}
            >
              <Image
                alt="image"
                fill
                src={img.default.src}
                className="object-cover group-hover:opacity-75"
                placeholder="blur"
                blurDataURL={img.default.blurDataURL}
                loading="lazy"
                sizes="(min-width: 480px ) 50vw,
          (min-width: 728px) 33vw,
          (min-width: 976px) 25vw,
          100vw"
              />
            </Card>
          </Suspense>
        );
      })}
      <Modal
        size="lg"
        isOpen={openPhotoModal}
        onOpenChange={setOpenPhotoModal}
        backdrop="blur"
      >
        <ModalContent>
          <>
            <ModalBody>
              <Image
                alt="image"
                width={modalImg?.default.width}
                height={modalImg?.default.height}
                src={modalImg?.default?.src}
                placeholder="blur"
                blurDataURL={modalImg?.default.blurDataURL}
                loading="lazy"
                sizes="(min-width: 480px ) 50vw,
                      (min-width: 728px) 33vw,
                      (min-width: 976px) 25vw,
                      100vw"
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </motion.div>
  );
}

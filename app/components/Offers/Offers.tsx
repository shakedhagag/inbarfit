import React from "react";
import { Container } from "../ui/Container";
import {
  Card,
  Badge,
  CardBody,
  Button,
  CardFooter,
  Link,
  Modal,
  ModalContent,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";
import { useIsMobile } from "@/utils/useIsMobile";

export const Offers = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isMobile = useIsMobile();
  return (
    <>
      <Container className="flex flex-col gap-4 items-center mt-8 ">
        <Card className="flex w-full items-center p-4">
          <CardBody className="flex-col md:flex-row justify-evenly items-center gap-4">
            <div className="flex flex-col justify-between items-center gap-8 ">
              <Badge
                isOneChar
                content={<CheckIcon />}
                color="success"
                placement="bottom-right"
              >
                <p className="text-3xl text-center">אימונים בסטודיו בוטיק</p>
              </Badge>
            </div>
            <div className="flex flex-col justify-between items-center  gap-4">
              <Badge
                isOneChar
                content={<CheckIcon />}
                color="success"
                placement="bottom-right"
              >
                <p className="text-center text-3xl">
                  ליווי תזונתי לירידה במשקל/ חיטוב
                </p>
              </Badge>
            </div>
            <div className="flex flex-col justify-between items-center  gap-8">
              <Badge
                isOneChar
                content={<CheckIcon />}
                color="success"
                placement="bottom-right"
              >
                <p className="text-3xl text-center">קאוצינג (אימון מנטלי)</p>
              </Badge>
            </div>
          </CardBody>
          <CardFooter className="p-2 gap-2 justify-center">
            <Button onPress={onOpen} variant="flat">
              מערכת שעות לדוגמה
            </Button>
            <Button color="success">
              <Link className="" href="https://tinyurl.com/58jubfw8">
                <span className="text-sm text-white font-medium">
                  לפרטים נוספים
                </span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </Container>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          <Image src="/images/luz.png" />
        </ModalContent>
      </Modal>
    </>
  );
};

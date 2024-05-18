import React from "react";
import Card from "../ui/Card";
import { useIsMobile } from "@/utils/useIsMobile";

export default function WorkoutTypes() {
  const isMobile = useIsMobile();
  return (
    <div className="flex w-100  justify-center p-2 min-h-[40vh]">
      <Card
        images={[
          "/images/workoutTypes/kickbox1.JPG",
          "/images/workoutTypes/kickbox2.JPG",
        ]}
        header="Kickbox"
        className="w-full"
      />
      <Card
        images={[
          "/images/workoutTypes/pilates1.JPG",
          "/images/workoutTypes/pilates2.JPG",
        ]}
        header="Pilates"
        className="w-full"
      />
      <Card
        images={[
          "/images/workoutTypes/functional1.JPG",
          "/images/workoutTypes/functional2.JPG",
        ]}
        header="Functional"
        className="w-full"
      />
      {!isMobile && (
        <Card
          images={[
            "/images/workoutTypes/yoga1.JPG",
            "/images/workoutTypes/yoga1.JPG",
          ]}
          header="Yoga"
          className="w-full"
        />
      )}
    </div>
  );
}

import * as React from "react";
import SuccessCard from "./ui/SuccessCard";
import Autoplay from "embla-carousel-autoplay";

import { useContext } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AppContext } from "@/context/AppContext";

function SucessStory() {
  const { feedbacks } = useContext(AppContext);
  return (
    <div className="flex justify-center">
      <Carousel className="w-full" plugins={[
        Autoplay({
          delay:2000,
          stopOnInteraction:false
        })
      ]}>

        <CarouselContent>
          {feedbacks.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <SuccessCard key={index} item={item}></SuccessCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
}

export default SucessStory;

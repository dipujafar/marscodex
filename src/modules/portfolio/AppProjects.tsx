"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { servicesData } from "@/components/utils/services-data";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "@/components/utils/portfolioData";
const AppProjects = () => {
  const appProject = portfolioData?.filter((project)=> project?.type === "app" )
  return (
    <div className="flex flex-col justify-center items-center ">
      <Carousel
        opts={{
          loop: true,
          duration: 55,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full md:mt-8 mt-4"
      >
        <CarouselContent>
          {portfolioData?.map((data) => (
            <CarouselItem key={data?.id} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <ProjectCard data={data}></ProjectCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AppProjects;

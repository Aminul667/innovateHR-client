import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const AdminCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%]"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card className="pt-3">
                <CardContent className="">
                  {/* avatar content */}
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="size-14">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Full Name</p>
                      <p className="font-semibold">Frontend Developer</p>
                    </div>
                  </div>
                  <Badge variant="destructive">On sickness leave</Badge>
                  <div className="mt-3 flex flex-col gap-2">
                    <p className="text-sm font-semibold">
                      Taken annual leave 3
                    </p>
                    <p className="text-sm font-semibold">
                      Taken sickness leave 2
                    </p>
                    <p className="text-sm font-semibold">Taken TOIL leave 0</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4" />
      <CarouselNext className="mr-4" />
    </Carousel>
  );
};

export default AdminCarousel;

"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const projects = [
  {
    title: "Public News Net",
    description:
      "This is a reddit structure based project that i made using Ruby on Rails .",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPoKQ22LfSLNq2AmIU4iUns5FRcIEtYD05g&s",
    link: "https://github.com/asdfghjA1/BOBO",
    offline: true,
    offlineMessage: "This project is offline and has been discontinued.",
  },
  {
    title: "AI Image Generator",
    description: "This is just a basic AI image generator .",
    image: "/generated-image.png",
    link: "https://img.whiteye.in/",
  },
  {
    title: "FnBC Agency",
    description:
      "This is agency i co-lead with my friends and i work as a lead developer ",
      Updated: true,
      UpdatedMessage:
        "This page is not production ready yet but its good enough for a overview .",
    image: "/agency.png",
    link: "https://fnbc.vercel.app",
  },
  {
    title: "Youtube Automation Bot",
    description:
      "This is a youtube automation bot that me and my friend pulled out that scrapes top clips from streaming services and pasturises them to modern BRAINROT content that kids specially in todays day love to watch ",
    multipleSender: true,
    multipleSenderMessage:
      "Do you wana go to the youtube channel or the github page",
    image:
      "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
    link1: "https://www.youtube.com/@WallmartBag-p2b",
    link2: "https://github.com/asdfghjA1/m5-automation",
  },
];

export default function Projects() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">My Projects</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex-shrink-0">
              <CardTitle className="text-lg font-medium">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="relative aspect-[16/9] mb-4 flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-base text-muted-foreground mb-4">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              {project.offline ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full">View Project</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Project Offline</AlertDialogTitle>
                      <AlertDialogDescription>
                        {project.offlineMessage}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Link href={project.link}>Continue to GitHub</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : project.multipleSender ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full">View Project</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Multiple Senders</AlertDialogTitle>
                      <AlertDialogDescription>
                        {project.multipleSenderMessage}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Link href={project.link1}>Youtube Channel</Link>
                      </AlertDialogAction>

                      <AlertDialogAction asChild>
                        <Link href={project.link2}>Continue to GitHub</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : project.Updated ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full">View Project</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Multiple Senders</AlertDialogTitle>
                      <AlertDialogDescription>
                        {project.UpdatedMessage}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Link href={project.link}>View .</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button asChild className="w-full">
                  <Link href={project.link || "#"}>View Project</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

"use client"
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter
} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { HeartIcon } from "./HeartIcon";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GitHubIcon, DiscordIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { useEffect,useCallback } from "react";
import styles from '../styles/styles.module.css'
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

export default function Proyectos() {
	const [likedStates, setLikedStates] = React.useState([false, false, false, false,false,false]);
  const [isHovered, setIsHovered] = React.useState([false, false, false, false,false,false]);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    
 

  const handleLikeClick = useCallback(
    (index) => {
      const newLikedStates = [...likedStates];
      newLikedStates[index] = !newLikedStates[index];
      setLikedStates(newLikedStates);
    },
    [likedStates]
  );

  return (
    <section className="items-center">
      <div className="mt-4 text-center ">
        <h1 className={title()}>Proyectos&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Dev&nbsp;</h1>
      </div>
      <Divider className="mt-4"/>
	<section className="grid grid-cols-2 gap-4 p-4">
       
   
	<Card  className={`w-full max-w-[400px] relative ${isHovered ? styles.hoveredCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
		<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Rick And Morty Soy Henry</p>
        <small className="text-default-500">Desarrollo full stack, front y back(DB postgresql)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        <AvatarGroup  gap-4  isBordered isGrid max={9}>        
          <Avatar src='/icons/axios.png'/>
          <Avatar src='/icons/css.png'/>
          <Avatar src='/icons/express.png'/>
          <Avatar src='https://github.com/johpaz/Portfolio/blob/1820833aee4034aaaae929710f009625247b3335/johpazdev/public/icons/HTML.png'/>
          <Avatar src='/icons/node.png'/>
          <Avatar src='/icons/postgresql.png'/>
          <Avatar src='/icons/react.png'/>
          <Avatar src='/icons/redux.png'/>
          <Avatar src='/icons/sequalize .png'/>
        </AvatarGroup>
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
        radius="full"
        variant="light"
		onPress={() => handleLikeClick(1)}
		>
        <HeartIcon
          className={likedStates[1] ? "[&>path]:stroke-transparent" : ""}
      		  fill={likedStates[1] ? "currentColor" : "none"}
        />
      </Button>
      </CardHeader>
      
      <CardBody>
        <div className="relative col-span-6 md:col-span-4">
          <video
            controls
            height={400}
            width="100%"
            autoPlay={isHovered && !isVideoPlaying} 
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            >
            <source
              src="/media/video2.webm"  
              type="video/webm"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </CardBody>
      
	  <CardFooter className="flex justify-center">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.discord}
            >
              <DiscordIcon />
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.rickandmorty}
            >
              <GitHubIcon />
            </Link>
           
          </CardFooter>
    </Card>
    <Card  className={`w-full max-w-[400px] relative ${isHovered ? styles.hoveredCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
	      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Pokemon Soy Henry</p>
        <small className="text-default-500">Desarrollo full stack, front y back(DB postgresql)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        
        <AvatarGroup className="items-justify ">        
          <Avatar src='/icons/axios.png'/>
          <Avatar src='/icons/css.png'/>
          <Avatar src='/icons/express.png'/>
          <Avatar src='/icons/HTML.png'/>
          <Avatar src='/icons/node.png'/>
          <Avatar src='/icons/postgresql.png'/>
          <Avatar src='/icons/react.png'/>
          <Avatar src='/icons/redux.png'/>
          <Avatar src='/icons/sequalize .png'/>
        </AvatarGroup>
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
        radius="full"
        variant="light"
        onPress={() => handleLikeClick(2)}
      >
        <HeartIcon
          className={likedStates[2] ? "[&>path]:stroke-transparent" : ""}
		  fill={likedStates[2] ? "currentColor" : "none"}
        />
      </Button>
      </CardHeader>
      
      <CardBody>
        <div className="relative col-span-6 md:col-span-4">
          <video
            controls
            height={400}
            width="100%"
          >
            <source
              src="/media/video1.webm"  
              type="video/webm"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </CardBody>
	  <CardFooter className="flex justify-center">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.discord}
            >
              <DiscordIcon />
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.pokemon}
            >
              <GitHubIcon />
            </Link>
           
          </CardFooter>
    </Card>
    <Card  className={`w-full max-w-[400px] relative ${isHovered ? styles.hoveredCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
	    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App ArtGas Monitor </p>
        <small className="text-default-500">Desarrollo en Android Studio, disponible en playStore</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        <AvatarGroup className="items-justify ">        
          <Avatar src='/icons/kotlin.png'/>
          <Avatar src='/icons/java.png'/>
        
        </AvatarGroup>
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
        radius="full"
        variant="light"
        onPress={() => handleLikeClick(3)}
      >
        <HeartIcon
          className={likedStates[3] ? "[&>path]:stroke-transparent" : ""}
		  fill={likedStates[3] ? "currentColor" : "none"}
        />
      </Button>
      </CardHeader>
      
      <CardBody className="items-center">
        <div className="relative items-center justify-center col-span-6 md:col-span-4">
          <video
            controls
            height={400}
            width={250}
          >
            <source
              src="/media/video4.mp4"  
              type="video/webm"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </CardBody>
	  <CardFooter className="flex justify-center">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.discord}
            >
              <DiscordIcon />
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.artgas}
            >
              <GitHubIcon />
            </Link>
           
          </CardFooter>
    </Card>
    <Card  className={`w-full max-w-[400px] relative ${isHovered ? styles.hoveredCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
	      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Traductor Libre</p>
        <small className="text-default-500">Desarrollo en Android Studio,disponible Apk(Voz a texto, texto a voz.)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        
        <AvatarGroup className="items-justify ">        
          <Avatar src='/icons/kotlin.png'/>
          <Avatar src='/icons/java.png'/>
          <Avatar src='/icons/firebase.png'/>
         
        </AvatarGroup>
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
        radius="full"
        variant="light"
        onPress={() => handleLikeClick(4)}
      >
        <HeartIcon
          className={likedStates[4] ? "[&>path]:stroke-transparent" : ""}
		  fill={likedStates[4] ? "currentColor" : "none"}
		  />
      </Button>
      </CardHeader>
      
      <CardBody className="items-center">
        <div className="relative  col-span-6 md:col-span-4">
          <video
            controls
			height={400}
            width={250}
          >
            <source
              src="/media/video3.mp4"  
              type="video/webm"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </CardBody>
	  <CardFooter className="flex justify-center">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.discord}
            >
              <DiscordIcon />
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GitHubIcon />
            </Link>
           
          </CardFooter>
    </Card>
	
    <Card  className={`w-full max-w-[400px] relative ${isHovered ? styles.hoveredCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
	      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Pokemon Soy Henry</p>
        <small className="text-default-500">Desarrollo full stack, front y back(DB postgresql)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        <AvatarGroup className="items-justify ">        
          <Avatar src='/icons/python.png'/>
          <Avatar src='/icons/pygame.png'/>
          </AvatarGroup>
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
        radius="full"
        variant="light"
        onPress={() => handleLikeClick(5)}
      >
        <HeartIcon
          className={likedStates[5] ? "[&>path]:stroke-transparent" : ""}
		  fill={likedStates[5] ? "currentColor" : "none"}
		  />
      </Button>
      </CardHeader>
      
      <CardBody className="items-center">
        <div className="relative  col-span-6 md:col-span-4">
          <video
            controls
			height={400}
            width={250}
          >
            <source
              src="/media/pygame.webm"  
              type="video/webm"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </CardBody>
	  <CardFooter className="flex justify-center">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.discord}
            >
              <DiscordIcon />
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.juego}
            >
              <GitHubIcon />
            </Link>
           
          </CardFooter>
	</Card>
	<Card  className={`w-full max-w-[400px] relative ${isHovered ? styles.hoveredCard : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
	      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Juego Naves</p>  
        <small className="text-default-500">Desarrollo en Pygame, Juego ejecutable en windows</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        <AvatarGroup className="items-justify">        
          <Avatar src='/icons/axios.png'/>
          <Avatar src='/icons/css.png'/>
          <Avatar src='/icons/express.png'/>
          <Avatar src='/icons/HTML.png'/>
          <Avatar src='/icons/node.png'/>
          <Avatar src='/icons/postgresql.png'/>
          <Avatar src='/icons/react.png'/>
          <Avatar src='/icons/redux.png'/>
          <Avatar src='/icons/sequalize.png'/>
          <Avatar src='/icons/chakra.png'/>
          <Avatar src='/icons/vite.png'/>
          <Avatar src='/icons/firebase.png'/>
        </AvatarGroup>
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
        radius="full"
        variant="light"
        onPress={() => handleLikeClick(6)}
      >
        <HeartIcon
          className={likedStates[6] ? "[&>path]:stroke-transparent" : ""}
		  fill={likedStates[6] ? "currentColor" : "none"}
		  />
      </Button>
      </CardHeader>
      
      <CardBody className="items-center">
        <div className="relative  col-span-6 md:col-span-4">
          <video
            controls
			height={500}
            width={280}
          >
            <source
              src="/media/Profinder.mp4"  
              type="video/webm"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </CardBody>
	  <CardFooter className="flex justify-center">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.discord}
            >
              <DiscordIcon />
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.profinder}
            >
              <GitHubIcon />
            </Link>
           
          </CardFooter>
    </Card>

	</section>
  <Divider className="mt-4"/>
    </section>
  );
}

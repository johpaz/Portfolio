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
import postgress from '../public/icons/postgresql.png'
import axios from '../public/icons/axios.png'
import react from '../public/icons/react.png'
import redux from '../public/icons/redux.png'
import js from '../public/icons/js.png'
import ts from '../public/icons/ts.png'
import express from '../public/icons/express.png'
import kotlin from '../public/icons/kotlin.png'
import java from '../public/icons/java.png'
import css from '../public/icons/css.png'
import html from '../public/icons/HTML.png'
import sequalize from '../public/icons/sequalize.png'
import firebase from '../public/icons/firebase.png'
import python from '../public/icons/python.png'
import pygame from '../public/icons/pygame.png'
import node from '../public/icons/node.png'
import vite from '../public/icons/vite.svg'
import chakra from '../public/icons/chakra.png'




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
              <Avatar src={axios}/>
              <Avatar src={css}/>
              <Avatar src={express}/>
              <Avatar src={html}/>
              <Avatar src={node}/>
              <Avatar src={postgress}/>
              <Avatar src={react}/>
              <Avatar src={redux}/>
              <Avatar src={sequalize}/>
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
              <Avatar src={axios}/>
              <Avatar src={css}/>
              <Avatar src={express}/>
              <Avatar src={html}/>
              <Avatar src={node}/>
              <Avatar src={postgress}/>
              <Avatar src={react}/>
              <Avatar src={redux}/>
              <Avatar src={sequalize}/>
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
              <Avatar src={kotlin}/>
              <Avatar src={java}/>
            
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
              <Avatar src={kotlin}/>
              <Avatar src={java}/>
              <Avatar src={firebase}/>
            
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
            <p className="text-tiny uppercase font-bold">App Juego Naves</p>  
            <small className="text-default-500">Desarrollo en Pygame, Juego ejecutable en windows</small>
            <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
            <AvatarGroup className="items-justify ">        
              <Avatar src={python}/>
              <Avatar src={pygame}/>
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
            <p className="text-tiny uppercase font-bold">App Profinder</p>  
            <small className="text-default-500">App que conecta profesionales que ofrecen servicios, con clientes que tienen la necesidad</small>
            <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
            <AvatarGroup className="items-justify">        
              <Avatar src={axios}/>
              <Avatar src={css}/>
              <Avatar src={express}/>
              <Avatar src={html}/>
              <Avatar src={node}/>
              <Avatar src={postgress}/>
              <Avatar src={react}/>
              <Avatar src={redux}/>
              <Avatar src={sequalize}/>
              <Avatar src={chakra}/>
              <Avatar src={vite}/>
              <Avatar src={firebase}/>
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

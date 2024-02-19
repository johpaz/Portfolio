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
import { GitHubIcon, DiscordIcon, GooglePlayIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { useEffect,useCallback } from "react";
import styles from '../styles/styles.module.css'
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";

export default function Proyectos() {
	const [likedStates, setLikedStates] = React.useState([false, false, false, false,false,false]);
  const [isHovered,   setIsHovered] = React.useState([false, false, false, false,false,false]);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    
 

  const handleLikeClick = useCallback(
    (index:number) => {
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

  <Card isPressable className={`w-full max-w-[400px] relative `}
      
      >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">App Agroinsumos</p>  
          <small className="text-default-500 mt-8">App de seguimiento de ordenes de compra en el proceso logistica para el cliente y proceso interno. WorkFlow</small>
          <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
          <AvatarGroup max={15} className="grid grid-cols-8  gap-4 justify-center mt-4 mb-4">        
                <Tooltip content="JavaScript">
                <Avatar radius="md"  src='/icons/js.png'/>
                </Tooltip>
                <Tooltip content="CSS">
                <Avatar radius="md" src='/icons/css.png'/>
                </Tooltip>
                <Tooltip content="HTLM">
                <Avatar radius="md" src='/icons/HTML.png'/>
                </Tooltip>
                <Tooltip content="React">
                <Avatar radius="md" src='/icons/react.png'/>
                </Tooltip>
                <Tooltip content="Redux">
                <Avatar radius="md" src='/icons/redux.png'/>
                </Tooltip>
                <Tooltip content="Chakra UI">
                <Avatar radius="md" src='/icons/chakra.png'/>
                </Tooltip>
                <Tooltip content="Vite" >
                <Avatar radius="md" src='/icons/vite.png'/>
                </Tooltip>
                <Tooltip content="Axios">
                <Avatar radius="md" src='/icons/axios.png'/>
                </Tooltip>
                <Tooltip content="Express">
                <Avatar radius="md" src='/icons/express.png'/>
                </Tooltip>
                <Tooltip content="Node">
                <Avatar radius="md" src='/icons/node.png'/>
                </Tooltip>
                <Tooltip content="Sequelize">
                <Avatar radius="md" src='/icons/sequelize.png'/>
                </Tooltip>
                <Tooltip content="Postgresql">
                <Avatar radius="md" src='/icons/postgresql.png'/>
                </Tooltip>
                <Tooltip content="Nodemailer">
                <Avatar radius="md" src='/icons/nodemailer.png'/>
                </Tooltip>
                <Tooltip content="GoogleAuth">
                <Avatar radius="md" src='/icons/googleIcon.jpg'/>
                </Tooltip>
          </AvatarGroup>
        <Button
          isIconOnly
          className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
          radius="full"
          variant="light"
          onPress={() => handleLikeClick(8)}
        >
          <HeartIcon
            className={likedStates[8] ? "[&>path]:stroke-transparent" : ""}
            fill={likedStates[8] ? "currentColor" : "none"}
            width = {100}
            height = {100} 
        />
        </Button>
        </CardHeader>
        
        <CardBody className="items-center">
          <div className="relative  col-span-6 md:col-span-4">
            <video
              controls
              height="100%"
              width="100%"
            >
              <source
                src="/media/logisticaMercantil.webm" 
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
                href={siteConfig.links.logisticaMercantil}
              >
                <GitHubIcon />
              </Link>
             
            </CardFooter>
  </Card>
  <Card isPressable className={`w-full max-w-[400px] relative `}
      
      >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">App Logistica Mercantil</p>  
          <small className="text-default-500 mt-8">App de integracion de transportadores para la generacion de envios, recogidas, manifiesto de las distintas transportadoras, a su vez hacer seguimiento de los despachos.</small>
          <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
          <AvatarGroup max={15} className="grid grid-cols-8  gap-4 justify-center mt-4 mb-4">        
                <Tooltip content="JavaScript">
                <Avatar radius="md"  src='/icons/js.png'/>
                </Tooltip>
                <Tooltip content="CSS">
                <Avatar radius="md" src='/icons/css.png'/>
                </Tooltip>
                <Tooltip content="HTLM">
                <Avatar radius="md" src='/icons/HTML.png'/>
                </Tooltip>
                <Tooltip content="React">
                <Avatar radius="md" src='/icons/react.png'/>
                </Tooltip>
                <Tooltip content="Redux">
                <Avatar radius="md" src='/icons/redux.png'/>
                </Tooltip>
                <Tooltip content="Chakra UI">
                <Avatar radius="md" src='/icons/chakra.png'/>
                </Tooltip>
                <Tooltip content="Vite" >
                <Avatar radius="md" src='/icons/vite.png'/>
                </Tooltip>
                <Tooltip content="Axios">
                <Avatar radius="md" src='/icons/axios.png'/>
                </Tooltip>
                <Tooltip content="Express">
                <Avatar radius="md" src='/icons/express.png'/>
                </Tooltip>
                <Tooltip content="Node">
                <Avatar radius="md" src='/icons/node.png'/>
                </Tooltip>
                <Tooltip content="Sequelize">
                <Avatar radius="md" src='/icons/sequelize.png'/>
                </Tooltip>
                <Tooltip content="Postgresql">
                <Avatar radius="md" src='/icons/postgresql.png'/>
                </Tooltip>
                <Tooltip content="Nodemailer">
                <Avatar radius="md" src='/icons/nodemailer.png'/>
                </Tooltip>
                <Tooltip content="Leaflet">
                <Avatar radius="md" src='/icons/leaflet.png'/>
                </Tooltip>
                <Tooltip content="GoogleAuth">
                <Avatar radius="md" src='/icons/googleIcon.jpg'/>
                </Tooltip>
          </AvatarGroup>
        <Button
          isIconOnly
          className="text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4"
          radius="full"
          variant="light"
          onPress={() => handleLikeClick(7)}
        >
          <HeartIcon
            className={likedStates[7] ? "[&>path]:stroke-transparent" : ""}
            fill={likedStates[7] ? "currentColor" : "none"}
            width = {100}
            height = {100} 
        />
        </Button>
        </CardHeader>
        
        <CardBody className="items-center">
          <div className="relative  col-span-6 md:col-span-4">
            <video
              controls
              height="100%"
              width="100%"
            >
              <source
                src="/media/agroinsumos.webm"  
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
                href={siteConfig.links.agroinsumos}
              >
                <GitHubIcon />
              </Link>
             
            </CardFooter>
      </Card>
 

  <Card isPressable className={`w-full max-w-[400px] relative `}
      
      >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">App Profinder</p>  
          <small className="text-default-500 mt-8">App para que los profesionales ofrezcan sus servicios a cliente que a su vez pueden publicar sus necesidades.</small>
          <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
          <AvatarGroup max={15} className="grid grid-cols-8  gap-4 justify-center mt-4 mb-4">        
                <Tooltip content="JavaScript">
                <Avatar radius="md"  src='/icons/js.png'/>
                </Tooltip>
                <Tooltip content="CSS">
                <Avatar radius="md" src='/icons/css.png'/>
                </Tooltip>
                <Tooltip content="HTLM">
                <Avatar radius="md" src='/icons/HTML.png'/>
                </Tooltip>
                <Tooltip content="React">
                <Avatar radius="md" src='/icons/react.png'/>
                </Tooltip>
                <Tooltip content="Redux">
                <Avatar radius="md" src='/icons/redux.png'/>
                </Tooltip>
                <Tooltip content="Chakra UI">
                <Avatar radius="md" src='/icons/chakra.png'/>
                </Tooltip>
                <Tooltip content="Vite" >
                <Avatar radius="md" src='/icons/vite.png'/>
                </Tooltip>
                <Tooltip content="Axios">
                <Avatar radius="md" src='/icons/axios.png'/>
                </Tooltip>
                <Tooltip content="Express">
                <Avatar radius="md" src='/icons/express.png'/>
                </Tooltip>
                <Tooltip content="Node">
                <Avatar radius="md" src='/icons/node.png'/>
                </Tooltip>
                <Tooltip content="Sequelize">
                <Avatar radius="md" src='/icons/sequelize.png'/>
                </Tooltip>
                <Tooltip content="Postgresql">
                <Avatar radius="md" src='/icons/postgresql.png'/>
                </Tooltip>
                <Tooltip content="Nodemailer">
                <Avatar radius="md" src='/icons/nodemailer.png'/>
                </Tooltip>
                <Tooltip content="Leaflet">
                <Avatar radius="md" src='/icons/leaflet.png'/>
                </Tooltip>
                <Tooltip content="GoogleAuth">
                <Avatar radius="md" src='/icons/googleIcon.jpg'/>
                </Tooltip>
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
            width = {100}
            height = {100} 
        />
        </Button>
        </CardHeader>
        
        <CardBody className="items-center">
          <div className="relative  col-span-6 md:col-span-4">
            <video
              controls
              height="100%"
              width="100%"
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
  
	<Card  className={`w-full max-w-[400px] relative ${!isHovered ? styles.hoveredCard : ''}`}
     >
		<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Rick And Morty Soy Henry</p>
        <small className="text-default-500">Desarrollo full stack, front y back(DB postgresql)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        <AvatarGroup max={12} className="flex grid grid-cols-6  gap-4 items-center mt-4">        
              <Tooltip content="JavaScript">
              <Avatar radius="md"  src='/icons/js.png'/>
              </Tooltip>
              <Tooltip content="CSS">
              <Avatar radius="md" src='/icons/css.png'/>
              </Tooltip>
              <Tooltip content="HTLM">
              <Avatar radius="md" src='/icons/HTML.png'/>
              </Tooltip>
              <Tooltip content="React">
              <Avatar radius="md" src='/icons/react.png'/>
              </Tooltip>
              <Tooltip content="Redux">
              <Avatar radius="md" src='/icons/redux.png'/>
              </Tooltip>
              <Tooltip content="Axios">
              <Avatar radius="md" src='/icons/axios.png'/>
              </Tooltip>
              <Tooltip content="Express">
              <Avatar radius="md" src='/icons/express.png'/>
              </Tooltip>
              <Tooltip content="Node">
              <Avatar radius="md" src='/icons/node.png'/>
              </Tooltip>
              <Tooltip content="Sequelize">
              <Avatar radius="md" src='/icons/sequelize.png'/>
              </Tooltip>
              <Tooltip content="Postgresql">
              <Avatar radius="md" src='/icons/postgresql.png'/>
              </Tooltip>
           
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
          width = {100}
          height = {100} 
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
    <Card  className={`w-full max-w-[400px] relative ${!isHovered ? styles.hoveredCard : ''}`}
     
    >
	      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Pokemon Soy Henry</p>
        <small className="text-default-500">Desarrollo full stack, front y back(DB postgresql)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        
        <AvatarGroup max={12} className="flex grid grid-cols-6  gap-4 items-center mt-4">        
        <Tooltip content="JavaScript">
              <Avatar radius="md"  src='/icons/js.png'/>
              </Tooltip>
              <Tooltip content="CSS">
              <Avatar radius="md" src='/icons/css.png'/>
              </Tooltip>
              <Tooltip content="HTLM">
              <Avatar radius="md" src='/icons/HTML.png'/>
              </Tooltip>
              <Tooltip content="React">
              <Avatar radius="md" src='/icons/react.png'/>
              </Tooltip>
              <Tooltip content="Redux">
              <Avatar radius="md" src='/icons/redux.png'/>
              </Tooltip>
              <Tooltip content="Axios">
              <Avatar radius="md" src='/icons/axios.png'/>
              </Tooltip>
              <Tooltip content="Express">
              <Avatar radius="md" src='/icons/express.png'/>
              </Tooltip>
              <Tooltip content="Node">
              <Avatar radius="md" src='/icons/node.png'/>
              </Tooltip>
              <Tooltip content="Sequelize">
              <Avatar radius="md" src='/icons/sequelize.png'/>
              </Tooltip>
              <Tooltip content="Postgresql">
              <Avatar radius="md" src='/icons/postgresql.png'/>
              </Tooltip>
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
          width = {100}
          height = {100} 
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
    <Card  className={`w-full max-w-[400px] relative ${!isHovered ? styles.hoveredCard : ''}`}
  
  >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">App Juego Naves</p>  
      <small className="text-default-500">Desarrollo en Pygame, Juego ejecutable en windows</small>
      <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
      <AvatarGroup max={3} className="flex grid grid-cols-6  gap-4 items-center mt-4">        
          <Tooltip content="Python">
            <Avatar radius="md" src='/icons/python.png'/>
            </Tooltip>
            <Tooltip content="Pygame">
              <Avatar radius="md" src='/icons/pygame.png'/>
            </Tooltip>
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
        width = {100}
        height = {100}
    />
    </Button>
    </CardHeader>
    
    <CardBody className="items-center">
      <div className="relative  col-span-6 md:col-span-4">
        <video
          controls
          height={400}
          width="100%"
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
    <Card  className={`w-full max-w-[400px] relative ${!isHovered ? styles.hoveredCard : ''}`}
      >
	    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App ArtGas Monitor </p>
        <small className="text-default-500">Desarrollo en Android Studio, disponible en playStore</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        <AvatarGroup max={3} className="flex grid grid-cols-6  gap-4 items-center mt-4">        
              <Tooltip content="Java">
              <Avatar radius="md"  src='/icons/java.png'/>
              </Tooltip>
              <Tooltip content="Kotlin" >
              <Avatar radius="md"  src='/icons/kotlin.png'/>
              </Tooltip>
        
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
          width = {100}
          height = {100} 
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
              href={siteConfig.links.artgas}
            >
              <GooglePlayIcon />
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
    <Card  className={`w-full max-w-[400px] relative ${!isHovered ? styles.hoveredCard : ''}`}
    
    >
	      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">App Traductor Libre</p>
        <small className="text-default-500">Desarrollo en Android Studio,disponible Apk(Voz a texto, texto a voz.)</small>
        <h4 className="font-bold text-medium">App desarrollada con las siguientes tecnologias:</h4>
        
        <AvatarGroup max={3} className="flex grid grid-cols-6  gap-4 items-center mt-4">        
              <Tooltip content="Java">
              <Avatar radius="md"  src='/icons/java.png'/>
              </Tooltip>
              <Tooltip content="Kotlin" >
              <Avatar radius="md"  src='/icons/kotlin.png'/>
              </Tooltip>
              <Tooltip content="FireBase">
               <Avatar radius="md" src='/icons/firebase.png'/>
              </Tooltip>
         
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
          width = {100}
          height = {100} 
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
	
 

	</section>
  <Divider className="mt-4"/>
    </section>
  );
}

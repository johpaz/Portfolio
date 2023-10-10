import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GitHubIcon, DiscordIcon, LinkedInIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import Proyectos from "@/components/Proyectos";
import ContactForm from "@/components/FormContact";
import styles from '../styles/styles.css'
import '../styles/animations.css'
import { Avatar } from "@nextui-org/avatar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10">
      <Divider/>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card className={` card ${styles.card} max-w-[640px]`} >
          <Skeleton className="w-full h-full rounded-xl">
            <div className="h-5 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <CardHeader className="text-left items-left" >
            <h1 className={title()}>Johpaz&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>Dev&nbsp;</h1>
          </CardHeader>

          <CardBody className="grid grid-cols-2   items-center  ">
            {/* Sección izquierda: imagen, título y subtítulo */}
            <section className="flex flex-col items-start justify-center mr-8 w-3/4"> {/* Ajusta el ancho según tus necesidades */}
              <Avatar
                className="w-64 h-64 mx-auto rounded-full mb-4"
                src="/johpazpe.jpeg"
                />
              <h1 className={`text-center justify-center font-semibold text-teal-500 mb-2 ${subtitle()}`}>Desarrollador Full Stack</h1>
              
            </section>

            {/* Sección derecha: párrafos */}
            <section className="flex flex-col items-start justify-center"> {/* Ajusta el ancho según tus necesidades */}
              <h2 className={title({ color: "violet" })}>
                Convirtiendo ideas en soluciones tecnológicas.
              </h2> 
              <p className="mt-4 font-semibold text-left fadeInLeft">
                Apasionado por la tecnología, el desarrollo web y aplicaciones móviles.
              </p>
              <p className="mt-4 font-semibold text-left fadeInLeft">
                 Me especializo en convertir ideas creativas en soluciones tecnológicas innovadoras
                y funcionales. 
              </p>
              <p className="mt-4 font-semibold text-left fadeInLeft">Con habilidades tanto en el front-end como en el back-end, estoy 
                comprometido a crear experiencias de usuario excepcionales y aplicaciones robustas.
              </p>
              <p className="mt-4 font-semibold text-left fadeInLeft">
                ¡Permíteme transformar tus ideas en realidad!
              </p>
            </section>
          </CardBody>


          <Divider />
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
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.linkedin}
            >
              <LinkedInIcon />
            </Link>
          </CardFooter>
        </Card>
      </section>
      <Divider/>
    <Proyectos/>
    <Divider/>
    <ContactForm/>
    </section>
  );
}

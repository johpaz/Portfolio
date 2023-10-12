import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GitHubIcon, DiscordIcon, LinkedInIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import Proyectos from "@/components/Proyectos";
import ContactForm from "@/components/FormContact";
import styles from '../styles/styles.module.css'
import '../styles/animations.css'
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10">
      <Divider/>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card className={` card  max-w-[640px]`} >
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
          <CardFooter className="flex mt-4 grid grid-cols-2" >
          <h1 className={`text-center justify-center font-semibold  mb-2 ${subtitle()}`}>Tecnologias de Desarrollo </h1>
          <section className="flex grid " >
          <h2 className="text-2 font-semibold mt-4 mb-4 text-teal-500">Lenguajes de Programacion</h2>
          <AvatarGroup max={24} className="flex grid grid-cols-6  gap-4 items-center mt-4">
              <Tooltip content="Java">
              <Avatar radius="md"  src='/icons/java.png'/>
              </Tooltip>
              <Tooltip content="Kotlin" >
              <Avatar radius="md"  src='/icons/kotlin.png'/>
              </Tooltip>
              <Tooltip content="JavaScript">
              <Avatar radius="md"  src='/icons/js.png'/>
              </Tooltip>
              <Tooltip content="TypeScript" >
              <Avatar radius="md"  src='/icons/ts.png'/>
              </Tooltip>         
              <Tooltip content="Python">
              <Avatar radius="md" src='/icons/python.png'/>
              </Tooltip>
              <Tooltip content="Pygame">
                <Avatar radius="md" src='/icons/pygame.png'/>
              </Tooltip>
            </AvatarGroup>
          <h2 className="text-2 font-semibold mt-4 mb-4 text-teal-500">Herramientas Front End</h2>
            <AvatarGroup max={24} className="flex grid grid-cols-6   gap-4 items-center mt-4 ">
              <Tooltip content="Bootstrap ">
              <Avatar radius="md"  src='/icons/bootstrap.png'/>
              </Tooltip>
              <Tooltip content="Next UI">
              <Avatar radius="md"  src='/icons/nextui.png'/>
              </Tooltip>
              <Tooltip content="Next" >  
              <Avatar radius="md"  src='/icons/next.png'/>
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
              <Tooltip content="Nodemailer">
              <Avatar radius="md" src='/icons/nodemailer.png'/>
              </Tooltip>
              <Tooltip content="Leaflet">
              <Avatar radius="md" src='/icons/leaflet.png'/>
              </Tooltip>
              <Tooltip content="GoogleAuth">
              <Avatar radius="md" src='/icons/googleIcon.jpg'/>
              </Tooltip>
            </AvatarGroup >
            <h2 className="text-2 font-semibold mt-4 mb-4 text-teal-500">Herramientas Backend</h2>
            <AvatarGroup max={24} className="flex grid grid-cols-6  gap-4 items-center mt-4 ">
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
            </AvatarGroup>
            <h2 className="text-2 font-semibold mt-4 mb-4 text-teal-500">Bases De Datos</h2>
            <AvatarGroup max={24} className="flex grid grid-cols-6   gap-4 items-center mt-4 ">
              <Tooltip content="Postgresql">
              <Avatar radius="md" src='/icons/postgresql.png'/>
              </Tooltip>
              <Tooltip content="Mongo">
              <Avatar radius="md"  src='/icons/mongo.png'/>
              </Tooltip>
            </AvatarGroup>
            <h2 className="text-2 font-semibold mt-4 mb-4 text-teal-500">Tecnologias en la Nube</h2>
            <AvatarGroup max={24} className="flex grid grid-cols-6  gap-4 items-center mt-4">
              <Tooltip content="AWS">
              <Avatar radius="md" src='/icons/aws.png' alt="AWS" title="AWS"/>
              </Tooltip>
              <Tooltip content="FireBase">
               <Avatar radius="md" src='/icons/firebase.png'/>
              </Tooltip>
              <Tooltip content="ApiRest">
               <Avatar radius="md" src='/icons/apirest.png'/>
              </Tooltip>
            </AvatarGroup>
           
            </section>
          </CardFooter>
          <Divider/>
          <CardFooter className="flex grid grid-cols-3 items-center  gap-4 mt-4">
            <Tooltip content="Discord">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" }) }
              href={siteConfig.links.discord}
            >
              <DiscordIcon/>
            </Link>
            </Tooltip>
            <Tooltip content="Github">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GitHubIcon />
            </Link>
            </Tooltip>
            <Tooltip content="Linkedln">
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.linkedin}
            >
              <LinkedInIcon />
            </Link>
            </Tooltip>
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

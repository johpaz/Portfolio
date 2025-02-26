import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  VStack,
  HStack,
  Tag,
  Link,
  Avatar,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box); // Hacemos que Box sea un componente animado
const MotionSimpleGrid = motion(SimpleGrid);

const projects = [
  {
    title: "Tu Profe de IA",
    "description": "Tu Profe de IA es una aplicación web educativa que transforma la forma de aprender sobre inteligencia artificial. La plataforma ofrece cursos interactivos y adaptativos, combinando contenido multimedia, evaluaciones en tiempo real y módulos personalizados para facilitar un aprendizaje práctico y entretenido. Con un diseño intuitivo y recursos dinámicos, ayuda a los estudiantes a dominar conceptos de IA de manera sencilla y efectiva.",
    technologies: ["JavaScript", "React", "Vite", "Chakra UI", "Firebase", "API Service", "MongoDB"],
    repo: "https://github.com/johpaz/tuprofedeia",
    repoBack: "https://github.com/johpaz/tuprofedeiaApi",
    demo: "https://tuprofedeia.com.co",
    image: "tuprofedeia.jpeg",
    "challenges": "Integrar contenido interactivo y adaptativo de inteligencia artificial en una plataforma educativa, garantizando una experiencia de usuario fluida y personalizada.",
  "solutions": "Desarrollo de módulos de aprendizaje adaptativo basados en IA, integración de recursos multimedia y evaluaciones en tiempo real para potenciar el proceso educativo."
  },
  {
    title: "MateAventuras",
    description: "¡Aprender matemáticas nunca fue tan divertido! Una aventura educativa para niños de 4 a 6 años, donde aprenderán matemáticas a través de juegos, historias y desafíos emocionantes.",
    technologies: ["ELevenLabs", "Make", "Supabase", "Lovable"],
    repo: "https://github.com/johpaz/mateaventuras-happy-learning", // Actualiza con la URL real si aplica
    demo: "https://mateaventuras-happy-learning.lovable.app/",              // Actualiza con la URL real si aplica
    image: "/mateAventuras.jpeg",                          // Ruta a la imagen representativa
    challenges: "Integrar contenidos educativos interactivos y mantener el interés de los niños.",
    solutions: "Desarrollo de Agente de IA para entregar ejercicios interactivos, animaciones y contenido multimedia adaptativo."
  },
  {
    title: "GuIA",
    description: "Tu asistente latino inteligente para chat, imágenes y traducción. Facilita la comunicación, creación de contenido visual y traducción de textos.",
    technologies: ["React", "Chakra UI", "API de IA", "Node", "Express", "Hugging Face"],
    repo: "https://github.com/johpaz/GuIA",                // Actualiza según corresponda
    demo: "https://guia-orcin.vercel.app/",                       // Actualiza según corresponda
    image: "/guia.jpeg",                                   // Ruta a la imagen representativa
    challenges: "Ofrecer múltiples funcionalidades integradas en una sola herramienta.",
    solutions: "Integración de chat inteligente, generador de imágenes y traducción avanzada en una interfaz única."
  },
  {
    title: "Logística Mercantil",
    description: "App de integración de transporte",
    technologies: ["JavaScript", "Vite", "Chakra UI", "MongoDB", "API Service", "Web Service"],
    repo: "https://github.com/johpaz/logmer",
    repoBack: "https://github.com/johpaz/logmerBackVercel",
    demo: "https://logisticamercantil.com.co",
    image: "/logmer.png",
    challenges: "Integración con múltiples servicios de transporte",
    solutions: "Implementación de una capa de abstracción para unificar las diferentes APIs"
  },
  {
    title: "App Web Imágenes IA",
    description: "Aplicación web que integra imágenes generadas por IA.",
    technologies: ["React", "Chakra UI", "API de IA", "HugginFace","Node", "vercel"],
    repo: "https://github.com/johpaz/appWeb_ImagenesIA",
    demo: "https://app-web-imagenes-ia.vercel.app/",
    image: "/appImages.png",
    challenges: "Integrar y optimizar la generación de imágenes en tiempo real.",
    solutions: "Uso de servicios de API especializados y cacheo inteligente"
  },
  {
    title: "Sociedad Rekochera",
    description: "Plataforma web para reseñas y gestión de comunidad.",
    technologies: ["React", "Chakra UI", "Firebase", "Node", "MongoDb"],
    repo: "https://github.com/johpaz/sociedad-rekochera",
    demo: "https://sociedad-rekochera.vercel.app",
    image: "/rekocha.jpeg",
    challenges: "Crear una experiencia de usuario atractiva para la interacción de la comunidad.",
    solutions: "Implementación de un diseño responsive y una integración fluida con Firebase"
  },
  {
    title: "Al Instante",
    description: "Al Instante Colombia S.A.S. es una empresa especializada en mensajería y entrega de paquetes en Bogotá, Cundinamarca y a nivel nacional. Ubicados en Cota, gestionamos envíos a través de códigos QR, abarcando todo el proceso desde la recepción hasta la entrega.",
    technologies: ["JavaScript", "React", "Vite", "Chakra UI", "MongoDB"],
    repo: "https://github.com/johpaz/alinstanteFront",
    repoBack: "https://github.com/johpaz/alInstanteBack",
    demo: "https://www.alinstantecolombia.co/",
    image: "/alinstante.png",
    challenges: "Optimizar el seguimiento y la gestión de envíos en tiempo real utilizando códigos QR.",
    solutions: "Implementación de un sistema integral que facilita la trazabilidad de envíos en cada etapa del proceso logístico."
  },
  {
    title: "AgroService",
    "description": "AgroService es una plataforma integral que impulsa la integración económica y el desarrollo sostenible en Colombia. Trabajamos codo a codo con emprendedores y artesanos para crear redes colaborativas que promuevan la circularidad en los procesos productivos. Nuestro objetivo no solo es generar oportunidades económicas, sino también respetar el medio ambiente y mejorar el bienestar social en las comunidades. Al conectar directamente productores, artesanos y consumidores, facilitamos la visibilidad y comercialización de productos locales, optimizando la gestión de inventarios y fomentando redes colaborativas para impulsar el crecimiento económico sostenible.",
    technologies: ["JavaScript", "React", "Vite", "Chakra UI", "MongoDB", "React Native", "Node", "Express", "Firebase"],
    repo: "https://github.com/johpaz/agroserviceFront",
    repoBack: "https://github.com/johpaz/agroservice",
    repoMovil: "https://github.com/johpaz/agroserviceMobile",
    demo: "https://agroservice.com.co",
    image: "/agroservice.png",
    challenges: "Integrar múltiples funcionalidades en versiones web y móvil, facilitando la conexión entre productores, artesanos y consumidores.",
   solutions: "Implementación de una arquitectura de código compartido que optimiza la gestión colaborativa y la comercialización de productos locales."
  },
  
];

const ProjectCard = ({ project }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg={cardBg}
      borderColor={borderColor}
      boxShadow="md"
      whileHover={{ scale: 1.05, boxShadow: "lg" }}
      transition={{ duration: 0.3 }}
    >
      <Avatar src={project.image} alt={project.title} borderRadius="md" mb={4} />
      <VStack align="start" spacing={3}>
        <Heading as="h3" size="md">{project.title}</Heading>
        <Text fontSize="sm">{project.description}</Text>
        <HStack wrap="wrap">
          {project.technologies.map((tech, index) => (
            <Tag key={index} size="sm" colorScheme="blue" m={1}>
              {tech}
            </Tag>
          ))}
        </HStack>
        <Text fontSize="sm">
          <strong>Desafío:</strong> {project.challenges}
        </Text>
        <Text fontSize="sm">
          <strong>Solución:</strong> {project.solutions}
        </Text>
        <HStack>
          <Link href={project.repo} isExternal color="blue.500">
            GitHub Front <ExternalLinkIcon mx="2px" />
          </Link>
          {project.repoBack && (
            <Link href={project.repoBack} isExternal color="blue.500">
              GitHub Back <ExternalLinkIcon mx="2px" />
            </Link>
          )}
          {project.repoMovil && (
            <Link href={project.repoMovil} isExternal color="blue.500">
              GitHub Móvil <ExternalLinkIcon mx="2px" />
            </Link>
          )}
          <Link href={project.demo} isExternal color="green.500">
            Demo <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

const FeaturedProjects = () => {
  const bgColor = useColorModeValue('#E9F1FA', '#0C1A1A');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <MotionBox
      bg={bgColor}
      color={textColor}
      py={16}
      initial={{ opacity: 0 }} // Inicialmente oculto
      animate={{ opacity: 1 }} // Animación de aparición
      transition={{ duration: 1 }} // Duración de la transición
    >
      <Box maxWidth="1200px" margin="0 auto" px={4}>
        <Heading as="h2" size="2xl" mb={8} textAlign="center">
          Proyectos Destacados
        </Heading>
        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </MotionSimpleGrid>
      </Box>
    </MotionBox>
  );
};

export default FeaturedProjects;

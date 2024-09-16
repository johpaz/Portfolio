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
    title: "Logística Mercantil",
    description: "App de integración de transporte",
    technologies: ["JavaScript", "Vite", "Chakra UI", "MongoDB", "API Service", "Web Service"],
    repo: "https://github.com/johpaz/logmer",
    repoBack: "https://github.com/johpaz/logmerVercel",
    demo: "https://logistica-mercantil.com",
    image: "/logmer.png",
    challenges: "Integración con múltiples servicios de transporte",
    solutions: "Implementación de una capa de abstracción para unificar las diferentes APIs"
  },
  {
    title: "Al Instante",
    description: "App web de transporte",
    technologies: ["JavaScript", "React", "Vite", "Chakra UI", "MongoDB"],
    repo: "https://github.com/johpaz/alInstateFront",
    repoBack: "https://github.com/johpaz/logmerVercel",
    demo: "https://alinstante.com.co",
    image: "/alinstante.png",
    challenges: "Optimización de rutas en tiempo real",
    solutions: "Algoritmo personalizado de cálculo de rutas eficientes"
  },
  {
    title: "AgroService",
    description: "Aplicación web y móvil para conectar emprendedores del agro con compradores",
    technologies: ["JavaScript", "React", "Vite", "Chakra UI", "MongoDB", "React Native", "Node", "Express", "Firebase"],
    repo: "https://github.com/johpaz/agroservice",
    repoBack: "https://github.com/johpaz/logmerVercel",
    repoMovil: "https://github.com/johpaz/logmerVercel",
    demo: "https://agroservice.com.co",
    image: "/agroservice.png",
    challenges: "Desarrollo simultáneo de versiones web y móvil",
    solutions: "Arquitectura de código compartido entre plataformas"
  },
  {
    title: "Tu Profe de IA",
    description: "App web de cursos de IA",
    technologies: ["JavaScript", "React", "Vite", "Chakra UI", "Firebase", "API Service", "MongoDB"],
    repo: "https://github.com/johpaz/tuprofedeia",
    repoBack: "https://github.com/johpaz/tuprofedeiaApi",
    demo: "https://tuprofeia.com.co",
    image: "tuprofedeia.jpeg",
    challenges: "Integración de contenido interactivo de IA",
    solutions: "Desarrollo de módulos de aprendizaje adaptativo basados en IA"
  }
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

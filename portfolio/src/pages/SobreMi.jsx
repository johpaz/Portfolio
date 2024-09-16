import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Container,
  Icon,
  useColorModeValue,
  VStack,
  HStack,
  Tag,
  Grid,
  Tooltip
} from '@chakra-ui/react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionTag = motion(Tag);

const AboutMe = () => {
  const bgColor = useColorModeValue('#E9F1FA', '#0C1A1A');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const headingColor = useColorModeValue('purple.600', 'purple.300');

  const skills = [
    { name: 'JavaScript', tooltip: 'Lenguaje de programación versátil para el desarrollo web' },
    { name: 'React', tooltip: 'Biblioteca de JavaScript para construir interfaces de usuario' },
    { name: 'Node.js', tooltip: 'Entorno de ejecución para JavaScript en el servidor' },
    { name: 'Python', tooltip: 'Lenguaje de programación poderoso y fácil de aprender' },
    { name: 'HTML/CSS', tooltip: 'Lenguajes fundamentales para el desarrollo web' },
    { name: 'SQL', tooltip: 'Lenguaje de consulta para bases de datos relacionales' },
    { name: 'Git', tooltip: 'Sistema de control de versiones para la gestión de código fuente' },
    { name: 'React Native', tooltip: 'Framework para construir aplicaciones móviles con React' },
    { name: 'MongoDB', tooltip: 'Base de datos NoSQL para almacenamiento flexible de datos' },
  ];

  return (
    <Box id="about" bg={bgColor} py={20} as={MotionBox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Container maxW={'6xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              Sobre Mí
            </Heading>
            <Text fontSize="lg" color={textColor} mb={4}>
              Soy un desarrollador web y móvil con una profunda pasión por la creación de soluciones digitales innovadoras. Con una sólida experiencia en desarrollo frontend y backend, me encanta enfrentar desafíos técnicos y aprender nuevas tecnologías.
            </Text>
            <Text fontSize="lg" color={textColor} mb={6}>
              Mi objetivo es combinar mi conocimiento técnico con mi creatividad para desarrollar aplicaciones web y móviles que no solo funcionen a la perfección, sino que también ofrezcan una experiencia de usuario excepcional.
            </Text>
            <VStack align="start" spacing={6}>
              <HStack spacing={4}>
                <Icon as={FaGraduationCap} w={8} h={8} color="blue.500" />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold">Educación:</Text>
                  <Text fontSize="md">Grado en Desarrollo Web Full Stack, Soy Henry</Text>
                  <Text fontSize="md">Inteligencia Artificial y Deep Learning, IBM</Text>
                  <Text fontSize="md">Machine Learning y Data Science, IBM</Text>
                </VStack>
              </HStack>
              <HStack spacing={4}>
                <Icon as={FaBriefcase} w={8} h={8} color="green.500" />
                <Text fontWeight="bold">Experiencia:</Text>
                <Text fontSize="md">2 años como Desarrollador Web Full Stack</Text>
              </HStack>
              <HStack spacing={4}>
                <Icon as={FaCode} w={8} h={8} color="purple.500" />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold">Stack Tecnológico:</Text>
                  <Grid
                    templateColumns={{ base: 'repeat(auto-fill, minmax(120px, 1fr))', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}
                    gap={4}
                    >
                    {skills.map((skill) => (
                        <Tooltip key={skill.name} label={skill.tooltip} aria-label={`Tooltip for ${skill.name}`}>
                        <MotionTag size="md" variant="solid" colorScheme="blue" borderRadius="full" boxShadow="md" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                            {skill.name}
                        </MotionTag>
                        </Tooltip>
                    ))}
                    </Grid>

                </VStack>
              </HStack>
            </VStack>
          </Box>
          <Flex justify="center" align="center">
            <MotionImage
              rounded="full"
              alt="Tu foto profesional"
              src="/foto.jpg"
              boxSize="400px"
              objectFit="cover"
              shadow="2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.5 }}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutMe;

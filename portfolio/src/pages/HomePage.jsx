import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Button,
  Image,
  Stack,
  useColorModeValue,
  Tooltip,
  Tag,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { EmailIcon, DownloadIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

// Crear componentes animados
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionTag = motion(Tag);
const MotionButton = motion(Button);
const MotionImage = motion(Image);
const MotionIconButton = motion(IconButton);

const HomePage = () => {
  const bgColor = useColorModeValue('#E9F1FA', '#0C1A1A');
  const headingColor = useColorModeValue('purple.600', 'purple.300');
  const subHeadingColor = useColorModeValue('brand.blue', 'brand.lightBlue');
  const textColor = useColorModeValue('gray.600', 'gray.300');

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
    <Box id="home" minHeight="100vh" width="full" bg={bgColor } p={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        minHeight="100vh"
        px={8}
        maxWidth="1200px"
        margin="0 auto"
      >
        <Stack
          spacing={6}
          w={{ base: 'full', md: '50%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <MotionHeading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color={headingColor}
            textAlign={['center', 'center', 'left', 'left']}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hola, soy John Paez
          </MotionHeading>
          <MotionHeading
            as="h2"
            size="md"
            color={subHeadingColor}
            opacity={0.8}
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desarrollador web especializado en [Frontend/Backend/Fullstack]
          </MotionHeading>
          <MotionText
            fontSize="md"
            color={textColor}
            textAlign={['center', 'center', 'left', 'left']}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Convirtiendo ideas en soluciones tecnológicas. Apasionado por la tecnología, el desarrollo web y de aplicaciones móviles.
            <br /><br />
            Me especializo en convertir ideas creativas en soluciones tecnológicas innovadoras y funcionales. Con habilidades tanto en el front-end como en el back-end, estoy comprometido a crear experiencias de usuario excepcionales y aplicaciones robustas.
            <br /><br />
            ¡Permíteme transformar tus ideas en realidad!
          </MotionText>
          
          {/* Nueva Sección para Descargar el CV */}
          <Stack spacing={6} align="center">
            <MotionHeading
              as="h2"
              size="lg"
              color={headingColor}
              textAlign="center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Descarga mi CV
            </MotionHeading>
            <Flex direction="column" align="center">
              <MotionBox
                mb={4}
                position="relative"
                w="100px"
                h="100px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
                boxShadow="lg"
                bg="blue.500"
                color="white"
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Link isExternal href="https://drive.google.com/file/d/1ysWou-6Nshx4UFW8P-Vv79gBIDhzWyok/view?usp=sharing">
                  <MotionBox
                    p={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    bg="white"
                    color="blue.500"
                    boxShadow="lg"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DownloadIcon boxSize={10} />
                  </MotionBox>
                </Link>
              </MotionBox>
            </Flex>
          </Stack>
          
          <Stack spacing={6}>
            <Text fontWeight="bold">Stack Tecnológico:</Text>
            <Grid
              templateColumns={{ base: 'repeat(auto-fill, minmax(120px, 1fr))', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}
              gap={4}
            >
              {skills.map((skill) => (
                <Tooltip key={skill.name} label={skill.tooltip} aria-label={`Tooltip for ${skill.name}`}>
                  <MotionTag
                    size="md"
                    variant="solid"
                    colorScheme="blue"
                    borderRadius="full"
                    boxShadow="md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.name}
                  </MotionTag>
                </Tooltip>
              ))}
            </Grid>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            align="center"
          >
            <MotionButton
              as='a'
              href='/projects'
              colorScheme="blue"
              size="lg"
              fontWeight="bold"
              px={6}
              variant="solid"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </MotionButton>
            <MotionButton
              as='a'
              href="https://wa.me/3102403592?text=Me%20interesa%20tus%20servicios%20de%20programacion%20"
              size="lg"
              fontWeight="bold"
              px={6}
              leftIcon={<EmailIcon />}
              variant="outline"
              colorScheme="blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctame
            </MotionButton>
          </Stack>
        </Stack>
        <MotionBox
          w={{ base: 'full', md: '50%' }}
          mb={{ base: 12, md: 0 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1 }} // Animación de zoom al pasar el mouse
        >
          <MotionImage
            src="/logo.jpeg"
            alt="Tu Nombre"
            rounded="full"
            shadow="2xl"
            width={{ base: '80%', md: 'full' }}
            maxWidth="400px"
          />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default HomePage;

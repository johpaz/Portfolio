import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FaCode, FaCloud, FaMobileAlt, FaRobot, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const Services = () => {
  const bgColor = useColorModeValue('#E9F1FA', '#0C1A1A');
  const textColor = useColorModeValue('black', 'gray.800');
  const headingColor = useColorModeValue('purple.600', 'purple.300');
  
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creación de aplicaciones web modernas y responsivas utilizando las últimas tecnologías.',
      icon: FaCode,
    },
    {
      title: 'Servicios en la Nube',
      description: 'Implementación y gestión de soluciones en la nube para escalabilidad y flexibilidad.',
      icon: FaCloud,
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de aplicaciones móviles para iOS y Android con React Native.',
      icon: FaMobileAlt,
    },
    {
      title: 'Landing Pages',
      description: 'Diseño y desarrollo de landing pages optimizadas para conversión y marketing digital.',
      icon: FaLaptopCode,
    },
    {
      title: 'Agentes de IA',
      description: 'Implementación de chatbots y asistentes virtuales inteligentes para automatizar procesos.',
      icon: FaRobot,
    },
    {
      title: 'Soluciones de IA',
      description: 'Desarrollo de modelos de inteligencia artificial personalizados para mejorar la eficiencia empresarial.',
      icon: FaLightbulb,
    },
  ];

  return (
    <Box id="services" bg={bgColor} py={20}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" mb={10} textAlign="center" color={headingColor}>
          Nuestros Servicios
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {services.map((service, index) => (
            <VStack
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="md"
              bg="gray.200"
              boxShadow="md"
              spacing={4}
              align="center"
              transition="all 0.3s ease"
              _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
            >
              <Icon as={service.icon} color={headingColor} boxSize={10} />
              <Heading as="h3" size="lg" color={headingColor}>
                {service.title}
              </Heading>
              <Text fontSize="md" color={textColor} textAlign="center">
                {service.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;

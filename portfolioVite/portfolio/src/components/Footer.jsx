import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton, HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const iconBgColor = useColorModeValue('gray.100', 'whiteAlpha.100');
  const iconHoverBgColor = useColorModeValue('gray.200', 'whiteAlpha.200');

  return (
    <Box
      bg={bgColor}
      color={textColor}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={borderColor}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="space-between">
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">JohPaz Dev </Text>
            <Text fontSize="sm">Convirtiendo ideas en soluciones tecnológicas.</Text>
          </VStack>

          <Stack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">Enlaces de Interes</Text>
            <Link as={RouterLink} to="/about" fontSize="sm">Sobre MI</Link>
            <Link as={RouterLink} to="/contacto" fontSize="sm">Contáctenos</Link>
          </Stack>

          <Stack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">Síguenos</Text>
            <HStack spacing={2}>
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/john-alexander-paez-arias-543b0254/"
                aria-label="Linkedin"
                icon={<FaLinkedin/>}
                size="sm"
                color={textColor}
                bg={iconBgColor}
                _hover={{ bg: iconHoverBgColor }}
              />
              <IconButton
                as="a"
                href="https://www.youtube.com/@tuprofedeIA"
                aria-label="Youtube"
                icon={<FaYoutube />}
                size="sm"
                color={textColor}
                bg={iconBgColor}
                _hover={{ bg: iconHoverBgColor }}
              />
               <IconButton
                as="a"
                href="https://github.com/johpaz"
                aria-label="GitHub"
                icon={<FaGithub />}
                size="sm"
                color={textColor}
                bg={iconBgColor}
                _hover={{ bg: iconHoverBgColor }}
              />
            </HStack>
          </Stack>

          <Stack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">Contacto</Text>
            <Text fontSize="sm">Teléfono: +57 310 2403592</Text>
            <Text fontSize="sm">Email: john.paez@johpazdev.com.co</Text>
          </Stack>
        </Stack>

        <Box borderTop={1} borderStyle={'solid'} borderColor={borderColor} pt={8} mt={8} textAlign="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Tu Profe de IA. Todos los derechos reservados.
          </Text>
          <Text fontSize="sm" mt={2}>
            Desarrollado por:{' '}
            <Link href="https://johpazdev.com.co" isExternal color="blue.500">
              JohPazDev
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
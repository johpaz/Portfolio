import React from 'react';
import { Box, Heading, Text, useColorModeValue, Divider } from '@chakra-ui/react';

const BlogDetail = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  const article = {
    title: 'Introducción a React',
    date: '2024-09-16',
    content: `
      React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y se utiliza para crear aplicaciones web de una sola página con una experiencia de usuario fluida y eficiente.

      **¿Qué es React?**

      React es una biblioteca que se enfoca en construir la interfaz de usuario. Utiliza una arquitectura basada en componentes, lo que permite a los desarrolladores construir aplicaciones web de manera modular y reutilizable.

      **¿Cómo funciona React?**

      React trabaja creando un árbol de componentes, donde cada componente es una pieza de la interfaz de usuario. Los componentes pueden ser reutilizados en diferentes partes de la aplicación, lo que facilita el mantenimiento y la escalabilidad del código.

      **Ventajas de React:**

      - **Reutilización de Componentes:** Puedes construir componentes que se pueden reutilizar en diferentes partes de la aplicación.
      - **Virtual DOM:** React utiliza un Virtual DOM para actualizar solo las partes de la interfaz de usuario que han cambiado, lo que mejora el rendimiento de la aplicación.
      - **Ecosistema:** React tiene un ecosistema rico con bibliotecas y herramientas que pueden ayudarte a construir aplicaciones complejas de manera más eficiente.

      **Conclusión**

      React es una herramienta poderosa para el desarrollo de interfaces de usuario y aplicaciones web. Su enfoque basado en componentes y su Virtual DOM ofrecen una experiencia de desarrollo y usuario eficiente y escalable.

      Si estás interesado en aprender más sobre React, hay muchos recursos disponibles en línea, incluyendo la [documentación oficial](https://reactjs.org/docs/getting-started.html).
    `,
  };

  return (
    <Box bg={bgColor} py={8} px={4} maxW="800px" mx="auto">
      <Heading as="h1" size="2xl" mb={4} color={textColor}>
        {article.title}
      </Heading>
      <Text mb={6} color={textColor}>
        {article.date}
      </Text>
      <Divider mb={6} />
      <Text color={textColor} whiteSpace="pre-line">
        {article.content}
      </Text>
    </Box>
  );
};

export default BlogDetail;

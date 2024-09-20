import React, { useState } from 'react';
import { Box, Flex, Heading,HStack,Stack, Input, Textarea, Button, useColorModeValue, Text,Icon, Tooltip, VStack, FormControl, FormLabel, FormErrorMessage, InputGroup } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
// Crear componentes animados
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);
const MotionButton = motion(Button);

const recaptchaKey = import.meta.env.VITE_REACT_APP_RE_CAPTCHA;

const URL_API = import.meta.env.VITE_REACT_APP_URL;



const Contacto = () => {
  const bgColor = useColorModeValue('#E9F1FA', '#0C1A1A');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const buttonColor = useColorModeValue('blue', 'teal');
  const [isHuman, setIsHuman] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState('');

// Validación del formulario
const validationSchema = Yup.object({
  name: Yup.string().required('Tu nombre es requerido'),
  email: Yup.string().email('Correo inválido').required('Tu correo es requerido'),
  countryCode: Yup.string()
    .matches(/^\+\d{1,3}$/, 'El código de país debe ser válido, incluyendo el signo "+"')
    .required('El código de país es requerido'),
  phoneNumber: Yup.string()
    .matches(/^\d{4,14}$/, 'El número de celular debe ser válido')
    .required('El número de celular es requerido'),
  message: Yup.string().required('Escribe tu mensaje'),
});

const sendEmail = async (values, actions) => {
  if (isHuman) {
    try {
      const response = await fetch(`${URL_API}/sendMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if(response.ok) {
        resetform()
        console.log('Correo enviado con éxito');
      } else {
        console.error('Error al enviar el correo. Código de respuesta:', response.status);
      }
    
    } catch (error) {
      console.error('Error al enviar el correo desde handleSubmit:', error);
    }
  } else {
    console.log('Por favor, confirme que no es un robot.');
  }
};

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setIsHuman(true); // Se establece como humano cuando se completa el reCAPTCHA
  };

  return (
    <Box id="contact" minHeight="100vh" width="full" bg={bgColor} py={12} px={4}>
      <Flex direction="column" align="center" maxWidth="800px" mx="auto">
        <MotionHeading
          as="h1"
          size="xl"
          mb={6}
          color={textColor}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contacta Conmigo
        </MotionHeading>

        <Formik
            initialValues={{
              name: '',
              email: '',
              countryCode: '',
              phoneNumber: '',
              message: '',
              humanCheck: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              sendEmail(values);
              actions.resetForm();
            }}
          >
            {(formik) => (
              <Form>
                <VStack spacing={4}>
                  <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                    <FormLabel>Nombre Completo</FormLabel>
                    <Field as={Input} id="name" name="name" placeholder="Tu nombre" />
                    <FormErrorMessage>
                      <ErrorMessage name="name" />
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                    <FormLabel>Email</FormLabel>
                    <Field as={Input} id="email" name="email" type="email" placeholder="Tu correo" />
                    <FormErrorMessage>
                      <ErrorMessage name="email" />
                    </FormErrorMessage>
                  </FormControl>

                  {/* Campo para código de país y número de celular en la misma línea */}
                  <FormControl isInvalid={(formik.errors.countryCode && formik.touched.countryCode) || (formik.errors.phoneNumber && formik.touched.phoneNumber)}>
                    <FormLabel>Numero Celular</FormLabel>
                    <InputGroup>
                      <Field as={Input} id="countryCode" name="countryCode" placeholder="Código de país (ej: +57)" width="30%" />
                      <Field as={Input} id="phoneNumber" name="phoneNumber" type="tel" placeholder="Número de celular" width="70%" />
                    </InputGroup>
                    <HStack>
                      <FormErrorMessage>
                        <ErrorMessage name="countryCode" />
                      </FormErrorMessage>
                      <FormErrorMessage>
                        <ErrorMessage name="phoneNumber" />
                      </FormErrorMessage>
                    </HStack>
                  </FormControl>

                  <FormControl isInvalid={formik.errors.message && formik.touched.message}>
                    <FormLabel>Mensaje</FormLabel>
                    <Field as={Textarea} id="message" name="message" placeholder="Tu mensaje" />
                    <FormErrorMessage>
                      <ErrorMessage name="message" />
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={formik.errors.humanCheck && formik.touched.humanCheck}>
                     <ReCAPTCHA
                      sitekey={recaptchaKey}
                      onChange={handleRecaptchaChange}
                    />
                    <FormErrorMessage>
                      <ErrorMessage name="humanCheck" />
                    </FormErrorMessage>
                  </FormControl>
                  {!isHuman && (
                    <Text color="red.500" fontWeight="bold">
                      Por favor, confirme que no es un robot.
                    </Text>
                  )}
                <Button
                    type="submit"
                    colorScheme="purple"
                    isLoading={formik.isSubmitting}
                    disabled={!formik.isValid || formik.isSubmitting}
                    onClick={sendEmail}
                  >
                    Enviar
                  </Button>
                </VStack>
              </Form>
            )}
        </Formik>

        <VStack spacing={4} mt={8}>
          <Text fontWeight="bold" color={textColor}>Contactame</Text>
          <Stack direction="row" spacing={4}>
            <Tooltip label="LinkedIn" aria-label="LinkedIn">
              <MotionBox
                as="a"
                href="https://www.linkedin.com/in/tu-perfil/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaLinkedin} boxSize={8} color="blue.500" />
              </MotionBox>
            </Tooltip>
            <Tooltip label="GitHub" aria-label="GitHub">
              <MotionBox
                as="a"
                href="https://github.com/tu-perfil"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaGithub} boxSize={8} color="gray.600" />
              </MotionBox>
            </Tooltip>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contacto;

"use client"
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Input, Textarea, Button, Link } from '@nextui-org/react';
import { FiMail, FiPhone, FiSend, FiLinkedin, FiGithub,FiCode, FiMessageCircle } from 'react-icons/fi';


const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: object({
      name: string().required('El nombre es requerido'),
      email: string().email('Email inválido').required('El email es requerido'),
      phone: string().required('El número de celular es requerido'),
      message: string().required('El mensaje es requerido'),
    }),
    onSubmit: (values) => {
      // Aquí puedes agregar la lógica para enviar la información a la base de datos o procesarla de alguna manera
      console.log(values);
      // Reiniciar los campos del formulario
      formik.resetForm();
    },
  });

  return (
    <section className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold">Contáctanos</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-4 mt-4">
        <div className="flex flex-col items-start">
          <label className="text-left" htmlFor="name">Nombre:</label>
          <div className="flex items-center">
          <FiCode />
            <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Nombre"
          />
          
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 text-sm">{formik.errors.name}</span>
          )}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="email">Email:</label>
          <div className="flex items-center">
            <FiMail className="mr-2" />
            <Input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Correo electrónico"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="phone">Celular:</label>
          <div className="flex items-center">
            <FiPhone className="mr-2" />
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Celular"
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <span className="text-red-500 text-sm">{formik.errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="message">Mensaje:</label>
         <div className="flex items-center"> 
          <FiMessageCircle/>
          <Textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Mensaje"
          />
          {formik.touched.message && formik.errors.message && (
            <span className="text-red-500 text-sm">{formik.errors.message}</span>
          )}
          </div>
        </div>

        <Button type="submit" className="flex items-center space-x-2">
            <FiSend />
            <span>Enviar</span>
        </Button>

      </form>

      <div className="flex mt-4 text-xl">
        <Link href="mailto:johpaz252@gmail.com" className="mr-2">
          <FiMail />
        </Link>
        <Link href="https://wa.me/573102403592" className="mr-2">
          <FiPhone />
        </Link>
        <Link href="https://www.linkedin.com/in/john-alexander-paez-arias-543b0254/" className="mr-2">
          <FiLinkedin />
        </Link>
        <Link href="https://github.com/johpaz">
          <FiGithub />
        </Link>
      </div>
    </section>
  );
};

export default ContactForm;

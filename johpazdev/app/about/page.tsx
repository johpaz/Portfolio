import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { IoLogoWhatsapp } from "react-icons/io";
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';

const peopleData = [
  {
    name: 'John Alexander Paez Arias',
    email: 'johpaz252@gmail.com',
    linkedinURL: ' https://www.linkedin.com/in/john-alexander-paez-arias-543b0254/',
    githubURL: ' https://github.com/johpaz/',
    title: 'Full Stack Developer',
    country: ' Colombia',
    whatsapp: '3102403592',
	description: "Apasionado por la tecnología, el desarrollo web y aplicaciones moviles.Me especializo en convertir ideas creativas en soluciones tecnológicas innovadoras	y funcionales. Con habilidades tanto en el front-end como en el back-end, estoy comprometido a crear experiencias de usuario excepcionales y aplicaciones robustas.	"
  },
];



const AboutUs = () => {
	return (
	  <section className="text-center ">
		<h2 className="text-3xl font-semibold text-teal-500 mb-4">ACERCA DE JOHPAZDEV</h2>
		<p className="text-left max-w-xl mx-auto mb-8">
		Hola, soy  un apasionado desarrollador con experiencia en el desarrollo backend y aplicaciones móviles. Me dedico a crear soluciones tecnológicas innovadoras que hacen la diferencia. Mi enfoque se centra en construir sistemas robustos en el backend y experiencias móviles intuitivas y atractivas.
		</p>
		<Card className="py-8 text-center">
		<div>
		  {peopleData.map((person, index) => (
			<div key={index} className="p-4 border rounded-md shadow-md ">
			  <Avatar src="/johpazpe.jpeg" className="w-32 h-32 mx-auto rounded-full mb-4" />
  
			  <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
			  <p className="text-sm text-teal-500 mb-2">{person.title}</p>
			  <p className="text-sm mb-2">{person.email}</p>
  
			  <div className="flex justify-center mb-2">
				<a href={person.linkedinURL} className="mx-2 text-teal-500">
				  <FiLinkedin size={24} />
				</a>
				<a href={person.githubURL} className="mx-2 text-teal-500">
				  <FiGithub size={24} />
				</a>
				<a href={`https://wa.me/${person.whatsapp}`} className="mx-2 text-teal-500">
				  <IoLogoWhatsapp size={24} />
				</a>
			  </div>
  
			  <p className="text-sm">{person.country}</p>
			  <p className="text-sm text-justify">{person.description}</p>
			</div>
		  ))}
		</div>
		</Card>
	  </section>
	);
  };
  
  export default AboutUs;

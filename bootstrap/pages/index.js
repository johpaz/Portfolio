import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJava, faJs,faAws, faDatabase,faFirebase, faCode,faTools} from '@fortawesome/free-solid-svg-icons'

const Index = () => (
  <Layout>
    {/**Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-primary text-dark">
          <div className="row">
            <div className="col-md-4">
              <img src="/johpazpe.jpeg" alt="johpazdev" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>John Alexander Paez Arias</h1>
              <h2>Full Stack Developer</h2>
              <p>
                Desarrollador Full Stack, Capaz de crear procedimientos e implementar mejoras para optimizar
                operaciones y reducir costos, creando aplicaciones web y móviles transformando las ideas de la
                compañía y equipo en soluciones tecnológicas.
              </p>
              <h4>Habilidades Técnicas</h4>
              <div className="skills">
                <p>
                  Lenguajes de Programación:
                  <img src='icons/java.png' className='img-fluid' width={30}/>
                  Kotlin.
                </p>
                <p>
                  Frameworks y Bibliotecas:
                  <FontAwesomeIcon icon={faCode} /> React,
                  Redux, TypeScript.
                </p>
                <p>
                  Bases de Datos:
                  <FontAwesomeIcon icon={faDatabase} /> PostgreSQL,
                  MariaDB, Mongo.
                </p>
                <p>
                  Herramientas de Desarrollo:
                  Vite, Sequelize, Axios, Next.js.
                </p>
                <p>
                  Front-End:
                  HTML, CSS, Bootstrap, Next Ui, Chakra UI.
                </p>
                <p>
                  Back-End:
                  Node.js, Express.
                </p>
                <p>
                  Control de Versiones:
                  <FontAwesomeIcon icon={faTools} /> Git.
                </p>
                <p>
                  Servicios:
                  <FontAwesomeIcon icon={faAws} /> AWS,
                  <FontAwesomeIcon icon={faFirebase} /> Firebase.
                </p>
              </div>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default Index;

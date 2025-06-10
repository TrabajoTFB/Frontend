import React from 'react';
import { useParams } from 'react-router-dom';
import type { BlogPost as BlogPostType } from '../types';
import NewsletterSection from '../components/sections/NewsletterSection';

// This would normally come from an API
const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "El impacto ambiental de la lectura digital vs. tradicional",
    excerpt: "Un análisis profundo sobre cómo nuestros hábitos de lectura afectan al medio ambiente. Descubre cuál es la opción más sostenible y cómo podemos reducir nuestra huella de carbono mientras disfrutamos de la lectura.",
    content1: "La transición del papel al formato digital ha generado un debate creciente en torno a la sostenibilidad. Por un lado, los libros tradicionales requieren papel, tinta, transporte y almacenamiento, lo que conlleva una importante huella ecológica. La producción de un solo libro puede consumir hasta 7,5 kg de CO₂, sin contar con la deforestación necesaria para obtener la celulosa. Además, su distribución implica una cadena logística que consume recursos fósiles.",
    content2: "Por otro lado, los dispositivos de lectura digital, como los e-readers o tabletas, también implican un impacto ambiental relevante, especialmente en su proceso de fabricación y en el uso de minerales raros. Sin embargo, a largo plazo, un lector electrónico puede compensar su huella si se utiliza de forma intensiva, reduciendo la necesidad de imprimir cientos de libros. La clave está en la frecuencia de uso y en la gestión responsable de residuos electrónicos. En definitiva, no se trata solo de elegir entre papel o pantalla, sino de adoptar hábitos de lectura más conscientes y sostenibles.",
    imageUrl: "/images/reading.png",
    date: "29 mayo 2025",
    category: "Sostenibilidad",
    readTime: "5 min lectura"
  },
  {
    id: 2,
    title: "Beneficios de la compra-venta de libros de segunda mano",
    excerpt: "La reutilización de libros no solo es beneficiosa para el planeta, sino también para nuestra cultura y economía. Descubre cómo puedes formar parte de esta tendencia sostenible.",
    content1: "Comprar y vender libros de segunda mano es una práctica cada vez más común entre lectores conscientes. Esta tendencia promueve la economía circular al dar una segunda vida a productos que, de otro modo, quedarían olvidados en estanterías. Además, reduce significativamente la demanda de nuevos ejemplares, lo que implica menos consumo de papel, tinta y energía en procesos de fabricación y distribución. Cada libro reutilizado es una victoria frente al desperdicio y una apuesta por un consumo más responsable.",
    content2: "Pero los beneficios van más allá del impacto ambiental. La compra-venta de libros usados también facilita el acceso a la lectura a precios más asequibles, democratizando el conocimiento. Asimismo, fomenta comunidades locales y plataformas colaborativas donde se comparte no solo un objeto, sino también una historia. Participar en este ciclo no solo aligera la carga ecológica, sino que fortalece el vínculo entre lectores, cultura y sostenibilidad.", 
    imageUrl: "/images/learning.png",
    date: "28 mayo 2025",
    category: "Economía Circular",
    readTime: "4 min lectura"
  },
  {
    id: 3,
    title: "Cómo mantener tus libros en buen estado",
    excerpt: "Guía práctica para conservar tus libros y maximizar su vida útil. Consejos expertos para el cuidado y mantenimiento de tu biblioteca personal.",
    imageUrl: "/images/Los_pilares_de_la_tierra.jpg",
    content1: "### 1. Ambiente y almacenamiento ideal\n\n**Control de humedad y temperatura:**\n- Los libros deben guardarse en un lugar con **humedad relativa del 45-55%** y una **temperatura estable entre 18-22°C**.\n- Usa **deshumidificadores** en zonas húmedas o **bolsas de gel de sílice** dentro de estanterías para evitar moho.\n\n**Protección contra la luz:**\n- Evita la **luz solar directa**, que decolora las portadas y daña el papel. Opta por estanterías alejadas de ventanas o usa cortinas UV.\n\n**Cómo colocarlos:**\n- **En estanterías:** Ubícalos **verticalmente** con soportes para evitar deformaciones. No los aprietes demasiado.\n- **Libros muy grandes o pesados:** Guárdalos **horizontales** para no dañar el lomo.",
    content2: "### 2. Mantenimiento y manipulación\n\n**Limpieza regular:**\n- Pasa un **paño seco y suave** por las cubiertas y lomos cada mes.\n- Para polvo profundo, usa una **aspiradora con boquilla de cerdas suaves** (en modo bajo).\n\n**Manipulación correcta:**\n- **Lávate las manos** antes de tocar libros antiguos o de valor.\n- No uses **post-it adhesivos** o cinta scotch; pueden dejar residuos. Prefiere **marcadores de papel archivable**.\n\n**Reparaciones básicas:**\n- **Páginas sueltas:** Fíjalas con **pegamento libre de ácido** o cinta especial para libros (nunca cinta doméstica).\n- **Cubiertas dañadas:** Protege con **fundas de mylar** o consulta a un restaurador profesional.",
    date: "27 mayo 2025",
    category: "Consejos",
    readTime: "6 min lectura"
  },
  {
    id: 4,
    title: "La evolución de las bibliotecas en la era digital",
    excerpt: "Las bibliotecas se están transformando para adaptarse a la era digital. Descubre cómo estas instituciones están innovando para mantenerse relevantes.",
    content1: "### 1. De lo físico a lo digital: Transformaciones clave\n\n**Acceso remoto y colecciones digitales:**\n- Las bibliotecas ahora ofrecen **miles de ebooks, audiolibros y revistas electrónicas** a través de plataformas como OverDrive y Libby.\n- Sistemas de **préstamo digital** permiten acceder a materiales las 24/7 con solo una credencial de biblioteca.\n\n**Espacios reimaginados:**\n- Muchas bibliotecas han reducido estanterías para crear **zonas de coworking, makerspaces y estudios de grabación**.\n- Incorporación de **realidad virtual y herramientas tecnológicas** para educación y entretenimiento.\n\n**Preservación digital:**\n- Proyectos masivos de **digitalización de archivos históricos** para conservar documentos frágiles.\n- Uso de **blockchain** para certificar la autenticidad de obras digitales.",
    content2: "### 2. El futuro: Bibliotecas como hubs tecnocomunitarios\n\n**Inteligencia Artificial aplicada:**\n- Chatbots bibliotecarios que ayudan en investigaciones (ej: 'Ask a Librarian' de la NYPL).\n- Sistemas de recomendación personalizada basados en algoritmos de machine learning.\n\n**Alfabetización digital:**\n- Cursos gratuitos sobre **identificación de fake news, programación básica y seguridad online**.\n- Talleres de **robótica e impresión 3D** para todas las edades.\n\n**Modelos sostenibles:**\n- Bibliotecas **cero papel** que operan completamente en la nube.\n- Cooperación global mediante **redes de intercambio de recursos digitales** entre instituciones internacionales.",
    imageUrl: "/images/signup_bg.png",
    date: "26 mayo 2025",
    category: "Tecnología",
    readTime: "7 min lectura"
  },
  {
    id: 5,
    title: "Comunidades lectoras: Conectando a través de los libros",
    excerpt: "Cómo las comunidades de lectura están creando conexiones significativas y promoviendo la sostenibilidad a través del intercambio de libros.",
    content1: "### 1. El poder social de las comunidades lectoras\n\n**Conexiones humanas:**\n- Los clubes de lectura presenciales y virtuales están rompiendo el aislamiento social, creando espacios para debates profundos sobre valores y experiencias humanas.\n- Plataformas como Goodreads y StoryGraph permiten a lectores de todo el mundo compartir reseñas y recomendaciones personalizadas.\n\n**Modelos innovadores de intercambio:**\n- Bibliotecas comunitarias en parques y cafés donde cualquiera puede tomar o dejar un libro libremente (movimiento Little Free Library).\n- Sistemas de bookcrossing con códigos QR para seguir la travesía de libros viajeros por diferentes países.\n\n**Impacto en la sostenibilidad:**\n- Reducción del consumo masivo al promover la reutilización de libros físicos.\n- Iniciativas de 'libros adoptados' donde se rescatan ejemplares descartados para darles nueva vida.",
    content2: "### 2. Cómo unirse al movimiento\n\n**Para lectores:**\n- Busca clubes locales en meetup.com o crea tu propio grupo en redes sociales con temáticas específicas (ej: literatura feminista o ciencia ficción climática).\n- Participa en redes de intercambio: desde mercadillos de libros usados hasta apps como BookMooch.\n\n**Para organizaciones:**\n- Crea puntos de booksharing en espacios públicos usando materiales reciclados.\n- Organiza maratones de lectura con causas benéficas (ej: por cada libro leído, se dona uno a escuelas rurales).\n\n**Tendencias emergentes:**\n- Clubs de lectura híbridos (presencial + streaming) con autores internacionales.\n- Bibliotecas humanas donde 'se prestan' personas para compartir sus historias de vida como libros vivientes.",
    imageUrl: "/images/login_bg.png",
    date: "25 mayo 2025",
    category: "Comunidad",
    readTime: "5 min lectura"
  }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  // Permitir acceso tanto por id numérico como por slug de título
  const post = blogPosts.find(p =>
    p.id.toString() === slug ||
    p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600">Lo sentimos, el artículo que buscas no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="w-full h-96 relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <span className="inline-block bg-coral-500 text-white px-3 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* This would normally come from a CMS or API */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {post.content1}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {post.content2}
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterSection />
    </article>
  );
};

export default BlogPost;

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
    imageUrl: "/images/reading.png",
    date: "29 mayo 2025",
    category: "Sostenibilidad",
    readTime: "5 min lectura"
  },
  {
    id: 2,
    title: "Beneficios de la compra-venta de libros de segunda mano",
    excerpt: "La reutilización de libros no solo es beneficiosa para el planeta, sino también para nuestra cultura y economía. Descubre cómo puedes formar parte de esta tendencia sostenible.",
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
    date: "27 mayo 2025",
    category: "Consejos",
    readTime: "6 min lectura"
  },
  {
    id: 4,
    title: "La evolución de las bibliotecas en la era digital",
    excerpt: "Las bibliotecas se están transformando para adaptarse a la era digital. Descubre cómo estas instituciones están innovando para mantenerse relevantes.",
    imageUrl: "/images/signup_bg.png",
    date: "26 mayo 2025",
    category: "Tecnología",
    readTime: "7 min lectura"
  },
  {
    id: 5,
    title: "Comunidades lectoras: Conectando a través de los libros",
    excerpt: "Cómo las comunidades de lectura están creando conexiones significativas y promoviendo la sostenibilidad a través del intercambio de libros.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterSection />
    </article>
  );
};

export default BlogPost;

import Image from "next/image";

export default function Home() {
  const classes = [
    { category: "Colores de fondo", name: "bg-blue-500", description: "Fondo azul intenso." },
    { category: "Colores de fondo", name: "bg-red-500", description: "Fondo rojo intenso." },
    { category: "Colores de texto", name: "text-green-500", description: "Texto verde." },
    { category: "Colores de texto", name: "text-yellow-500", description: "Texto amarillo." },
    { category: "Alineación", name: "flex", description: "Contenedor flexible." },
    { category: "Alineación", name: "justify-center", description: "Centrar elementos horizontalmente." },
    { category: "Alineación", name: "items-center", description: "Centrar elementos verticalmente." },
    { category: "Espaciado", name: "m-4", description: "Margen de 1rem." },
    { category: "Espaciado", name: "p-4", description: "Padding de 1rem." },
    { category: "Tipografía", name: "text-xl", description: "Tamaño de texto extra grande." },
    { category: "Tipografía", name: "font-bold", description: "Texto en negrita." },
    { category: "Bordes", name: "rounded-lg", description: "Esquinas redondeadas grandes." },
    { category: "Bordes", name: "rounded-full", description: "Bordes completamente circulares." },
    { category: "Sombra", name: "shadow-lg", description: "Sombra grande." },
    { category: "Sombra", name: "shadow-md", description: "Sombra mediana." },
    { category: "Colores de fondo", name: "bg-purple-500", description: "Fondo morado intenso." },
    { category: "Colores de texto", name: "text-pink-500", description: "Texto rosa." },
    { category: "Espaciado", name: "p-8", description: "Padding de 2rem." },
    { category: "Tipografía", name: "text-2xl", description: "Tamaño de texto más grande." },
    { category: "Bordes", name: "border-2", description: "Borde de 2 píxeles." }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Mini-Glosario Visual de Tailwind CSS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <div className={`h-16 flex items-center justify-center border ${item.name}`}>
              Ejemplo
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

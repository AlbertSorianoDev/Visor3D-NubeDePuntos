// api.js
export async function navQuery() {
  // Datos de navegación estáticos
  const data = {
    menus: {
      nodes: [
        {
          name: "Menu",
          menuItems: {
            nodes: [{ uri: "/", url: "/", order: 1, label: "Principal" }],
          },
        },
      ],
    },
    generalSettings: {
      title: "Proyecto Visor 3D",
      url: "#",
      description: "Proyecto Visor 3D para Nubes de Puntos",
    },
  };
  return data;
}

export async function homePagePostsQuery() {
  // Datos de posts estáticos
  const data = {
    posts: {
      nodes: [
        {
          date: "2024-07-10",
          uri: "/PotreeVisor/balzay.html",
          title: "Visor Balzay - Nube de Puntos",
          commentCount: 0,
          excerpt:
            "Visor 3D de Nube de Puntos de la zona del Campus Balzay de la Universidad de Cuenca en Cuenca - Ecuador.",
          categories: {
            nodes: [{ name: "Nube de Puntos", uri: "#" }],
          },
          featuredImage: {
            node: {
              srcSet: "/images/balzay.png",
              sourceUrl: "/images/balzay.png",
              altText: "Balzay Foto",
              mediaDetails: { height: 846, width: 1237 },
            },
          },
        },
        {
          date: "2024-07-10",
          uri: "/PotreeVisor/uda.html",
          title: "Visor UDA - Nube de Puntos",
          commentCount: 0,
          excerpt:
            "Visor 3D de Nube de Puntos de la zona de la Universidad de Azuay en Cuenca - Ecuador.",
          categories: {
            nodes: [{ name: "Nube de Puntos", uri: "#" }],
          },
          featuredImage: {
            node: {
              srcSet: "/images/uda.jpg",
              sourceUrl: "/images/uda.jpg",
              altText: "UDA Foto",
              mediaDetails: { height: 665, width: 1258 },
            },
          },
        },
        {
          date: "2024-07-10",
          uri: "/PotreeVisor/herrerias.html",
          title: "Visor Herrerías - Nube de Puntos",
          commentCount: 0,
          excerpt:
            "Visor 3D de Nube de Puntos de la zona de las Herrerías en Cuenca - Ecuador.",
          categories: {
            nodes: [{ name: "Nube de Puntos", uri: "#" }],
          },
          featuredImage: {
            node: {
              srcSet: "/images/herrerias.webp",
              sourceUrl: "/images/herrerias.webp",
              altText: "UDA Foto",
              mediaDetails: { height: 472, width: 1024 },
            },
          },
        },
      ],
    },
  };
  return data;
}

export async function getNodeByURI(uri) {
  // Datos de nodos estáticos
  const nodes = [
    {
      uri: "/PotreeVisor/balzay.html",
      __typename: "Post",
      title: "Visor Balzay - Nube de Puntos",
      date: "2024-07-10",
      excerpt:
        "Visor 3D de Nube de Puntos de la zona del Campus Balzay de la Universidad de Cuenca en Cuenca - Ecuador.",
      content:
        "<p>Visor 3D de Nube de Puntos de la zona del Campus Balzay de la Universidad de Cuenca en Cuenca - Ecuador.</p>",
      categories: {
        nodes: [{ name: "Nube de Puntos", uri: "#" }],
      },
      featuredImage: {
        node: {
          srcSet: "/images/balzay.png",
          sourceUrl: "/images/balzay.png",
          altText: "Balzay Foto",
          mediaDetails: { height: 846, width: 1237 },
        },
      },
    },
    {
      uri: "/PotreeVisor/uda.html",
      __typename: "Post",
      title: "Visor UDA - Nube de Puntos",
      date: "2024-07-10",
      excerpt:
        "Visor 3D de Nube de Puntos de la zona de la Universidad de Azuay en Cuenca - Ecuador.",
      content:
        "<p>Visor 3D de Nube de Puntos de la zona de la Universidad de Azuay en Cuenca - Ecuador.</p>",
      categories: {
        nodes: [{ name: "Nube de Puntos", uri: "#" }],
      },
      featuredImage: {
        node: {
          srcSet: "/images/uda.jpg",
          sourceUrl: "/images/uda.jpg",
          altText: "UDA Foto",
          mediaDetails: { height: 665, width: 1258 },
        },
      },
    },
    {
      uri: "/PotreeVisor/herrerias.html",
      __typename: "Post",
      title: "Visor Herrerías - Nube de Puntos",
      date: "2024-07-10",
      excerpt:
        "Visor 3D de Nube de Puntos de la zona de las Herrerías en Cuenca - Ecuador.",
      content:
        "<p>Visor 3D de Nube de Puntos de la zona de las Herrerías en Cuenca - Ecuador.</p>",
      categories: {
        nodes: [{ name: "Nube de Puntos", uri: "#" }],
      },
      featuredImage: {
        node: {
          srcSet: "/images/herrerias.webp",
          sourceUrl: "/images/herrerias.webp",
          altText: "UDA Foto",
          mediaDetails: { height: 472, width: 1024 },
        },
      },
    },
  ];

  const node = nodes.find((n) => n.uri === uri) || null;
  return { nodeByUri: node };
}

export async function getAllUris() {
  // URIs estáticas con la extensión .html
  const uris = [
    { params: { uri: "PotreeVisor/balzay.html" } },
    { params: { uri: "PotreeVisor/uda.html" } },
    { params: { uri: "PotreeVisor/herrerias.html" } },
  ];
  return uris;
}

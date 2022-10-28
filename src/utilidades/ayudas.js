export const apiBase = 'https://tlc.enflujo.com';
export const apiGraqhql = `${apiBase}/graphql`;
export const gql = String.raw;

export const obtenerDatos = async (query) => {
  const peticion = await fetch(apiGraqhql, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  }).then((respuesta) => respuesta.json());

  if (peticion.errors) {
    throw new Error(JSON.stringify(peticion.errors, null, 2));
  }

  return peticion.data;
};
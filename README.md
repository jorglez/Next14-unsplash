# Prueba técnica

## Jorge Luis González Vargas

## Descripción:

Proyecto en Next.js 14 con [Tailwind](https://v1.tailwindcss.com/) y [Shadcn](https://ui.shadcn.com/) para la interfaz gráfica.
La aplicación es responsiva.
Usa la biblioteca use-debounce para permitir que las búsqiedas se ejecuten de manera automática al pasar 450 milisegundos
La app Toma imágenes de unsplash.com usando su API. **La apicación obtiene por default resultados de la búsqueda para "naturaleza", pero puede buscarse lo que sea**

## Instalación

El proyecto utiliza NPM, por lo cual basta con abrir la terminal y usar el comando **npm -install** después de descargar el repositorio de Github.

## Ejecución del proyecto

Una vez instaladas las dependencias necesarias, usa el comando **npm run dev**

## Uso de la API de Unsplash

Para poder usar unsplash se necesita tener una cuenta para poder generar una clave de usuario:

1. Crear una cuenta [aquí](https://unsplash.com/es/%C3%BAnete) o iniciar sesión [aqui](https://unsplash.com/es/inicia-sesi%C3%B3n).
2. Registra tu aplicación en la pestaña de "Tus aplicaciones".
3. Una vez que hayas registrado tu aplicación, da click en ella y scrollea hasta la sección de **Keys**, el campo de **Access key** tiene el código que necesitas para usar la API
4. La clave puede usarse directamente en cualquier consulta a la api de unsplash siguiendo el siguiente formato: https://api.unsplash.com/photos/?client_id=tu_clave. Pero por seguridad se recomienda usar un archivo .env para guardar la clave en una variable, y después importarla al archivo donde hagas las consultas usando process.env.NOBRE_DE_TU_VARIABLE. Las variables de entorno usadas en este proyecto son: NEXT_USP_API para guardar la url de la api de unsplash, y NEXT_USP_KEY para guardar la clave de usuario.

Si decides usar otros nombres para las variables de entorno, tambien debes cambiar sus nombres en el archivo de actions.ts

### formatos de búsqueda usados en la API:

Para obtener imágenes con el criterio de búsqueda deseado: https://api.unsplash.com/search/photos/?per-page=10&client_id=tu_clave&query=tu_busqueda

- Se usa el parámetro "per-page" para limitar la cantidad de resultados por búsqueda.
- Se buscará el término "Naturaleza" su no hay nada en el input, de manera que la página nunca se queda vacía

Para obtener la información de una página en específico se usa https://api.unsplash.com/photos/${id_de_la_foto}?client_id=tu_clave

Una vez que tengas el proyecto instalado y hayas agregado las variables necesarias en .env, el proyecto estará listo para usarse

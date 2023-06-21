Sistema de Inicio de Sesión
Este es un sistema de inicio de sesión diseñado para garantizar la autenticación segura de los usuarios y mantener sus sesiones activas en la aplicación, incluso después de cerrarla. Proporciona a cada usuario un token único que se genera automáticamente y se almacena de forma segura en AsyncStorage.

Características
Generación automática de tokens únicos para cada usuario.
Almacenamiento seguro de tokens en AsyncStorage.
Validación de tokens para garantizar su vigencia y expiración.
Solicitud de generación de un nuevo token si el actual ha expirado.
Permite crear nuevos usuarios para expandir la base de usuarios.
Almacenamiento de datos respaldado por MongoDB.
Diseño responsivo que se adapta a cualquier tamaño de dispositivo móvil.
Animación implementada utilizando LottieFiles.
Requisitos previos
Asegúrate de tener los siguientes requisitos previos antes de comenzar:

Node.js instalado en tu sistema.
Una cuenta en MongoDB para almacenar y respaldar los datos de la aplicación. adapta a cualquier tamaño de dispositivo móvil.
Animación: LottieFiles 💡

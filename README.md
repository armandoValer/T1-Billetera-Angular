# Billetera Angular

Aplicación desarrollada en Angular 22 para la gestión de una billetera digital.

## Descripción

La aplicación permite registrar movimientos de tipo:

- Recarga
- Gasto

Cada movimiento actualiza el saldo disponible y se almacena en un historial visible para el usuario.

## Funcionalidades

- Saldo inicial de S/ 250.00
- Registro de recargas
- Registro de gastos
- Validación de saldo insuficiente
- Validación de montos mayores a cero
- Historial de movimientos
- Registro de fecha y hora de cada movimiento
- Comunicación entre componentes mediante
- Uso de las directivas modernas

## Tecnologías Utilizadas

- Angular 22
- TypeScript
- Bootstrap 5
- HTML5
- CSS3

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd billetera-angular
```

Instalar dependencias:

```bash
npm install
```

## Bootstrap

El proyecto utiliza Bootstrap 5 para los estilos de la interfaz.

Instalar Bootstrap:

```bash
npm install bootstrap
```

Verificar que en `angular.json` exista:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200
```

## Autores

Armando Valer Cisneros
Ruth Sofia Luna Bobadilla
Javier Gamarra Carrasco
Laura Jhamely Pillaca Obregon

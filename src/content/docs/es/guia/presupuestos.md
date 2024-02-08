---
title: Presupuestos
description: Genera ordenes de trabajo asignadas a clientes!
---

Las presupuestos almacenan datos de un cliente junto a una serie de conceptos y servicios. Estos se almacenan y pueden ser imprimidos en formato PDF.

## Crea un presupuesto

> ⚠️ Recuerda! Para crear un presupuesto tenemos que crear previamente una [entrada](/guia/entradas)

Tenemos 2 maneras de crear un presupuesto:

1. Generamos un presupuesto en base a una orden de trabajo. Haz [click aquí](/es/guia/ordenes-trabajo/#presupuestar-orden-de-trabajo) para más información.

2. Creamos un presupuesto de 0 desde la página de la entrada

![Crear presupuesto](../../../../assets/images/guia/entrada-crear-presupuesto.png "Crear presupuesto")

Automáticamente aparecerá la página de creación del presupuesto:

![Página de creación de presupuesto](../../../../assets/images/guia/pagina-crear-presupuesto.png "Página de creación de presupuesto")

### Datos generales

Los datos generales del presupuesto se resumen en el ID del presupuesto y la fecha y hora. El ID se genera automáticamente de forma que no haya colisión entre otros documentos. La estructura de este ID se basa en el año actual seguido del número de serie generado.

La fecha y hora de entrada se selecciona haciendo click en la casilla o en el icono de calendario. Veremos un pequeño calendario donde podemos seleccionar manualmente los datos. También está la opción de _Hoy_ para seleccionar automáticamente el dia y la fecha actual.

### Datos del cliente

Los datos del cliente se rellenan automáticamente. Podemos modificarlos según nos convenga. Si hay campos que no se han rellenado automáticamente se debe a que el cliente no tiene ese dato registrado en su perfil. Los datos del cliente son los siguientes:

- Nombre comercial
- Nombre fiscal
- DNI (o documento)
- Email
- Dirección
- Población
- Código postal

### Vehículo

En la sección de **Vehículo** tenemos los datos del vehículo asociado tanto a la Entrada como al presupuesto. Este apartado también se completará automáticamente con los datos obtenidos.
Es posible añadir manualmente el kilometraje y el número de bastidor.

### Conceptos

#### Añadir concepto

Los conceptos y materiales del presupuesto se añaden en la sección de _Conceptos_. Los campos disponibles para rellenar son los siguientes:

- Código
- Concepto
- Cantidad
- Precio
- Descuento (%)
- IVA
  - La casilla de IVA mostrará por defecto el IVA dependiendo de si el cliente figura como Regular o Intracomunitario. Podemos modificar manualmente el valor.

![Conceptos del presupuesto](../../../../assets/images/guia/entrada-conceptos.png "Conceptos del presupuesto")

Al hacer click en la casilla _Código_ se abrirá una ventana flotante con el listado de Conceptos registrados en la base de datos. Para buscar uno tenemos que escribir y conforme se rellena, la ventana nos muestra los resultados que coinciden.

Al hacer click en uno de ellos se seleccionará y se completarán el resto de casillas con los datos guardados por defecto en nuestro Inventario de Conceptos. Podemos modificar manualmente los datos convenientes (Cantidad, Precio, etc)

Si no hay ningúna coincidencia en la búsqueda de conceptos podemos crear uno nuevo haciendo click al texto _Añadir concepto al inventario_

![Añadir nuevo concepto al inventario](../../../../assets/images/guia/entrada-nuevo-concepto.png "Añadir nuevo concepto al inventario")

Se abrirá un pop-up con el formulario para registrar el nuevo concepto. Las casillas a rellenar son las siguientes:

- Concepto* ➡️ Nombre del concepto
- Código* ➡️ Código para referenciar al concepto
- Pvp Nivel 1*
- Pvp Nivel 2
- Pvp Nivel 3

![Crear nuevo concepto al inventario](../../../../assets/images/guia/entrada-crear-concepto.png "Crear nuevo concepto al inventario")

Al darle a crear automáticamente se guardará el concepto en el Inventario además de rellenar los campos del concepto que estábamos registrando préviamente en el presupuesto.

Una vez hayamos rellenado todos los campos tenemos que hacer click en el botón de la esquina inferior derecha _Añadir concepto_. Al hacer click el concepto se añadirá a la lista de conceptos.

#### Eliminar concepto

Si queremos eliminar un concepto nos dirigimos a él en el listado y hacemos click en la última castilla que corresponde con la columna _Eliminar_ 🗑️

![Concepto añadido al listado](../../../../assets/images/guia/entrada-concepto-añadido.png "Concepto añadido al listado")

### Servicios

Los servicios del presupuesto se añaden en la sección de _Servicios_. Los campos disponibles para rellenar son los siguientes:

- Código
- Concepto
- Cantidad
- Precio
- Descuento (%)
- IVA
  - La casilla de IVA mostrará por defecto el IVA dependiendo de si el cliente figura como Regular o Intracomunitario. Podemos modificar manualmente el valor.
- Operario
  - Selecciona un operario de la lista de contactos para asignarle las horas de trabajo.

El funcionamiento de los servicios es similar al de los conceptos a excepción de la casilla de _Operario_. Para añadir servicios registrados o no préviamente en el Inventario de servicios, realizamos el mismo proceso que en el apartado anterior _Añadir concepto_

![Añadir servicio al listado](../../../../assets/images/guia/entrada-añadir-servicio.png "Añadir servicio al listado")

Una vez rellenados los campos hacemos click en el botón de la esquina inferior derecha _Añadir servicio_ para añadirlo a la lista.

## Finalizar la creación

Una vez terminemos de configurar los conceptos y servicios en el presupuesto, haremos click en el bóton fijo en el menú superior _Crear presupuesto_.

![Crear el presupuesto](../../../../assets/images/guia/entrada-presupuesto-menu-superior.png "Crear el presupuesto")

Cuando el presupuesto se procese en la base de datos, automáticamente nos redirigirá a la página de la entrada, donde se mostrará el presupuesto que hemos creado.

![Presupuesto creado](../../../../assets/images/guia/entrada-presupuesto-creado.png "Presupuesto creado")

## Documento

Una vez generado el presupuesto podemos acceder a su página y ver el contenido de esta:

![Págna del presupuesto creado](../../../../assets/images/guia/presupuesto-creado.png "Págna del presupuesto creado")

### Visualizar PDF

Hay 2 maneras de visualizar el PDF del presupuesto.

1. Haz click en el botón _Vista previa_ de la parte superior derecha de la página. De esta manera abriremos un pop-up con el documento PDF.

    Para descargar el documento hacemos click en el botón ⬇️

![Vista previa del presupuesto en el pop-up](../../../../assets/images/guia/presupuesto-vista-previa-modal.png "Vista previa del presupuesto en el pop-up")

2. Desliza hacia la parte inferior de la página. Justo debajo de la sección de servicios tenemos un espacio

![Vista previa del presupuesto en la misma página](../../../../assets/images/guia/presupuesto-vista-previa-inferior.png "Vista previa del presupuesto en la misma página")

Si queremos mostrar un dibujo de referencia para imprimir el presupuesto, podemos hacer click en los siguientes botones para mostrar uno u otro:

- Mostrar dibujo de coche
- Mostrar dibujo de moto

Esto puede ser útil para hacer anotaciones en papel 🙌📄

![Vista previa del presupuesto con dibujo de coche](../../../../assets/images/guia/presupuesto-mostrar-coche.png "Vista previa del presupuesto con dibujo de coche")

## Generar orden de trabajo

Para generar una orden de trabajo en base al presupuesto abierto nos dirigimos al menu superior hasta ubicar el botón _Generar orden de trabajo_.

![Generar orden de trabajo en base al presupuesto](../../../../assets/images/guia/generar-orden-presupuesto.png "Generar orden de trabajo en base al presupuesto")

## Facturar presupuesto

Si queremos facturar directamente el presupuesto actual nos dirigimos al menu superior hasta ubicar el botón _Facturar presupuesto_. Esta acción abrira un pop-up donde completaremos el siguiente formulario:

- Factura cobrada*. Marca la factura como cobrada o pendiente de cobro.

> ⚠️ Recuerda! Hasta que una factura no se cobre, la entrada permanecerá como _Activa_. En el momento que se marque como cobrada la entrada cambiará a _Finalizada_.

- Método de pago. Selecciona un método de pago en caso de cobrar la factura.

![Facturar presupuesto](../../../../assets/images/guia/facturar-presupuesto.png "Facturar presupuesto")

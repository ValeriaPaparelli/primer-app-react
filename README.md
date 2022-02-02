App E-commerce de productos de Cosmética Natural

Inicio: 

Al momento de ingresar a la app en la ruta base ‘/’ :
El usuario visualiza una cantidad de productos disponibles para la compra. Puede ingresar, navegar por los productos e ir a sus detalles.
En la barra de navegación se encuentran las categorías de los productos para que pueda verlos también desde alli.

Flow de la app:

Al clickear en una de las categorías, se invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.

Desde el detalle puede ver la descripción, foto, precio y el stock disponible, ademàs, tiene un counter dónde puede ingresar la cantidad y añadirlo al carrito.
Una vez que agrega productos al carrito, la cantidad se va mostrando en el carrito de compras, al clickear en el botón Ver Carrito, se muestra el detalle de la compra, con las cantidades, el total por cada item y el total de la compra. Alli tiene la opción de eliminar algún item, vaciarlo por completo y confirmar la compra.
Una vez confirmada, se muestra un formulario dónde el usuario ingresa su nombre, teléfono e email. Una vez ingresados estos datos se termina de confirmar la compra y aparece un cartel con el número de id (sería el número de orden), y aparece un botón para volver a la tienda y seguir navegando.

Si el carrito está vacio se va a mostrar un cartel indicandolo y un botón de ver productos que lleva al usuario al listado de los productos.

Firebase:

Lo implementé en dos colecciones:

items: catálogo completo

orders: las órdenes generadas.

 



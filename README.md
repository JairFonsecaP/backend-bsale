# backend-bsale

Prueba complementaria al [FRONTEND](https://github.com/JairFonsecaP/fronted-bsale-test).

Este BackEnd se desarrolló en node usando express y mysql para conección a la base de datos proporsionada, el mismo se desplegó en [HEROKU](https://backend-bsale-test.herokuapp.com/) con los siguientes endpoints.

### 1. Listar todos los productos [https://backend-bsale-test.herokuapp.com/api/prodcuts/list](https://backend-bsale-test.herokuapp.com/api/products/list)

### 2. Mostrar un solo producto [https://backend-bsale-test.herokuapp.com/api/product/detail/:id](https://backend-bsale-test.herokuapp.com/api/products/detail/35)

### 3. Buscar por nombre [https://backend-bsale-test.herokuapp.com/api/products/search/:query](https://backend-bsale-test.herokuapp.com/api/products/search/coca+cola)

### 4. Listar todas las categorias [https://backend-bsale-test.herokuapp.com/api/category/list](https://backend-bsale-test.herokuapp.com/api/category/list)

Para el endpoint que muestra solo un producto se debe pasar como parametro el id del producto que se desea buscar, y para el de buscar se tiene que pasar como parametro el texto que se desea buscar teniendo encuenta que si es más de una palabra se tienen que separar entre ellas con un simbolo de más "+", cabe resaltar que el metodo de buscar no se hace en el frontend.
Lo que retorna cada endpoint es lo siguiente:

### 1. Todos los productos que hay en la tabla "product" de la base de datos

### 2. Solo un producto que coincide con el id que se paso por parametro

### 3. Todos aquellos productos que contengan la consulta en su nombre

### 4. Todas las categorias que hay en la tabla "category" de la base de datos suministrada

Se dividieron en dos las rutas en las tablas que habian, para hacer más ordenado el ruteo que se encuentra en la carpeta routes. Lo mismo se hizo para los controladores, se decidio usar "express" y el modulo "mysql" porque en los requerimientos se pedia no usar framewors o librerias por parte del cliente, mientras que del servidor no decia nada.

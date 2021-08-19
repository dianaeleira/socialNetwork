# Validación del proceso

## Creación de Usuarios

Validación de datos completos para la colección Users:
![](./assets/img/validation_data.png)

1. Visualización de la inserción del primer registro:
![](./assets/img/primer_usuario.png)

2. Visualización de la inserción del segundo registro:
![](./assets/img/segundo_usuario.png) 


3. Visualización de la inserción del tercer registro:
![](./assets/img/tercer_usuario.png) 

4. Visualización de la inserción del cuarto registro:
![](./assets/img/cuarto_usuario.png) 

5. Visualización de la inserción del quinto registro:
![](./assets/img/quinto_usuario.png) 

6. Visualización de la validación de duplicados para usuario:
![](./assets/img/validacion_usuario_duplicado.png)

7. Visualización de la colección de Users con los usuarios creados:
![](./assets/img/visualizacion_usuarios_mongo.png)

## Creación de Post

### Usuario 1. Pepita Perez1, _id: 611da511033b1938309d592c
1. Visualización de la inserción del primer registro:
![](./assets/img/pepitaperez1_post1.png)

2. Visualización de la inserción del segundo registro:
![](./assets/img/pepitaperez1_post2.png) 

3. Visualización de la inserción del tercer registro:
![](./assets/img/pepitaperez1_post3.png) 

4. Visualización de la inserción del cuarto registro:
![](./assets/img/pepitaperez1_post4.png) 

5. Visualización de la inserción del quinto registro:
![](./assets/img/pepitaperez1_post5.png) 

6. Visualización de la validación del Token:
![](./assets/img/pepitaperez1_no_token.png)

7. Visualización de la base de datos filtrándolos {userId: ObjectId('611da511033b1938309d592c')}:
![](./assets/img/registros_user1.png)


### Usuario 2. Pepita Perez2, _id: 611da568033b1938309d592f
1. Visualización de la inserción del primer registro:
![](./assets/img/pepitaperez2_post1.png)

2. Visualización de la inserción del segundo registro:
![](./assets/img/pepitaperez2_post2.png) 

3. Visualización de la inserción del tercer registro:
![](./assets/img/pepitaperez2_post3.png) 

4. Visualización de la inserción del cuarto registro:
![](./assets/img/pepitaperez2_post4.png) 

5. Visualización de la inserción del quinto registro:
![](./assets/img/pepitaperez2_post5.png) 

6. Visualización de la validación del Token:
![](./assets/img/pepitaperez2_no_token.png)

7. Visualización de la base de datos filtrándolos {userId: ObjectId('611da568033b1938309d592f')}:
![](./assets/img/registros_user2.png)


### Usuario 3. Pepita Perez3, _id: 611da5a9033b1938309d5932
1. Visualización de la inserción del primer registro:
![](./assets/img/pepitaperez3_post1.png)

2. Visualización de la inserción del segundo registro:
![](./assets/img/pepitaperez3_post2.png) 

3. Visualización de la inserción del tercer registro:
![](./assets/img/pepitaperez3_post3.png) 

4. Visualización de la inserción del cuarto registro:
![](./assets/img/pepitaperez3_post4.png) 

5. Visualización de la inserción del quinto registro:
![](./assets/img/pepitaperez3_post5.png) 

6. Visualización de la validación del Token:
![](./assets/img/pepitaperez3_no_token.png)

7. Visualización de la base de datos filtrándolos {userId: ObjectId('611da5a9033b1938309d5932')}:
![](./assets/img/registros_user3.png)


### Usuario 4. Pepita Perez4, _id: 611da615033b1938309d5935
1. Visualización de la inserción del primer registro:
![](./assets/img/pepitaperez4_post1.png)

2. Visualización de la inserción del segundo registro:
![](./assets/img/pepitaperez4_post2.png) 

3. Visualización de la inserción del tercer registro:
![](./assets/img/pepitaperez4_post3.png) 

4. Visualización de la inserción del cuarto registro:
![](./assets/img/pepitaperez4_post4.png) 

5. Visualización de la inserción del quinto registro:
![](./assets/img/pepitaperez4_post5.png) 

6. Visualización de la validación del Token:
![](./assets/img/pepitaperez4_no_token.png)

7. Visualización de la base de datos filtrándolos {userId: ObjectId('611da615033b1938309d5935')}:
![](./assets/img/registros_user4.png)


### Usuario 5. Pepita Perez5, _id: 611da65a033b1938309d5938
1. Visualización de la inserción del primer registro:
![](./assets/img/pepitaperez5_post1.png)

2. Visualización de la inserción del segundo registro:
![](./assets/img/pepitaperez5_post2.png) 

3. Visualización de la inserción del tercer registro:
![](./assets/img/pepitaperez5_post3.png) 

4. Visualización de la inserción del cuarto registro:
![](./assets/img/pepitaperez5_post4.png) 

5. Visualización de la inserción del quinto registro:
![](./assets/img/pepitaperez5_post5.png) 

6. Visualización de la validación del Token:
![](./assets/img/pepitaperez5_no_token.png)

7. Visualización de la base de datos filtrándolos {userId: ObjectId('611da65a033b1938309d5938')}:
![](./assets/img/registros_user5.png)



### Validación del token para la consulta de Post
1. Visualización de la validación de la consulta sin el Header:
![](./assets/img/get_sin_header.png)

### Consulta de los registros Post con el token del usuario 5  
1. Visualización de los registros almacenados en la colección Post, filtrados para el Pepita Perez 5 con la línea:
```
await Post.find({ userId: req.user._id });
```
![](./assets/img/get_con_header.png)

### Visualización base de datos con la totalidad de registros insertados
![](./assets/img/socialNetworkDB.png)


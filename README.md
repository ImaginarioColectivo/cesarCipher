#### Unidad-2-Productos-finales ####

##### Cifrado Cesar #####

1. LLamo a la funcion principal, la cual incluira la funcion cipher y decipher.

2. Inicio el ciclo de iteracion do while para que recorra las opciones que tiene mi fuyncion. ya sea cifrar, descifrar o si el usuario no ingresa una opcion valida se lo indique. 

3. A traves de un prompt le pido al usuario que presione 1 si quiere cifrar y que presione 2 si quiere descifrar. 

4. Mi primera condicion le indica al ciclo que si la respuesta es distinta a vacio se ejecuten las siguientes acciones. 

5. Si la opcion ingresada es 1 debe pedirle al usuario que ingrese la palabra que desea cifrar.

6. Si la opcion ingresada es 2 debe pedirle al usuario que ingrese la palabra que desea descifrar.

7. el while se ejecutara cuando el usuario ingrese un valor no valido o no ingrese nada. 

8. Si el while se ejecuta le pedira al usuario a traves de un alert que ingrese una opcion valida. 

9. LLamo a la funcion cipher que ejecutara la accion de cifrar la palabra del usuario. 

10. Ingreso las variables cifrado (vacia) y la variable ascii en 0.

11. Denomine a la palabra que ingresa el usuario como string. Y le aplico el metodo toUpperCase para que convierta mi palabra a mayusculas. 

12. Aplico un ciclo iterativo for para decirle que pase por cada uno de los caracteres de mi palabra. Y aplico .length para que se detenga en la longitud de la palabra ingresada y el for no sea eterno. 

13. A mi string le aplico el metodo charCodeAt para que convierta la palabra al codigo ascii.

14. le indico que a mi variable ascii le aplique la formula del cifrado cesar. 

15. le indico que la variable cifrado sera igual a cifrado mas el metodo String.fromChardCode para que tome los valores del codigo ascci y los transforme en una cadena string. 

16. Finalmente a traves de un alert le indico al usuario el resultado del string cifrado. 

17. LLamo a la funcion decipher que ejecutara la accion de descifrar la palabra del usuario. 

18. Ingreso las variables descifrado (vacia) y la variable ascii en 0.

19. Denomine a la palabra que ingresa el usuario como string. Y le aplico el metodo toLowerCase para que convierta mi palabra a minuscula. 

20. Aplico un ciclo iterativo for para decirle que pase por cada uno de los caracteres de mi palabra. Y aplico .length para que se detenga en la longitud de la palabra ingresada y el for no sea eterno. 

21. A mi string le aplico el metodo charCodeAt para que convierta la palabra al codigo ascii.

22. le indico que a mi variable ascii le aplique la formula del cifrado cesar. 

23. le indico que la variable descifrado sera igual a descifrado mas el metodo String.fromChardCode para que tome los valores del codigo ascci y los transforme en una cadena string. 

23. Le pido que a mi string le aplique el metodo toLowerCase para que transforme la palabra a minuscula. 

24. Finalmente a traves de un alert le indico al usuario el resultado del string descifrado. 

25. Cierro mi funcion principal y codigo.

![diagrama](http://www.nedgrafica.cl/majo/cifradocesar.png (44kB)
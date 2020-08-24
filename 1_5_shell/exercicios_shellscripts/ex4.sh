#!/bin/bash
# if -e $FILE. permissao if -w #FILE
echo "Exercício4"
FILE="./arquivo.txt"
COUNT=`wc -w arquivo.txt`
if [ -e $FILE ]
then
    echo "O caminho $FILE está habilitado"
    if [ -w $FILE ]
    then
        echo "Você tem permissão para editar o $FILE"
    else
        echo "Você não foi autorizado a editar $FILE"
    fi
else
    echo "Caminho nao localizado"
fi        

#!/bin/bash
echo "exercicio 6"
if [ -f $1 ]
then
    echo "Trata-se de um arquivo"
elif [ -d $1 ]
then
    echo "Trata-se de um diretorio"
else
    echo "Nao foi possivel indentificar"
fi
ls -l $1
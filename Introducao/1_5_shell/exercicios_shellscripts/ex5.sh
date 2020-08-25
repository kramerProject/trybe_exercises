#!/bin/bash
echo "exercicio 5"
read -p "Digite o caminho do Arquivo" FILE2
if [ -f $FILE2 ]
then
    echo "Trata-se de um arquivo"
elif [ -d $FILE2 ]
then
    echo "Trata-se de um diretorio"
else
    echo "Nao foi possivel indentificar"
fi
ls -l $FILE2
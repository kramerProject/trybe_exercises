#!/bin/bash



for item in $*
do
    if [ -f $item ]
    then
        echo "$item é um arquivo."
    elif [ -d $item ]
    then
        echo "$item é um diretório"
    else
        echo "Não foi possivel identificar o $item."
    fi
done
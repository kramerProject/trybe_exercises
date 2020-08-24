#!/bin/bash
echo "exercicio 7"
DIRETORIO=$1
ARQS=`ls $DIRETORIO`
COUNTER=0
if [ -d $DIRETORIO ]
then
    for item in $ARQS
    do
        if [ -f $item ]
        then
            COUNTER=`expr $COUNTER + 1`
        fi
    done
    echo "O $DIRETORIO tem $COUNTER arquivos."
else
    echo "O argumento $DIRETORIO nao e um diretorio"
fi
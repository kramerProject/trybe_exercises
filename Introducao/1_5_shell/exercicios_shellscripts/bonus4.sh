#!/bin/bash
ARQS=`ls $1 | grep $2`
DATA=`date +%Y-%m-%d`

for arqs in $ARQS
do
    CHANGE="$DATA-$arqs"
    echo "Nome Anterior: $arqs Novo Nome: $CHANGE"
    mv $arqs $CHANGE
done
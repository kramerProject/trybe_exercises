#!/bin/bash
ARQS=`ls | grep png`
DATA=`date +%Y-%m-%d`


for arq in $ARQS
do
    CHANGE="$DATA-$arq"
    mv $arq $CHANGE
done
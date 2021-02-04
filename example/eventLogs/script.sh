#!/bin/bash

function scan(){
    cat getPastLogs-template.js | sed 's|{{fromBlock}}|'$1'|g' > tmp | cat | sed 's|{{toBlock}}|'$2'|g' > getPastLogs-final.js &&\
    rm tmp && node getPastLogs-final.js
}

fromBlock=9670000 #$1
toBlock=9800000 #$2
step=1000 #$3
#(for i in {$fromBlock..$toBlock..$step};do echo " " && echo "****************** ITERATION $(expr $i / 1000 / $step) *******************************"; (scan $i $(expr $i + $step)) && sleep 4; echo " ";done) > data-logs 2>&1 &
(for i in {$fromBlock..$(expr $toBlock - $step)..$step}; do (scan $i $(expr $i + $step)) && sleep 1;done) > data-logs-$fromBlock-$toBlock-$step.csv 2>&1 &
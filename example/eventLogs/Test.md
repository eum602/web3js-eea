# Test using priv_getLogs

## How to use

```shell
function scan(){
    cat getPastLogs-template | sed 's|{{fromBlock}}|'$1'|g' > tmp | cat | sed 's|{{toBlock}}|'$2'|g' > getPastLogs-final.js &&\
    rm tmp && node getPastLogs-final.js
}

fromBlock=0 # ==> define the starting block to test
toBlock=9500000   # ==> define the last block to test
step=1000         # ==> define the amount of blocks to scan on each iteration
#(for i in {$fromBlock..$toBlock..$step};do echo " " && echo "****************** ITERATION $(expr $i / 1000 / $step) *******************************"; (scan $i $(expr $i + $step)) && sleep 4; echo " ";done) > data-logs 2>&1 &
(for i in {$fromBlock..$(expr $toBlock - $step)..$step}; do (scan $i $(expr $i + $step)) && sleep 1;done) > data-logs-$fromBlock-$toBlock-$step.csv 2>&1 &
```

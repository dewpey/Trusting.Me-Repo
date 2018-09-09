import SharesContract from '../utilities/SharesContract'

async function getShares (addr, actions) {
  var candidatesList = [];
  var partiesList = [];
  var numberOfCandidates = 0
  actions.getCurrentSharesREQUEST()
  SharesContract.candidatesCount.call((error, candidatesCount) => {
    numberOfCandidates = candidatesCount['c'][0]
    console.log(numberOfCandidates);
    for (var i = 1; i<numberOfCandidates+1; i++){
      SharesContract.candidates
        .call(i, (error, candidates) => {
          var candidate = candidates[1];
          var party = candidates[3];
          candidatesList[i] = candidates[1];
          partiesList[i] = candidates[3];
          //const sharesNumberDecoded = sharesNumber.toNumber()
          
        })
        actions.getCurrentSharesSUCCESS(candidatesList, candidatesCount)
        return(candidatesList, candidatesCount)
      }

  })
 
}

export default getShares

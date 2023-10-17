export {shannon, nyquist, converteMwdBm, convertedBmMw, eirp, fslp, rsl, fresnel}

function shannon(banda, sinalRuido){
    const sinalRuidoConv = Math.pow(10, sinalRuido /10);
    return banda * Math.log2(1 + sinalRuidoConv);
}

function nyquist(banda, modulacao){
    return 2 * banda * modulacao
}

function converteMwdBm(mW){
    return 10 * Math.log10(mW)
}

function convertedBmMw(dBm){
    return Math.pow(10, dBm / 10);
}

function eirp(transmissao, antena, cabo){
   return (parseFloat(transmissao) + (parseFloat(antena) - parseFloat(cabo))) 
}

function fslp(distancia, frequencia){
   return parseFloat(32,4) + parseFloat(20) * Math.log10(distancia) + parseFloat(20) * Math.log10(frequencia)
}

function rsl(transmissao, antenaTx, caboTx, fslp, antenaRx, caboRx){
    return parseFloat(transmissao) + parseFloat(antenaTx) - parseFloat(caboTx) - parseFloat(fslp) + parseFloat(antenaRx) - parseFloat(caboRx)
}

function fresnel(distanciaTransmissorObstaculo, distanciaReceptorObstaculo, frequencia, distanciaTransmissorReceptor){
    return 550 * Math.sqrt((distanciaTransmissorObstaculo * distanciaReceptorObstaculo) / (distanciaTransmissorReceptor - frequencia))
}

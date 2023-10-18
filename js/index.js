import {shannon, nyquist, converteMwdBm, convertedBmMw, eirp, fslp, rsl, fresnel} from './funcoes.js';

function chamaFuncao() {
  let banda_shannon = document.getElementById("banda_shannon").value;
  let sinal_ruido_shannon = document.getElementById("sinal_ruido_shannon").value;
  let banda_nyquist = document.getElementById("banda_nyquist").value;
  let modulacao_nyquist = document.getElementById("modulacao_nyquist").value;
  let valormw_mW_para_dBm = document.getElementById("valormw_mW_para_dBm").value;
  let valordbm_dBm_para_mW = document.getElementById("valordbm_dBm_para_mW").value;
  let transm_eirp = document.getElementById("transm_eirp").value;
  console.log(transm_eirp)
  let antena_eirp = document.getElementById("antena_eirp").value;
  console.log(antena_eirp)
  let cabo_eirp = document.getElementById("cabo_eirp").value;
  console.log(cabo_eirp)
  let distancia_fslp = document.getElementById("distancia_fslp").value;
  let frequencia_fslp = document.getElementById("frequencia_fslp").value;
  let transm_rsl = document.getElementById("transm_rsl").value;
  let antenaTx_rsl = document.getElementById("antenaTx_rsl").value;
  let caboTx_rsl = document.getElementById("caboTx_rsl").value;
  let fslp_rsl = document.getElementById("fslp_rsl").value;
  let antenaRx_rsl = document.getElementById("antenaRx_rsl").value;
  let caboRx_rsl = document.getElementById("caboRx_rsl").value;
  let distanciaTransmObst_fresnel = document.getElementById("distanciaTransmObst_fresnel").value;
  let distanciaRecepObst_fresnel = document.getElementById("distanciaRecepObst_fresnel").value;
  let frequencia_fresnel = document.getElementById("frequencia_fresnel").value;
  let distanciaTransmRecep_fresnel = document.getElementById("distanciaTransmRecep_fresnel").value;
  let result = document.getElementById("result");

  if(banda_shannon != "" && sinal_ruido_shannon != ""){
    let shannonResult = shannon(banda_shannon, sinal_ruido_shannon);
    result.innerHTML = "A capacidade máxima de transmissão de dados do canal é " + shannonResult+ " bps"
    result.classList.remove("d-none");
  }
  if(banda_nyquist != "" && modulacao_nyquist != ""){
    let nyquistResult = nyquist(banda_nyquist, modulacao_nyquist);
    result.innerHTML = "A taxa Nyquist é " + nyquistResult+ " bps"
    result.classList.remove("d-none");
  }
  if(valormw_mW_para_dBm != ""){
    let converteMwdBmResult = converteMwdBm(valormw_mW_para_dBm);
    result.innerHTML = "O valor é equivalente a " + converteMwdBmResult +" decibéis-milliwatts (dBm)"
    result.classList.remove("d-none");
  }
  if(valordbm_dBm_para_mW != ""){
    let convertedBmMwResult = convertedBmMw(valordbm_dBm_para_mW);
    result.innerHTML = "O valor é equivalente a " + convertedBmMwResult +" milliwatts (mW)"
    result.classList.remove("d-none");
  }
  if(transm_eirp != "" && antena_eirp != "" && cabo_eirp != ""){
    let eirpResult = eirp(transm_eirp, antena_eirp, cabo_eirp);
    result.innerHTML = "O valor de EIRP é  "+ eirpResult + " dBm"
    result.classList.remove("d-none");
  }
  if(distancia_fslp != "" && frequencia_fslp != ""){
    let fslpResult = fslp(distancia_fslp, frequencia_fslp);
    result.innerHTML = "O valor de FSLP é  "+ fslpResult + " dB"
    result.classList.remove("d-none");
  }
  if(transm_rsl != "" && antenaTx_rsl != "" && caboTx_rsl != "" && fslp_rsl != "" && antenaRx_rsl != "" && caboRx_rsl != ""){
    let rslResult = rsl(transm_rsl, antenaTx_rsl, caboTx_rsl, fslp_rsl, antenaRx_rsl, caboRx_rsl);
    result.innerHTML = "O valor de RSL é  "+ rslResult + " dBm"
    result.classList.remove("d-none");
  }
  if(distanciaTransmObst_fresnel != "" && distanciaRecepObst_fresnel != "" && frequencia_fresnel != "" && distanciaTransmRecep_fresnel != ""){
    let fresnelResult = fresnel(distanciaTransmObst_fresnel, distanciaRecepObst_fresnel, frequencia_fresnel, distanciaTransmRecep_fresnel);
    result.innerHTML = "O valor de Fresnel é  "+ fresnelResult + "metros"
    result.classList.remove("d-none");
  }
  
}

document.getElementById("btn").addEventListener('click', chamaFuncao);

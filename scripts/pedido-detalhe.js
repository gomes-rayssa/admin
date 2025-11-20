function updateStatus() {
  const status = document.getElementById("orderStatus").value
  console.log("Atualizando status para:", status)
  alert("Status atualizado com sucesso!")
  // Aqui você implementaria a lógica para salvar o novo status
}

function sendInvoice() {
  if (confirm("Deseja enviar a nota fiscal para o cliente?")) {
    console.log("Enviando nota fiscal...")
    alert("Nota fiscal enviada com sucesso!")
    // Aqui você implementaria a lógica para enviar a nota fiscal por email
  }
}

document.querySelector('select[name="entregador"]')?.addEventListener("change", (e) => {
  const deliveryInfo = document.getElementById("deliveryInfo")
  if (e.target.value) {
    deliveryInfo.style.display = "block"
  } else {
    deliveryInfo.style.display = "none"
  }
})

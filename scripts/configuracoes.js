function openAdminModal() {
  document.getElementById("adminModal").classList.add("active")
}

function closeAdminModal() {
  document.getElementById("adminModal").classList.remove("active")
}

function deleteAdmin(id) {
  if (confirm("Tem certeza que deseja remover este administrador?")) {
    console.log("Removendo admin:", id)
    alert("Administrador removido com sucesso!")
  }
}

function openPromotionModal() {
  document.getElementById("promotionModal").classList.add("active")
}

function closePromotionModal() {
  document.getElementById("promotionModal").classList.remove("active")
}

function editPromotion(id) {
  openPromotionModal()
  console.log("Editando promoção:", id)
}

function deletePromotion(id) {
  if (confirm("Tem certeza que deseja excluir esta promoção?")) {
    console.log("Excluindo promoção:", id)
  }
}

document.getElementById("adminForm")?.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = e.target.admin_email.value
  console.log("Criando novo admin:", email)
  alert(`Administrador criado com sucesso!\nEmail: ${email}\nSenha: Doce2025@`)
  closeAdminModal()
})

document.getElementById("siteConfigForm")?.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Salvando configurações do site...")
  alert("Configurações salvas com sucesso!")
})

document.getElementById("promotionForm")?.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Criando nova promoção...")
  alert("Promoção criada com sucesso!")
  closePromotionModal()
})

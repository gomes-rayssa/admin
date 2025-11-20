function openProductModal() {
  document.getElementById("productModal").classList.add("active")
  document.getElementById("modalTitle").textContent = "Novo Produto"
  document.getElementById("productForm").reset()
  document.getElementById("imagePreview").innerHTML =
    '<span style="color: var(--text-light);">Nenhuma imagem selecionada</span>'
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active")
}

function editProduct(id) {
  openProductModal()
  document.getElementById("modalTitle").textContent = "Editar Produto"
  console.log("Editando produto:", id)
}

function deleteProduct(id) {
  if (confirm("Tem certeza que deseja excluir este produto?")) {
    console.log("Excluindo produto:", id)
    alert("Produto excluído com sucesso!")
  }
}

function previewImage(event) {
  const file = event.target.files[0]
  const preview = document.getElementById("imagePreview")

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      preview.innerHTML = '<img src="' + e.target.result + '" alt="Preview">'
    }
    reader.readAsDataURL(file)
  }
}

const productForm = document.getElementById("productForm")
if (productForm) {
  productForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Salvando produto...")
    alert("Produto salvo com sucesso!")
    closeProductModal()
  })
}

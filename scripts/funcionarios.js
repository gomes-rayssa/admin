function openEmployeeModal() {
  document.getElementById("employeeModal").classList.add("active")
  document.getElementById("modalTitle").textContent = "Novo Funcionário"
  document.getElementById("employeeForm").reset()
  document.getElementById("funcaoField").style.display = "none"
  document.getElementById("veiculoField").style.display = "none"
  document.getElementById("placaField").style.display = "none"
}

function closeEmployeeModal() {
  document.getElementById("employeeModal").classList.remove("active")
}

function toggleVehicleField() {
  const type = document.getElementById("employeeType").value
  const funcaoField = document.getElementById("funcaoField")
  const veiculoField = document.getElementById("veiculoField")
  const placaField = document.getElementById("placaField")

  if (type === "entregador") {
    funcaoField.style.display = "none"
    veiculoField.style.display = "block"
    placaField.style.display = "block"
  } else if (type === "funcionario") {
    funcaoField.style.display = "block"
    veiculoField.style.display = "none"
    placaField.style.display = "none"
  } else {
    funcaoField.style.display = "none"
    veiculoField.style.display = "none"
    placaField.style.display = "none"
  }
}

function editEmployee(id) {
  openEmployeeModal()
  document.getElementById("modalTitle").textContent = "Editar Entregador"
  console.log("Editando entregador:", id)
}

function deleteEmployee(id) {
  if (confirm("Tem certeza que deseja excluir este entregador?")) {
    console.log("Excluindo entregador:", id)
  }
}

function editStaff(id) {
  openEmployeeModal()
  document.getElementById("modalTitle").textContent = "Editar Funcionário"
  console.log("Editando funcionário:", id)
}

function deleteStaff(id) {
  if (confirm("Tem certeza que deseja excluir este funcionário?")) {
    console.log("Excluindo funcionário:", id)
  }
}

document.getElementById("employeeForm")?.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Salvando funcionário...")
  alert("Funcionário salvo com sucesso!")
  closeEmployeeModal()
})

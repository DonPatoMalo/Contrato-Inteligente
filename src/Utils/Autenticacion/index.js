const apiUrl = import.meta.env.VITE_API

const enviarAutenticacion = async (rut, claveUnica) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rut: rut,
        password: claveUnica,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      //console.log("Autenticación exitosa", data)
      localStorage.setItem("user", JSON.stringify(data))

      return true

    } else {
      console.error("Error al autenticar")
      return false
    }

  } catch (error) {
    console.error("Error de red:", error)

    return false
  }
}

export { enviarAutenticacion }

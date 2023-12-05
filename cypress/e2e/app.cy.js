
describe("Componente Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Contrato-Inteligente/")
  })

  it("debería tener el logo visible", () => {
    cy.get("img[alt='Logo']").should("be.visible")
  })

  it("debería cambiar el fondo al hacer scroll", () => {
    const scrollThreshold = 100
    cy.scrollTo(0, scrollThreshold)
    cy.get("header").should("have.class", "bg-[#FFFFFF]")

    cy.scrollTo(0, 0)
    cy.get("header").should("not.have.class", "bg-[#FFFFFF]")
  })

  it("debería abrir y cerrar el menú responsivo", () => {
    cy.get("button.mobile-menu-button").then(($button) => {
      if ($button.is(":visible")) {
        cy.get("button.mobile-menu-button").click()
        cy.get("button.close-menu-button").should("exist")
      } else {
        cy.log("El menú responsivo no está presente.")
      }
    })
  })
})

describe("Componente SignIn", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Contrato-Inteligente/login")
  })

  it("debería mantenerse en la página actual con datos incorrectos", () => {
    cy.get('input[name="text"]').type("123456")
    cy.get('input[name="password"]').type("abcdefgh")
    cy.get("form").submit()
    cy.url().should(
      "include",
      "http://localhost:5173/Contrato-Inteligente/login"
    )
  })

  it("debería mantenerse en la página actual con datos incorrectos", () => {
    cy.get('input[name="text"]').type("abc1234")
    cy.get('input[name="password"]').type("claveincorrecta")
    cy.get("form").submit()
    cy.url().should(
      "include",
      "http://localhost:5173/Contrato-Inteligente/login"
    )
  })

  it("debería completar el formulario e iniciar sesión con datos correctos", () => {
    cy.get('input[name="text"]').type("123456789")
    cy.get('input[name="password"]').type("12345678")
    cy.get("form").submit()
    cy.url().should(
      "include",
      "http://localhost:5173/Contrato-Inteligente/contrato"
    )
  })
})


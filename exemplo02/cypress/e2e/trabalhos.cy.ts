const requestOptions: Partial<Cypress.RequestOptions> = {
  method: "POST",
  url: "/trabalhos",
  failOnStatusCode: false,
};

describe("Testes sobre o endpoint /trabalhos", () => {
  before(() => {
    cy.fixture("trabalho").as("trabalho");
    cy.fixture("trabalho_com_area_invalida").as("trabalhoComAreaInvalida");
    cy.fixture("trabalho_com_autor_com_cpf_invalido").as(
      "trabalhoComAutorComCPFInvalido",
    );
    cy.fixture("trabalho_com_autor_com_genero_invalido").as(
      "trabalhoComAutorComGeneroInvalido",
    );
    cy.fixture("trabalho_com_autor_com_nome_invalido").as(
      "trabalhoComAutorComNomeInvalido",
    );
    cy.fixture("trabalho_com_codigo_invalido").as("trabalhoComCodigoInvalido");
    cy.fixture("trabalho_com_mais_de_sete_autores").as(
      "trabalhoComMaisDeSeteAutores",
    );
    cy.fixture("trabalho_com_um_autor").as("trabalhoComUmAutor");
    cy.fixture("trabalho_sem_titulo").as("trabalhoSemTitulo");
  });
});

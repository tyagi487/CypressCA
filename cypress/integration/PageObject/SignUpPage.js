class SignUpPage {
  visit() {
    cy.visit("https://app.ca-test.com/Public/Login?ReturnUrl=%2F");
  }

  visitBaseVuild() {
    cy.visit("https://app.ca-build.com/Public/Login?ReturnUrl=%2F");
  }

  SignUp() {
    const sb = cy.contains("Start a free account");
    sb.click();
  }

  mailinatorSite() {
    cy.visit("https://www.mailinator.com/");
  }

  EnterMailinatorEmail(value) {
    const field = cy.get('[placeholder="Enter Public Mailinator Inbox"]');
    field.type(value);
    return this;
  }

  Go() {
    const go = cy.get("#go-to-public");
    go.click();
  }

  ActiveAccount() {
    cy.get("#msg_body").then(($iframe) => {
      const $a = $iframe.contents().find("a");
      cy.wrap($a).contains("Activate Account").click();
    });
  }
}

export default SignUpPage;

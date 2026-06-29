const { test, expect } = require('@playwright/test');

test('Pesquisar Playwright no Google', async ({ page }) => {

    test.slow();

    await page.goto('https://www.google.com');

    await page.getByRole('combobox', { name: /search|pesquisar/i }).fill('Playwright');

    await page.keyboard.press('Enter');

    await expect(page).toHaveTitle(/Playwright/);

});
//Resumindo: o teste simula um usuário abrindo o Google,
//pesquisando "Playwright" e verificando se a página de resultados carregou corretamente.
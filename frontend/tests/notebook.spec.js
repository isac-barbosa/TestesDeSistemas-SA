import { test, expect } from '@playwright/test'

async function fazerLogin(page) {

    await page.goto('http://localhost:5173')

    await page.getByTestId('email-input')
        .fill('teste@teste.com')

    await page.getByTestId('senha-input')
        .fill('123456')

    await page.getByTestId('login-button')
        .click()

    await expect(page).toHaveURL(/home/)
}

test('Cadastrar notebook', async ({ page }) => {

    await fazerLogin(page)

    const nomeNotebook = `Inspiron ${Date.now()}`

    await page.getByTestId('notebook-marca')
        .fill('Dell')

    await page.getByTestId('notebook-modelo')
        .fill(nomeNotebook)

    await page.getByTestId('notebook-preco')
        .fill('4500')

    await page.getByTestId('notebook-estoque')
        .fill('5')

    await page.getByTestId('notebook-descricao')
        .fill('Notebook criado pelo Playwright')

    await page.getByTestId('notebook-imagem')
        .fill('https://picsum.photos/400')

    await page.getByTestId('notebook-submit')
        .click()

    await expect(page.getByText(nomeNotebook)).toBeVisible()

})

test('Editar notebook', async ({ page }) => {

    await fazerLogin(page)

    await page.locator('[data-testid^="edit-"]').first().click()

    const modelo = page.getByTestId("notebook-modelo")

    await expect(modelo).not.toHaveValue("")

    const novoNome = `Notebook Editado ${Date.now()}`

    await modelo.clear()
    await modelo.fill(novoNome)

    console.log("Valor no input:", await modelo.inputValue())

    await page.getByTestId("notebook-submit").click()

    await page.waitForTimeout(2000)

    console.log(await page.locator(".card h3").allTextContents())

    await expect(page.locator(".card h3")).toContainText([novoNome])

})

test('Excluir notebook', async ({ page }) => {

    await fazerLogin(page)

    const cards = page.locator('.card')

    await expect(cards.first()).toBeVisible()

    const quantidadeAntes = await cards.count()

    page.on('dialog', dialog => dialog.accept())

    await page.locator('[data-testid^="delete-"]').first().click()

    await expect(cards).toHaveCount(quantidadeAntes - 1)

})
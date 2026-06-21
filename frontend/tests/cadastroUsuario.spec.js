import { test, expect } from '@playwright/test'

test('Deve cadastrar um novo usuário', async ({ page }) => {

    await page.goto('http://localhost:5173')

    await page.getByTestId('register-link').click()

    await page.getByTestId('register-nome')
        .fill('Usuario Playwright')

    await page.getByTestId('register-email')
        .fill(`teste${Date.now()}@teste.com`)

    await page.getByTestId('register-senha')
        .fill('123456')

    await page.getByTestId('register-button')
        .click()

    await expect(page).toHaveURL('http://localhost:5173/')

})
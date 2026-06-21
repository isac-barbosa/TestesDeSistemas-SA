import { test, expect } from '@playwright/test'

test('Login com sucesso', async ({ page }) => {

    await page.goto('http://localhost:5173')

    await page.getByTestId('email-input')
        .fill('teste@teste.com')

    await page.getByTestId('senha-input')
        .fill('123456')

    await page.getByTestId('login-button')
        .click()

    await expect(page).toHaveURL(/home/)

})

test('Login inválido', async ({ page }) => {

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Email ou senha inválidos')
        await dialog.accept()
    })

    await page.goto('http://localhost:5173')

    await page.getByTestId('email-input')
        .fill('teste@teste.com')

    await page.getByTestId('senha-input')
        .fill('senhaerrada')

    await page.getByTestId('login-button')
        .click()

    await expect(page).toHaveURL('http://localhost:5173/')

})
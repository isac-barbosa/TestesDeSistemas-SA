import { test, expect } from '@playwright/test'

test('deve fazer login', async ({ page }) => {

    await page.goto('http://localhost:5173')

    await page.fill(
        '[data-testid="email-input"]',
        'teste@teste.com'
    )

    await page.fill(
        '[data-testid="senha-input"]',
        '123456'
    )

    await page.click(
        '[data-testid="login-button"]'
    )

    await expect(page).toHaveURL(/home/)

})
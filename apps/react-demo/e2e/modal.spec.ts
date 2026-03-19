import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

const openSmallModal = async (page: Page) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Small Modal' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Publish changes?' })).toBeVisible()
}

test.describe('Modal', () => {
  test('opens from the demo and renders modal content', async ({ page }) => {
    await openSmallModal(page)

    await expect(
      page.getByText('Your latest draft will become visible to collaborators immediately.'),
    ).toBeVisible()
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Publish' })).toBeVisible()
  })

  test('closes on Escape', async ({ page }) => {
    await openSmallModal(page)

    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).toBeHidden()
  })

  test('closes when the backdrop is clicked', async ({ page }) => {
    await openSmallModal(page)

    await page.getByTestId('modal-backdrop').click({ position: { x: 8, y: 8 } })
    await expect(page.getByRole('dialog')).toBeHidden()
  })

  test('moves focus into the modal and traps tab navigation', async ({ page }) => {
    await openSmallModal(page)

    const cancelButton = page.getByRole('button', { name: 'Cancel' })
    const publishButton = page.getByRole('button', { name: 'Publish' })

    await expect(cancelButton).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(publishButton).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(cancelButton).toBeFocused()
  })
})

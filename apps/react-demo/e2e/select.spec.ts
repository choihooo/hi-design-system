import type { Locator, Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

const openSelectPage = async (page: Page) => {
  await page.goto('/')
  await expect(page.getByText('Select System')).toBeVisible()
}

const menuOptions = (page: Page) => page.locator('.select__menu [role="option"]')

const openSelect = async (trigger: Locator) => {
  await trigger.scrollIntoViewIfNeeded()
  await trigger.click()
}

test.describe('Select', () => {
  test('opens, filters, selects an option, and closes the menu', async ({ page }) => {
    await openSelectPage(page)

    const trigger = page.getByTestId('select-search-variant')
    await openSelect(trigger)

    const searchInput = page.getByPlaceholder('Search country')
    await expect(searchInput).toBeVisible()

    await searchInput.fill('kor')
    await expect(page.getByRole('option', { name: 'Korea, Republic of' })).toBeVisible()
    await expect(page.getByRole('option', { name: 'Japan' })).toHaveCount(0)

    await page.getByRole('option', { name: 'Korea, Republic of' }).click()

    await expect(trigger).toContainText('Korea, Republic of')
    await expect(page.locator('.select__menu')).toHaveCount(0)
  })

  test('supports keyboard open and escape close', async ({ page }) => {
    await openSelectPage(page)

    const trigger = page.getByTestId('select-default-variant')
    await trigger.focus()
    await page.keyboard.press('Enter')

    await expect(page.locator('.select__menu')).toHaveCount(1)
    await page.keyboard.press('Escape')
    await expect(page.locator('.select__menu')).toHaveCount(0)
  })

  test('does not open when disabled and keeps error copy visible', async ({ page }) => {
    await openSelectPage(page)

    const disabledTrigger = page.getByTestId('select-state-disabled')
    await expect(disabledTrigger).toBeDisabled()
    await disabledTrigger.click({ force: true })
    await expect(menuOptions(page)).toHaveCount(0)

    await expect(
      page.locator('.select__error').filter({ hasText: 'Choose a country' }),
    ).toBeVisible()
    await expect(page.getByTestId('select-state-error')).toHaveAttribute('aria-invalid', 'true')
  })
})

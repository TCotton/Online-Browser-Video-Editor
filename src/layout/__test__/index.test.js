import React from 'react'
import MainLayout from '../index'
import { render } from '../../test-utils'

describe('MainLayout', () => {
  it('should render successfully', () => {
    const { container } = render(<MainLayout />)
    expect(container.querySelector('[data-testid="wrapper"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<MainLayout />)
    expect(baseElement).toMatchSnapshot()
  })
})
